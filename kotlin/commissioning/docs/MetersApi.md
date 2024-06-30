# MetersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemMeter**](MetersApi.md#getSystemMeter) | **GET** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail.
[**setActivationMeterStatus**](MetersApi.md#setActivationMeterStatus) | **POST** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters.
[**updateSystemMeter**](MetersApi.md#updateSystemMeter) | **PUT** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number.


<a id="getSystemMeter"></a>
# **getSystemMeter**
> GetSystemMeterResponse getSystemMeter(systemId, serialNumber)

Returns the requested meter detail.

Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = MetersApi()
val systemId : kotlin.Int = 56 // kotlin.Int | System ID.
val serialNumber : kotlin.String = serialNumber_example // kotlin.String | Meter serial number.
try {
    val result : GetSystemMeterResponse = apiInstance.getSystemMeter(systemId, serialNumber)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MetersApi#getSystemMeter")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MetersApi#getSystemMeter")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| System ID. |
 **serialNumber** | **kotlin.String**| Meter serial number. |

### Return type

[**GetSystemMeterResponse**](GetSystemMeterResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="setActivationMeterStatus"></a>
# **setActivationMeterStatus**
> SetActivationMeterStatusResponse setActivationMeterStatus(activationId, serialNumber, params)

Enable or Disable the meters.

Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = MetersApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Activation ID.
val serialNumber : kotlin.String = serialNumber_example // kotlin.String | Meter serial number.
val params : SetActivationMeterStatusRequest =  // SetActivationMeterStatusRequest | 
try {
    val result : SetActivationMeterStatusResponse = apiInstance.setActivationMeterStatus(activationId, serialNumber, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MetersApi#setActivationMeterStatus")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MetersApi#setActivationMeterStatus")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Activation ID. |
 **serialNumber** | **kotlin.String**| Meter serial number. |
 **params** | [**SetActivationMeterStatusRequest**](SetActivationMeterStatusRequest.md)|  | [optional]

### Return type

[**SetActivationMeterStatusResponse**](SetActivationMeterStatusResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="updateSystemMeter"></a>
# **updateSystemMeter**
> UpdateSystemMeterResponse updateSystemMeter(systemId, serialNumber, operationalDate)

Update the operational date of a meter by serial number.

Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = MetersApi()
val systemId : kotlin.Int = 56 // kotlin.Int | System ID.
val serialNumber : kotlin.String = serialNumber_example // kotlin.String | Meter serial number.
val operationalDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | Operational date in the following format YYYY-MM-DD.
try {
    val result : UpdateSystemMeterResponse = apiInstance.updateSystemMeter(systemId, serialNumber, operationalDate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MetersApi#updateSystemMeter")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MetersApi#updateSystemMeter")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| System ID. |
 **serialNumber** | **kotlin.String**| Meter serial number. |
 **operationalDate** | **java.time.LocalDate**| Operational date in the following format YYYY-MM-DD. | [optional]

### Return type

[**UpdateSystemMeterResponse**](UpdateSystemMeterResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

