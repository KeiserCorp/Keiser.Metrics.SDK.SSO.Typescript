/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-sso
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanData } from './SessionPlanData';
import {
    SessionPlanDataFromJSON,
    SessionPlanDataFromJSONTyped,
    SessionPlanDataToJSON,
} from './SessionPlanData';
import type { SessionPlanSetInstanceData } from './SessionPlanSetInstanceData';
import {
    SessionPlanSetInstanceDataFromJSON,
    SessionPlanSetInstanceDataFromJSONTyped,
    SessionPlanSetInstanceDataToJSON,
} from './SessionPlanSetInstanceData';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface SessionPlanSequenceInstanceData
 */
export interface SessionPlanSequenceInstanceData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceInstanceData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceInstanceData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceInstanceData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceInstanceData
     */
    notes: string;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanSequenceInstanceData
     */
    startedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceInstanceData
     */
    scheduleIndex: number;
    /**
     * 
     * @type {UserData}
     * @memberof SessionPlanSequenceInstanceData
     */
    user?: UserData;
    /**
     * 
     * @type {SessionPlanData}
     * @memberof SessionPlanSequenceInstanceData
     */
    sessionPlan?: SessionPlanData;
    /**
     * 
     * @type {Array<SessionPlanSetInstanceData>}
     * @memberof SessionPlanSequenceInstanceData
     */
    sessionPlanSetInstances?: Array<SessionPlanSetInstanceData>;
}

/**
 * Check if a given object implements the SessionPlanSequenceInstanceData interface.
 */
export function instanceOfSessionPlanSequenceInstanceData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "scheduleIndex" in value;

    return isInstance;
}

export function SessionPlanSequenceInstanceDataFromJSON(json: any): SessionPlanSequenceInstanceData {
    return SessionPlanSequenceInstanceDataFromJSONTyped(json, false);
}

export function SessionPlanSequenceInstanceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceInstanceData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'notes': json['notes'],
        'startedAt': (new Date(json['startedAt'])),
        'scheduleIndex': json['scheduleIndex'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
        'sessionPlan': !exists(json, 'sessionPlan') ? undefined : SessionPlanDataFromJSON(json['sessionPlan']),
        'sessionPlanSetInstances': !exists(json, 'sessionPlanSetInstances') ? undefined : ((json['sessionPlanSetInstances'] as Array<any>).map(SessionPlanSetInstanceDataFromJSON)),
    };
}

export function SessionPlanSequenceInstanceDataToJSON(value?: SessionPlanSequenceInstanceData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'notes': value.notes,
        'startedAt': (value.startedAt.toISOString()),
        'scheduleIndex': value.scheduleIndex,
        'user': UserDataToJSON(value.user),
        'sessionPlan': SessionPlanDataToJSON(value.sessionPlan),
        'sessionPlanSetInstances': value.sessionPlanSetInstances === undefined ? undefined : ((value.sessionPlanSetInstances as Array<any>).map(SessionPlanSetInstanceDataToJSON)),
    };
}
