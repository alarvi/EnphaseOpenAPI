
# GetSystemEnergyLifetimeResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **kotlin.Int** | System ID. |  [optional]
**startDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | When no start_date parameter is specified on the request, this is the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, it is included here in the response. |  [optional]
**meterStartDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | First day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. |  [optional]
**production** | **kotlin.collections.List&lt;kotlin.Int&gt;** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. |  [optional]
**microProduction** | **kotlin.collections.List&lt;kotlin.Int&gt;** |  |  [optional]
**meterProduction** | **kotlin.collections.List&lt;kotlin.Int&gt;** |  |  [optional]
**meta** | [**Meta**](Meta.md) |  |  [optional]



