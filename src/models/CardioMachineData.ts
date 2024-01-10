/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseData } from './CardioExerciseData';
import {
    CardioExerciseDataFromJSON,
    CardioExerciseDataFromJSONTyped,
    CardioExerciseDataToJSON,
} from './CardioExerciseData';

/**
 * 
 * @export
 * @interface CardioMachineData
 */
export interface CardioMachineData {
    /**
     * 
     * @type {number}
     * @memberof CardioMachineData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CardioMachineData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CardioMachineData
     */
    line: CardioMachineDataLineEnum;
    /**
     * 
     * @type {string}
     * @memberof CardioMachineData
     */
    parseCode: CardioMachineDataParseCodeEnum;
    /**
     * 
     * @type {number}
     * @memberof CardioMachineData
     */
    defaultCardioExerciseId?: number;
    /**
     * 
     * @type {string}
     * @memberof CardioMachineData
     */
    machineTypeFallback?: string;
    /**
     * 
     * @type {CardioExerciseData}
     * @memberof CardioMachineData
     */
    defaultCardioExercise?: CardioExerciseData;
}


/**
 * @export
 */
export const CardioMachineDataLineEnum = {
    MSeries: 'mSeries'
} as const;
export type CardioMachineDataLineEnum = typeof CardioMachineDataLineEnum[keyof typeof CardioMachineDataLineEnum];

/**
 * @export
 */
export const CardioMachineDataParseCodeEnum = {
    Ms6: 'ms6',
    Ms6e: 'ms6e'
} as const;
export type CardioMachineDataParseCodeEnum = typeof CardioMachineDataParseCodeEnum[keyof typeof CardioMachineDataParseCodeEnum];


/**
 * Check if a given object implements the CardioMachineData interface.
 */
export function instanceOfCardioMachineData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "line" in value;
    isInstance = isInstance && "parseCode" in value;

    return isInstance;
}

export function CardioMachineDataFromJSON(json: any): CardioMachineData {
    return CardioMachineDataFromJSONTyped(json, false);
}

export function CardioMachineDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioMachineData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'line': json['line'],
        'parseCode': json['parseCode'],
        'defaultCardioExerciseId': !exists(json, 'defaultCardioExerciseId') ? undefined : json['defaultCardioExerciseId'],
        'machineTypeFallback': !exists(json, 'machineTypeFallback') ? undefined : json['machineTypeFallback'],
        'defaultCardioExercise': !exists(json, 'defaultCardioExercise') ? undefined : CardioExerciseDataFromJSON(json['defaultCardioExercise']),
    };
}

export function CardioMachineDataToJSON(value?: CardioMachineData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'line': value.line,
        'parseCode': value.parseCode,
        'defaultCardioExerciseId': value.defaultCardioExerciseId,
        'machineTypeFallback': value.machineTypeFallback,
        'defaultCardioExercise': CardioExerciseDataToJSON(value.defaultCardioExercise),
    };
}

