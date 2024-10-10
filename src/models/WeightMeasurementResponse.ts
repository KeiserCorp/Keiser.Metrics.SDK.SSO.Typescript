/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { WeightMeasurementData } from './WeightMeasurementData';
import {
    WeightMeasurementDataFromJSON,
    WeightMeasurementDataFromJSONTyped,
    WeightMeasurementDataToJSON,
} from './WeightMeasurementData';

/**
 * 
 * @export
 * @interface WeightMeasurementResponse
 */
export interface WeightMeasurementResponse {
    /**
     * 
     * @type {WeightMeasurementData}
     * @memberof WeightMeasurementResponse
     */
    weightMeasurement: WeightMeasurementData;
    /**
     * 
     * @type {string}
     * @memberof WeightMeasurementResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof WeightMeasurementResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the WeightMeasurementResponse interface.
 */
export function instanceOfWeightMeasurementResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "weightMeasurement" in value;

    return isInstance;
}

export function WeightMeasurementResponseFromJSON(json: any): WeightMeasurementResponse {
    return WeightMeasurementResponseFromJSONTyped(json, false);
}

export function WeightMeasurementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeightMeasurementResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'weightMeasurement': WeightMeasurementDataFromJSON(json['weightMeasurement']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function WeightMeasurementResponseToJSON(value?: WeightMeasurementResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'weightMeasurement': WeightMeasurementDataToJSON(value.weightMeasurement),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

