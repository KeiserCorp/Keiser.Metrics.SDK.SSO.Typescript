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
import type { EmailAddressData } from './EmailAddressData';
import {
    EmailAddressDataFromJSON,
    EmailAddressDataFromJSONTyped,
    EmailAddressDataToJSON,
} from './EmailAddressData';

/**
 * 
 * @export
 * @interface EmailAddressResponse
 */
export interface EmailAddressResponse {
    /**
     * 
     * @type {EmailAddressData}
     * @memberof EmailAddressResponse
     */
    emailAddress: EmailAddressData;
    /**
     * 
     * @type {string}
     * @memberof EmailAddressResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailAddressResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the EmailAddressResponse interface.
 */
export function instanceOfEmailAddressResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "emailAddress" in value;

    return isInstance;
}

export function EmailAddressResponseFromJSON(json: any): EmailAddressResponse {
    return EmailAddressResponseFromJSONTyped(json, false);
}

export function EmailAddressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailAddressResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': EmailAddressDataFromJSON(json['emailAddress']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function EmailAddressResponseToJSON(value?: EmailAddressResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': EmailAddressDataToJSON(value.emailAddress),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

