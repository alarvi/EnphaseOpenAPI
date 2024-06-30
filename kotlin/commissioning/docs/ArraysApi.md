# ArraysApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSystemArray**](ArraysApi.md#deleteSystemArray) | **DELETE** /partner/systems/{system_id}/arrays/{array_id} | Delete an array by ID
[**getSystemArray**](ArraysApi.md#getSystemArray) | **GET** /partner/systems/{system_id}/arrays/{array_id} | Fetch array details by ID
[**getSystemArrays**](ArraysApi.md#getSystemArrays) | **GET** /partner/systems/{system_id}/arrays | Fetch particular system Array details
[**updateSystemArray**](ArraysApi.md#updateSystemArray) | **PUT** /partner/systems/{system_id}/arrays/{array_id} | Update particular system array details
[**updateSystemArrays**](ArraysApi.md#updateSystemArrays) | **PUT** /partner/systems/{system_id}/arrays | Update all arrays for system


<a id="deleteSystemArray"></a>
# **deleteSystemArray**
> DeleteSystemArrayResponse deleteSystemArray(systemId, arrayId)

Delete an array by ID

Delete an array by ID.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ArraysApi()
val systemId : kotlin.Int = 56 // kotlin.Int | System ID.
val arrayId : kotlin.Int = 56 // kotlin.Int | Array ID.
try {
    val result : DeleteSystemArrayResponse = apiInstance.deleteSystemArray(systemId, arrayId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ArraysApi#deleteSystemArray")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ArraysApi#deleteSystemArray")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| System ID. |
 **arrayId** | **kotlin.Int**| Array ID. |

### Return type

[**DeleteSystemArrayResponse**](DeleteSystemArrayResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemArray"></a>
# **getSystemArray**
> SystemArray getSystemArray(systemId, arrayId)

Fetch array details by ID

Fetch array details by ID.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ArraysApi()
val systemId : kotlin.Int = 56 // kotlin.Int | System ID.
val arrayId : kotlin.Int = 56 // kotlin.Int | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint.
try {
    val result : SystemArray = apiInstance.getSystemArray(systemId, arrayId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ArraysApi#getSystemArray")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ArraysApi#getSystemArray")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| System ID. |
 **arrayId** | **kotlin.Int**| Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Fetch particular system Array details&#39; endpoint. |

### Return type

[**SystemArray**](SystemArray.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSystemArrays"></a>
# **getSystemArrays**
> SystemArrays getSystemArrays(systemId)

Fetch particular system Array details

Fetch particular system Array details.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ArraysApi()
val systemId : kotlin.Int = 56 // kotlin.Int | System ID.
try {
    val result : SystemArrays = apiInstance.getSystemArrays(systemId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ArraysApi#getSystemArrays")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ArraysApi#getSystemArrays")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| System ID. |

### Return type

[**SystemArrays**](SystemArrays.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateSystemArray"></a>
# **updateSystemArray**
> SystemArray updateSystemArray(systemId, arrayId, params)

Update particular system array details

Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ArraysApi()
val systemId : kotlin.Int = 56 // kotlin.Int | System ID.
val arrayId : kotlin.Int = 56 // kotlin.Int | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint.
val params : ArrayParams =  // ArrayParams | 
try {
    val result : SystemArray = apiInstance.updateSystemArray(systemId, arrayId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ArraysApi#updateSystemArray")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ArraysApi#updateSystemArray")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| System ID. |
 **arrayId** | **kotlin.Int**| Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Update all Arrays&#39; endpoint. |
 **params** | **ArrayParams**|  | [optional]

### Return type

[**SystemArray**](SystemArray.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateSystemArrays"></a>
# **updateSystemArrays**
> SystemArrays updateSystemArrays(systemId, params)

Update all arrays for system

Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ArraysApi()
val systemId : kotlin.Int = 56 // kotlin.Int | System ID.
val params : UpdateSystemArraysRequest =  // UpdateSystemArraysRequest | 
try {
    val result : SystemArrays = apiInstance.updateSystemArrays(systemId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ArraysApi#updateSystemArrays")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ArraysApi#updateSystemArrays")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **kotlin.Int**| System ID. |
 **params** | [**UpdateSystemArraysRequest**](UpdateSystemArraysRequest.md)|  | [optional]

### Return type

[**SystemArrays**](SystemArrays.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

