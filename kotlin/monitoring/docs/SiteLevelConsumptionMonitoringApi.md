# SiteLevelConsumptionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemBatteryLifetime**](SiteLevelConsumptionMonitoringApi.md#getSystemBatteryLifetime) | **GET** /systems/{system_id}/battery_lifetime | battery_lifetime
[**getSystemBatteryTelemetry**](SiteLevelConsumptionMonitoringApi.md#getSystemBatteryTelemetry) | **GET** /systems/{system_id}/telemetry/battery | Retrieves telemetry for all batteries for a system
[**getSystemConsumptionLifetime**](SiteLevelConsumptionMonitoringApi.md#getSystemConsumptionLifetime) | **GET** /systems/{system_id}/consumption_lifetime | consumption_lifetime
[**getSystemConsumptionMeterTelemetry**](SiteLevelConsumptionMonitoringApi.md#getSystemConsumptionMeterTelemetry) | **GET** /systems/{system_id}/telemetry/consumption_meter | Retrieves telemetry for all consumption meters for a system
[**getSystemEnergyExportLifetime**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyExportLifetime) | **GET** /systems/{system_id}/energy_export_lifetime | export_lifetime
[**getSystemEnergyExportTelemetry**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyExportTelemetry) | **GET** /systems/{system_id}/energy_export_telemetry | Retrieves energy exported to grid in regular intervals
[**getSystemEnergyImportLifetime**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyImportLifetime) | **GET** /systems/{system_id}/energy_import_lifetime | import_lifetime
[**getSystemEnergyImportTelemetry**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyImportTelemetry) | **GET** /systems/{system_id}/energy_import_telemetry | Retrieves energy imported from grid in regular intervals


<a id="getSystemBatteryLifetime"></a>
# **getSystemBatteryLifetime**
> GetSystemBatteryLifetimeResponse getSystemBatteryLifetime(systemId, startDate, endDate)

battery_lifetime

Returns a daily time series of energy charged into the batteries and energy discharged from the batteries for a system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been charged/discharged for the last days in the series.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SiteLevelConsumptionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val startDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.
val endDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.
try {
    val result : GetSystemBatteryLifetimeResponse = apiInstance.getSystemBatteryLifetime(systemId, startDate, endDate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLevelConsumptionMonitoringApi#getSystemBatteryLifetime")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLevelConsumptionMonitoringApi#getSystemBatteryLifetime")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **startDate** | **java.time.LocalDate**| Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]
 **endDate** | **java.time.LocalDate**| End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]

### Return type

[**GetSystemBatteryLifetimeResponse**](GetSystemBatteryLifetimeResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemBatteryTelemetry"></a>
# **getSystemBatteryTelemetry**
> GetSystemBatteryTelemetryResponse getSystemBatteryTelemetry(systemId, startAt, granularity)

Retrieves telemetry for all batteries for a system

Retrieves telemetry for all the batteries of a system. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SiteLevelConsumptionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val startAt : kotlin.Long = 789 // kotlin.Long | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
val granularity : TelemetryGranularityEnum =  // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
try {
    val result : GetSystemBatteryTelemetryResponse = apiInstance.getSystemBatteryTelemetry(systemId, startAt, granularity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLevelConsumptionMonitoringApi#getSystemBatteryTelemetry")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLevelConsumptionMonitoringApi#getSystemBatteryTelemetry")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **startAt** | **kotlin.Long**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] [enum: 15mins, day, week]

### Return type

[**GetSystemBatteryTelemetryResponse**](GetSystemBatteryTelemetryResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemConsumptionLifetime"></a>
# **getSystemConsumptionLifetime**
> GetSystemConsumptionLifetimeResponse getSystemConsumptionLifetime(systemId, startDate, endDate)

consumption_lifetime

Returns a daily time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last three days.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SiteLevelConsumptionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val startDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.
val endDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.
try {
    val result : GetSystemConsumptionLifetimeResponse = apiInstance.getSystemConsumptionLifetime(systemId, startDate, endDate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLevelConsumptionMonitoringApi#getSystemConsumptionLifetime")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLevelConsumptionMonitoringApi#getSystemConsumptionLifetime")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **startDate** | **java.time.LocalDate**| Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]
 **endDate** | **java.time.LocalDate**| End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]

### Return type

[**GetSystemConsumptionLifetimeResponse**](GetSystemConsumptionLifetimeResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemConsumptionMeterTelemetry"></a>
# **getSystemConsumptionMeterTelemetry**
> GetSystemConsumptionMeterTelemetryResponse getSystemConsumptionMeterTelemetry(systemId, startAt, granularity)

Retrieves telemetry for all consumption meters for a system

Retrieves telemetry for all the consumption meters of a system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SiteLevelConsumptionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val startAt : kotlin.Long = 789 // kotlin.Long | Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
val granularity : TelemetryGranularityEnum =  // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
try {
    val result : GetSystemConsumptionMeterTelemetryResponse = apiInstance.getSystemConsumptionMeterTelemetry(systemId, startAt, granularity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLevelConsumptionMonitoringApi#getSystemConsumptionMeterTelemetry")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLevelConsumptionMonitoringApi#getSystemConsumptionMeterTelemetry")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **startAt** | **kotlin.Long**| Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] [enum: 15mins, day, week]

### Return type

[**GetSystemConsumptionMeterTelemetryResponse**](GetSystemConsumptionMeterTelemetryResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemEnergyExportLifetime"></a>
# **getSystemEnergyExportLifetime**
> GetSystemEnergyExportLifetimeResponse getSystemEnergyExportLifetime(systemId, startDate, endDate)

export_lifetime

Returns a daily time series of energy exported to the grid by the system over its lifetime. All measurements are in Watt-hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been exported for the last days in the series.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SiteLevelConsumptionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val startDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.
val endDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.
try {
    val result : GetSystemEnergyExportLifetimeResponse = apiInstance.getSystemEnergyExportLifetime(systemId, startDate, endDate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLevelConsumptionMonitoringApi#getSystemEnergyExportLifetime")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLevelConsumptionMonitoringApi#getSystemEnergyExportLifetime")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **startDate** | **java.time.LocalDate**| Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]
 **endDate** | **java.time.LocalDate**| End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]

### Return type

[**GetSystemEnergyExportLifetimeResponse**](GetSystemEnergyExportLifetimeResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemEnergyExportTelemetry"></a>
# **getSystemEnergyExportTelemetry**
> GetSystemEnergyExportTelemetryResponse getSystemEnergyExportTelemetry(systemId, startAt, granularity)

Retrieves energy exported to grid in regular intervals

Retrieves energy exported to grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SiteLevelConsumptionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val startAt : kotlin.Long = 789 // kotlin.Long | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
val granularity : TelemetryGranularityEnum =  // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
try {
    val result : GetSystemEnergyExportTelemetryResponse = apiInstance.getSystemEnergyExportTelemetry(systemId, startAt, granularity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLevelConsumptionMonitoringApi#getSystemEnergyExportTelemetry")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLevelConsumptionMonitoringApi#getSystemEnergyExportTelemetry")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **startAt** | **kotlin.Long**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] [enum: 15mins, day, week]

### Return type

[**GetSystemEnergyExportTelemetryResponse**](GetSystemEnergyExportTelemetryResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemEnergyImportLifetime"></a>
# **getSystemEnergyImportLifetime**
> GetSystemEnergyImportLifetimeResponse getSystemEnergyImportLifetime(systemId, startDate, endDate)

import_lifetime

Returns a daily time series of energy imported to the grid by the system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been imported for the last days in the series.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SiteLevelConsumptionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val startDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.
val endDate : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.
try {
    val result : GetSystemEnergyImportLifetimeResponse = apiInstance.getSystemEnergyImportLifetime(systemId, startDate, endDate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLevelConsumptionMonitoringApi#getSystemEnergyImportLifetime")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLevelConsumptionMonitoringApi#getSystemEnergyImportLifetime")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **startDate** | **java.time.LocalDate**| Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]
 **endDate** | **java.time.LocalDate**| End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]

### Return type

[**GetSystemEnergyImportLifetimeResponse**](GetSystemEnergyImportLifetimeResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemEnergyImportTelemetry"></a>
# **getSystemEnergyImportTelemetry**
> GetSystemEnergyImportTelemetryResponse getSystemEnergyImportTelemetry(systemId, startAt, granularity)

Retrieves energy imported from grid in regular intervals

Retrieves energy imported from grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SiteLevelConsumptionMonitoringApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
val startAt : kotlin.Long = 789 // kotlin.Long | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
val granularity : TelemetryGranularityEnum =  // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
try {
    val result : GetSystemEnergyImportTelemetryResponse = apiInstance.getSystemEnergyImportTelemetry(systemId, startAt, granularity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLevelConsumptionMonitoringApi#getSystemEnergyImportTelemetry")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLevelConsumptionMonitoringApi#getSystemEnergyImportTelemetry")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |
 **startAt** | **kotlin.Long**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] [enum: 15mins, day, week]

### Return type

[**GetSystemEnergyImportTelemetryResponse**](GetSystemEnergyImportTelemetryResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

