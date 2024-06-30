# StreamingApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streamSystemLiveData**](StreamingApi.md#streamSystemLiveData) | **GET** /systems/{system_id}/live_data | Site Level Live Status


<a id="streamSystemLiveData"></a>
# **streamSystemLiveData**
> StreamSystemLiveDataResponse streamSystemLiveData(systemId, duration)

Site Level Live Status

API users can get real time live status data on demand for a given system. User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator. Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge. User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing &#39;duration&#39; as a header parameter with a minimum value of 30 and maximum value of 300.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = StreamingApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val duration : kotlin.Int = 56 // kotlin.Int | Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30.
try {
    val result : StreamSystemLiveDataResponse = apiInstance.streamSystemLiveData(systemId, duration)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling StreamingApi#streamSystemLiveData")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling StreamingApi#streamSystemLiveData")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **duration** | **kotlin.Int**| Duration of the stream in seconds. Default&#x3D;30, Min&#x3D;30, Max&#x3D;300, e.g&#x3D;30. | [optional]

### Return type

[**StreamSystemLiveDataResponse**](StreamSystemLiveDataResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

