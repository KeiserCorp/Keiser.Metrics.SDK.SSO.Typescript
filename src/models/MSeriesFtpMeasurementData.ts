/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioMachineData } from './CardioMachineData';
import {
    CardioMachineDataFromJSON,
    CardioMachineDataFromJSONTyped,
    CardioMachineDataToJSON,
} from './CardioMachineData';

/**
 * 
 * @export
 * @interface MSeriesFtpMeasurementData
 */
export interface MSeriesFtpMeasurementData {
    /**
     * 
     * @type {number}
     * @memberof MSeriesFtpMeasurementData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesFtpMeasurementData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementData
     */
    source?: string;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesFtpMeasurementData
     */
    takenAt: Date;
    /**
     * 
     * @type {number}
     * @memberof MSeriesFtpMeasurementData
     */
    cardioMachineId: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementData
     */
    machineType?: string;
    /**
     * 
     * @type {number}
     * @memberof MSeriesFtpMeasurementData
     */
    ftp: number;
    /**
     * 
     * @type {CardioMachineData}
     * @memberof MSeriesFtpMeasurementData
     */
    cardioMachine?: CardioMachineData;
}

/**
 * Check if a given object implements the MSeriesFtpMeasurementData interface.
 */
export function instanceOfMSeriesFtpMeasurementData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "takenAt" in value;
    isInstance = isInstance && "cardioMachineId" in value;
    isInstance = isInstance && "ftp" in value;

    return isInstance;
}

export function MSeriesFtpMeasurementDataFromJSON(json: any): MSeriesFtpMeasurementData {
    return MSeriesFtpMeasurementDataFromJSONTyped(json, false);
}

export function MSeriesFtpMeasurementDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesFtpMeasurementData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'takenAt': (new Date(json['takenAt'])),
        'cardioMachineId': json['cardioMachineId'],
        'machineType': !exists(json, 'machineType') ? undefined : json['machineType'],
        'ftp': json['ftp'],
        'cardioMachine': !exists(json, 'cardioMachine') ? undefined : CardioMachineDataFromJSON(json['cardioMachine']),
    };
}

export function MSeriesFtpMeasurementDataToJSON(value?: MSeriesFtpMeasurementData | null): any {
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
        'cardioMachineId': value.cardioMachineId,
        'machineType': value.machineType,
        'ftp': value.ftp,
        'cardioMachine': CardioMachineDataToJSON(value.cardioMachine),
    };
}

