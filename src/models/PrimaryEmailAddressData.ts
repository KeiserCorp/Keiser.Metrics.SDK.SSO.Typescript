/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.12
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
 * @interface PrimaryEmailAddressData
 */
export interface PrimaryEmailAddressData {
    /**
     * 
     * @type {number}
     * @memberof PrimaryEmailAddressData
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof PrimaryEmailAddressData
     */
    emailAddressId: number;
}

/**
 * Check if a given object implements the PrimaryEmailAddressData interface.
 */
export function instanceOfPrimaryEmailAddressData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "emailAddressId" in value;

    return isInstance;
}

export function PrimaryEmailAddressDataFromJSON(json: any): PrimaryEmailAddressData {
    return PrimaryEmailAddressDataFromJSONTyped(json, false);
}

export function PrimaryEmailAddressDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrimaryEmailAddressData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'emailAddressId': json['emailAddressId'],
    };
}

export function PrimaryEmailAddressDataToJSON(value?: PrimaryEmailAddressData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'emailAddressId': value.emailAddressId,
    };
}

