import { DecodeJWT } from './jwt'
import { SessionError } from './error'
import { EventDispatcher } from './event'
import { DEFAULT_REQUEST_TIMEOUT, ConnectionEvent, ConnectionOptions, MetricsConnection, PushDataEvent, HTTPMethod, HTTPHeaders } from './runtime'
export const JWT_TTL_LIMIT = 5000

  /** @ignore */
const MODEL_UPDATE_ROOM_REGEX = /^sub:/
export interface AuthenticatedResponse {
  accessToken: string
  refreshToken?: string
}
export interface SubscriptionResponse extends AuthenticatedResponse {
  subscriptionKey: string
}

export interface AuthPrefillParams {
  email: string
  returnUrl: string
  requiresElevated?: boolean
  name?: string
  birthday?: string
  gender?: string
  language?: string
  units?: string
  metricWeight?: number
  bodyFatPercentage?: number
  metricHeight?: number
}

export interface AccessTokenChangeEvent {
  accessToken: string
}

export interface RefreshTokenChangeEvent {
  refreshToken: string
}

export interface KioskTokenChangeEvent {
  kioskToken: string
}

export interface StrengthMachineTokenChangeEvent {
  accessToken: string
}

export interface JWTFacility {
    id: number
    licensedUntil: string
}

export interface JWTToken {
  iss: string
  jti: string
  exp: number
  type: 'access' | 'refresh' | 'kiosk' | 'machine'
}


export interface SessionToken extends JWTToken {
  user: { id: number }
  facility?: {id:number, licencedUntil: string} | null
  facilityRole?: string | null
}

export interface AccessToken extends SessionToken {
  type: 'access'
}

export interface RefreshToken extends SessionToken {
  type: 'refresh'
}

export interface ModelChangeEvent {
  id: number
  name: string
  mutation: 'create' | 'update' | 'delete'
  occurredAt: number
}

interface ModelChangeEventHandler {
  onChangeCallbacks: Set<(modelChangeEvent: ModelChangeEvent) => void>
  onReconnectCallback: () => Promise<SubscriptionResponse>
}

export interface ModelSubscribeParameters {
  model: string
  id: number
  userId?: number
  facilityRelationshipId?: number
  actionOverride?: string
}

export interface ListSubscribeParameters {
  parentModel: string
  parentId: number
  model: string
  actionOverride?: string
}


export class AuthenticatedConnection {
    protected readonly _connection: MetricsConnection
    private _keepAlive: boolean = true
    private _accessToken: string = ''
    private _refreshToken: string | null = null
    private _accessTokenTimeout: ReturnType<typeof setTimeout> | null = null
    private readonly _modelChangeEventHandlerMap = new Map<string, ModelChangeEventHandler>()
    private readonly _onAccessTokenChangeEvent = new EventDispatcher<AccessTokenChangeEvent>()
    private readonly _onRefreshTokenChangeEvent = new EventDispatcher<RefreshTokenChangeEvent>()
  
    constructor (params: {options?: ConnectionOptions,  keepAlive?: boolean, authenticatedResponse?: AuthenticatedResponse}) {
      const {options, keepAlive, authenticatedResponse} = params
      this._connection = new MetricsConnection(options)
      this._keepAlive = keepAlive ?? true
      this._connection.onDisposeEvent.one(() => this.close())
      this._connection.onConnectionChangeEvent.subscribe(connectionEvent => this.handleConnectionEvent(connectionEvent))
      this._connection.onPushDataEvent.subscribe(data => this.dispatchPushData(data))
      if (authenticatedResponse) {
        this.updateTokens(authenticatedResponse)
      }
    }

    async initializeAuthenticatedSession( refreshToken: string) : Promise<AuthenticatedResponse> {
      this.updateTokens({accessToken: refreshToken})
      const authenticatedResponse: AuthenticatedResponse = await this.keepAccessTokenAlive();
      this.updateTokens(authenticatedResponse);
      return authenticatedResponse;
    }
  
