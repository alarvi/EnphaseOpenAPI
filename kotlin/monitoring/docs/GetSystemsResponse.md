
# GetSystemsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**propertySize** | **kotlin.Int** | Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100. | 
**count** | **kotlin.Int** | Total number of systems actually returned for the current page. | 
**total** | **kotlin.Int** | Total number of systems. |  [optional]
**currentPage** | **kotlin.Int** | Number of the current page fetched. |  [optional]
**items** | **kotlin.String** | Named key of the list data. In this endpoint, it is systems. |  [optional]
**systems** | [**kotlin.collections.List&lt;SystemDetails&gt;**](SystemDetails.md) | List of systems. |  [optional]



