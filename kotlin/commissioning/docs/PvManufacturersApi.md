# PvManufacturersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPvManufacturers**](PvManufacturersApi.md#getPvManufacturers) | **GET** /pv_manufacturers | Returns PV module manufacturers


<a id="getPvManufacturers"></a>
# **getPvManufacturers**
> GetPvManufacturersResponse getPvManufacturers()

Returns PV module manufacturers

Returns information about the PV module manufacturers known in Enlighten.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = PvManufacturersApi()
try {
    val result : GetPvManufacturersResponse = apiInstance.getPvManufacturers()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PvManufacturersApi#getPvManufacturers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PvManufacturersApi#getPvManufacturers")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetPvManufacturersResponse**](GetPvManufacturersResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

