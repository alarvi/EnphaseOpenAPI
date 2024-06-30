# DeviceLevelProductionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemAcbDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemAcbDeviceTelemetry) | **GET** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB
[**getSystemEnchargeDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemEnchargeDeviceTelemetry) | **GET** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge
[**getSystemMicroDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemMicroDeviceTelemetry) | **GET** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu


<a id="getSystemAcbDeviceTelemetry"></a>
# **getSystemAcbDeviceTelemetry**
> BatteryDeviceTelemetry getSystemAcbDeviceTelemetry(systemId, serialNo, startAt, granularity)

Retrieves telemetry for single ACB

Retrieves telemetry for single ACB. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = DeviceLevelProductionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val serialNo : kotlin.String = serialNo_example // kotlin.String | Serial number of the acb.
val startAt : kotlin.Long = 789 // kotlin.Long | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
val granularity : TelemetryGranularityEnum =  // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
try {
    val result : BatteryDeviceTelemetry = apiInstance.getSystemAcbDeviceTelemetry(systemId, serialNo, startAt, granularity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DeviceLevelProductionMonitoringApi#getSystemAcbDeviceTelemetry")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DeviceLevelProductionMonitoringApi#getSystemAcbDeviceTelemetry")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **serialNo** | **kotlin.String**| Serial number of the acb. |
 **startAt** | **kotlin.Long**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] [enum: 15mins, day, week]

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemEnchargeDeviceTelemetry"></a>
# **getSystemEnchargeDeviceTelemetry**
> BatteryDeviceTelemetry getSystemEnchargeDeviceTelemetry(systemId, serialNo, startAt, granularity)

Retrieves telemetry for single Encharge

Retrieves telemetry for single Encharge. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = DeviceLevelProductionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val serialNo : kotlin.String = serialNo_example // kotlin.String | Serial number of the Encharge.
val startAt : kotlin.Long = 789 // kotlin.Long | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
val granularity : TelemetryGranularityEnum =  // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
try {
    val result : BatteryDeviceTelemetry = apiInstance.getSystemEnchargeDeviceTelemetry(systemId, serialNo, startAt, granularity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DeviceLevelProductionMonitoringApi#getSystemEnchargeDeviceTelemetry")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DeviceLevelProductionMonitoringApi#getSystemEnchargeDeviceTelemetry")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **serialNo** | **kotlin.String**| Serial number of the Encharge. |
 **startAt** | **kotlin.Long**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] [enum: 15mins, day, week]

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemMicroDeviceTelemetry"></a>
# **getSystemMicroDeviceTelemetry**
> GetSystemMicroDeviceTelemetryResponse getSystemMicroDeviceTelemetry(systemId, serialNo, startAt, granularity)

Retrieves telemetry for single micro/pcu

Retrieves telemetry for single micro/pcu. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = DeviceLevelProductionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val serialNo : kotlin.String = serialNo_example // kotlin.String | Serial number of the individual solar Microinverter.
val startAt : kotlin.Long = 789 // kotlin.Long | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
val granularity : TelemetryGranularityEnum =  // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
try {
    val result : GetSystemMicroDeviceTelemetryResponse = apiInstance.getSystemMicroDeviceTelemetry(systemId, serialNo, startAt, granularity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DeviceLevelProductionMonitoringApi#getSystemMicroDeviceTelemetry")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DeviceLevelProductionMonitoringApi#getSystemMicroDeviceTelemetry")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **serialNo** | **kotlin.String**| Serial number of the individual solar Microinverter. |
 **startAt** | **kotlin.Long**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] [enum: 15mins, day, week]

### Return type

[**GetSystemMicroDeviceTelemetryResponse**](GetSystemMicroDeviceTelemetryResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

