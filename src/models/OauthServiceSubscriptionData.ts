/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface OauthServiceSubscriptionData
 */
export interface OauthServiceSubscriptionData {
    /**
     * 
     * @type {number}
     * @memberof OauthServiceSubscriptionData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof OauthServiceSubscriptionData
     */
    oauthServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof OauthServiceSubscriptionData
     */
    model: string;
    /**
     * 
     * @type {boolean}
     * @memberof OauthServiceSubscriptionData
     */
    creation: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OauthServiceSubscriptionData
     */
    updates: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OauthServiceSubscriptionData
     */
    deletion: boolean;
}

/**
 * Check if a given object implements the OauthServiceSubscriptionData interface.
 */
export function instanceOfOauthServiceSubscriptionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "oauthServiceId" in value;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "creation" in value;
    isInstance = isInstance && "updates" in value;
    isInstance = isInstance && "deletion" in value;

    return isInstance;
}

export function OauthServiceSubscriptionDataFromJSON(json: any): OauthServiceSubscriptionData {
    return OauthServiceSubscriptionDataFromJSONTyped(json, false);
}

export function OauthServiceSubscriptionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthServiceSubscriptionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'oauthServiceId': json['oauthServiceId'],
        'model': json['model'],
        'creation': json['creation'],
        'updates': json['updates'],
        'deletion': json['deletion'],
    };
}

export function OauthServiceSubscriptionDataToJSON(value?: OauthServiceSubscriptionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'oauthServiceId': value.oauthServiceId,
        'model': value.model,
        'creation': value.creation,
        'updates': value.updates,
        'deletion': value.deletion,
    };
}

