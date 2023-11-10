/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
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
import type { StrengthExerciseData } from './StrengthExerciseData';
import {
    StrengthExerciseDataFromJSON,
    StrengthExerciseDataFromJSONTyped,
    StrengthExerciseDataToJSON,
} from './StrengthExerciseData';
import type { StretchExerciseData } from './StretchExerciseData';
import {
    StretchExerciseDataFromJSON,
    StretchExerciseDataFromJSONTyped,
    StretchExerciseDataToJSON,
} from './StretchExerciseData';

/**
 * 
 * @export
 * @interface ExerciseAliasData
 */
export interface ExerciseAliasData {
    /**
     * 
     * @type {number}
     * @memberof ExerciseAliasData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ExerciseAliasData
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseAliasData
     */
    type?: ExerciseAliasDataTypeEnum;
    /**
     * 
     * @type {StrengthExerciseData}
     * @memberof ExerciseAliasData
     */
    strengthExercise?: StrengthExerciseData;
    /**
     * 
     * @type {CardioExerciseData}
     * @memberof ExerciseAliasData
     */
    cardioExercise?: CardioExerciseData;
    /**
     * 
     * @type {StretchExerciseData}
     * @memberof ExerciseAliasData
     */
    stretchExercise?: StretchExerciseData;
}


/**
 * @export
 */
export const ExerciseAliasDataTypeEnum = {
    Strength: 'strength',
    Stretch: 'stretch',
    Cardio: 'cardio'
} as const;
export type ExerciseAliasDataTypeEnum = typeof ExerciseAliasDataTypeEnum[keyof typeof ExerciseAliasDataTypeEnum];


/**
 * Check if a given object implements the ExerciseAliasData interface.
 */
export function instanceOfExerciseAliasData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "alias" in value;

    return isInstance;
}

export function ExerciseAliasDataFromJSON(json: any): ExerciseAliasData {
    return ExerciseAliasDataFromJSONTyped(json, false);
}

export function ExerciseAliasDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseAliasData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'alias': json['alias'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'strengthExercise': !exists(json, 'strengthExercise') ? undefined : StrengthExerciseDataFromJSON(json['strengthExercise']),
        'cardioExercise': !exists(json, 'cardioExercise') ? undefined : CardioExerciseDataFromJSON(json['cardioExercise']),
        'stretchExercise': !exists(json, 'stretchExercise') ? undefined : StretchExerciseDataFromJSON(json['stretchExercise']),
    };
}

export function ExerciseAliasDataToJSON(value?: ExerciseAliasData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'alias': value.alias,
        'type': value.type,
        'strengthExercise': StrengthExerciseDataToJSON(value.strengthExercise),
        'cardioExercise': CardioExerciseDataToJSON(value.cardioExercise),
        'stretchExercise': StretchExerciseDataToJSON(value.stretchExercise),
    };
}

