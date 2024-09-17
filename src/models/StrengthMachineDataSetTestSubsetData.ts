/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
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
 * @interface StrengthMachineDataSetTestSubsetData
 */
export interface StrengthMachineDataSetTestSubsetData {
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetTestSubsetData
     */
    power: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetTestSubsetData
     */
    velocity: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetTestSubsetData
     */
    force: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetTestSubsetData
     */
    position: number;
}

/**
 * Check if a given object implements the StrengthMachineDataSetTestSubsetData interface.
 */
export function instanceOfStrengthMachineDataSetTestSubsetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "power" in value;
    isInstance = isInstance && "velocity" in value;
    isInstance = isInstance && "force" in value;
    isInstance = isInstance && "position" in value;

    return isInstance;
}

export function StrengthMachineDataSetTestSubsetDataFromJSON(json: any): StrengthMachineDataSetTestSubsetData {
    return StrengthMachineDataSetTestSubsetDataFromJSONTyped(json, false);
}

export function StrengthMachineDataSetTestSubsetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineDataSetTestSubsetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'power': json['power'],
        'velocity': json['velocity'],
        'force': json['force'],
        'position': json['position'],
    };
}

export function StrengthMachineDataSetTestSubsetDataToJSON(value?: StrengthMachineDataSetTestSubsetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'power': value.power,
        'velocity': value.velocity,
        'force': value.force,
        'position': value.position,
    };
}

