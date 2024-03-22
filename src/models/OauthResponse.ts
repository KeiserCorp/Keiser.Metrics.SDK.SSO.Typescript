/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.28
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
 * @interface OauthResponse
 */
export interface OauthResponse {
    /**
     * 
     * @type {string}
     * @memberof OauthResponse
     */
    url: string;
}

/**
 * Check if a given object implements the OauthResponse interface.
 */
export function instanceOfOauthResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function OauthResponseFromJSON(json: any): OauthResponse {
    return OauthResponseFromJSONTyped(json, false);
}

export function OauthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function OauthResponseToJSON(value?: OauthResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

