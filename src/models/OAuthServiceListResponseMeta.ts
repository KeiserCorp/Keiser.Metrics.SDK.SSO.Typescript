/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OAuthServiceSorting } from './OAuthServiceSorting';
import {
    OAuthServiceSortingFromJSON,
    OAuthServiceSortingFromJSONTyped,
    OAuthServiceSortingToJSON,
} from './OAuthServiceSorting';

/**
 * 
 * @export
 * @interface OAuthServiceListResponseMeta
 */
export interface OAuthServiceListResponseMeta {
    /**
     * 
     * @type {OAuthServiceSorting}
     * @memberof OAuthServiceListResponseMeta
     */
    sort: OAuthServiceSorting;
    /**
     * 
     * @type {string}
     * @memberof OAuthServiceListResponseMeta
     */
    service?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthServiceListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OAuthServiceListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof OAuthServiceListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof OAuthServiceListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the OAuthServiceListResponseMeta interface.
 */
export function instanceOfOAuthServiceListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function OAuthServiceListResponseMetaFromJSON(json: any): OAuthServiceListResponseMeta {
    return OAuthServiceListResponseMetaFromJSONTyped(json, false);
}

export function OAuthServiceListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthServiceListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sort': OAuthServiceSortingFromJSON(json['sort']),
        'service': !exists(json, 'service') ? undefined : json['service'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function OAuthServiceListResponseMetaToJSON(value?: OAuthServiceListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sort': OAuthServiceSortingToJSON(value.sort),
        'service': value.service,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

