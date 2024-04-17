/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import Axios, { AxiosError } from 'axios'
import { BrokenCircuitError, bulkhead, BulkheadRejectedError, circuitBreaker, ConsecutiveBreaker, handleWhen, IterableBackoff, retry, wrap } from 'cockatiel'
import { AuthenticatedConnection } from './connection'
import { ActionErrorProperties, ConnectionFaultError, GetErrorInstance, RequestError, SessionError } from './error'
import { EventDispatcher } from './event'

export const [DEFAULT_REST_ENDPOINT, DEFAULT_SOCKET_ENDPOINT] = [
    'https://metrics-api-v3.keiser.com/api',
    'wss://metrics-api-v3.keiser.com/ws',
]
export const DEFAULT_REQUEST_TIMEOUT = 5000

export const BASE_PATH = "https://metrics-api-v3.keiser.com/api".replace(/\/+$/, "");

export interface ConfigurationParameters {
    basePath?: string; // override base path
    username?: string; // parameter for basic security
    password?: string; // parameter for basic security
    apiKey?: string | ((name: string) => string); // parameter for apiKey security
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>); // parameter for oauth2 security
    credentials?: RequestCredentials; //value for the credentials param we want to use on each request
}

export class Configuration {
    constructor(private configuration: ConfigurationParameters = {}) {}

    set config(configuration: Configuration) {
        this.configuration = configuration;
    }

    get basePath(): string {
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }

    get username(): string | undefined {
        return this.configuration.username;
    }

    get password(): string | undefined {
        return this.configuration.password;
    }

    get apiKey(): ((name: string) => string) | undefined {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }

    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : async () => accessToken;
        }
        return undefined;
    }

    set accessToken(token: ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined) {
        this.configuration.accessToken = token;
    }

    get credentials(): RequestCredentials | undefined {
        return this.configuration.credentials;
    }
}

/** @ignore */
const PING_REGEX = /^primus::ping::(\d{13})$/
/** @ignore */
const ERROR_FILTER = (error: any) => typeof error.error === 'undefined' || error.error?.code === 0

//export interface ErrorResponse {
//  error: {
//    code: number
//    explanation: string
//    message: string
//    name: string
//    status: number
//  }
//}

export interface ConnectionOptions {
  restEndpoint?: string
  socketEndpoint?: string
  persistConnection?: boolean
  requestTimeout?: number
}

export interface ConnectionEvent {
  socketConnection: boolean
}

export interface PushDataEvent {
  context: string
  from: number
  message: any
  room: string
  sentAt: number
}

interface SocketResponseMessage {
  context: 'response'
  messageId?: number
  error?: any
}

interface SocketPushMessage {
  context: 'user'
  from: number
  message: any
  room: string
  sentAt: number
}

export class MetricsConnection {
  private readonly _restEndpoint: string
  private readonly _socketEndpoint: string
  private _persistConnection: boolean
  private readonly _requestTimeout: number
  private _socket: WebSocket | null = null
  private _lastMessageId = 0
  private _checkCallbacksTimeoutInstance: NodeJS.Timeout | null = null
  private _socketRetryAttempts: number = 0
  private readonly _callbacks: Map<number, { expiresAt: number | null, callback: (success: any, fail?: any) => void }> = new Map()
  private readonly _socketBulkhead = bulkhead(5, 25)
  private readonly _retryStrategy = wrap(
    retry(handleWhen(ERROR_FILTER), {backoff: new IterableBackoff([125, 1000, 5000]) }),
    circuitBreaker(handleWhen(ERROR_FILTER), {halfOpenAfter: 15000, breaker: new ConsecutiveBreaker(10) })
  )

  private readonly _onDisposeEvent = new EventDispatcher<void>()
  private readonly _onConnectionChangeEvent = new EventDispatcher<ConnectionEvent>()
  private readonly _onPushDataEvent = new EventDispatcher<PushDataEvent>()

  private accessToken: string | null = null

  constructor (options?: ConnectionOptions) {
    this._restEndpoint = options?.restEndpoint ?? DEFAULT_REST_ENDPOINT
    this._socketEndpoint = options?.socketEndpoint ?? DEFAULT_SOCKET_ENDPOINT
    this._persistConnection = !(options?.persistConnection === false)
    this._requestTimeout = options?.requestTimeout ?? DEFAULT_REQUEST_TIMEOUT

    if (typeof WebSocket === 'undefined') {
      this._persistConnection = false
    }
    void this.openConnection()
  }

