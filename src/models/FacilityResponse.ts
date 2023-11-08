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
import type { FacilityData } from './FacilityData';
import {
    FacilityDataFromJSON,
    FacilityDataFromJSONTyped,
    FacilityDataToJSON,
} from './FacilityData';

/**
 * 
 * @export
 * @interface FacilityResponse
 */
export interface FacilityResponse {
    /**
     * 
     * @type {FacilityData}
     * @memberof FacilityResponse
     */
    facility: FacilityData;
    /**
     * 
     * @type {string}
     * @memberof FacilityResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityResponse interface.
 */
export function instanceOfFacilityResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facility" in value;

    return isInstance;
}

export function FacilityResponseFromJSON(json: any): FacilityResponse {
    return FacilityResponseFromJSONTyped(json, false);
}

export function FacilityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facility': FacilityDataFromJSON(json['facility']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityResponseToJSON(value?: FacilityResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facility': FacilityDataToJSON(value.facility),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}
