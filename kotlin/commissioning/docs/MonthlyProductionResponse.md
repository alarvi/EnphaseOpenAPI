
# MonthlyProductionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **kotlin.Int** | Enlighten ID for this system. | 
**startDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | First day included in the reporting period. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**endDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | Last day included in the reporting period. | 
**productionWh** | **kotlin.Int** | Total production for the requested period in Watt-hours. | 
**meterReadings** | [**kotlin.collections.List&lt;MonthlyProductionResponseMeterReadingsInner&gt;**](MonthlyProductionResponseMeterReadingsInner.md) | If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty. | 
**meta** | [**Meta**](Meta.md) |  | 



