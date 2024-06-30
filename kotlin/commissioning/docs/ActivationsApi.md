# ActivationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPartnerActivation**](ActivationsApi.md#createPartnerActivation) | **POST** /partner/activations | Create new activation
[**deleteActivation**](ActivationsApi.md#deleteActivation) | **DELETE** /partner/activations/{activation_id} | Delete an activation by ID
[**getActivationOpsProductionMode**](ActivationsApi.md#getActivationOpsProductionMode) | **GET** /activations/{activation_id}/ops/production_mode | Get production mode
[**getPartnerActivation**](ActivationsApi.md#getPartnerActivation) | **GET** /partner/activations/{activation_id} | Retrieves an Activation by ID
[**getPartnerActivations**](ActivationsApi.md#getPartnerActivations) | **GET** /partner/activations | List of Activations
[**grantActivationUserAccess**](ActivationsApi.md#grantActivationUserAccess) | **POST** /activations/{activation_id}/users/{user_id} | Grant Access
[**revokeActivationUserAccess**](ActivationsApi.md#revokeActivationUserAccess) | **DELETE** /activations/{activation_id}/users/{user_id} | Revoke Access
[**setActivationOpsProductionMode**](ActivationsApi.md#setActivationOpsProductionMode) | **POST** /activations/{activation_id}/ops/production_mode | Set production mode
[**updatePartnerActivation**](ActivationsApi.md#updatePartnerActivation) | **PUT** /partner/activations/{activation_id} | Update an activation.


<a id="createPartnerActivation"></a>
# **createPartnerActivation**
> Activation createPartnerActivation(params)

Create new activation

Create new activation.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val params : SystemParams =  // SystemParams | 
try {
    val result : Activation = apiInstance.createPartnerActivation(params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#createPartnerActivation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#createPartnerActivation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **SystemParams**|  | [optional]

### Return type

[**Activation**](Activation.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="deleteActivation"></a>
# **deleteActivation**
> DeleteActivationResponse deleteActivation(activationId)

Delete an activation by ID

To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system).
try {
    val result : DeleteActivationResponse = apiInstance.deleteActivation(activationId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#deleteActivation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#deleteActivation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). |

### Return type

[**DeleteActivationResponse**](DeleteActivationResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getActivationOpsProductionMode"></a>
# **getActivationOpsProductionMode**
> GetActivationOpsProductionModeResponse getActivationOpsProductionMode(activationId)

Get production mode

Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
try {
    val result : GetActivationOpsProductionModeResponse = apiInstance.getActivationOpsProductionMode(activationId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#getActivationOpsProductionMode")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#getActivationOpsProductionMode")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). System-generated. |

### Return type

[**GetActivationOpsProductionModeResponse**](GetActivationOpsProductionModeResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getPartnerActivation"></a>
# **getPartnerActivation**
> Activation getPartnerActivation(activationId, expand)

Retrieves an Activation by ID

By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner&#39;s name within the system hash, the response includes detailed information about the owner by using expand&#x3D;owner. You can also expand the owner&#39;s company by using expand&#x3D;owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand&#x3D;host will include details about the system host. You can also expand the host&#39;s company by using expand&#x3D;host.company. The response now includes information about the host and the company he belongs to.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
val expand : SystemExpandEnum =  // SystemExpandEnum | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.
try {
    val result : Activation = apiInstance.getPartnerActivation(activationId, expand)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#getPartnerActivation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#getPartnerActivation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). System-generated. |
 **expand** | [**SystemExpandEnum**](.md)| Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand. | [optional] [enum: owner, owner.company, host, host.company]

### Return type

[**Activation**](Activation.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getPartnerActivations"></a>
# **getPartnerActivations**
> GetPartnerActivationsResponse getPartnerActivations(next, limit, stage, reference, installerId, systemName, address, region, search)

List of Activations

Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the &#39;next&#39; attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn&#39;t exist, API will return an empty array.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val next : kotlin.String = next_example // kotlin.String | If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.
val limit : kotlin.Int = 56 // kotlin.Int | There is a limit to the number of activations which can be returned at one time.
val stage : SystemStageEnum =  // SystemStageEnum | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value.
val reference : kotlin.String = reference_example // kotlin.String | Filter activations by company reference.
val installerId : kotlin.Int = 56 // kotlin.Int | Filter activations by installer ID.
val systemName : kotlin.String = systemName_example // kotlin.String | Filter activations by system name.
val address : kotlin.String = address_example // kotlin.String | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.
val region : kotlin.String = region_example // kotlin.String | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.
val search : kotlin.String = search_example // kotlin.String | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.
try {
    val result : GetPartnerActivationsResponse = apiInstance.getPartnerActivations(next, limit, stage, reference, installerId, systemName, address, region, search)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#getPartnerActivations")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#getPartnerActivations")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next** | **kotlin.String**| If the first request does not return a full list, use the &#39;next&#39; attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the &#39;next&#39; field. | [optional]
 **limit** | **kotlin.Int**| There is a limit to the number of activations which can be returned at one time. | [optional]
 **stage** | [**SystemStageEnum**](.md)| Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage&#x3D;1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value. | [optional] [enum: 1, 2, 3, 4, 5, in_progress]
 **reference** | **kotlin.String**| Filter activations by company reference. | [optional]
 **installerId** | **kotlin.Int**| Filter activations by installer ID. | [optional]
 **systemName** | **kotlin.String**| Filter activations by system name. | [optional]
 **address** | **kotlin.String**| Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation. | [optional]
 **region** | **kotlin.String**| Filter activations by region. Provide two latitude, longitude values to find activations between them. Format &#39;latitude1,longitude1,latitude2,longitude2&#39; e.g value &#39;44.968046,-94.420307,44.33328,-89.132008&#39;. | [optional]
 **search** | **kotlin.String**| Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation. | [optional]

### Return type

[**GetPartnerActivationsResponse**](GetPartnerActivationsResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="grantActivationUserAccess"></a>
# **grantActivationUserAccess**
> GrantActivationUserAccessResponse grantActivationUserAccess(activationId, userId)

Grant Access

Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system).
val userId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the user which you want to grant access.
try {
    val result : GrantActivationUserAccessResponse = apiInstance.grantActivationUserAccess(activationId, userId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#grantActivationUserAccess")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#grantActivationUserAccess")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). |
 **userId** | **kotlin.Int**| Enlighten ID of the user which you want to grant access. |

### Return type

[**GrantActivationUserAccessResponse**](GrantActivationUserAccessResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="revokeActivationUserAccess"></a>
# **revokeActivationUserAccess**
> RevokeActivationUserAccessResponse revokeActivationUserAccess(activationId, userId)

Revoke Access

Revokes a user&#39;s permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system).
val userId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the user which you want to revoke the access.
try {
    val result : RevokeActivationUserAccessResponse = apiInstance.revokeActivationUserAccess(activationId, userId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#revokeActivationUserAccess")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#revokeActivationUserAccess")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). |
 **userId** | **kotlin.Int**| Enlighten ID of the user which you want to revoke the access. |

### Return type

[**RevokeActivationUserAccessResponse**](RevokeActivationUserAccessResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="setActivationOpsProductionMode"></a>
# **setActivationOpsProductionMode**
> SetActivationOpsProductionModeResponse setActivationOpsProductionMode(activationId, params)

Set production mode

Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
val params : SetActivationOpsProductionModeRequest =  // SetActivationOpsProductionModeRequest | 
try {
    val result : SetActivationOpsProductionModeResponse = apiInstance.setActivationOpsProductionMode(activationId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#setActivationOpsProductionMode")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#setActivationOpsProductionMode")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). System-generated. |
 **params** | [**SetActivationOpsProductionModeRequest**](SetActivationOpsProductionModeRequest.md)|  | [optional]

### Return type

[**SetActivationOpsProductionModeResponse**](SetActivationOpsProductionModeResponse.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="updatePartnerActivation"></a>
# **updatePartnerActivation**
> Activation updatePartnerActivation(activationId, params)

Update an activation.

Update an activation.

### Example
```kotlin
// Import classes:
//import enlighten.commissioning.infrastructure.*
//import enlighten.commissioning.models.*

val apiInstance = ActivationsApi()
val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
val params : SystemParams =  // SystemParams | 
try {
    val result : Activation = apiInstance.updatePartnerActivation(activationId, params)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivationsApi#updatePartnerActivation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivationsApi#updatePartnerActivation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **kotlin.Int**| Enlighten ID of the activation(system). System-generated. |
 **params** | **SystemParams**|  | [optional]

### Return type

[**Activation**](Activation.md)

### Authorization


Configure OAuth2:
    ApiClient.accessToken = ""
Configure ApiKey:
    ApiClient.apiKey["key"] = ""
    ApiClient.apiKeyPrefix["key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

