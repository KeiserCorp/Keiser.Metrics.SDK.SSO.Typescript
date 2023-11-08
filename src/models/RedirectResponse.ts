/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
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
 * @interface RedirectResponse
 */
export interface RedirectResponse {
    /**
     * 
     * @type {string}
     * @memberof RedirectResponse
     */
    url: string;
}

/**
 * Check if a given object implements the RedirectResponse interface.
 */
export function instanceOfRedirectResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function RedirectResponseFromJSON(json: any): RedirectResponse {
    return RedirectResponseFromJSONTyped(json, false);
}

export function RedirectResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedirectResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function RedirectResponseToJSON(value?: RedirectResponse | null): any {
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