    private updateTokens (response: AuthenticatedResponse) {
      this._accessToken = response.accessToken
      this._onAccessTokenChangeEvent.dispatchAsync({ accessToken: this._accessToken })
  
      if (this._accessTokenTimeout !== null) {
        clearTimeout(this._accessTokenTimeout)
      }
  
      if (this._keepAlive) {
        const tokenTTL = this.decodedAccessToken.exp * 1000 - Date.now() - JWT_TTL_LIMIT
        this._accessTokenTimeout = setTimeout(() => { void this.keepAccessTokenAlive() }, tokenTTL)
      }
  
      if (typeof response.refreshToken !== 'undefined') {
        this._refreshToken = response.refreshToken
        this._onRefreshTokenChangeEvent.dispatchAsync({ refreshToken: this._refreshToken })
      }
    }
  
    private async keepAccessTokenAlive(): Promise<AuthenticatedResponse>  {
      if (this._keepAlive) {
        try {
          const response: AuthenticatedResponse = await this.action('auth:keepAlive', `/auth/keep-alive`, 'POST', {}, {}, {})
          return response;
        } catch (error) {
  
        }
      }
    }
  
    private handleConnectionEvent (connectionEvent: ConnectionEvent) {
      if (connectionEvent.socketConnection) {
        this._modelChangeEventHandlerMap.forEach(e => void e.onReconnectCallback())
      }
    }
  
    private dispatchPushData (pushData: PushDataEvent) {
      if (MODEL_UPDATE_ROOM_REGEX.test(pushData.room)) {
        const modelChangeEventHandler = this._modelChangeEventHandlerMap.get(pushData.room)
        if (typeof modelChangeEventHandler !== 'undefined') {
          modelChangeEventHandler.onChangeCallbacks.forEach(e => e(pushData.message))
        }
      }
    }
  
    get connection () {
      return this._connection
    }
  
    get keepAlive () {
      return this._keepAlive
    }
  
    set keepAlive (value: boolean) {
      this._keepAlive = value
      if (!this._keepAlive && this._accessTokenTimeout !== null) {
        clearTimeout(this._accessTokenTimeout)
      }
    }
  
    get decodedAccessToken (){
    return DecodeJWT(this.accessToken) as AccessToken
    }
  
    get accessToken () {
      return this._accessToken
    }
  
    get refreshToken () {
      return this._refreshToken
    }
  
    get onRefreshTokenChangeEvent () {
      return this._onRefreshTokenChangeEvent.asEvent()
    }
  
    get onAccessTokenChangeEvent () {
      return this._onAccessTokenChangeEvent.asEvent()
    }
  
    close () {
      if (this._accessTokenTimeout !== null) {
        clearTimeout(this._accessTokenTimeout)
      }
      this.keepAlive = false
      this._accessToken = ''
      this._refreshToken = null
      this.connection.dispose()
    }
  
    async authenticatedAction (action: string, route: string, method: HTTPMethod, params: Object = { }, pathParams: Object = { }, headers: HTTPHeaders) {
      let response
      if (this._keepAlive && this._accessTokenTimeout !== null && this.decodedAccessToken.exp * 1000 - Date.now() <= JWT_TTL_LIMIT + DEFAULT_REQUEST_TIMEOUT) {
        clearTimeout(this._accessTokenTimeout)
      }
      try {
        const authParams = { authorization: this._accessToken, ...params }
        response = await this._connection.action(action, route, method, authParams, pathParams, headers)
      } catch (error) {
        if (error instanceof SessionError && this._refreshToken !== null && (DecodeJWT(this._refreshToken) as RefreshToken).exp * 1000 - Date.now() > 0) {
          const authParams = { authorization: this._refreshToken, ...params }
          response = await this._connection.action(action, route, method, authParams, pathParams, headers)
        } else {
          throw error
        }
      }
      this.updateTokens(response)
      return response
    }
    async action (action: string, route: string, method: HTTPMethod, params: Object = { }, pathParams: Object = { }, headers: HTTPHeaders) {
      let response
      
      try {
        response = await this._connection.action(action, route, method, params, pathParams, headers)
      } catch (error) {
        throw error
      }
      if (response.accessToken) {
        this.updateTokens(response)
      }
      return response
    }
  
  }