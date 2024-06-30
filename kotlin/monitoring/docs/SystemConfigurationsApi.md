# SystemConfigurationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemBatterySettings**](SystemConfigurationsApi.md#getSystemBatterySettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system
[**getSystemGridStatusSettings**](SystemConfigurationsApi.md#getSystemGridStatusSettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status of a system.
[**getSystemLoadControlSettings**](SystemConfigurationsApi.md#getSystemLoadControlSettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system
[**getSystemStormGuardSettings**](SystemConfigurationsApi.md#getSystemStormGuardSettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system
[**updateSystemBatterySettings**](SystemConfigurationsApi.md#updateSystemBatterySettings) | **PUT** /systems/config/{system_id}/battery_settings | Updates the current battery settings of a system
[**updateSystemLoadControlSettings**](SystemConfigurationsApi.md#updateSystemLoadControlSettings) | **PUT** /systems/config/{system_id}/load_control | Updates the current load control settings of a system
[**updateSystemStormGuardSettings**](SystemConfigurationsApi.md#updateSystemStormGuardSettings) | **PUT** /systems/config/{system_id}/storm_guard | Updates the current storm guard settings of a system


<a id="getSystemBatterySettings"></a>
# **getSystemBatterySettings**
> BatterySettings getSystemBatterySettings(systemId)

Returns the current battery settings of a system

Returns the current battery settings of a system.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemConfigurationsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
try {
    val result : BatterySettings = apiInstance.getSystemBatterySettings(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemConfigurationsApi#getSystemBatterySettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemConfigurationsApi#getSystemBatterySettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |

### Return type

[**BatterySettings**](BatterySettings.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemGridStatusSettings"></a>
# **getSystemGridStatusSettings**
> GetSystemGridStatusSettingsResponse getSystemGridStatusSettings(systemId)

Returns the current grid status of a system.

Returns the current grid status of a system. Please note that the status returned in the response is not real-time and is updated only after the IQ Gateway sends a new report to the Enphase cloud.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemConfigurationsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
try {
    val result : GetSystemGridStatusSettingsResponse = apiInstance.getSystemGridStatusSettings(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemConfigurationsApi#getSystemGridStatusSettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemConfigurationsApi#getSystemGridStatusSettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |

### Return type

[**GetSystemGridStatusSettingsResponse**](GetSystemGridStatusSettingsResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemLoadControlSettings"></a>
# **getSystemLoadControlSettings**
> LoadControlSettings getSystemLoadControlSettings(systemId)

Returns the current load control settings of a system

Returns the current load control settings of a system.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemConfigurationsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
try {
    val result : LoadControlSettings = apiInstance.getSystemLoadControlSettings(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemConfigurationsApi#getSystemLoadControlSettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemConfigurationsApi#getSystemLoadControlSettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |

### Return type

[**LoadControlSettings**](LoadControlSettings.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemStormGuardSettings"></a>
# **getSystemStormGuardSettings**
> StormGuardSettings getSystemStormGuardSettings(systemId)

Returns the current storm guard settings of a system

Returns the current storm guard settings of a system.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemConfigurationsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
try {
    val result : StormGuardSettings = apiInstance.getSystemStormGuardSettings(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemConfigurationsApi#getSystemStormGuardSettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemConfigurationsApi#getSystemStormGuardSettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |

### Return type

[**StormGuardSettings**](StormGuardSettings.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateSystemBatterySettings"></a>
# **updateSystemBatterySettings**
> BatterySettings updateSystemBatterySettings(systemId, batterySettings)

Updates the current battery settings of a system

Updates the current battery settings of a system.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemConfigurationsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val batterySettings : UpdateSystemBatterySettingsRequest =  // UpdateSystemBatterySettingsRequest | 
try {
    val result : BatterySettings = apiInstance.updateSystemBatterySettings(systemId, batterySettings)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemConfigurationsApi#updateSystemBatterySettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemConfigurationsApi#updateSystemBatterySettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **batterySettings** | [**UpdateSystemBatterySettingsRequest**](UpdateSystemBatterySettingsRequest.md)|  | [optional]

### Return type

[**BatterySettings**](BatterySettings.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="updateSystemLoadControlSettings"></a>
# **updateSystemLoadControlSettings**
> LoadControlSettings updateSystemLoadControlSettings(systemId, updateSystemLoadControlSettingsRequest)

Updates the current load control settings of a system

Updates the current load control settings of a system.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemConfigurationsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val updateSystemLoadControlSettingsRequest : UpdateSystemLoadControlSettingsRequest =  // UpdateSystemLoadControlSettingsRequest | 
try {
    val result : LoadControlSettings = apiInstance.updateSystemLoadControlSettings(systemId, updateSystemLoadControlSettingsRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemConfigurationsApi#updateSystemLoadControlSettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemConfigurationsApi#updateSystemLoadControlSettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **updateSystemLoadControlSettingsRequest** | [**UpdateSystemLoadControlSettingsRequest**](UpdateSystemLoadControlSettingsRequest.md)|  | [optional]

### Return type

[**LoadControlSettings**](LoadControlSettings.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="updateSystemStormGuardSettings"></a>
# **updateSystemStormGuardSettings**
> StormGuardSettings updateSystemStormGuardSettings(systemId, stormGuard)

Updates the current storm guard settings of a system

Updates the current storm guard status of a system.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemConfigurationsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val stormGuard : UpdateSystemStormGuardSettingsRequest =  // UpdateSystemStormGuardSettingsRequest | 
try {
    val result : StormGuardSettings = apiInstance.updateSystemStormGuardSettings(systemId, stormGuard)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemConfigurationsApi#updateSystemStormGuardSettings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemConfigurationsApi#updateSystemStormGuardSettings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **stormGuard** | [**UpdateSystemStormGuardSettingsRequest**](UpdateSystemStormGuardSettingsRequest.md)|  | [optional]

### Return type

[**StormGuardSettings**](StormGuardSettings.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

