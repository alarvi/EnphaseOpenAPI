
# BatteryDeviceTelemetry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **kotlin.Int** | System ID. |  [optional]
**serialNumber** | **kotlin.String** | Device serial number. |  [optional]
**granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) |  |  [optional]
**totalDevices** | **kotlin.Int** | Shall always be 1 since this is telemetry from individual micros. |  [optional]
**startAt** | **kotlin.Long** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response. |  [optional]
**endAt** | **kotlin.Long** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response. |  [optional]
**items** | **kotlin.String** | List key &#39;intervals&#39;. |  [optional]
**intervals** | [**kotlin.collections.List&lt;BatteryDeviceTelemetryIntervalsInner&gt;**](BatteryDeviceTelemetryIntervalsInner.md) |  |  [optional]
**lastReportedTime** | **kotlin.Int** | Last reported timestamp. |  [optional]
**lastReportedSoc** | **kotlin.String** | Last reported soc percentage. |  [optional]



