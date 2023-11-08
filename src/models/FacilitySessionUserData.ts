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
import type { AcceptedTermsVersionData } from './AcceptedTermsVersionData';
import {
    AcceptedTermsVersionDataFromJSON,
    AcceptedTermsVersionDataFromJSONTyped,
    AcceptedTermsVersionDataToJSON,
} from './AcceptedTermsVersionData';
import type { EmailAddressData } from './EmailAddressData';
import {
    EmailAddressDataFromJSON,
    EmailAddressDataFromJSONTyped,
    EmailAddressDataToJSON,
} from './EmailAddressData';
import type { FacilityRelationshipData } from './FacilityRelationshipData';
import {
    FacilityRelationshipDataFromJSON,
    FacilityRelationshipDataFromJSONTyped,
    FacilityRelationshipDataToJSON,
} from './FacilityRelationshipData';
import type { HeightMeasurementData } from './HeightMeasurementData';
import {
    HeightMeasurementDataFromJSON,
    HeightMeasurementDataFromJSONTyped,
    HeightMeasurementDataToJSON,
} from './HeightMeasurementData';
import type { OAuthServiceData } from './OAuthServiceData';
import {
    OAuthServiceDataFromJSON,
    OAuthServiceDataFromJSONTyped,
    OAuthServiceDataToJSON,
} from './OAuthServiceData';
import type { PrimaryEmailAddressData } from './PrimaryEmailAddressData';
import {
    PrimaryEmailAddressDataFromJSON,
    PrimaryEmailAddressDataFromJSONTyped,
    PrimaryEmailAddressDataToJSON,
} from './PrimaryEmailAddressData';
import type { ProfileData } from './ProfileData';
import {
    ProfileDataFromJSON,
    ProfileDataFromJSONTyped,
    ProfileDataToJSON,
} from './ProfileData';
import type { SessionData } from './SessionData';
import {
    SessionDataFromJSON,
    SessionDataFromJSONTyped,
    SessionDataToJSON,
} from './SessionData';
import type { WeightMeasurementData } from './WeightMeasurementData';
import {
    WeightMeasurementDataFromJSON,
    WeightMeasurementDataFromJSONTyped,
    WeightMeasurementDataToJSON,
} from './WeightMeasurementData';

/**
 * 
 * @export
 * @interface FacilitySessionUserData
 */
export interface FacilitySessionUserData {
    /**
     * 
     * @type {Array<SessionData>}
     * @memberof FacilitySessionUserData
     */
    sessions?: Array<SessionData>;
    /**
     * 
     * @type {number}
     * @memberof FacilitySessionUserData
     */
    id?: number;
    /**
     * 
     * @type {Array<EmailAddressData>}
     * @memberof FacilitySessionUserData
     */
    emailAddresses?: Array<EmailAddressData>;
    /**
     * 
     * @type {PrimaryEmailAddressData}
     * @memberof FacilitySessionUserData
     */
    primaryEmailAddress?: PrimaryEmailAddressData;
    /**
     * 
     * @type {boolean}
     * @memberof FacilitySessionUserData
     */
    basicCredential?: boolean;
    /**
     * 
     * @type {Array<OAuthServiceData>}
     * @memberof FacilitySessionUserData
     */
    oauthServices?: Array<OAuthServiceData>;
    /**
     * 
     * @type {ProfileData}
     * @memberof FacilitySessionUserData
     */
    profile?: ProfileData;
    /**
     * 
     * @type {AcceptedTermsVersionData}
     * @memberof FacilitySessionUserData
     */
    acceptedTermsVersion?: AcceptedTermsVersionData;
    /**
     * 
     * @type {Array<WeightMeasurementData>}
     * @memberof FacilitySessionUserData
     */
    weightMeasurements?: Array<WeightMeasurementData>;
    /**
     * 
     * @type {WeightMeasurementData}
     * @memberof FacilitySessionUserData
     */
    weightMeasurement?: WeightMeasurementData;
    /**
     * 
     * @type {Array<HeightMeasurementData>}
     * @memberof FacilitySessionUserData
     */
    heightMeasurements?: Array<HeightMeasurementData>;
    /**
     * 
     * @type {HeightMeasurementData}
     * @memberof FacilitySessionUserData
     */
    heightMeasurement?: HeightMeasurementData;
    /**
     * 
     * @type {Array<FacilityRelationshipData>}
     * @memberof FacilitySessionUserData
     */
    facilityRelationships?: Array<FacilityRelationshipData>;
}

