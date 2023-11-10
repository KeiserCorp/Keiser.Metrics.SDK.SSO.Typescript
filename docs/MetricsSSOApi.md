# MetricsSSOApi

All URIs are relative to *https://metrics-api-v3.keiser.com/api*

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
[**oauthServiceList**](MetricsSSOApi.md#oauthServiceList) | **GET** /oauth/service/list | List a user\&#39;s oauth service connections
[**oauthServiceShow**](MetricsSSOApi.md#oauthServiceShow) | **GET** /oauth/service | Show a user\&#39;s oauth service connection
[**oauthServiceSubscriptionCreate**](MetricsSSOApi.md#oauthServiceSubscriptionCreate) | **POST** /oauth/service/subscription | Create a oauth service subscription
[**oauthServiceSubscriptionDelete**](MetricsSSOApi.md#oauthServiceSubscriptionDelete) | **DELETE** /oauth/service/subscription/{id} | Delete a oauth service subscription
[**oauthServiceSubscriptionList**](MetricsSSOApi.md#oauthServiceSubscriptionList) | **GET** /oauth/service/subscription/list | List oauth service subscriptions
[**oauthServiceSubscriptionShow**](MetricsSSOApi.md#oauthServiceSubscriptionShow) | **GET** /oauth/service/subscription | Show an oauth service subscription
[**oauthToken**](MetricsSSOApi.md#oauthToken) | **GET** /oauth/token | Returns tokens for third party oauth
[**profileUpdate**](MetricsSSOApi.md#profileUpdate) | **PUT** /user/profile | Update a user profile
[**weightMeasurementCreate**](MetricsSSOApi.md#weightMeasurementCreate) | **POST** /user/weight-measurement | Create a user weight measurement


# **acceptedTermsVersionShow**
> AcceptedTermsVersionResponse acceptedTermsVersionShow()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

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


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**AcceptedTermsVersionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **acceptedTermsVersionUpdate**
> AcceptedTermsVersionResponse acceptedTermsVersionUpdate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAcceptedTermsVersionUpdateRequest = {
  // string (optional)
  revision: revision_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.acceptedTermsVersionUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revision** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**AcceptedTermsVersionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authConnect**
> UserResponse authConnect()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthConnectRequest = {
  // string
  email: email_example,
  // string
  password: password_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authConnect(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authElevate**
> ExchangeableUserResponse authElevate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthElevateRequest = {
  // string (optional)
  otpToken: otpToken_example,
  // boolean (optional)
  refreshable: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authElevate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otpToken** | [**string**] |  | (optional) defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExchangeableUserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authExchangeFulfillment**
> UserResponse authExchangeFulfillment()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthExchangeFulfillmentRequest = {
  // string
  exchangeToken: exchangeToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authExchangeFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeToken** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authExchangeInit**
> ExchangeableUserResponse authExchangeInit()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthExchangeInitRequest = {
  // string
  authorization: authorization_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authExchangeInit(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExchangeableUserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authFacilityWelcomeFulfillment**
> ExchangeableUserResponse authFacilityWelcomeFulfillment()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthFacilityWelcomeFulfillmentRequest = {
  // string
  password: password_example,
  // string
  welcomeToken: welcomeToken_example,
  // boolean (optional)
  refreshable: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authFacilityWelcomeFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | [**string**] |  | defaults to undefined
 **welcomeToken** | [**string**] |  | defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExchangeableUserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authKeepAlive**
> authKeepAlive()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthKeepAliveRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authKeepAlive(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLogin**
> ExchangeableUserResponse authLogin()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthLoginRequest = {
  // string
  email: email_example,
  // string
  password: password_example,
  // boolean (optional)
  refreshable: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authLogin(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExchangeableUserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLogout**
> authLogout()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthLogoutRequest = {
  // boolean (optional)
  global: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authLogout(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authResetFulfillment**
> ExchangeableUserResponse authResetFulfillment()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthResetFulfillmentRequest = {
  // string
  password: password_example,
  // string
  resetToken: resetToken_example,
  // boolean (optional)
  refreshable: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authResetFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | [**string**] |  | defaults to undefined
 **resetToken** | [**string**] |  | defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExchangeableUserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authResetRequest**
> authResetRequest()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthResetRequestRequest = {
  // string
  email: email_example,
  // string
  returnUrl: returnUrl_example,
  // boolean (optional)
  requiresElevated: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authResetRequest(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **returnUrl** | [**string**] |  | defaults to undefined
 **requiresElevated** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSetFacility**
> FacilityResponse authSetFacility()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthSetFacilityRequest = {
  // number
  facilityId: 8.14,
  // boolean (optional)
  refreshable: true,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authSetFacility(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facilityId** | [**number**] |  | defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authUpdate**
> UserResponse authUpdate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthUpdateRequest = {
  // string
  password: password_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authUserInit**
> authUserInit()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthUserInitRequest = {
  // string
  email: email_example,
  // string
  returnUrl: returnUrl_example,
  // Date (optional)
  birthday: 2013-10-20T19:20:30+01:00,
  // string (optional)
  gender: gender_example,
  // string (optional)
  language: language_example,
  // number (optional)
  metricHeight: 8.14,
  // number (optional)
  metricWeight: 8.14,
  // string (optional)
  name: name_example,
  // boolean (optional)
  refreshable: true,
  // boolean (optional)
  requiresElevated: true,
  // string (optional)
  units: units_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authUserInit(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **returnUrl** | [**string**] |  | defaults to undefined
 **birthday** | [**Date**] |  | (optional) defaults to undefined
 **gender** | [**string**] | Allowed values: m, f, o | (optional) defaults to undefined
 **language** | [**string**] | Allowed values: af, ar, az, be, bg, ca, cs, cy, da, de, dv, el, en, eo, es, et, eu, fa, fi, fo, fr, gl, gu, he, hi, hr, hu, hy, id, is, it, ja, ka, kk, kn, ko, kok, ky, lt, lv, mi, mk, mn, mr, ms, mt, nb, nl, ns, pa, pl, ps, pt, qu, ro, ru, sa, se, sk, sl, sq, sv, sw, ta, te, th, tl, tn, tr, tt, ts, uk, ur, uz, vi, xh, zh, zu | (optional) defaults to undefined
 **metricHeight** | [**number**] |  | (optional) defaults to undefined
 **metricWeight** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **requiresElevated** | [**boolean**] |  | (optional) defaults to undefined
 **units** | [**string**] | Allowed values: metric, imperial | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authUserInitFulfillment**
> ExchangeableUserResponse authUserInitFulfillment()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthUserInitFulfillmentRequest = {
  // string
  acceptedTermsRevision: acceptedTermsRevision_example,
  // string
  authorizationCode: authorizationCode_example,
  // Date
  birthday: 2013-10-20T19:20:30+01:00,
  // string
  gender: gender_example,
  // string
  name: name_example,
  // string
  password: password_example,
  // string
  units: units_example,
  // string (optional)
  language: language_example,
  // number (optional)
  metricHeight: 8.14,
  // number (optional)
  metricWeight: 8.14,
  // boolean (optional)
  refreshable: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authUserInitFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptedTermsRevision** | [**string**] |  | defaults to undefined
 **authorizationCode** | [**string**] |  | defaults to undefined
 **birthday** | [**Date**] |  | defaults to undefined
 **gender** | [**string**] | Allowed values: m, f, o | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **units** | [**string**] | Allowed values: metric, imperial | defaults to undefined
 **language** | [**string**] | Allowed values: af, ar, az, be, bg, ca, cs, cy, da, de, dv, el, en, eo, es, et, eu, fa, fi, fo, fr, gl, gu, he, hi, hr, hu, hy, id, is, it, ja, ka, kk, kn, ko, kok, ky, lt, lv, mi, mk, mn, mr, ms, mt, nb, nl, ns, pa, pl, ps, pt, qu, ro, ru, sa, se, sk, sl, sq, sv, sw, ta, te, th, tl, tn, tr, tt, ts, uk, ur, uz, vi, xh, zh, zu | (optional) defaults to undefined
 **metricHeight** | [**number**] |  | (optional) defaults to undefined
 **metricWeight** | [**number**] |  | (optional) defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExchangeableUserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authValidateReturnRoute**
> CheckReturnRouteResponse authValidateReturnRoute()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiAuthValidateReturnRouteRequest = {
  // string
  returnUrl: returnUrl_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authValidateReturnRoute(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnUrl** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CheckReturnRouteResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **basicCredentialCreate**
> UserResponse basicCredentialCreate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiBasicCredentialCreateRequest = {
  // string
  email: email_example,
  // string
  password: password_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.basicCredentialCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **basicCredentialUpdate**
> UserResponse basicCredentialUpdate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiBasicCredentialUpdateRequest = {
  // string
  password: password_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.basicCredentialUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailAddressValidationFulfillment**
> EmailAddressResponse emailAddressValidationFulfillment()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiEmailAddressValidationFulfillmentRequest = {
  // string
  validationToken: validationToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.emailAddressValidationFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationToken** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**EmailAddressResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heightMeasurementCreate**
> HeightMeasurementResponse heightMeasurementCreate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiHeightMeasurementCreateRequest = {
  // number
  metricHeight: 8.14,
  // string
  source: source_example,
  // Date
  takenAt: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heightMeasurementCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricHeight** | [**number**] |  | defaults to undefined
 **source** | [**string**] |  | defaults to undefined
 **takenAt** | [**Date**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeightMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthAuthorize**
> OauthResponse oauthAuthorize()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthAuthorizeRequest = {
  // string
  clientIdentifier: clientIdentifier_example,
  // string
  redirectUrl: redirectUrl_example,
  // string
  responseType: responseType_example,
  // string
  state: state_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthAuthorize(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientIdentifier** | [**string**] |  | defaults to undefined
 **redirectUrl** | [**string**] |  | defaults to undefined
 **responseType** | [**string**] | Allowed values: code, token | defaults to undefined
 **state** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OauthResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthDeauthorize**
> oauthDeauthorize()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthDeauthorizeRequest = {
  // string
  accessToken: accessToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthDeauthorize(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthInitiate**
> RedirectResponse oauthInitiate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthInitiateRequest = {
  // string
  redirect: redirect_example,
  // string
  service: service_example,
  // string
  type: type_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthInitiate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect** | [**string**] |  | defaults to undefined
 **service** | [**string**] | Allowed values: google, facebook, apple, strava, trainingpeaks | defaults to undefined
 **type** | [**string**] | Allowed values: login, connect | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**RedirectResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceDelete**
> oauthServiceDelete()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthServiceDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceList**
> OAuthServiceListResponse oauthServiceList()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthServiceListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  service: service_example,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **service** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, service | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuthServiceListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceShow**
> OAuthServiceResponse oauthServiceShow()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthServiceShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuthServiceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceSubscriptionCreate**
> OauthServiceSubscriptionResponse oauthServiceSubscriptionCreate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthServiceSubscriptionCreateRequest = {
  // string
  model: model_example,
  // boolean (optional)
  creation: true,
  // boolean (optional)
  deletion: true,
  // number (optional)
  oauthServiceId: 8.14,
  // boolean (optional)
  updates: true,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceSubscriptionCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**string**] |  | defaults to undefined
 **creation** | [**boolean**] |  | (optional) defaults to undefined
 **deletion** | [**boolean**] |  | (optional) defaults to undefined
 **oauthServiceId** | [**number**] |  | (optional) defaults to undefined
 **updates** | [**boolean**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OauthServiceSubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceSubscriptionDelete**
> oauthServiceSubscriptionDelete()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthServiceSubscriptionDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceSubscriptionDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceSubscriptionList**
> OauthServiceSubscriptionListResponse oauthServiceSubscriptionList()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthServiceSubscriptionListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  authorization: authorization_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  model: model_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  service: service_example,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceSubscriptionList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **model** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **service** | [**string**] | Allowed values: google, facebook, apple, strava, trainingpeaks | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, service, model | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OauthServiceSubscriptionListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceSubscriptionShow**
> OauthServiceSubscriptionResponse oauthServiceSubscriptionShow()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthServiceSubscriptionShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceSubscriptionShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OauthServiceSubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthToken**
> oauthToken()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiOauthTokenRequest = {
  // string
  clientIdentifier: clientIdentifier_example,
  // string
  clientSecret: clientSecret_example,
  // string
  grantType: grantType_example,
  // string (optional)
  authorizationCode: authorizationCode_example,
  // string (optional)
  refreshToken: refreshToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthToken(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientIdentifier** | [**string**] |  | defaults to undefined
 **clientSecret** | [**string**] |  | defaults to undefined
 **grantType** | [**string**] | Allowed values: authorization_code, refresh_token | defaults to undefined
 **authorizationCode** | [**string**] |  | (optional) defaults to undefined
 **refreshToken** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileUpdate**
> ProfileResponse profileUpdate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiProfileUpdateRequest = {
  // Date (optional)
  birthday: 2013-10-20T19:20:30+01:00,
  // string (optional)
  gender: gender_example,
  // string (optional)
  language: language_example,
  // string (optional)
  name: name_example,
  // string (optional)
  units: units_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.profileUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **birthday** | [**Date**] |  | (optional) defaults to undefined
 **gender** | [**string**] | Allowed values: m, f, o | (optional) defaults to undefined
 **language** | [**string**] | Allowed values: af, ar, az, be, bg, ca, cs, cy, da, de, dv, el, en, eo, es, et, eu, fa, fi, fo, fr, gl, gu, he, hi, hr, hu, hy, id, is, it, ja, ka, kk, kn, ko, kok, ky, lt, lv, mi, mk, mn, mr, ms, mt, nb, nl, ns, pa, pl, ps, pt, qu, ro, ru, sa, se, sk, sl, sq, sv, sw, ta, te, th, tl, tn, tr, tt, ts, uk, ur, uz, vi, xh, zh, zu | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **units** | [**string**] | Allowed values: metric, imperial | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProfileResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weightMeasurementCreate**
> WeightMeasurementResponse weightMeasurementCreate()


### Example


```typescript
import { MetricsSSOApi } from '@keiser/metrics-sdk-sso-typescript';
import * as fs from 'fs';

const api = new MetricsSSOApi();

let body:MetricsSSOApiWeightMeasurementCreateRequest = {
  // number
  metricWeight: 8.14,
  // string
  source: source_example,
  // Date
  takenAt: 2013-10-20T19:20:30+01:00,
  // number (optional)
  bodyFatPercentage: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.weightMeasurementCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricWeight** | [**number**] |  | defaults to undefined
 **source** | [**string**] |  | defaults to undefined
 **takenAt** | [**Date**] |  | defaults to undefined
 **bodyFatPercentage** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**WeightMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

