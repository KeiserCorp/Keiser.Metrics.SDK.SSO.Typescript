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
 * @interface AcceptedTermsVersionData
 */
export interface AcceptedTermsVersionData {
    /**
     * 
     * @type {number}
     * @memberof AcceptedTermsVersionData
     */
    userId: number;
    /**
     * 
     * @type {Date}
     * @memberof AcceptedTermsVersionData
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof AcceptedTermsVersionData
     */
    revision?: string;
}

/**
 * Check if a given object implements the AcceptedTermsVersionData interface.
 */
export function instanceOfAcceptedTermsVersionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function AcceptedTermsVersionDataFromJSON(json: any): AcceptedTermsVersionData {
    return AcceptedTermsVersionDataFromJSONTyped(json, false);
}

export function AcceptedTermsVersionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptedTermsVersionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'updatedAt': (new Date(json['updatedAt'])),
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
    };
}

export function AcceptedTermsVersionDataToJSON(value?: AcceptedTermsVersionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'updatedAt': (value.updatedAt.toISOString()),
        'revision': value.revision,
    };
}

