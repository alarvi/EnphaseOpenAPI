
# UpdateSystemLoadControlSettingsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **kotlin.String** | Name of the dry contact. Name cannot be changed. It is only used to identify the dry contact that needs to be updated. | 
**loadName** | **kotlin.String** | Load Name of the load. Load Name cannot be changed. It is only used to identify the dry contact that needs to be updated. |  [optional]
**mode** | **kotlin.String** | Mode. Available values are \&quot;Scheduled\&quot;, \&quot;Basic\&quot;, \&quot;Advanced_BatteryPowered\&quot;, \&quot;Manual_always_not_powered\&quot;, \&quot;Manual_always_powered\&quot;, \&quot;Advanced_GeneratorPowered\&quot;. |  [optional]
**socLow** | **kotlin.Int** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. It can be between 10 to 90. |  [optional]
**essentialStartTime** | **kotlin.Int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. |  [optional]
**essentialEndTime** | **kotlin.Int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. |  [optional]



