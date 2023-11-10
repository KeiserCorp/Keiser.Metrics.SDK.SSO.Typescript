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
import type { HeightMeasurementData } from './HeightMeasurementData';
import {
    HeightMeasurementDataFromJSON,
    HeightMeasurementDataFromJSONTyped,
    HeightMeasurementDataToJSON,
} from './HeightMeasurementData';

/**
 * 
 * @export
 * @interface HeightMeasurementResponse
 */
export interface HeightMeasurementResponse {
    /**
     * 
     * @type {HeightMeasurementData}
     * @memberof HeightMeasurementResponse
     */
    heightMeasurement: HeightMeasurementData;
    /**
     * 
     * @type {string}
     * @memberof HeightMeasurementResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof HeightMeasurementResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the HeightMeasurementResponse interface.
 */
export function instanceOfHeightMeasurementResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "heightMeasurement" in value;

    return isInstance;
}

export function HeightMeasurementResponseFromJSON(json: any): HeightMeasurementResponse {
    return HeightMeasurementResponseFromJSONTyped(json, false);
}

export function HeightMeasurementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeightMeasurementResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'heightMeasurement': HeightMeasurementDataFromJSON(json['heightMeasurement']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function HeightMeasurementResponseToJSON(value?: HeightMeasurementResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'heightMeasurement': HeightMeasurementDataToJSON(value.heightMeasurement),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