  get token () {
    return this.accessToken
  }

  set token (token: string | null) {
    this.accessToken = token
  }

  get onDisposeEvent () {
    return this._onDisposeEvent.asEvent()
  }

  dispose () {
    this._persistConnection = false
    this._onDisposeEvent.dispatchAsync()
    this.closeConnection()
  }

  get socketConnected () {
    return this._socket !== null && this._socket.readyState === WebSocket.OPEN
  }

  get persistConnection () {
    return this._persistConnection
  }

  get onConnectionChangeEvent () {
    return this._onConnectionChangeEvent.asEvent()
  }

  get onPushDataEvent () {
    return this._onPushDataEvent.asEvent()
  }

  get baseUrl () {
    return new URL(this._restEndpoint)
  }

  private async openConnection () {
    if (this._persistConnection) {
      this.checkCallbacks()

      this._socket = new WebSocket(this._socketEndpoint)
      this._socket.onopen = () => this.onSocketOpened()
      this._socket.onclose = () => this.onSocketClosed()
      this._socket.onmessage = (m) => this.onSocketMessage(m)
    }
  }

  private onSocketOpened () {
    this._socketRetryAttempts = 0
    this.dispatchConnectionChange()
  }

  private onSocketClosed () {
    this._socket = null
    this.dispatchConnectionChange()

    const retryTimeout = this._socketRetryAttempts++ < 3 ? 0 : (this._socketRetryAttempts < 24 ? 2000 : 30000)
    setTimeout(() => void this.openConnection(), retryTimeout)
  }

  private closeConnection () {
    this._socket?.close()
    this.checkCallbacks(true)
  }

  private dispatchConnectionChange () {
    this._onConnectionChangeEvent.dispatchAsync({
      socketConnection: this.socketConnected
    })
  }

  private onSocketMessage (messageEvent: MessageEvent) {
    try {
      const data = JSON.parse(messageEvent.data) as SocketResponseMessage | SocketPushMessage | string
      if (typeof data === 'string') {
        if (PING_REGEX.test(data)) {
          const pingResults = PING_REGEX.exec(data)
          if (pingResults !== null) {
            this.pong(pingResults[1])
          }
        } else if (data === 'primus::server::close') {
          this._socket?.close()
        }
      } else if (data.context === 'response') {
        this.parseResponse(data)
      } else if (data.context === 'user') {
        this.parseMessage(data)
      }
    } catch (error) {
      console.error('Unparsable Response', error)
    }
  }

  async action (action: string, route: string, method: HTTPMethod, params: Object = { }, pathParams: Object = { }, headers: HTTPHeaders) {
    try {
      const result = await this._retryStrategy.execute(async () => {
        return await new Promise((resolve, reject) => {
          const callback = (success: any, fail?: any) => typeof fail !== 'undefined' ? reject(fail) : resolve(success)
          if (this.socketConnected) {
            const fullParams = {...params, ...pathParams}
            void this.actionSocket(action, fullParams, callback)
          } else {
            if(method.toUpperCase() === 'PATCH') {
              throw new ConnectionFaultError()
            }
            void this.actionRest(route, method, params, headers, callback)
          }
        })
      })

      if (result instanceof Error) {
        throw result
      }
      return result
    } catch (error) {
      if (error instanceof BrokenCircuitError) {
        throw new ConnectionFaultError()
      }
      throw error
    }
  }

  private checkCallbacks (clear: boolean = false) {
    if (this._checkCallbacksTimeoutInstance !== null) {
      clearTimeout(this._checkCallbacksTimeoutInstance)
    }
    const now = Date.now()

    this._callbacks.forEach((callback, key) => {
      if (clear || (callback.expiresAt !== null && callback.expiresAt <= now)) {
        try {
          callback.callback(null, { error: { statusText: 'Request timed out.' } })
        } finally {
          this._callbacks.delete(key)
        }
      }
    })

    if (!clear) {
      this._checkCallbacksTimeoutInstance = setTimeout(() => this.checkCallbacks(), 100)
    }
  }

