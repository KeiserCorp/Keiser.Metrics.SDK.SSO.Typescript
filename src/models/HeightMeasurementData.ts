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
/**
 * 
 * @export
 * @interface HeightMeasurementData
 */
export interface HeightMeasurementData {
    /**
     * 
     * @type {number}
     * @memberof HeightMeasurementData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof HeightMeasurementData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof HeightMeasurementData
     */
    source: string;
    /**
     * 
     * @type {Date}
     * @memberof HeightMeasurementData
     */
    takenAt: Date;
    /**
     * 
     * @type {number}
     * @memberof HeightMeasurementData
     */
    metricHeight: number;
}

/**
 * Check if a given object implements the HeightMeasurementData interface.
 */
export function instanceOfHeightMeasurementData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "takenAt" in value;
    isInstance = isInstance && "metricHeight" in value;

    return isInstance;
}

export function HeightMeasurementDataFromJSON(json: any): HeightMeasurementData {
    return HeightMeasurementDataFromJSONTyped(json, false);
}

export function HeightMeasurementDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeightMeasurementData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'source': json['source'],
        'takenAt': (new Date(json['takenAt'])),
        'metricHeight': json['metricHeight'],
    };
}

export function HeightMeasurementDataToJSON(value?: HeightMeasurementData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'source': value.source,
        'takenAt': (value.takenAt.toISOString()),
        'metricHeight': value.metricHeight,
    };
}

