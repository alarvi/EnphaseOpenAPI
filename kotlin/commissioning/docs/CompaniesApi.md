# CompaniesApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompanyUser**](CompaniesApi.md#createCompanyUser) | **POST** /companies/{company_id}/users | Create company user
[**getCompanyUser**](CompaniesApi.md#getCompanyUser) | **GET** /companies/{company_id}/users/{user_id} | Returns the requested user
[**getCompanyUsers**](CompaniesApi.md#getCompanyUsers) | **GET** /companies/{company_id}/users | Get all users with in a company
[**getSelfCompanyAuthorizedSubcontractors**](CompaniesApi.md#getSelfCompanyAuthorizedSubcontractors) | **GET** /companies/self/authorized_subcontractors | User&#39;s company and its authorized subcontractors.
[**getSelfCompanyBranches**](CompaniesApi.md#getSelfCompanyBranches) | **GET** /companies/self/branches | User&#39;s company and its branches
[**updateCompanyUser**](CompaniesApi.md#updateCompanyUser) | **PUT** /companies/{company_id}/users/{user_id} | Update company user


<a id="createCompanyUser"></a>
# **createCompanyUser**
> User createCompanyUser(companyId, params)

Create company user

Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in &#39;application/x-www-form-urlencoded&#39; format, in this endpoint, key will be &#39;user&#39; and value will be a JSON dictionary of user fields.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = CompaniesApi()
val companyId : kotlin.Int = 56 // kotlin.Int | Company ID.
val params : CreateCompanyUserRequest =  // CreateCompanyUserRequest | 
try {
    val result : User = apiInstance.createCompanyUser(companyId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CompaniesApi#createCompanyUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CompaniesApi#createCompanyUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **kotlin.Int**| Company ID. |
 **params** | [**CreateCompanyUserRequest**](CreateCompanyUserRequest.md)|  | [optional]

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

<a id="getCompanyUser"></a>
# **getCompanyUser**
> User getCompanyUser(companyId, userId, expand)

Returns the requested user

Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if &#39;expand&#39; parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = CompaniesApi()
val companyId : kotlin.Int = 56 // kotlin.Int | Company ID.
val userId : kotlin.Int = 56 // kotlin.Int | User ID.
val expand : UserExpandEnum =  // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
try {
    val result : User = apiInstance.getCompanyUser(companyId, userId, expand)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CompaniesApi#getCompanyUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CompaniesApi#getCompanyUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **kotlin.Int**| Company ID. |
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

<a id="getCompanyUsers"></a>
# **getCompanyUsers**
> GetCompanyUsersResponse getCompanyUsers(companyId)

Get all users with in a company

Returns the users in the given company.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = CompaniesApi()
val companyId : kotlin.Int = 56 // kotlin.Int | Company ID.
try {
    val result : GetCompanyUsersResponse = apiInstance.getCompanyUsers(companyId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CompaniesApi#getCompanyUsers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CompaniesApi#getCompanyUsers")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **kotlin.Int**| Company ID. |

### Return type

[**GetCompanyUsersResponse**](GetCompanyUsersResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSelfCompanyAuthorizedSubcontractors"></a>
# **getSelfCompanyAuthorizedSubcontractors**
> GetSelfCompanyAuthorizedSubcontractorsResponse getSelfCompanyAuthorizedSubcontractors()

User&#39;s company and its authorized subcontractors.

Returns all the authorized subcontractors of a given company, if any.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = CompaniesApi()
try {
    val result : GetSelfCompanyAuthorizedSubcontractorsResponse = apiInstance.getSelfCompanyAuthorizedSubcontractors()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CompaniesApi#getSelfCompanyAuthorizedSubcontractors")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CompaniesApi#getSelfCompanyAuthorizedSubcontractors")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSelfCompanyAuthorizedSubcontractorsResponse**](GetSelfCompanyAuthorizedSubcontractorsResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getSelfCompanyBranches"></a>
# **getSelfCompanyBranches**
> GetSelfCompanyBranchesResponse getSelfCompanyBranches()

User&#39;s company and its branches

Returns information about the API user&#39;s company and its branches, if any.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = CompaniesApi()
try {
    val result : GetSelfCompanyBranchesResponse = apiInstance.getSelfCompanyBranches()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CompaniesApi#getSelfCompanyBranches")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CompaniesApi#getSelfCompanyBranches")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSelfCompanyBranchesResponse**](GetSelfCompanyBranchesResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateCompanyUser"></a>
# **updateCompanyUser**
> User updateCompanyUser(companyId, userId, params)

Update company user

Updates a user. You may change a user&#39;s company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = CompaniesApi()
val companyId : kotlin.Int = 56 // kotlin.Int | Company ID.
val userId : kotlin.Int = 56 // kotlin.Int | User ID.
val params : UpdateCompanyUserRequest =  // UpdateCompanyUserRequest | 
try {
    val result : User = apiInstance.updateCompanyUser(companyId, userId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CompaniesApi#updateCompanyUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CompaniesApi#updateCompanyUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **kotlin.Int**| Company ID. |
 **userId** | **kotlin.Int**| User ID. |
 **params** | [**UpdateCompanyUserRequest**](UpdateCompanyUserRequest.md)|  | [optional]

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

