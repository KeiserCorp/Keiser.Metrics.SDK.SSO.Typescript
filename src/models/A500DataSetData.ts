/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { A500RepDataPointData } from './A500RepDataPointData';
import {
    A500RepDataPointDataFromJSON,
    A500RepDataPointDataFromJSONTyped,
    A500RepDataPointDataToJSON,
} from './A500RepDataPointData';
import type { A500TestResultData } from './A500TestResultData';
import {
    A500TestResultDataFromJSON,
    A500TestResultDataFromJSONTyped,
    A500TestResultDataToJSON,
} from './A500TestResultData';
import type { A500TimeSeriesPointData } from './A500TimeSeriesPointData';
import {
    A500TimeSeriesPointDataFromJSON,
    A500TimeSeriesPointDataFromJSONTyped,
    A500TimeSeriesPointDataToJSON,
} from './A500TimeSeriesPointData';

/**
 * 
 * @export
 * @interface A500DataSetData
 */
export interface A500DataSetData {
    /**
     * 
     * @type {number}
     * @memberof A500DataSetData
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof A500DataSetData
     */
    epochAt: Date;
    /**
     * 
     * @type {string}
     * @memberof A500DataSetData
     */
    type: A500DataSetDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof A500DataSetData
     */
    testSide?: A500DataSetDataTestSideEnum;
    /**
     * 
     * @type {A500TestResultData}
     * @memberof A500DataSetData
     */
    leftTestResult?: A500TestResultData;
    /**
     * 
     * @type {A500TestResultData}
     * @memberof A500DataSetData
     */
    rightTestResult?: A500TestResultData;
    /**
     * 
     * @type {Array<A500RepDataPointData>}
     * @memberof A500DataSetData
     */
    a500RepDataPoints?: Array<A500RepDataPointData>;
    /**
     * 
     * @type {Array<A500TimeSeriesPointData>}
     * @memberof A500DataSetData
     */
    a500TimeSeriesPoints?: Array<A500TimeSeriesPointData>;
}


/**
 * @export
 */
export const A500DataSetDataTypeEnum = {
    Normal: 'normal',
    Test: 'test'
} as const;
export type A500DataSetDataTypeEnum = typeof A500DataSetDataTypeEnum[keyof typeof A500DataSetDataTypeEnum];

/**
 * @export
 */
export const A500DataSetDataTestSideEnum = {
    Left: 'left',
    Right: 'right',
    Both: 'both'
} as const;
export type A500DataSetDataTestSideEnum = typeof A500DataSetDataTestSideEnum[keyof typeof A500DataSetDataTestSideEnum];


/**
 * Check if a given object implements the A500DataSetData interface.
 */
export function instanceOfA500DataSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "epochAt" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function A500DataSetDataFromJSON(json: any): A500DataSetData {
    return A500DataSetDataFromJSONTyped(json, false);
}

export function A500DataSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): A500DataSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'epochAt': (new Date(json['epochAt'])),
        'type': json['type'],
        'testSide': !exists(json, 'testSide') ? undefined : json['testSide'],
        'leftTestResult': !exists(json, 'leftTestResult') ? undefined : A500TestResultDataFromJSON(json['leftTestResult']),
        'rightTestResult': !exists(json, 'rightTestResult') ? undefined : A500TestResultDataFromJSON(json['rightTestResult']),
        'a500RepDataPoints': !exists(json, 'a500RepDataPoints') ? undefined : ((json['a500RepDataPoints'] as Array<any>).map(A500RepDataPointDataFromJSON)),
        'a500TimeSeriesPoints': !exists(json, 'a500TimeSeriesPoints') ? undefined : ((json['a500TimeSeriesPoints'] as Array<any>).map(A500TimeSeriesPointDataFromJSON)),
    };
}

export function A500DataSetDataToJSON(value?: A500DataSetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'epochAt': (value.epochAt.toISOString()),
        'type': value.type,
        'testSide': value.testSide,
        'leftTestResult': A500TestResultDataToJSON(value.leftTestResult),
        'rightTestResult': A500TestResultDataToJSON(value.rightTestResult),
        'a500RepDataPoints': value.a500RepDataPoints === undefined ? undefined : ((value.a500RepDataPoints as Array<any>).map(A500RepDataPointDataToJSON)),
        'a500TimeSeriesPoints': value.a500TimeSeriesPoints === undefined ? undefined : ((value.a500TimeSeriesPoints as Array<any>).map(A500TimeSeriesPointDataToJSON)),
    };
}

