/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.35
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface ExchangeableUserResponse
 */
export interface ExchangeableUserResponse {
    /**
     * 
     * @type {string}
     * @memberof ExchangeableUserResponse
     */
    exchangeToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ExchangeableUserResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ExchangeableUserResponse
     */
    refreshToken?: string;
    /**
     * 
     * @type {UserData}
     * @memberof ExchangeableUserResponse
     */
    user?: UserData;
}

/**
 * Check if a given object implements the ExchangeableUserResponse interface.
 */
export function instanceOfExchangeableUserResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExchangeableUserResponseFromJSON(json: any): ExchangeableUserResponse {
    return ExchangeableUserResponseFromJSONTyped(json, false);
}

export function ExchangeableUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeableUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exchangeToken': !exists(json, 'exchangeToken') ? undefined : json['exchangeToken'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
    };
}

export function ExchangeableUserResponseToJSON(value?: ExchangeableUserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exchangeToken': value.exchangeToken,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
        'user': UserDataToJSON(value.user),
    };
}

