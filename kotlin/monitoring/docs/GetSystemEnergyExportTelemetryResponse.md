
# GetSystemEnergyExportTelemetryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **kotlin.Int** | Unique numeric ID of the system. |  [optional]
**granularity** | **kotlin.String** | Granularity of the telemetry data. Default is &#39;day&#39;. |  [optional]
**totalDevices** | **kotlin.Int** | Number of production meters in the site. |  [optional]
**startAt** | **kotlin.Long** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. |  [optional]
**endAt** | **kotlin.Long** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. |  [optional]
**items** | **kotlin.String** | List key &#39;intervals&#39;. |  [optional]
**intervals** | **kotlin.collections.List&lt;kotlin.collections.List&lt;GetSystemEnergyExportTelemetryResponseIntervalsInnerInner&gt;&gt;** | An array of telemetry objects. |  [optional]
**meta** | [**Meta**](Meta.md) |  |  [optional]



