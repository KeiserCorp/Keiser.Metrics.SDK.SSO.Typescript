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
import type { OauthServiceSubscriptionsMeta } from './OauthServiceSubscriptionsMeta';
import {
    OauthServiceSubscriptionsMetaFromJSON,
    OauthServiceSubscriptionsMetaFromJSONTyped,
    OauthServiceSubscriptionsMetaToJSON,
} from './OauthServiceSubscriptionsMeta';

/**
 * 
 * @export
 * @interface OauthServiceSubscriptionListResponse
 */
export interface OauthServiceSubscriptionListResponse {
    /**
     * 
     * @type {Array<OauthServiceSubscriptionData>}
     * @memberof OauthServiceSubscriptionListResponse
     */
    oauthServiceSubscriptions: Array<OauthServiceSubscriptionData>;
    /**
     * 
     * @type {OauthServiceSubscriptionsMeta}
     * @memberof OauthServiceSubscriptionListResponse
     */
    oauthServiceSubscriptionsMeta: OauthServiceSubscriptionsMeta;
    /**
     * 
     * @type {string}
     * @memberof OauthServiceSubscriptionListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof OauthServiceSubscriptionListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the OauthServiceSubscriptionListResponse interface.
 */
export function instanceOfOauthServiceSubscriptionListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "oauthServiceSubscriptions" in value;
    isInstance = isInstance && "oauthServiceSubscriptionsMeta" in value;

    return isInstance;
}

export function OauthServiceSubscriptionListResponseFromJSON(json: any): OauthServiceSubscriptionListResponse {
    return OauthServiceSubscriptionListResponseFromJSONTyped(json, false);
}

export function OauthServiceSubscriptionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthServiceSubscriptionListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oauthServiceSubscriptions': ((json['oauthServiceSubscriptions'] as Array<any>).map(OauthServiceSubscriptionDataFromJSON)),
        'oauthServiceSubscriptionsMeta': OauthServiceSubscriptionsMetaFromJSON(json['oauthServiceSubscriptionsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function OauthServiceSubscriptionListResponseToJSON(value?: OauthServiceSubscriptionListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oauthServiceSubscriptions': ((value.oauthServiceSubscriptions as Array<any>).map(OauthServiceSubscriptionDataToJSON)),
        'oauthServiceSubscriptionsMeta': OauthServiceSubscriptionsMetaToJSON(value.oauthServiceSubscriptionsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

