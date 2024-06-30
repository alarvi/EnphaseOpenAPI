# UsersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivationUser**](UsersApi.md#getActivationUser) | **GET** /activations/{activation_id}/users/{user_id} | Returns the requested user
[**getSelfUser**](UsersApi.md#getSelfUser) | **GET** /partner/users/self | Return the current logged in user detail
[**getUser**](UsersApi.md#getUser) | **GET** /partner/users/{user_id} | Returns the requested user
[**searchUsers**](UsersApi.md#searchUsers) | **GET** /users/search | Search user
[**updateActivationUser**](UsersApi.md#updateActivationUser) | **PUT** /activations/{activation_id}/users/{user_id} | Update user
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{user_id} | Update user


<a id="getActivationUser"></a>
# **getActivationUser**
> User getActivationUser(activationId, userId, expand)

Returns the requested user

You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = UsersApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
val userId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the user. System-generated.
val expand : UserExpandEnum =  // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response.
try {
    val result : User = apiInstance.getActivationUser(activationId, userId, expand)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getActivationUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getActivationUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). System-generated. |
 **userId** | **kotlin.Int**| Enlighten ID of the user. System-generated. |
 **expand** | [**UserExpandEnum**](.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response. | [optional] [enum: company]

### Return type

[**User**](User.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSelfUser"></a>
# **getSelfUser**
> User getSelfUser(expand)

Return the current logged in user detail

Return the current logged in user detail. Company details are provided in the response only if &#39;expand&#39; parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = UsersApi()
val expand : UserExpandEnum =  // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
try {
    val result : User = apiInstance.getSelfUser(expand)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getSelfUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getSelfUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | [**UserExpandEnum**](.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] [enum: company]

### Return type

[**User**](User.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUser"></a>
# **getUser**
> User getUser(userId, expand)

Returns the requested user

You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. Company details are provided in the response only if &#39;expand&#39; parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = UsersApi()
val userId : kotlin.Int = 56 // kotlin.Int | User ID.
val expand : UserExpandEnum =  // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
try {
    val result : User = apiInstance.getUser(userId, expand)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.Int**| User ID. |
 **expand** | [**UserExpandEnum**](.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] [enum: company]

### Return type

[**User**](User.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="searchUsers"></a>
# **searchUsers**
> SearchUsersResponse searchUsers(email)

Search user

Returns the user ID for the given email ID only if the user exists.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = UsersApi()
val email : kotlin.String = email_example // kotlin.String | Email address of the user.
try {
    val result : SearchUsersResponse = apiInstance.searchUsers(email)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#searchUsers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#searchUsers")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **kotlin.String**| Email address of the user. | [optional]

### Return type

[**SearchUsersResponse**](SearchUsersResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateActivationUser"></a>
# **updateActivationUser**
> User updateActivationUser(activationId, userId, params)

Update user

You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. When &#39;company_id&#39; is passed in the body param or the user company_id is already defined, we will not consider the &#39;enlighten_view&#39; field value and the user will become an enlighten manager. You may change a user&#39;s company if you have access to the user, the old company, and the new company.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = UsersApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
val userId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the user. System-generated.
val params : UserParams =  // UserParams | 
try {
    val result : User = apiInstance.updateActivationUser(activationId, userId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#updateActivationUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#updateActivationUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). System-generated. |
 **userId** | **kotlin.Int**| Enlighten ID of the user. System-generated. |
 **params** | **UserParams**|  | [optional]

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

<a id="updateUser"></a>
# **updateUser**
> User updateUser(userId, params)

Update user

You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. &#39;company_id&#39; is an optional field. When you passing a &#39;company_id&#39;, the user become an enlighten manager and we will not consider &#39;enlighten_view&#39; field value. You may change a user&#39;s company if you have access to the user, the old company, and the new company.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = UsersApi()
val userId : kotlin.Int = 56 // kotlin.Int | User ID.
val params : UserParams =  // UserParams | 
try {
    val result : User = apiInstance.updateUser(userId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#updateUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#updateUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.Int**| User ID. |
 **params** | **UserParams**|  | [optional]

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

