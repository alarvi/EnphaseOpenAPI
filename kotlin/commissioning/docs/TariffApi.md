# TariffApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemTariffSettings**](TariffApi.md#getSystemTariffSettings) | **GET** /systems/config/{system_id}/tariff | Get tariff for a system
[**updateSystemTariffSettings**](TariffApi.md#updateSystemTariffSettings) | **PUT** /systems/config/{system_id}/tariff | Update tariff for a system


<a id="getSystemTariffSettings"></a>
# **getSystemTariffSettings**
> TariffSettings getSystemTariffSettings(systemId)

Get tariff for a system

Get tariff for a system.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = TariffApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
try {
    val result : TariffSettings = apiInstance.getSystemTariffSettings(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TariffApi#getSystemTariffSettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TariffApi#getSystemTariffSettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |

### Return type

[**TariffSettings**](TariffSettings.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateSystemTariffSettings"></a>
# **updateSystemTariffSettings**
> UpdateSystemTariffSettingsResponse updateSystemTariffSettings(systemId, params)

Update tariff for a system

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = TariffApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val params : TariffSettings =  // TariffSettings | 
try {
    val result : UpdateSystemTariffSettingsResponse = apiInstance.updateSystemTariffSettings(systemId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TariffApi#updateSystemTariffSettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TariffApi#updateSystemTariffSettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **params** | **TariffSettings**|  | [optional]

### Return type

[**UpdateSystemTariffSettingsResponse**](UpdateSystemTariffSettingsResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

