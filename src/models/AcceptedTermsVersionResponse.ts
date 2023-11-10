/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AcceptedTermsVersionData } from './AcceptedTermsVersionData';
import {
    AcceptedTermsVersionDataFromJSON,
    AcceptedTermsVersionDataFromJSONTyped,
    AcceptedTermsVersionDataToJSON,
} from './AcceptedTermsVersionData';

/**
 * 
 * @export
 * @interface AcceptedTermsVersionResponse
 */
export interface AcceptedTermsVersionResponse {
    /**
     * 
     * @type {AcceptedTermsVersionData}
     * @memberof AcceptedTermsVersionResponse
     */
    acceptedTermsVersion: AcceptedTermsVersionData;
    /**
     * 
     * @type {string}
     * @memberof AcceptedTermsVersionResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AcceptedTermsVersionResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the AcceptedTermsVersionResponse interface.
 */
export function instanceOfAcceptedTermsVersionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "acceptedTermsVersion" in value;

    return isInstance;
}

export function AcceptedTermsVersionResponseFromJSON(json: any): AcceptedTermsVersionResponse {
    return AcceptedTermsVersionResponseFromJSONTyped(json, false);
}

export function AcceptedTermsVersionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptedTermsVersionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acceptedTermsVersion': AcceptedTermsVersionDataFromJSON(json['acceptedTermsVersion']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function AcceptedTermsVersionResponseToJSON(value?: AcceptedTermsVersionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acceptedTermsVersion': AcceptedTermsVersionDataToJSON(value.acceptedTermsVersion),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

