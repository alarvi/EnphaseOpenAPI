
# SearchSystemsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **kotlin.Int** | Total number of systems available. |  [optional]
**currentPage** | **kotlin.Int** | Current page of the systems result. Default is 1. |  [optional]
**propertySize** | **kotlin.Int** | Max number of records from API per page is 100. Default is 10. |  [optional]
**count** | **kotlin.Int** | Total number of systems actually returned for the current page. |  [optional]
**items** | **kotlin.String** | Named key of the list data. In this endpoint, it is systems. |  [optional]
**systems** | [**kotlin.collections.List&lt;SystemDetails&gt;**](SystemDetails.md) | List of filtered systems. |  [optional]



