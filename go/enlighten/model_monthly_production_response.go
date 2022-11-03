/*
The Enlighten Systems API

The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.

API version: 2.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package enlighten

import (
	"encoding/json"
)

// MonthlyProductionResponse struct for MonthlyProductionResponse
type MonthlyProductionResponse struct {
	// Enlighten ID for this system.
	SystemId int32 `json:"system_id"`
	// First day included in the reporting period. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
	StartDate string `json:"start_date"`
	// Last day included in the reporting period.
	EndDate string `json:"end_date"`
	// Total production for the requested period in Watt-hours.
	ProductionWh int32 `json:"production_wh"`
	// If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty.
	MeterReadings []MonthlyProductionResponseMeterReadingsInner `json:"meter_readings"`
	Meta Meta `json:"meta"`
}

// NewMonthlyProductionResponse instantiates a new MonthlyProductionResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMonthlyProductionResponse(systemId int32, startDate string, endDate string, productionWh int32, meterReadings []MonthlyProductionResponseMeterReadingsInner, meta Meta) *MonthlyProductionResponse {
	this := MonthlyProductionResponse{}
	this.SystemId = systemId
	this.StartDate = startDate
	this.EndDate = endDate
	this.ProductionWh = productionWh
	this.MeterReadings = meterReadings
	this.Meta = meta
	return &this
}

// NewMonthlyProductionResponseWithDefaults instantiates a new MonthlyProductionResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMonthlyProductionResponseWithDefaults() *MonthlyProductionResponse {
	this := MonthlyProductionResponse{}
	return &this
}

// GetSystemId returns the SystemId field value
func (o *MonthlyProductionResponse) GetSystemId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.SystemId, true
}

// SetSystemId sets field value
func (o *MonthlyProductionResponse) SetSystemId(v int32) {
	o.SystemId = v
}

// GetStartDate returns the StartDate field value
func (o *MonthlyProductionResponse) GetStartDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponse) GetStartDateOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.StartDate, true
}

// SetStartDate sets field value
func (o *MonthlyProductionResponse) SetStartDate(v string) {
	o.StartDate = v
}

// GetEndDate returns the EndDate field value
func (o *MonthlyProductionResponse) GetEndDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponse) GetEndDateOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.EndDate, true
}

// SetEndDate sets field value
func (o *MonthlyProductionResponse) SetEndDate(v string) {
	o.EndDate = v
}

// GetProductionWh returns the ProductionWh field value
func (o *MonthlyProductionResponse) GetProductionWh() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ProductionWh
}

// GetProductionWhOk returns a tuple with the ProductionWh field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponse) GetProductionWhOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.ProductionWh, true
}

// SetProductionWh sets field value
func (o *MonthlyProductionResponse) SetProductionWh(v int32) {
	o.ProductionWh = v
}

// GetMeterReadings returns the MeterReadings field value
func (o *MonthlyProductionResponse) GetMeterReadings() []MonthlyProductionResponseMeterReadingsInner {
	if o == nil {
		var ret []MonthlyProductionResponseMeterReadingsInner
		return ret
	}

	return o.MeterReadings
}

// GetMeterReadingsOk returns a tuple with the MeterReadings field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponse) GetMeterReadingsOk() ([]MonthlyProductionResponseMeterReadingsInner, bool) {
	if o == nil {
    return nil, false
	}
	return o.MeterReadings, true
}

// SetMeterReadings sets field value
func (o *MonthlyProductionResponse) SetMeterReadings(v []MonthlyProductionResponseMeterReadingsInner) {
	o.MeterReadings = v
}

// GetMeta returns the Meta field value
func (o *MonthlyProductionResponse) GetMeta() Meta {
	if o == nil {
		var ret Meta
		return ret
	}

	return o.Meta
}

// GetMetaOk returns a tuple with the Meta field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponse) GetMetaOk() (*Meta, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Meta, true
}

// SetMeta sets field value
func (o *MonthlyProductionResponse) SetMeta(v Meta) {
	o.Meta = v
}

func (o MonthlyProductionResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["system_id"] = o.SystemId
	}
	if true {
		toSerialize["start_date"] = o.StartDate
	}
	if true {
		toSerialize["end_date"] = o.EndDate
	}
	if true {
		toSerialize["production_wh"] = o.ProductionWh
	}
	if true {
		toSerialize["meter_readings"] = o.MeterReadings
	}
	if true {
		toSerialize["meta"] = o.Meta
	}
	return json.Marshal(toSerialize)
}

type NullableMonthlyProductionResponse struct {
	value *MonthlyProductionResponse
	isSet bool
}

func (v NullableMonthlyProductionResponse) Get() *MonthlyProductionResponse {
	return v.value
}

func (v *NullableMonthlyProductionResponse) Set(val *MonthlyProductionResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableMonthlyProductionResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableMonthlyProductionResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMonthlyProductionResponse(val *MonthlyProductionResponse) *NullableMonthlyProductionResponse {
	return &NullableMonthlyProductionResponse{value: val, isSet: true}
}

func (v NullableMonthlyProductionResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMonthlyProductionResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


