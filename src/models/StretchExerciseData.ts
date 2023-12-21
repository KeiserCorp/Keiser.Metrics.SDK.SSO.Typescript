/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExerciseAliasData } from './ExerciseAliasData';
import {
    ExerciseAliasDataFromJSON,
    ExerciseAliasDataFromJSONTyped,
    ExerciseAliasDataToJSON,
} from './ExerciseAliasData';
import type { MuscleData } from './MuscleData';
import {
    MuscleDataFromJSON,
    MuscleDataFromJSONTyped,
    MuscleDataToJSON,
} from './MuscleData';
import type { StretchExerciseVariantData } from './StretchExerciseVariantData';
import {
    StretchExerciseVariantDataFromJSON,
    StretchExerciseVariantDataFromJSONTyped,
    StretchExerciseVariantDataToJSON,
} from './StretchExerciseVariantData';

/**
 * 
 * @export
 * @interface StretchExerciseData
 */
export interface StretchExerciseData {
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseData
     */
    id: number;
    /**
     * 
     * @type {ExerciseAliasData}
     * @memberof StretchExerciseData
     */
    defaultExerciseAlias?: ExerciseAliasData;
    /**
     * 
     * @type {Array<ExerciseAliasData>}
     * @memberof StretchExerciseData
     */
    exerciseAliases?: Array<ExerciseAliasData>;
    /**
     * 
     * @type {Array<StretchExerciseVariantData>}
     * @memberof StretchExerciseData
     */
    stretchExerciseVariants?: Array<StretchExerciseVariantData>;
    /**
     * 
     * @type {Array<MuscleData>}
     * @memberof StretchExerciseData
     */
    stretchExerciseMuscles?: Array<MuscleData>;
}

/**
 * Check if a given object implements the StretchExerciseData interface.
 */
export function instanceOfStretchExerciseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function StretchExerciseDataFromJSON(json: any): StretchExerciseData {
    return StretchExerciseDataFromJSONTyped(json, false);
}

export function StretchExerciseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'defaultExerciseAlias': !exists(json, 'defaultExerciseAlias') ? undefined : ExerciseAliasDataFromJSON(json['defaultExerciseAlias']),
        'exerciseAliases': !exists(json, 'exerciseAliases') ? undefined : ((json['exerciseAliases'] as Array<any>).map(ExerciseAliasDataFromJSON)),
        'stretchExerciseVariants': !exists(json, 'stretchExerciseVariants') ? undefined : ((json['stretchExerciseVariants'] as Array<any>).map(StretchExerciseVariantDataFromJSON)),
        'stretchExerciseMuscles': !exists(json, 'stretchExerciseMuscles') ? undefined : ((json['stretchExerciseMuscles'] as Array<any>).map(MuscleDataFromJSON)),
    };
}

export function StretchExerciseDataToJSON(value?: StretchExerciseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'defaultExerciseAlias': ExerciseAliasDataToJSON(value.defaultExerciseAlias),
        'exerciseAliases': value.exerciseAliases === undefined ? undefined : ((value.exerciseAliases as Array<any>).map(ExerciseAliasDataToJSON)),
        'stretchExerciseVariants': value.stretchExerciseVariants === undefined ? undefined : ((value.stretchExerciseVariants as Array<any>).map(StretchExerciseVariantDataToJSON)),
        'stretchExerciseMuscles': value.stretchExerciseMuscles === undefined ? undefined : ((value.stretchExerciseMuscles as Array<any>).map(MuscleDataToJSON)),
    };
}

