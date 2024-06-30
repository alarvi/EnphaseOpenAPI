
# StatsResponseIntervalsInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endAt** | **kotlin.Long** | End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**powr** | **kotlin.Int** | Average power produced by microinverters during this interval, in Watts. | 
**enwh** | **kotlin.Int** | Energy produced by microinverters during this interval, in Watt-hours. | 
**devicesReporting** | **kotlin.Int** | Number of microinverters that reported data for this interval at the time of the request. | 



