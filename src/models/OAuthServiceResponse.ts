/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OAuthServiceData } from './OAuthServiceData';
import {
    OAuthServiceDataFromJSON,
    OAuthServiceDataFromJSONTyped,
    OAuthServiceDataToJSON,
} from './OAuthServiceData';

/**
 * 
 * @export
 * @interface OAuthServiceResponse
 */
export interface OAuthServiceResponse {
    /**
     * 
     * @type {OAuthServiceData}
     * @memberof OAuthServiceResponse
     */
    oauthService: OAuthServiceData;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the OAuthServiceResponse interface.
 */
export function instanceOfOAuthServiceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "oauthService" in value;

    return isInstance;
}

export function OAuthServiceResponseFromJSON(json: any): OAuthServiceResponse {
    return OAuthServiceResponseFromJSONTyped(json, false);
}

export function OAuthServiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthServiceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oauthService': OAuthServiceDataFromJSON(json['oauthService']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function OAuthServiceResponseToJSON(value?: OAuthServiceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oauthService': OAuthServiceDataToJSON(value.oauthService),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

