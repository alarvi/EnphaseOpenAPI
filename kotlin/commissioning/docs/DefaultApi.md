# DefaultApi

All URIs are relative to *https://api.enphaseenergy.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumptionLifetime**](DefaultApi.md#consumptionLifetime) | **GET** /systems/{system_id}/consumption_lifetime | 
[**consumptionStats**](DefaultApi.md#consumptionStats) | **GET** /systems/{system_id}/consumption_stats | 
[**energyLifetime**](DefaultApi.md#energyLifetime) | **GET** /systems/{system_id}/energy_lifetime | 
[**envoys**](DefaultApi.md#envoys) | **GET** /systems/{system_id}/envoys | 
[**inventory**](DefaultApi.md#inventory) | **GET** /systems/{system_id}/inventory | 
[**invertersSummaryByEnvoyOrSite**](DefaultApi.md#invertersSummaryByEnvoyOrSite) | **GET** /systems/inverters_summary_by_envoy_or_site | 
[**monthlyProduction**](DefaultApi.md#monthlyProduction) | **GET** /systems/{system_id}/monthly_production | 
[**productionMeterReadings**](DefaultApi.md#productionMeterReadings) | **GET** /systems/{system_id}/production_meter_readings | 
[**rgmStats**](DefaultApi.md#rgmStats) | **GET** /systems/{system_id}/rgm_stats | 
[**searchSystemId**](DefaultApi.md#searchSystemId) | **GET** /systems/search_system_id | 
[**stats**](DefaultApi.md#stats) | **GET** /systems/{system_id}/stats | 
[**summary**](DefaultApi.md#summary) | **GET** /systems/{system_id}/summary | 
[**systems**](DefaultApi.md#systems) | **GET** /systems | 


<a id="consumptionLifetime"></a>
# **consumptionLifetime**
> ConsumptionLifetimeResponse consumptionLifetime(systemId, userId, startDate, endDate)



Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns &#x60;204&#x60; - No Content. If you don&#39;t have permission to view consumption data, the response code is &#x60;401&#x60;.  The time series includes one entry for each day from the &#x60;start_date&#x60; to the &#x60;end_date&#x60;. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system&#39;s status in the &#x60;meta&#x60; attribute of the response to determine when the system last reported and whether it has communication or metering problems.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val startDate : java.time.LocalDate = Fri Jul 01 02:00:00 CEST 2016 // java.time.LocalDate | The date on which to start the time series. Defaults to the system's operational date.
val endDate : java.time.LocalDate = Sun Jul 31 02:00:00 CEST 2016 // java.time.LocalDate | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
try {
    val result : ConsumptionLifetimeResponse = apiInstance.consumptionLifetime(systemId, userId, startDate, endDate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#consumptionLifetime")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#consumptionLifetime")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |
 **startDate** | **java.time.LocalDate**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional]
 **endDate** | **java.time.LocalDate**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional]

### Return type

[**ConsumptionLifetimeResponse**](ConsumptionLifetimeResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="consumptionStats"></a>
# **consumptionStats**
> ConsumptionStatsResponse consumptionStats(systemId, userId, startAt, endAt)



Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn&#39;t have any consumption meters installed, the response includes an empty intervals array.  If you don&#39;t have permission to view consumption data, the response code is &#x60;401&#x60;.  Under some conditions, data for a given period may be temporarily unavailable.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val startAt : kotlin.Long = 1448946000 // kotlin.Long | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
val endAt : kotlin.Long = 1449011615 // kotlin.Long | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
try {
    val result : ConsumptionStatsResponse = apiInstance.consumptionStats(systemId, userId, startAt, endAt)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#consumptionStats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#consumptionStats")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |
 **startAt** | **kotlin.Long**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional]
 **endAt** | **kotlin.Long**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional]

### Return type

[**ConsumptionStatsResponse**](ConsumptionStatsResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="energyLifetime"></a>
# **energyLifetime**
> EnergyLifetimeResponse energyLifetime(systemId, userId, startDate, endDate, production)



Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the &#x60;start_date&#x60; to the &#x60;end_date&#x60;. There are no gaps in the time series. If the response includes trailing zeroes, such as &#x60;[909, 4970, 0, 0, 0]&#x60;, then no energy has been reported for the last days in the series. You can check the system&#39;s status in the &#x60;meta&#x60; attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \&quot;merged time series\&quot;. In addition, the response includes the attribute &#x60;meter_start_date&#x60;, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter &#x60;production&#x3D;all&#x60; to the request.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val startDate : java.time.LocalDate = Tue Jan 01 01:00:00 CET 2013 // java.time.LocalDate | The date on which to start the time series. Defaults to the system's operational date.
val endDate : java.time.LocalDate = Sun Jan 06 01:00:00 CET 2013 // java.time.LocalDate | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
val production : kotlin.String = all // kotlin.String | When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored.
try {
    val result : EnergyLifetimeResponse = apiInstance.energyLifetime(systemId, userId, startDate, endDate, production)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#energyLifetime")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#energyLifetime")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |
 **startDate** | **java.time.LocalDate**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional]
 **endDate** | **java.time.LocalDate**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional]
 **production** | **kotlin.String**| When &#x60;all&#x60;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | [optional] [enum: all]

### Return type

[**EnergyLifetimeResponse**](EnergyLifetimeResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="envoys"></a>
# **envoys**
> EnvoysResponse envoys(systemId, userId)



Returns a listing of all active Envoys currently deployed on the system.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
try {
    val result : EnvoysResponse = apiInstance.envoys(systemId, userId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#envoys")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#envoys")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |

### Return type

[**EnvoysResponse**](EnvoysResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="inventory"></a>
# **inventory**
> InventoryResponse inventory(systemId, userId)



Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \&quot;Active\&quot; does not imply that the device is currently reporting, producing, or measuring energy.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
try {
    val result : InventoryResponse = apiInstance.inventory(systemId, userId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#inventory")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#inventory")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |

### Return type

[**InventoryResponse**](InventoryResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="invertersSummaryByEnvoyOrSite"></a>
# **invertersSummaryByEnvoyOrSite**
> kotlin.collections.List&lt;InvertersSummaryByEnvoyOrSiteResponse&gt; invertersSummaryByEnvoyOrSite(userId, siteId)



Returns the summary along with the energy produced on the system over its lifetime.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val siteId : kotlin.Int = 66 // kotlin.Int | The identifier of the system.
try {
    val result : kotlin.collections.List<InvertersSummaryByEnvoyOrSiteResponse> = apiInstance.invertersSummaryByEnvoyOrSite(userId, siteId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#invertersSummaryByEnvoyOrSite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#invertersSummaryByEnvoyOrSite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **siteId** | **kotlin.Int**| The identifier of the system. |

### Return type

[**kotlin.collections.List&lt;InvertersSummaryByEnvoyOrSiteResponse&gt;**](InvertersSummaryByEnvoyOrSiteResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="monthlyProduction"></a>
# **monthlyProduction**
> MonthlyProductionResponse monthlyProduction(systemId, userId, startDate)



This endpoint is deprecated and will be removed in a future release. Use &#x60;production_meter_readings&#x60; or &#x60;energy_lifetime&#x60; instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val startDate : java.time.LocalDate = Fri Jul 01 02:00:00 CEST 2011 // java.time.LocalDate | Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end date is the last day of that month.
try {
    val result : MonthlyProductionResponse = apiInstance.monthlyProduction(systemId, userId, startDate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#monthlyProduction")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#monthlyProduction")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |
 **startDate** | **java.time.LocalDate**| Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a &#x60;start_date&#x60; of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end date is the last day of that month. |

### Return type

[**MonthlyProductionResponse**](MonthlyProductionResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="productionMeterReadings"></a>
# **productionMeterReadings**
> ProductionMeterReadingsResponse productionMeterReadings(systemId, userId, endAt)



Returns the last known \&quot;odometer\&quot; reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. &#x60;read_at&#x60; is the time at which the reading was taken, and is always less than or equal to the requested &#x60;end_at&#x60;. Commonly, the reading will be within 30 minutes of the requested &#x60;end_at&#x60;; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when &#x60;end_at&#x60; is close to the current time. Meters that have been retired from a system will show an &#x60;end_at&#x60; that doesn&#39;t change, and that eventually is far away from the current time.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val endAt : kotlin.Long = 1473901755 // kotlin.Long | 
try {
    val result : ProductionMeterReadingsResponse = apiInstance.productionMeterReadings(systemId, userId, endAt)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#productionMeterReadings")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#productionMeterReadings")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |
 **endAt** | **kotlin.Long**|  | [optional]

### Return type

[**ProductionMeterReadingsResponse**](ProductionMeterReadingsResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="rgmStats"></a>
# **rgmStats**
> RgmStatsResponse rgmStats(systemId, userId, startAt, endAt)



Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn&#39;t have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val startAt : kotlin.Long = 1381474800 // kotlin.Long | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
val endAt : kotlin.Long = 1381561200 // kotlin.Long | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
try {
    val result : RgmStatsResponse = apiInstance.rgmStats(systemId, userId, startAt, endAt)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#rgmStats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#rgmStats")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |
 **startAt** | **kotlin.Long**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional]
 **endAt** | **kotlin.Long**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional]

### Return type

[**RgmStatsResponse**](RgmStatsResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="searchSystemId"></a>
# **searchSystemId**
> SearchSystemIdResponse searchSystemId(userId, serialNum)



Get system ID by envoy serial number.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val serialNum : kotlin.String = 23435345345 // kotlin.String | Serial number of the envoy.
try {
    val result : SearchSystemIdResponse = apiInstance.searchSystemId(userId, serialNum)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#searchSystemId")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#searchSystemId")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **serialNum** | **kotlin.String**| Serial number of the envoy. |

### Return type

[**SearchSystemIdResponse**](SearchSystemIdResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="stats"></a>
# **stats**
> StatsResponse stats(systemId, userId, startAt, endAt)



Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the system in question. Examples include asking for stats starting at a time that is later than the system&#39;s last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is &#x60;422&#x60; and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn&#39;t have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val startAt : kotlin.Long = 1381496100 // kotlin.Long | Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`.
val endAt : kotlin.Long = 1381497600 // kotlin.Long | End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval.
try {
    val result : StatsResponse = apiInstance.stats(systemId, userId, startAt, endAt)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#stats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#stats")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |
 **startAt** | **kotlin.Long**| Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the &#x60;operational_date&#x60;. | [optional]
 **endAt** | **kotlin.Long**| End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. | [optional]

### Return type

[**StatsResponse**](StatsResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="summary"></a>
# **summary**
> SummaryResponse summary(systemId, userId, summaryDate)



Returns summary information for the specified system.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val systemId : kotlin.Int = 66 // kotlin.Int | 
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val summaryDate : java.time.LocalDate = Fri Sep 17 02:00:00 CEST 2010 // java.time.LocalDate | Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status.
try {
    val result : SummaryResponse = apiInstance.summary(systemId, userId, summaryDate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#summary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#summary")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**|  |
 **userId** | **kotlin.String**|  |
 **summaryDate** | **java.time.LocalDate**| Start of reporting period. If no &#x60;summary_date&#x60; is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and &#x60;422&#x60; status. | [optional]

### Return type

[**SummaryResponse**](SummaryResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="systems"></a>
# **systems**
> SystemsResponse systems(userId, next, limit, systemId, systemId2, systemName, systemName2, status, status2, reference, reference2, installer, installer2, connectionType, connectionType2)



Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the &#x60;next&#x60; attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.

### Example
```kotlin
// Import classes:
//import enlighten.infrastructure.*
//import enlighten.models.*

val apiInstance = DefaultApi()
val userId : kotlin.String = 4d6a51330a // kotlin.String | 
val next : kotlin.String = 4d5467784d5445770a // kotlin.String | 
val limit : kotlin.Int = 100 // kotlin.Int | 
val systemId : kotlin.Int = 67 // kotlin.Int | 
val systemId2 : kotlin.collections.List<kotlin.Int> = [67] // kotlin.collections.List<kotlin.Int> | 
val systemName : kotlin.String = Green // kotlin.String | 
val systemName2 : kotlin.collections.List<kotlin.String> = ["Green"] // kotlin.collections.List<kotlin.String> | 
val status : Status = power // Status | 
val status2 : kotlin.collections.List<Status> = ["comm","micro"] // kotlin.collections.List<Status> | 
val reference : kotlin.String = reference_example // kotlin.String | 
val reference2 : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
val installer : kotlin.String = installer_example // kotlin.String | 
val installer2 : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
val connectionType : ConnectionType =  // ConnectionType | 
val connectionType2 : kotlin.collections.List<ConnectionType> = ["ethernet"] // kotlin.collections.List<ConnectionType> | 
try {
    val result : SystemsResponse = apiInstance.systems(userId, next, limit, systemId, systemId2, systemName, systemName2, status, status2, reference, reference2, installer, installer2, connectionType, connectionType2)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#systems")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#systems")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **next** | **kotlin.String**|  | [optional]
 **limit** | **kotlin.Int**|  | [optional] [default to 100]
 **systemId** | **kotlin.Int**|  | [optional]
 **systemId2** | [**kotlin.collections.List&lt;kotlin.Int&gt;**](kotlin.Int.md)|  | [optional]
 **systemName** | **kotlin.String**|  | [optional]
 **systemName2** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional]
 **status** | [**Status**](.md)|  | [optional] [enum: comm, power, meter, meter_issue, micro, battery, storage_idle, normal]
 **status2** | [**kotlin.collections.List&lt;Status&gt;**](Status.md)|  | [optional]
 **reference** | **kotlin.String**|  | [optional]
 **reference2** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional]
 **installer** | **kotlin.String**|  | [optional]
 **installer2** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional]
 **connectionType** | [**ConnectionType**](.md)|  | [optional] [enum: ethernet, cellular, wifi]
 **connectionType2** | [**kotlin.collections.List&lt;ConnectionType&gt;**](ConnectionType.md)|  | [optional]

### Return type

[**SystemsResponse**](SystemsResponse.md)

### Authorization


Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

