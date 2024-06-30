# PvModelsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPvManufacturerModels**](PvModelsApi.md#getPvManufacturerModels) | **GET** /pv_manufacturers/{pv_manufacturer_id}/pv_models | Returns PV module manufacturers


<a id="getPvManufacturerModels"></a>
# **getPvManufacturerModels**
> GetPvManufacturerModelsResponse getPvManufacturerModels(pvManufacturerId)

Returns PV module manufacturers

Returns information about the PV modules known in Enlighten.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = PvModelsApi()
val pvManufacturerId : kotlin.Int = 56 // kotlin.Int | Pv manufacturer ID.
try {
    val result : GetPvManufacturerModelsResponse = apiInstance.getPvManufacturerModels(pvManufacturerId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PvModelsApi#getPvManufacturerModels")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PvModelsApi#getPvManufacturerModels")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pvManufacturerId** | **kotlin.Int**| Pv manufacturer ID. |

### Return type

[**GetPvManufacturerModelsResponse**](GetPvManufacturerModelsResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

