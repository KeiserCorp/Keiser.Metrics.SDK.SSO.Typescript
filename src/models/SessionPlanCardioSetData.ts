/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.14
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
import type { CardioMachineData } from './CardioMachineData';
import {
    CardioMachineDataFromJSON,
    CardioMachineDataFromJSONTyped,
    CardioMachineDataToJSON,
} from './CardioMachineData';

/**
 * 
 * @export
 * @interface SessionPlanCardioSetData
 */
export interface SessionPlanCardioSetData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanCardioSetData
     */
    duration: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanCardioSetData
     */
    distance: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanCardioSetData
     */
    caloricBurn: number;
    /**
     * 
     * @type {CardioExerciseData}
     * @memberof SessionPlanCardioSetData
     */
    cardioExercise?: CardioExerciseData;
    /**
     * 
     * @type {CardioMachineData}
     * @memberof SessionPlanCardioSetData
     */
    cardioMachine?: CardioMachineData;
}

/**
 * Check if a given object implements the SessionPlanCardioSetData interface.
 */
export function instanceOfSessionPlanCardioSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "distance" in value;
    isInstance = isInstance && "caloricBurn" in value;

    return isInstance;
}

export function SessionPlanCardioSetDataFromJSON(json: any): SessionPlanCardioSetData {
    return SessionPlanCardioSetDataFromJSONTyped(json, false);
}

export function SessionPlanCardioSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanCardioSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': json['duration'],
        'distance': json['distance'],
        'caloricBurn': json['caloricBurn'],
        'cardioExercise': !exists(json, 'cardioExercise') ? undefined : CardioExerciseDataFromJSON(json['cardioExercise']),
        'cardioMachine': !exists(json, 'cardioMachine') ? undefined : CardioMachineDataFromJSON(json['cardioMachine']),
    };
}

export function SessionPlanCardioSetDataToJSON(value?: SessionPlanCardioSetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'distance': value.distance,
        'caloricBurn': value.caloricBurn,
        'cardioExercise': CardioExerciseDataToJSON(value.cardioExercise),
        'cardioMachine': CardioMachineDataToJSON(value.cardioMachine),
    };
}

