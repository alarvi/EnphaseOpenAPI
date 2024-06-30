
# ConsumptionLifetimeResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | 
**consumption** | **kotlin.collections.List&lt;kotlin.Int&gt;** | An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. | 
**meta** | [**Meta**](Meta.md) |  | 
**systemId** | **kotlin.Int** | The identifier of the system. |  [optional]



