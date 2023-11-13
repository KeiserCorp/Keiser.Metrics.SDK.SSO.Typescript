/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthExerciseData } from './StrengthExerciseData';
import {
    StrengthExerciseDataFromJSON,
    StrengthExerciseDataFromJSONTyped,
    StrengthExerciseDataToJSON,
} from './StrengthExerciseData';
import type { StrengthMachineData } from './StrengthMachineData';
import {
    StrengthMachineDataFromJSON,
    StrengthMachineDataFromJSONTyped,
    StrengthMachineDataToJSON,
} from './StrengthMachineData';

/**
 * 
 * @export
 * @interface SessionPlanStrengthSetData
 */
export interface SessionPlanStrengthSetData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanStrengthSetData
     */
    repetitionCount: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanStrengthSetData
     */
    resistance: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanStrengthSetData
     */
    forceUnit: SessionPlanStrengthSetDataForceUnitEnum;
    /**
     * 
     * @type {StrengthExerciseData}
     * @memberof SessionPlanStrengthSetData
     */
    strengthExercise?: StrengthExerciseData;
    /**
     * 
     * @type {StrengthMachineData}
     * @memberof SessionPlanStrengthSetData
     */
    strengthMachine?: StrengthMachineData;
}


/**
 * @export
 */
export const SessionPlanStrengthSetDataForceUnitEnum = {
    Lb: 'lb',
    Kg: 'kg',
    Ne: 'ne',
    Er: 'er'
} as const;
export type SessionPlanStrengthSetDataForceUnitEnum = typeof SessionPlanStrengthSetDataForceUnitEnum[keyof typeof SessionPlanStrengthSetDataForceUnitEnum];


/**
 * Check if a given object implements the SessionPlanStrengthSetData interface.
 */
export function instanceOfSessionPlanStrengthSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "repetitionCount" in value;
    isInstance = isInstance && "resistance" in value;
    isInstance = isInstance && "forceUnit" in value;

    return isInstance;
}

export function SessionPlanStrengthSetDataFromJSON(json: any): SessionPlanStrengthSetData {
    return SessionPlanStrengthSetDataFromJSONTyped(json, false);
}

export function SessionPlanStrengthSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanStrengthSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'repetitionCount': json['repetitionCount'],
        'resistance': json['resistance'],
        'forceUnit': json['forceUnit'],
        'strengthExercise': !exists(json, 'strengthExercise') ? undefined : StrengthExerciseDataFromJSON(json['strengthExercise']),
        'strengthMachine': !exists(json, 'strengthMachine') ? undefined : StrengthMachineDataFromJSON(json['strengthMachine']),
    };
}

export function SessionPlanStrengthSetDataToJSON(value?: SessionPlanStrengthSetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'repetitionCount': value.repetitionCount,
        'resistance': value.resistance,
        'forceUnit': value.forceUnit,
        'strengthExercise': StrengthExerciseDataToJSON(value.strengthExercise),
        'strengthMachine': StrengthMachineDataToJSON(value.strengthMachine),
    };
}