/**
 * Check if a given object implements the FacilitySessionUserData interface.
 */
export function instanceOfFacilitySessionUserData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilitySessionUserDataFromJSON(json: any): FacilitySessionUserData {
    return FacilitySessionUserDataFromJSONTyped(json, false);
}

export function FacilitySessionUserDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilitySessionUserData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessions': !exists(json, 'sessions') ? undefined : ((json['sessions'] as Array<any>).map(SessionDataFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'emailAddresses': !exists(json, 'emailAddresses') ? undefined : ((json['emailAddresses'] as Array<any>).map(EmailAddressDataFromJSON)),
        'primaryEmailAddress': !exists(json, 'primaryEmailAddress') ? undefined : PrimaryEmailAddressDataFromJSON(json['primaryEmailAddress']),
        'basicCredential': !exists(json, 'basicCredential') ? undefined : json['basicCredential'],
        'oauthServices': !exists(json, 'oauthServices') ? undefined : ((json['oauthServices'] as Array<any>).map(OAuthServiceDataFromJSON)),
        'profile': !exists(json, 'profile') ? undefined : ProfileDataFromJSON(json['profile']),
        'acceptedTermsVersion': !exists(json, 'acceptedTermsVersion') ? undefined : AcceptedTermsVersionDataFromJSON(json['acceptedTermsVersion']),
        'weightMeasurements': !exists(json, 'weightMeasurements') ? undefined : ((json['weightMeasurements'] as Array<any>).map(WeightMeasurementDataFromJSON)),
        'weightMeasurement': !exists(json, 'weightMeasurement') ? undefined : WeightMeasurementDataFromJSON(json['weightMeasurement']),
        'heightMeasurements': !exists(json, 'heightMeasurements') ? undefined : ((json['heightMeasurements'] as Array<any>).map(HeightMeasurementDataFromJSON)),
        'heightMeasurement': !exists(json, 'heightMeasurement') ? undefined : HeightMeasurementDataFromJSON(json['heightMeasurement']),
        'facilityRelationships': !exists(json, 'facilityRelationships') ? undefined : ((json['facilityRelationships'] as Array<any>).map(FacilityRelationshipDataFromJSON)),
    };
}

export function FacilitySessionUserDataToJSON(value?: FacilitySessionUserData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessions': value.sessions === undefined ? undefined : ((value.sessions as Array<any>).map(SessionDataToJSON)),
        'id': value.id,
        'emailAddresses': value.emailAddresses === undefined ? undefined : ((value.emailAddresses as Array<any>).map(EmailAddressDataToJSON)),
        'primaryEmailAddress': PrimaryEmailAddressDataToJSON(value.primaryEmailAddress),
        'basicCredential': value.basicCredential,
        'oauthServices': value.oauthServices === undefined ? undefined : ((value.oauthServices as Array<any>).map(OAuthServiceDataToJSON)),
        'profile': ProfileDataToJSON(value.profile),
        'acceptedTermsVersion': AcceptedTermsVersionDataToJSON(value.acceptedTermsVersion),
        'weightMeasurements': value.weightMeasurements === undefined ? undefined : ((value.weightMeasurements as Array<any>).map(WeightMeasurementDataToJSON)),
        'weightMeasurement': WeightMeasurementDataToJSON(value.weightMeasurement),
        'heightMeasurements': value.heightMeasurements === undefined ? undefined : ((value.heightMeasurements as Array<any>).map(HeightMeasurementDataToJSON)),
        'heightMeasurement': HeightMeasurementDataToJSON(value.heightMeasurement),
        'facilityRelationships': value.facilityRelationships === undefined ? undefined : ((value.facilityRelationships as Array<any>).map(FacilityRelationshipDataToJSON)),
    };
}

