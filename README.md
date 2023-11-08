## @keiser/metrics-sdk-sso@5.0.2

## Project
This SDK facilitates communication between a client system (_ie: phone app, website, server_) and [Keiser Metrics](https://metrics.keiser.com). The SDK is written in [TypeScript](https://www.typescriptlang.org) and supports both [browser](https://caniuse.com/#feat=es6) and [NodeJS](https://nodejs.org) platforms.


### Installation

Navigate to the folder of your consuming project and install with [npm](https://www.npmjs.com/):

```
npm install @keiser/metrics-sdk-sso@5.0.2 --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

import { MetricsSSOApi } from '@keiser/metrics-sdk-sso';

var api = new MetricsSSOApi()

let body:MetricsSSOApiAcceptedTermsVersionShowRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.acceptedTermsVersionShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}

```

## Documentation for API Endpoints

All URIs are relative to *https://metrics-api.keiser.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptedTermsVersionShow**](MetricsSSOApi.md#acceptedTermsVersionShow) | **GET** /auth/accepted-terms-version | Show a user accepted terms version
[**acceptedTermsVersionUpdate**](MetricsSSOApi.md#acceptedTermsVersionUpdate) | **PUT** /auth/accepted-terms-version | Update a user accepted terms version
[**authConnect**](MetricsSSOApi.md#authConnect) | **POST** /auth/connect | Connect a user to auth using email and password
[**authElevate**](MetricsSSOApi.md#authElevate) | **POST** /auth/elevate | Elevate user session to Global ACL
[**authExchangeFulfillment**](MetricsSSOApi.md#authExchangeFulfillment) | **POST** /auth/exchange/fulfillment | Exchanges an authorization token for access and refresh tokens
[**authExchangeInit**](MetricsSSOApi.md#authExchangeInit) | **POST** /auth/exchange/init | Generate an exchange token
[**authFacilityWelcomeFulfillment**](MetricsSSOApi.md#authFacilityWelcomeFulfillment) | **POST** /auth/facility/welcome/fulfillment | Fulfills a facility\&#39;s user creation process
[**authKeepAlive**](MetricsSSOApi.md#authKeepAlive) | **POST** /auth/keep-alive | Keeps a user\&#39;s tokens alive
[**authLogin**](MetricsSSOApi.md#authLogin) | **POST** /auth/login | Login a user using email and password
[**authLogout**](MetricsSSOApi.md#authLogout) | **POST** /auth/logout | Logout user by blacklisting token
[**authResetFulfillment**](MetricsSSOApi.md#authResetFulfillment) | **POST** /auth/reset/fulfillment | Fulfills a user\&#39;s credential reset request
[**authResetRequest**](MetricsSSOApi.md#authResetRequest) | **POST** /auth/reset/request | Request to reset a user\&#39;s credentials
[**authSetFacility**](MetricsSSOApi.md#authSetFacility) | **POST** /auth/set-facility/{facilityId} | Sets the target facility for a user
[**authUpdate**](MetricsSSOApi.md#authUpdate) | **POST** /auth/update | Update a user\&#39;s credentials
[**authUserInit**](MetricsSSOApi.md#authUserInit) | **POST** /auth/user/init | Initialize a new user
[**authUserInitFulfillment**](MetricsSSOApi.md#authUserInitFulfillment) | **POST** /auth/user/init/fulfillment | Fulfill a new user initialization
[**authValidateReturnRoute**](MetricsSSOApi.md#authValidateReturnRoute) | **GET** /auth/validate/return-route | Validates redirect url for known good routes
[**basicCredentialCreate**](MetricsSSOApi.md#basicCredentialCreate) | **POST** /auth/basic-credential | Create auth using email and password for user
[**basicCredentialUpdate**](MetricsSSOApi.md#basicCredentialUpdate) | **POST** /auth/basic-credential/update | Update a user\&#39;s credentials
[**emailAddressValidationFulfillment**](MetricsSSOApi.md#emailAddressValidationFulfillment) | **POST** /user/email-address/validation-fulfillment/{validationToken} | Fulfills a user\&#39;s email validation process
[**heightMeasurementCreate**](MetricsSSOApi.md#heightMeasurementCreate) | **POST** /user/height-measurement | Create a user height measurement
[**oauthAuthorize**](MetricsSSOApi.md#oauthAuthorize) | **POST** /oauth/authorize | Authorizes a third party application
[**oauthDeauthorize**](MetricsSSOApi.md#oauthDeauthorize) | **DELETE** /oauth/deauthorize | Deauthorizes an oauth user
[**oauthInitiate**](MetricsSSOApi.md#oauthInitiate) | **POST** /oauth/initiate/{service} | Initiates OAuth access request and return parameters
[**oauthServiceDelete**](MetricsSSOApi.md#oauthServiceDelete) | **DELETE** /oauth/service/{id} | Delete a user\&#39;s oauth service connection
[**oauthServiceList**](MetricsSSOApi.md#oauthServiceList) | **GET** /oauth/service | List a user\&#39;s oauth service connections
[**oauthServiceShow**](MetricsSSOApi.md#oauthServiceShow) | **GET** /oauth/service/{id} | Show a user\&#39;s oauth service connection
[**oauthServiceSubscriptionCreate**](MetricsSSOApi.md#oauthServiceSubscriptionCreate) | **POST** /oauth/service/subscription | Create a oauth service subscription
[**oauthServiceSubscriptionDelete**](MetricsSSOApi.md#oauthServiceSubscriptionDelete) | **DELETE** /oauth/service/subscription/{id} | Delete a oauth service subscription
[**oauthServiceSubscriptionList**](MetricsSSOApi.md#oauthServiceSubscriptionList) | **GET** /oauth/service/subscription | List oauth service subscriptions
[**oauthServiceSubscriptionShow**](MetricsSSOApi.md#oauthServiceSubscriptionShow) | **GET** /oauth/service/subscription/{id} | Show an oauth service subscription
[**oauthToken**](MetricsSSOApi.md#oauthToken) | **GET** /oauth/token | Returns tokens for third party oauth
[**profileUpdate**](MetricsSSOApi.md#profileUpdate) | **PUT** /user/profile | Update a user profile
[**weightMeasurementCreate**](MetricsSSOApi.md#weightMeasurementCreate) | **POST** /user/weight-measurement | Create a user weight measurement


## Documentation for Models

 - [A500DataSetData](A500DataSetData.md)
 - [A500MachineStateData](A500MachineStateData.md)
 - [A500RepDataPointData](A500RepDataPointData.md)
 - [A500TestResultData](A500TestResultData.md)
 - [A500TimeSeriesPointData](A500TimeSeriesPointData.md)
 - [AcceptedTermsVersionData](AcceptedTermsVersionData.md)
 - [AcceptedTermsVersionResponse](AcceptedTermsVersionResponse.md)
 - [BodyCompositionMeasurementData](BodyCompositionMeasurementData.md)
 - [CardioExerciseData](CardioExerciseData.md)
 - [CardioExerciseVariantData](CardioExerciseVariantData.md)
 - [CardioMachineData](CardioMachineData.md)
 - [CheckReturnRouteResponse](CheckReturnRouteResponse.md)
 - [EmailAddressData](EmailAddressData.md)
 - [EmailAddressResponse](EmailAddressResponse.md)
 - [ExchangeableUserResponse](ExchangeableUserResponse.md)
 - [ExerciseAliasData](ExerciseAliasData.md)
 - [ExerciseOrdinalSetAssignmentData](ExerciseOrdinalSetAssignmentData.md)
 - [ExerciseOrdinalSetData](ExerciseOrdinalSetData.md)
 - [FacilityConfigurationData](FacilityConfigurationData.md)
 - [FacilityData](FacilityData.md)
 - [FacilityLicenseData](FacilityLicenseData.md)
 - [FacilityProfileData](FacilityProfileData.md)
 - [FacilityRelationshipData](FacilityRelationshipData.md)
 - [FacilityResponse](FacilityResponse.md)
 - [FacilitySessionUserData](FacilitySessionUserData.md)
 - [FacilityStrengthMachineConfigurationData](FacilityStrengthMachineConfigurationData.md)
 - [FacilityStrengthMachineData](FacilityStrengthMachineData.md)
 - [FingerprintData](FingerprintData.md)
 - [HeartRateDataPointData](HeartRateDataPointData.md)
 - [HeartRateDataSetData](HeartRateDataSetData.md)
 - [HeartRateDataSetSessionData](HeartRateDataSetSessionData.md)
 - [HeightMeasurementData](HeightMeasurementData.md)
 - [HeightMeasurementResponse](HeightMeasurementResponse.md)
 - [MSeriesDataPointData](MSeriesDataPointData.md)
 - [MSeriesDataSetData](MSeriesDataSetData.md)
 - [MSeriesDataSetSegmentData](MSeriesDataSetSegmentData.md)
 - [MSeriesFtpMeasurementData](MSeriesFtpMeasurementData.md)
 - [MuscleArea](MuscleArea.md)
 - [MuscleData](MuscleData.md)
 - [MuscleGroup](MuscleGroup.md)
 - [MuscleIdentifier](MuscleIdentifier.md)
 - [OAuthServiceData](OAuthServiceData.md)
 - [OAuthServiceListResponse](OAuthServiceListResponse.md)
 - [OAuthServiceListResponseMeta](OAuthServiceListResponseMeta.md)
 - [OAuthServiceResponse](OAuthServiceResponse.md)
 - [OAuthServiceSorting](OAuthServiceSorting.md)
 - [OauthResponse](OauthResponse.md)
 - [OauthServiceSubscriptionData](OauthServiceSubscriptionData.md)
 - [OauthServiceSubscriptionListResponse](OauthServiceSubscriptionListResponse.md)
 - [OauthServiceSubscriptionResponse](OauthServiceSubscriptionResponse.md)
 - [OauthServiceSubscriptionsMeta](OauthServiceSubscriptionsMeta.md)
 - [PrimaryEmailAddressData](PrimaryEmailAddressData.md)
 - [ProfileData](ProfileData.md)
 - [ProfileResponse](ProfileResponse.md)
 - [RedirectResponse](RedirectResponse.md)
 - [SessionData](SessionData.md)
 - [SessionPlanActivitySetData](SessionPlanActivitySetData.md)
 - [SessionPlanCardioSetData](SessionPlanCardioSetData.md)
 - [SessionPlanData](SessionPlanData.md)
 - [SessionPlanSequenceAssignmentData](SessionPlanSequenceAssignmentData.md)
 - [SessionPlanSequenceData](SessionPlanSequenceData.md)
 - [SessionPlanSequenceInstanceData](SessionPlanSequenceInstanceData.md)
 - [SessionPlanSetData](SessionPlanSetData.md)
 - [SessionPlanSetInstanceData](SessionPlanSetInstanceData.md)
 - [SessionPlanStrengthSetData](SessionPlanStrengthSetData.md)
 - [SessionPlanStretchSetData](SessionPlanStretchSetData.md)
 - [StrengthExerciseData](StrengthExerciseData.md)
 - [StrengthExerciseVariantData](StrengthExerciseVariantData.md)
 - [StrengthMachineData](StrengthMachineData.md)
 - [StrengthMachineDataSetData](StrengthMachineDataSetData.md)
 - [StrengthMachineDataSetTestData](StrengthMachineDataSetTestData.md)
 - [StrengthMachineDataSetTestSubsetData](StrengthMachineDataSetTestSubsetData.md)
 - [StrengthMachineModelData](StrengthMachineModelData.md)
 - [StretchExerciseData](StretchExerciseData.md)
 - [StretchExerciseVariantData](StretchExerciseVariantData.md)
 - [UserData](UserData.md)
 - [UserResponse](UserResponse.md)
 - [WeightMeasurementData](WeightMeasurementData.md)
 - [WeightMeasurementResponse](WeightMeasurementResponse.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### bearerAuth

- **Type**: Bearer authentication (JWT)



## Copyright and License
Copyright © 2020 [Keiser Corporation](http://keiser.com/).

The Keiser Metrics SDK source code and distributed package are made available through the [MIT license](LICENSE.md).

Using any of the APIs made available through the Keiser Metrics SDK to communicate with [Keiser Metrics](https://metrics.keiser.com) make you subject to the following agreements. Please read all documents in their entirety as they govern your use of the APIs and Keiser Metrics servers.
- [API Agreement](https://dev.keiser.com/api-agreement/)
- [Brand Guidelines for Developers](https://dev.keiser.com/brand-guidelines/)