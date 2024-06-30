
# GetSystemDevicesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **kotlin.Int** | System ID. |  [optional]
**totalDevices** | **kotlin.Int** | Total active devices associated with the system. |  [optional]
**items** | **kotlin.String** | List key. |  [optional]
**devices** | **kotlin.collections.Map&lt;kotlin.String, kotlin.collections.List&lt;GetSystemDevicesResponseDevicesValueInner&gt;&gt;** | Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type. |  [optional]



