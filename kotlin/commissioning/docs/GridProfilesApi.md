# GridProfilesApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGridProfiles**](GridProfilesApi.md#getGridProfiles) | **GET** /partner/grid_profiles | Lists the available profiles


<a id="getGridProfiles"></a>
# **getGridProfiles**
> GetGridProfilesResponse getGridProfiles()

Lists the available profiles

Lists the available profiles.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = GridProfilesApi()
try {
    val result : GetGridProfilesResponse = apiInstance.getGridProfiles()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GridProfilesApi#getGridProfiles")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GridProfilesApi#getGridProfiles")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetGridProfilesResponse**](GetGridProfilesResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

