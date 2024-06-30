
# GetSystemConsumptionLifetimeResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **kotlin.Int** | Unique numeric ID of the system. |  [optional]
**startDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | When no start_date parameter is specified on the request, defaults to the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, the same is included in the response. |  [optional]
**consumption** | **kotlin.collections.List&lt;kotlin.Int&gt;** | An array of consumption measurements in Wh, one for each day since consumption metering began, or one for each day of the requested period. |  [optional]
**meta** | [**Meta**](Meta.md) |  |  [optional]



