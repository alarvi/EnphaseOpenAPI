# SystemDetailsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvertersSummaryByEnvoyOrSite**](SystemDetailsApi.md#getInvertersSummaryByEnvoyOrSite) | **GET** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site
[**getSystem**](SystemDetailsApi.md#getSystem) | **GET** /systems/{system_id} | Retrieves a System by ID
[**getSystemDevices**](SystemDetailsApi.md#getSystemDevices) | **GET** /systems/{system_id}/devices | Retrieves devices for a given system
[**getSystemSummary**](SystemDetailsApi.md#getSystemSummary) | **GET** /systems/{system_id}/summary | Retrieves a system summary
[**getSystems**](SystemDetailsApi.md#getSystems) | **GET** /systems | Fetch systems
[**retrieveSystemId**](SystemDetailsApi.md#retrieveSystemId) | **GET** /systems/retrieve_system_id | Retrieve system for a given envoy serial number
[**searchSystems**](SystemDetailsApi.md#searchSystems) | **POST** /systems/search | Search and filter systems


<a id="getInvertersSummaryByEnvoyOrSite"></a>
# **getInvertersSummaryByEnvoyOrSite**
> kotlin.collections.List&lt;GetInvertersSummaryByEnvoyOrSiteResponseInner&gt; getInvertersSummaryByEnvoyOrSite(siteId, envoySerialNumber)

inverters_summary_by_envoy_or_site

Returns the microinverters summary based on the specified active envoy serial number or system.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemDetailsApi()
val siteId : kotlin.Int = 56 // kotlin.Int | Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site.
val envoySerialNumber : kotlin.String = envoySerialNumber_example // kotlin.String | Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response.
try {
    val result : kotlin.collections.List<GetInvertersSummaryByEnvoyOrSiteResponseInner> = apiInstance.getInvertersSummaryByEnvoyOrSite(siteId, envoySerialNumber)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemDetailsApi#getInvertersSummaryByEnvoyOrSite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemDetailsApi#getInvertersSummaryByEnvoyOrSite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **kotlin.Int**| Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site. | [optional]
 **envoySerialNumber** | **kotlin.String**| Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response. | [optional]

### Return type

[**kotlin.collections.List&lt;GetInvertersSummaryByEnvoyOrSiteResponseInner&gt;**](GetInvertersSummaryByEnvoyOrSiteResponseInner.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystem"></a>
# **getSystem**
> SystemDetails getSystem(systemId)

Retrieves a System by ID

Retrieves a system by ID.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemDetailsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
try {
    val result : SystemDetails = apiInstance.getSystem(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemDetailsApi#getSystem")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemDetailsApi#getSystem")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |

### Return type

[**SystemDetails**](SystemDetails.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemDevices"></a>
# **getSystemDevices**
> GetSystemDevicesResponse getSystemDevices(systemId)

Retrieves devices for a given system

Retrieves devices for a given system. Only devices that are active will be returned in the response.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemDetailsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
try {
    val result : GetSystemDevicesResponse = apiInstance.getSystemDevices(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemDetailsApi#getSystemDevices")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemDetailsApi#getSystemDevices")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |

### Return type

[**GetSystemDevicesResponse**](GetSystemDevicesResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemSummary"></a>
# **getSystemSummary**
> GetSystemSummaryResponse getSystemSummary(systemId)

Retrieves a system summary

Returns system summary based on the specified system ID.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemDetailsApi()
val systemId : kotlin.Int = 56 // kotlin.Int | Unique numeric ID of the system.
try {
    val result : GetSystemSummaryResponse = apiInstance.getSystemSummary(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemDetailsApi#getSystemSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemDetailsApi#getSystemSummary")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| Unique numeric ID of the system. |

### Return type

[**GetSystemSummaryResponse**](GetSystemSummaryResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystems"></a>
# **getSystems**
> GetSystemsResponse getSystems(page, size, sortBy)

Fetch systems

Returns a list of systems for which the user can make API requests. By default, systems are returned in batches of 10. The maximum size is 100.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemDetailsApi()
val page : kotlin.Int = 56 // kotlin.Int | Page to be returned. Default=1, Min=1. For example, if page is set to 2, 2nd page is returned.
val size : kotlin.Int = 56 // kotlin.Int | Maximum number of records shown per page. Default=10, Min=1, Max=100.  For example, if set to 5, 5 records are shown per page.
val sortBy : SystemSortByEnum =  // SystemSortByEnum | Returns list of systems sorted by <sort_by> field. To get ASC order sorted list, user sort_by = <key>. To get DESC order sorted list, use sort_by = (-)<key>. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID.
try {
    val result : GetSystemsResponse = apiInstance.getSystems(page, size, sortBy)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemDetailsApi#getSystems")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemDetailsApi#getSystems")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **kotlin.Int**| Page to be returned. Default&#x3D;1, Min&#x3D;1. For example, if page is set to 2, 2nd page is returned. | [optional]
 **size** | **kotlin.Int**| Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100.  For example, if set to 5, 5 records are shown per page. | [optional]
 **sortBy** | [**SystemSortByEnum**](.md)| Returns list of systems sorted by &lt;sort_by&gt; field. To get ASC order sorted list, user sort_by &#x3D; &lt;key&gt;. To get DESC order sorted list, use sort_by &#x3D; (-)&lt;key&gt;. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID. | [optional] [enum: id, name, last_report_date, -id, -name, -last_report_date]

### Return type

[**GetSystemsResponse**](GetSystemsResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="retrieveSystemId"></a>
# **retrieveSystemId**
> RetrieveSystemIdResponse retrieveSystemId(serialNum)

Retrieve system for a given envoy serial number

Get system ID by passing envoy serial number. If the serial number of a retired envoy is passed in the request param, a 404 Not Found response will be returned.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemDetailsApi()
val serialNum : kotlin.String = serialNum_example // kotlin.String | Envoy serial number.
try {
    val result : RetrieveSystemIdResponse = apiInstance.retrieveSystemId(serialNum)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemDetailsApi#retrieveSystemId")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemDetailsApi#retrieveSystemId")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNum** | **kotlin.String**| Envoy serial number. |

### Return type

[**RetrieveSystemIdResponse**](RetrieveSystemIdResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="searchSystems"></a>
# **searchSystems**
> SearchSystemsResponse searchSystems(page, size, params)

Search and filter systems

Search and filter systems. Provide only valid values in request parameters. Empty and invalid values will be ignored. Invalid keys will be rejected.

### Example
```kotlin
// Import classes:
//import enlighten.monitoring.infrastructure.*
//import enlighten.monitoring.models.*

val apiInstance = SystemDetailsApi()
val page : kotlin.Int = 56 // kotlin.Int | Page to be returned. Default=1, Min=1, e.g=2.
val size : kotlin.Int = 56 // kotlin.Int | Maximum number of records shown per page. Default=10, Min=1, Max=1000, e.g=5.
val params : SearchSystemsRequest =  // SearchSystemsRequest | 
try {
    val result : SearchSystemsResponse = apiInstance.searchSystems(page, size, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SystemDetailsApi#searchSystems")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SystemDetailsApi#searchSystems")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **kotlin.Int**| Page to be returned. Default&#x3D;1, Min&#x3D;1, e.g&#x3D;2. | [optional]
 **size** | **kotlin.Int**| Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;1000, e.g&#x3D;5. | [optional]
 **params** | [**SearchSystemsRequest**](SearchSystemsRequest.md)|  | [optional]

### Return type

[**SearchSystemsResponse**](SearchSystemsResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