  private pong (time: string) {
    this._socket?.send(`"primus::pong::${time}"`)
  }

  private parseResponse (data: { context: 'response', messageId?: number, error?: any }) {
    if (typeof data.messageId !== 'undefined' && this._callbacks.has(data.messageId)) {
      if (typeof data.error !== 'undefined') {
        const errorInstance = GetErrorInstance(data.error as ActionErrorProperties)
        if (errorInstance instanceof RequestError || errorInstance instanceof SessionError) {
          this._callbacks.get(data.messageId)?.callback(errorInstance)
        } else {
          this._callbacks.get(data.messageId)?.callback(null, errorInstance)
        }
      } else {
        this._callbacks.get(data.messageId)?.callback(data)
      }
      this._callbacks.delete(data.messageId)
    }
  }

  private parseMessage (data: {context: 'user', message: any, room: string, from: number, sentAt: number}) {
    this._onPushDataEvent.dispatchAsync(data as PushDataEvent)
  }

  private async actionSocket (action: string, params: Object, callback: (success: any, fail?: any) => void) {
    try {
      await this._socketBulkhead.execute(async () => await new Promise<void>(resolve => {
        this._lastMessageId++
        const args = {
          messageId: this._lastMessageId,
          event: 'action',
          params: { action, ...params }
        }

        this._callbacks.set(this._lastMessageId, {
          callback: (success: any, fail?: any) => {
            callback(success, fail)
            resolve()
          },
          expiresAt: Date.now() + this._requestTimeout
        })

        this._socket?.send(JSON.stringify(args))
      }))
    } catch (error) {
      if (error instanceof BulkheadRejectedError) {
        callback(null, { error: { statusText: 'Socket request queue is full.' } })
      } else {
        callback(null, { error })
      }
    }
  }

  private async actionRest (action: string, method: HTTPMethod, params: Object, headers: HTTPHeaders, callback: (success: any, fail?: any) => void) {
    try {
      const response = await Axios({
        method: method,
        headers:headers,
        url: `${this._restEndpoint}${action}`,
        params: params,
        data: params,
        timeout: this._requestTimeout
      })
      callback(response.data)
    } catch (error) {
      if (error instanceof Error) {
        const actionError = (error as AxiosError<{error: ActionErrorProperties }>)?.response?.data?.error
        if (typeof actionError !== 'undefined') {
          const errorInstance = GetErrorInstance(actionError)
          if (errorInstance instanceof RequestError || errorInstance instanceof SessionError) {
            callback(errorInstance)
          } else {
            callback(null, errorInstance)
          }
        }
      }
      callback(null, { error })
    }
  }
}

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {


    connection: AuthenticatedConnection;

    constructor(connection: AuthenticatedConnection) {
        this.connection = connection;
    }

    protected async request(context: RequestOpts, authenticated: boolean = false): Promise<any> {
        try {
          if (authenticated) {
            const response = await this.connection.authenticatedAction(context.action, context.path, context.method, context.query, context.pathParams, context.headers)
            return response as any
          } else {
            const response = await this.connection.action(context.action, context.path, context.method, context.query, context.pathParams, context.headers)
            return response as any
          }
        } catch (error) {
        throw error
        } 
        //const { url, init } = await this.createFetchParams(context, initOverrides);
        //const response = await this.fetchApi(url, init);
        //if (response && (response.status >= 200 && response.status < 300)) {
        //    return response;
        //}
        //throw new ResponseError(response, 'Response returned an error code');
    }

};

export class ResponseError extends Error {
    override name: "ResponseError" = "ResponseError";
    constructor(public response: Response, msg?: string) {
        super(msg);
    }
}

export class FetchError extends Error {
    override name: "FetchError" = "FetchError";
    constructor(public cause: Error, msg?: string) {
        super(msg);
    }
}

export class RequiredError extends Error {
    override name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}


export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery };
export type HTTPBody = Json | FormData | URLSearchParams;

export interface RequestOpts {
    path: string;
    action: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    pathParams?: HTTPQuery;
    body?: HTTPBody;
}

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

export function exists(json: any, key: string) {
    const value = json[key];
    return value !== null && value !== undefined;
}
