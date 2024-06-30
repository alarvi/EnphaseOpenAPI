
# Meta

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**SystemStatusEnum**](SystemStatusEnum.md) |  |  [optional]
**lastReportAt** | **kotlin.Int** | Timestamp (in epoch format) at which the system&#39;s Envoy last submitted a report. |  [optional]
**lastEnergyAt** | **kotlin.Int** | Timestamp (in epoch format) at which the system&#39;s produced energy was last reported. Even if the last produced energy is 0, its timestamp will be returned. |  [optional]
**operationalAt** | **kotlin.Int** | Timestamp (in epoch format) at which this system became operational. Corresponds to the system&#39;s interconnect time, if one is specified. Otherwise, it is the system&#39;s first reported interval end time. |  [optional]



