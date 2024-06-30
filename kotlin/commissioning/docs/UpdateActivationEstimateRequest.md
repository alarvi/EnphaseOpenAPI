
# UpdateActivationEstimateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**degradeFactor** | **kotlin.String** | Annual production degradation factor for the system, from year 0 of the system&#39;s life. Must be 0.0% or higher. | 
**monthEstimates** | **kotlin.collections.List&lt;kotlin.String&gt;** | Estimated monthly production of the system, in kWh. A value for each month must be provided, and must be greater than 0. Send an empty array if you need to remove monthly estimates. | 


