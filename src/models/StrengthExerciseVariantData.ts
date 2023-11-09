/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExerciseOrdinalSetAssignmentData } from './ExerciseOrdinalSetAssignmentData';
import {
    ExerciseOrdinalSetAssignmentDataFromJSON,
    ExerciseOrdinalSetAssignmentDataFromJSONTyped,
    ExerciseOrdinalSetAssignmentDataToJSON,
} from './ExerciseOrdinalSetAssignmentData';
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
 * @interface StrengthExerciseVariantData
 */
export interface StrengthExerciseVariantData {
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseVariantData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantData
     */
    variant: StrengthExerciseVariantDataVariantEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantData
     */
    attachment?: StrengthExerciseVariantDataAttachmentEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantData
     */
    equipmentMechanicalMovement: StrengthExerciseVariantDataEquipmentMechanicalMovementEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantData
     */
    instructionalImage?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantData
     */
    instructionalVideo?: string;
    /**
     * 
     * @type {StrengthExerciseData}
     * @memberof StrengthExerciseVariantData
     */
    strengthExercise?: StrengthExerciseData;
    /**
     * 
     * @type {StrengthMachineData}
     * @memberof StrengthExerciseVariantData
     */
    strengthMachine?: StrengthMachineData;
    /**
     * 
     * @type {Array<ExerciseOrdinalSetAssignmentData>}
     * @memberof StrengthExerciseVariantData
     */
    exerciseOrdinalSetAssignments?: Array<ExerciseOrdinalSetAssignmentData>;
}


/**
 * @export
 */
export const StrengthExerciseVariantDataVariantEnum = {
    Normal: 'normal',
    SingleArm: 'singleArm',
    SingleLeg: 'singleLeg',
    SingleArmSingleLeg: 'singleArmSingleLeg',
    DoubleArmSingleLeg: 'doubleArmSingleLeg',
    Alternate: 'alternate'
} as const;
export type StrengthExerciseVariantDataVariantEnum = typeof StrengthExerciseVariantDataVariantEnum[keyof typeof StrengthExerciseVariantDataVariantEnum];

/**
 * @export
 */
export const StrengthExerciseVariantDataAttachmentEnum = {
    Bar: 'bar',
    Rope: 'rope',
    SingleHandles: 'singleHandles',
    DoubleHandles: 'doubleHandles',
    AnkleStrap: 'ankleStrap',
    ThighStrap: 'thighStrap',
    Belt: 'belt'
} as const;
export type StrengthExerciseVariantDataAttachmentEnum = typeof StrengthExerciseVariantDataAttachmentEnum[keyof typeof StrengthExerciseVariantDataAttachmentEnum];

/**
 * @export
 */
export const StrengthExerciseVariantDataEquipmentMechanicalMovementEnum = {
    Unilateral: 'unilateral',
    Bilateral: 'bilateral'
} as const;
export type StrengthExerciseVariantDataEquipmentMechanicalMovementEnum = typeof StrengthExerciseVariantDataEquipmentMechanicalMovementEnum[keyof typeof StrengthExerciseVariantDataEquipmentMechanicalMovementEnum];


/**
 * Check if a given object implements the StrengthExerciseVariantData interface.
 */
export function instanceOfStrengthExerciseVariantData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "variant" in value;
    isInstance = isInstance && "equipmentMechanicalMovement" in value;

    return isInstance;
}

export function StrengthExerciseVariantDataFromJSON(json: any): StrengthExerciseVariantData {
    return StrengthExerciseVariantDataFromJSONTyped(json, false);
}

export function StrengthExerciseVariantDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseVariantData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'variant': json['variant'],
        'attachment': !exists(json, 'attachment') ? undefined : json['attachment'],
        'equipmentMechanicalMovement': json['equipmentMechanicalMovement'],
        'instructionalImage': !exists(json, 'instructionalImage') ? undefined : json['instructionalImage'],
        'instructionalVideo': !exists(json, 'instructionalVideo') ? undefined : json['instructionalVideo'],
        'strengthExercise': !exists(json, 'strengthExercise') ? undefined : StrengthExerciseDataFromJSON(json['strengthExercise']),
        'strengthMachine': !exists(json, 'strengthMachine') ? undefined : StrengthMachineDataFromJSON(json['strengthMachine']),
        'exerciseOrdinalSetAssignments': !exists(json, 'exerciseOrdinalSetAssignments') ? undefined : ((json['exerciseOrdinalSetAssignments'] as Array<any>).map(ExerciseOrdinalSetAssignmentDataFromJSON)),
    };
}

export function StrengthExerciseVariantDataToJSON(value?: StrengthExerciseVariantData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'variant': value.variant,
        'attachment': value.attachment,
        'equipmentMechanicalMovement': value.equipmentMechanicalMovement,
        'instructionalImage': value.instructionalImage,
        'instructionalVideo': value.instructionalVideo,
        'strengthExercise': StrengthExerciseDataToJSON(value.strengthExercise),
        'strengthMachine': StrengthMachineDataToJSON(value.strengthMachine),
        'exerciseOrdinalSetAssignments': value.exerciseOrdinalSetAssignments === undefined ? undefined : ((value.exerciseOrdinalSetAssignments as Array<any>).map(ExerciseOrdinalSetAssignmentDataToJSON)),
    };
}

