## @keiser/metrics-sdk-sso-typescript@5.0.33

## Project
This SDK facilitates communication between a client system (_ie: phone app, website, server_) and [Keiser Metrics](https://metrics.keiser.com). The SDK is written in [TypeScript](https://www.typescriptlang.org) and supports both [browser](https://caniuse.com/#feat=es6) and [NodeJS](https://nodejs.org) platforms.


### Installation

Navigate to the folder of your consuming project and install with [npm](https://www.npmjs.com/):

```
npm install @keiser/metrics-sdk-sso-typescript@5.0.33 --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';

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

All URIs are relative to *https://metrics-api-v3.keiser.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptedTermsVersionShow**](docs/MetricsSSOApi.md#acceptedTermsVersionShow) | **GET** /auth/accepted-terms-version | Show a user accepted terms version
[**acceptedTermsVersionUpdate**](docs/MetricsSSOApi.md#acceptedTermsVersionUpdate) | **PUT** /auth/accepted-terms-version | Update a user accepted terms version
[**authConnect**](docs/MetricsSSOApi.md#authConnect) | **POST** /auth/connect | Connect a user to auth using email and password
[**authElevate**](docs/MetricsSSOApi.md#authElevate) | **POST** /auth/elevate | Elevate user session to Global ACL
[**authExchangeFulfillment**](docs/MetricsSSOApi.md#authExchangeFulfillment) | **POST** /auth/exchange/fulfillment | Exchanges an authorization token for access and refresh tokens
[**authExchangeInit**](docs/MetricsSSOApi.md#authExchangeInit) | **POST** /auth/exchange/init | Generate an exchange token
[**authFacilityWelcomeFulfillment**](docs/MetricsSSOApi.md#authFacilityWelcomeFulfillment) | **POST** /auth/facility/welcome/fulfillment | Fulfills a facility\&#39;s user creation process
[**authKeepAlive**](docs/MetricsSSOApi.md#authKeepAlive) | **POST** /auth/keep-alive | Keeps a user\&#39;s tokens alive
[**authLogin**](docs/MetricsSSOApi.md#authLogin) | **POST** /auth/login | Login a user using email and password
[**authLogout**](docs/MetricsSSOApi.md#authLogout) | **POST** /auth/logout | Logout user by blacklisting token
[**authResetFulfillment**](docs/MetricsSSOApi.md#authResetFulfillment) | **POST** /auth/reset/fulfillment | Fulfills a user\&#39;s credential reset request
[**authResetRequest**](docs/MetricsSSOApi.md#authResetRequest) | **POST** /auth/reset/request | Request to reset a user\&#39;s credentials
[**authSetFacility**](docs/MetricsSSOApi.md#authSetFacility) | **POST** /auth/set-facility/{facilityId} | Sets the target facility for a user
[**authUpdate**](docs/MetricsSSOApi.md#authUpdate) | **POST** /auth/update | Update a user\&#39;s credentials
[**authUserInit**](docs/MetricsSSOApi.md#authUserInit) | **POST** /auth/user/init | Initialize a new user
[**authUserInitFulfillment**](docs/MetricsSSOApi.md#authUserInitFulfillment) | **POST** /auth/user/init/fulfillment | Fulfill a new user initialization
[**authValidateReturnRoute**](docs/MetricsSSOApi.md#authValidateReturnRoute) | **GET** /auth/validate/return-route | Validates redirect url for known good routes
[**basicCredentialCreate**](docs/MetricsSSOApi.md#basicCredentialCreate) | **POST** /auth/basic-credential | Create auth using email and password for user
[**basicCredentialUpdate**](docs/MetricsSSOApi.md#basicCredentialUpdate) | **POST** /auth/basic-credential/update | Update a user\&#39;s credentials
[**emailAddressValidationFulfillment**](docs/MetricsSSOApi.md#emailAddressValidationFulfillment) | **POST** /user/email-address/validation-fulfillment/{validationToken} | Fulfills a user\&#39;s email validation process
[**heightMeasurementCreate**](docs/MetricsSSOApi.md#heightMeasurementCreate) | **POST** /user/height-measurement | Create a user height measurement
[**oauthAuthorize**](docs/MetricsSSOApi.md#oauthAuthorize) | **POST** /oauth/authorize | Authorizes a third party application
[**oauthDeauthorize**](docs/MetricsSSOApi.md#oauthDeauthorize) | **DELETE** /oauth/deauthorize | Deauthorizes an oauth user
[**oauthInitiate**](docs/MetricsSSOApi.md#oauthInitiate) | **POST** /oauth/initiate/{service} | Initiates OAuth access request and return parameters
[**oauthServiceDelete**](docs/MetricsSSOApi.md#oauthServiceDelete) | **DELETE** /oauth/service/{id} | Delete a user\&#39;s oauth service connection
[**oauthServiceList**](docs/MetricsSSOApi.md#oauthServiceList) | **GET** /oauth/service/list | List a user\&#39;s oauth service connections
[**oauthServiceShow**](docs/MetricsSSOApi.md#oauthServiceShow) | **GET** /oauth/service | Show a user\&#39;s oauth service connection
[**oauthServiceSubscriptionCreate**](docs/MetricsSSOApi.md#oauthServiceSubscriptionCreate) | **POST** /oauth/service/subscription | Create a oauth service subscription
[**oauthServiceSubscriptionDelete**](docs/MetricsSSOApi.md#oauthServiceSubscriptionDelete) | **DELETE** /oauth/service/subscription/{id} | Delete a oauth service subscription
[**oauthServiceSubscriptionList**](docs/MetricsSSOApi.md#oauthServiceSubscriptionList) | **GET** /oauth/service/subscription/list | List oauth service subscriptions
[**oauthServiceSubscriptionShow**](docs/MetricsSSOApi.md#oauthServiceSubscriptionShow) | **GET** /oauth/service/subscription | Show an oauth service subscription
[**oauthToken**](docs/MetricsSSOApi.md#oauthToken) | **GET** /oauth/token | Returns tokens for third party oauth
[**profileUpdate**](docs/MetricsSSOApi.md#profileUpdate) | **PUT** /user/profile | Update a user profile
[**weightMeasurementCreate**](docs/MetricsSSOApi.md#weightMeasurementCreate) | **POST** /user/weight-measurement | Create a user weight measurement


## Documentation for Models

 - [A500DataSetData](docs/A500DataSetData.md)
 - [A500MachineStateData](docs/A500MachineStateData.md)
 - [A500RepDataPointData](docs/A500RepDataPointData.md)
 - [A500TestResultData](docs/A500TestResultData.md)
 - [A500TimeSeriesPointData](docs/A500TimeSeriesPointData.md)
 - [AcceptedTermsVersionData](docs/AcceptedTermsVersionData.md)
 - [AcceptedTermsVersionResponse](docs/AcceptedTermsVersionResponse.md)
 - [BodyCompositionMeasurementData](docs/BodyCompositionMeasurementData.md)
 - [CardioExerciseData](docs/CardioExerciseData.md)
 - [CardioExerciseVariantData](docs/CardioExerciseVariantData.md)
 - [CardioMachineData](docs/CardioMachineData.md)
 - [CheckReturnRouteResponse](docs/CheckReturnRouteResponse.md)
 - [EmailAddressData](docs/EmailAddressData.md)
 - [EmailAddressResponse](docs/EmailAddressResponse.md)
 - [ExchangeableUserResponse](docs/ExchangeableUserResponse.md)
 - [ExerciseAliasData](docs/ExerciseAliasData.md)
 - [ExerciseOrdinalSetAssignmentData](docs/ExerciseOrdinalSetAssignmentData.md)
 - [ExerciseOrdinalSetData](docs/ExerciseOrdinalSetData.md)
 - [FacilityConfigurationData](docs/FacilityConfigurationData.md)
 - [FacilityData](docs/FacilityData.md)
 - [FacilityLicenseData](docs/FacilityLicenseData.md)
 - [FacilityProfileData](docs/FacilityProfileData.md)
 - [FacilityRelationshipData](docs/FacilityRelationshipData.md)
 - [FacilityResponse](docs/FacilityResponse.md)
 - [FacilitySessionUserData](docs/FacilitySessionUserData.md)
 - [FacilityStrengthMachineConfigurationData](docs/FacilityStrengthMachineConfigurationData.md)
 - [FacilityStrengthMachineData](docs/FacilityStrengthMachineData.md)
 - [FingerprintData](docs/FingerprintData.md)
 - [HeartRateDataPointData](docs/HeartRateDataPointData.md)
 - [HeartRateDataSetData](docs/HeartRateDataSetData.md)
 - [HeartRateDataSetSessionData](docs/HeartRateDataSetSessionData.md)
 - [HeightMeasurementData](docs/HeightMeasurementData.md)
 - [HeightMeasurementResponse](docs/HeightMeasurementResponse.md)
 - [MSeriesDataPointData](docs/MSeriesDataPointData.md)
 - [MSeriesDataSetData](docs/MSeriesDataSetData.md)
 - [MSeriesDataSetSegmentData](docs/MSeriesDataSetSegmentData.md)
 - [MSeriesFtpMeasurementData](docs/MSeriesFtpMeasurementData.md)
 - [MuscleArea](docs/MuscleArea.md)
 - [MuscleData](docs/MuscleData.md)
 - [MuscleGroup](docs/MuscleGroup.md)
 - [MuscleIdentifier](docs/MuscleIdentifier.md)
 - [OAuthServiceData](docs/OAuthServiceData.md)
 - [OAuthServiceListResponse](docs/OAuthServiceListResponse.md)
 - [OAuthServiceListResponseMeta](docs/OAuthServiceListResponseMeta.md)
 - [OAuthServiceResponse](docs/OAuthServiceResponse.md)
 - [OAuthServiceSorting](docs/OAuthServiceSorting.md)
 - [OauthResponse](docs/OauthResponse.md)
 - [OauthServiceSubscriptionData](docs/OauthServiceSubscriptionData.md)
 - [OauthServiceSubscriptionListResponse](docs/OauthServiceSubscriptionListResponse.md)
 - [OauthServiceSubscriptionResponse](docs/OauthServiceSubscriptionResponse.md)
 - [OauthServiceSubscriptionsMeta](docs/OauthServiceSubscriptionsMeta.md)
 - [PrimaryEmailAddressData](docs/PrimaryEmailAddressData.md)
 - [ProfileData](docs/ProfileData.md)
 - [ProfileResponse](docs/ProfileResponse.md)
 - [RedirectResponse](docs/RedirectResponse.md)
 - [SessionData](docs/SessionData.md)
 - [SessionPlanActivitySetData](docs/SessionPlanActivitySetData.md)
 - [SessionPlanCardioSetData](docs/SessionPlanCardioSetData.md)
 - [SessionPlanData](docs/SessionPlanData.md)
 - [SessionPlanSequenceAssignmentData](docs/SessionPlanSequenceAssignmentData.md)
 - [SessionPlanSequenceData](docs/SessionPlanSequenceData.md)
 - [SessionPlanSequenceInstanceData](docs/SessionPlanSequenceInstanceData.md)
 - [SessionPlanSetData](docs/SessionPlanSetData.md)
 - [SessionPlanSetInstanceData](docs/SessionPlanSetInstanceData.md)
 - [SessionPlanStrengthSetData](docs/SessionPlanStrengthSetData.md)
 - [SessionPlanStretchSetData](docs/SessionPlanStretchSetData.md)
 - [StrengthExerciseData](docs/StrengthExerciseData.md)
 - [StrengthExerciseVariantData](docs/StrengthExerciseVariantData.md)
 - [StrengthMachineData](docs/StrengthMachineData.md)
 - [StrengthMachineDataSetData](docs/StrengthMachineDataSetData.md)
 - [StrengthMachineDataSetTestData](docs/StrengthMachineDataSetTestData.md)
 - [StrengthMachineDataSetTestSubsetData](docs/StrengthMachineDataSetTestSubsetData.md)
 - [StrengthMachineModelData](docs/StrengthMachineModelData.md)
 - [StretchExerciseData](docs/StretchExerciseData.md)
 - [StretchExerciseVariantData](docs/StretchExerciseVariantData.md)
 - [UserData](docs/UserData.md)
 - [UserResponse](docs/UserResponse.md)
 - [WeightMeasurementData](docs/WeightMeasurementData.md)
 - [WeightMeasurementResponse](docs/WeightMeasurementResponse.md)


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