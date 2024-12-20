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
import type { OauthServiceSubscriptionData } from './OauthServiceSubscriptionData';
import {
    OauthServiceSubscriptionDataFromJSON,
    OauthServiceSubscriptionDataFromJSONTyped,
    OauthServiceSubscriptionDataToJSON,
} from './OauthServiceSubscriptionData';

/**
 * 
 * @export
 * @interface OauthServiceSubscriptionResponse
 */
export interface OauthServiceSubscriptionResponse {
    /**
     * 
     * @type {OauthServiceSubscriptionData}
     * @memberof OauthServiceSubscriptionResponse
     */
    oauthServiceSubscription: OauthServiceSubscriptionData;
    /**
     * 
     * @type {string}
     * @memberof OauthServiceSubscriptionResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof OauthServiceSubscriptionResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the OauthServiceSubscriptionResponse interface.
 */
export function instanceOfOauthServiceSubscriptionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "oauthServiceSubscription" in value;

    return isInstance;
}

export function OauthServiceSubscriptionResponseFromJSON(json: any): OauthServiceSubscriptionResponse {
    return OauthServiceSubscriptionResponseFromJSONTyped(json, false);
}

export function OauthServiceSubscriptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthServiceSubscriptionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oauthServiceSubscription': OauthServiceSubscriptionDataFromJSON(json['oauthServiceSubscription']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function OauthServiceSubscriptionResponseToJSON(value?: OauthServiceSubscriptionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oauthServiceSubscription': OauthServiceSubscriptionDataToJSON(value.oauthServiceSubscription),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

