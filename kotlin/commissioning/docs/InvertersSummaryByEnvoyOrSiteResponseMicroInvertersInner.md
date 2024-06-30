
# InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.Int** |  | 
**model** | **kotlin.String** | Model number of this Microinverter. | 
**partNumber** | **kotlin.String** | The Enphase part number of this Microinverter. | 
**serialNumber** | **kotlin.String** | The serial number of this Microinverter. | 
**sku** | **kotlin.String** |  | 
**status** | [**inline**](#Status) | The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. | 
**powerProduced** | [**InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced**](InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.md) |  | 
**procLoad** | **kotlin.String** |  | 
**paramTable** | **kotlin.String** |  | 
**envoySerialNumber** | **kotlin.String** |  | 
**energy** | [**InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy**](InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy.md) |  | 
**gridProfile** | **kotlin.String** |  | 
**lastReportDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. | 


<a id="Status"></a>
## Enum: status
Name | Value
---- | -----
status | normal, power, micro, retired



