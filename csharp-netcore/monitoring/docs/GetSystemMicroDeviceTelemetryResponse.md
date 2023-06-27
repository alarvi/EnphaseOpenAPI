# EnphaseOpenAPI.Monitoring.Model.GetSystemMicroDeviceTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | Unique numeric ID of the system. | [optional] 
**SerialNumber** | **string** | Device serial number. | [optional] 
**Granularity** | **TelemetryGranularityEnum** |  | [optional] 
**TotalDevices** | **int** | Shall always be 1 since this is telemetry from individual micros. | [optional] 
**StartAt** | **long** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response. | [optional] 
**EndAt** | **long** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response. | [optional] 
**Items** | **string** | List key &#39;intervals&#39;. | [optional] 
**Intervals** | [**List&lt;GetSystemMicroDeviceTelemetryResponseIntervalsInner&gt;**](GetSystemMicroDeviceTelemetryResponseIntervalsInner.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
