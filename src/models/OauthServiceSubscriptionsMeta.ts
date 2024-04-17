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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface OauthServiceSubscriptionsMeta
 */
export interface OauthServiceSubscriptionsMeta {
    /**
     * 
     * @type {string}
     * @memberof OauthServiceSubscriptionsMeta
     */
    service: string;
    /**
     * 
     * @type {string}
     * @memberof OauthServiceSubscriptionsMeta
     */
    model: string;
    /**
     * 
     * @type {string}
     * @memberof OauthServiceSubscriptionsMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OauthServiceSubscriptionsMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OauthServiceSubscriptionsMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof OauthServiceSubscriptionsMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof OauthServiceSubscriptionsMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the OauthServiceSubscriptionsMeta interface.
 */
export function instanceOfOauthServiceSubscriptionsMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "service" in value;
    isInstance = isInstance && "model" in value;

    return isInstance;
}

export function OauthServiceSubscriptionsMetaFromJSON(json: any): OauthServiceSubscriptionsMeta {
    return OauthServiceSubscriptionsMetaFromJSONTyped(json, false);
}

export function OauthServiceSubscriptionsMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthServiceSubscriptionsMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'service': json['service'],
        'model': json['model'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function OauthServiceSubscriptionsMetaToJSON(value?: OauthServiceSubscriptionsMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'service': value.service,
        'model': value.model,
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

