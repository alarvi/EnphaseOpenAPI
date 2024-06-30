# EstimateApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivationEstimate**](EstimateApi.md#getActivationEstimate) | **GET** /activations/{activation_id}/estimate | Returns the estimate for this system.
[**updateActivationEstimate**](EstimateApi.md#updateActivationEstimate) | **PUT** /activations/{activation_id}/estimate | Update the estimate for this system.


<a id="getActivationEstimate"></a>
# **getActivationEstimate**
> SystemEstimate getActivationEstimate(activationId)

Returns the estimate for this system.

Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = EstimateApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Activation ID.
try {
    val result : SystemEstimate = apiInstance.getActivationEstimate(activationId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling EstimateApi#getActivationEstimate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling EstimateApi#getActivationEstimate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Activation ID. |

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateActivationEstimate"></a>
# **updateActivationEstimate**
> SystemEstimate updateActivationEstimate(activationId, params)

Update the estimate for this system.

Updates the estimate for this system.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = EstimateApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Activation ID.
val params : UpdateActivationEstimateRequest =  // UpdateActivationEstimateRequest | 
try {
    val result : SystemEstimate = apiInstance.updateActivationEstimate(activationId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling EstimateApi#updateActivationEstimate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling EstimateApi#updateActivationEstimate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Activation ID. |
 **params** | [**UpdateActivationEstimateRequest**](UpdateActivationEstimateRequest.md)|  | [optional]

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

