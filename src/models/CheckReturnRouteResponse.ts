/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.8
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
 * @interface CheckReturnRouteResponse
 */
export interface CheckReturnRouteResponse {
    /**
     * 
     * @type {boolean}
     * @memberof CheckReturnRouteResponse
     */
    valid: boolean;
}

/**
 * Check if a given object implements the CheckReturnRouteResponse interface.
 */
export function instanceOfCheckReturnRouteResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "valid" in value;

    return isInstance;
}

export function CheckReturnRouteResponseFromJSON(json: any): CheckReturnRouteResponse {
    return CheckReturnRouteResponseFromJSONTyped(json, false);
}

export function CheckReturnRouteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckReturnRouteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'valid': json['valid'],
    };
}

export function CheckReturnRouteResponseToJSON(value?: CheckReturnRouteResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'valid': value.valid,
    };
}

