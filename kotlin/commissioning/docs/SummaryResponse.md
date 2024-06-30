
# SummaryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentPower** | **kotlin.Int** | Current power production, in Watts. For historical requests, returns 0. | 
**energyLifetime** | **kotlin.Int** | Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours. | 
**energyToday** | **kotlin.Int** | Energy produced on the requested day, in Watt-hours. | 
**lastIntervalEndAt** | **kotlin.Long** | The last known time that the system produced energy. When a system has not been communicating for a length of time, the &#x60;last_report_at&#x60; can be recent, whereas the &#x60;last_interval_end_at&#x60; may be further back. | 
**lastReportAt** | **kotlin.Long** | The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**modules** | **kotlin.Int** | Number of active (not retired) modules. For historical requests, returns 0. | 
**operationalAt** | **kotlin.Long** | The time at which this system became operational. Corresponds to the system&#39;s interconnect time, if one is specified. Otherwise, it is the system&#39;s first interval end time. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**sizeW** | **kotlin.Int** | The size of the system, in Watts. For historical requests, returns 0. | 
**source** | [**inline**](#Source) | Indicates whether the production of this system is measured by its microinverters (&#x60;microinverters&#x60;) or by revenue-grade meters (&#x60;meter&#x60;) installed on the system. | 
**status** | [**Status**](Status.md) |  | 
**summaryDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**systemId** | **kotlin.Int** | The Enlighten ID of the system. | 


<a id="Source"></a>
## Enum: source
Name | Value
---- | -----
source | microinverters, meter



