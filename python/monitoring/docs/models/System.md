# monitoring.model.system.System

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | Unique numeric ID of the system. | [optional] 
**name** | str,  | str,  | Name of the system. | [optional] 
**public_name** | str,  | str,  | Name displayed on the public system page. Available values are All, Residential System, Commercial etc. Default&#x3D;&#x27;Residential System&#x27;. Only for systems that allow public access. | [optional] 
**timezone** | str,  | str,  | Timezone to which the system belongs. | [optional] 
**[address](#address)** | dict, frozendict.frozendict,  | frozendict.frozendict,  | Address object for the system. | [optional] 
**connection_type** | [**SystemConnectionTypeEnum**](SystemConnectionTypeEnum.md) | [**SystemConnectionTypeEnum**](SystemConnectionTypeEnum.md) |  | [optional] 
**energy_lifetime** | decimal.Decimal, int,  | decimal.Decimal,  | Energy generated by the system during its lifetime in Wh. It is returned only if the count is less than or equal to 100. | [optional] 
**energy_today** | decimal.Decimal, int,  | decimal.Decimal,  | Energy generated by the system today in Wh. It is returned only if the count is less than or equal to 100. | [optional] 
**system_size** | decimal.Decimal, int,  | decimal.Decimal,  | Size of the system. It is returned only if the count is less than or equal to 100. | [optional] 
**status** | [**SystemStatusEnum**](SystemStatusEnum.md) | [**SystemStatusEnum**](SystemStatusEnum.md) |  | [optional] 
**last_report_at** | decimal.Decimal, int,  | decimal.Decimal,  | Timestamp (in epoch format) at which the system&#x27;s Envoy last submitted a report. | [optional] value must be a 64 bit integer
**last_energy_at** | decimal.Decimal, int,  | decimal.Decimal,  | Timestamp (in epoch format) at which the system&#x27;s produced energy was last reported. Even if the last produced energy is 0, its timestamp will be returned. | [optional] value must be a 64 bit integer
**operational_at** | decimal.Decimal, int,  | decimal.Decimal,  | Timestamp (in epoch format) at which this system became operational. Corresponds to the system&#x27;s interconnect time, if one is specified. Otherwise, it is the system&#x27;s first reported interval end time. | [optional] value must be a 64 bit integer
**attachment_type** | [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) | [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) |  | [optional] 
**interconnect_date** | str, date,  | str,  | Date on which the system was approved to connect to the grid. | [optional] value must conform to RFC-3339 full-date YYYY-MM-DD
**reference** | str,  | str,  | If the calling user belongs to a company and that company has provided its own identifier for a system, that ID is included here. Otherwise, this attribute is not returned. | [optional] 
**[other_references](#other_references)** | list, tuple,  | tuple,  | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# address

Address object for the system.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Address object for the system. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**city** | str,  | str,  | City in which the system is located. | [optional] 
**state** | str,  | str,  | State in which the system is located. | [optional] 
**country** | str,  | str,  | Country in which the system is located. | [optional] 
**postal_code** | str,  | str,  | Postal code of the system&#x27;s location. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# other_references

If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)
