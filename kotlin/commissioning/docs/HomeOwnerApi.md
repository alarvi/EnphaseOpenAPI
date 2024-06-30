# HomeOwnerApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](HomeOwnerApi.md#createUser) | **POST** /users | Create Home owner


<a id="createUser"></a>
# **createUser**
> User createUser(params)

Create Home owner

Create a home owner user. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in &#39;application/x-www-form-urlencoded&#39; format, in this endpoint, key will be &#39;user&#39; and value will be a JSON dictionary of user fields. Using this API to create both homeowner as well as a company user. If you want to create company user, then pass company_id inside the user object.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = HomeOwnerApi()
val params : CreateUserRequest =  // CreateUserRequest | 
try {
    val result : User = apiInstance.createUser(params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling HomeOwnerApi#createUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling HomeOwnerApi#createUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**CreateUserRequest**](CreateUserRequest.md)|  | [optional]

### Return type

[**User**](User.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

