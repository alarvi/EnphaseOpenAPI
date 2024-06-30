
# EnergyLifetimeResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | 
**systemId** | **kotlin.Int** | The identifier of the system. | 
**production** | **kotlin.collections.List&lt;kotlin.Int&gt;** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | 
**meta** | [**Meta**](Meta.md) |  | 
**microProduction** | **kotlin.collections.List&lt;kotlin.Int&gt;** |  |  [optional]
**meterProduction** | **kotlin.collections.List&lt;kotlin.Int&gt;** |  |  [optional]
**meterStartDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. |  [optional]



