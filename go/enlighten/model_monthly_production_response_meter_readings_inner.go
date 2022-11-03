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

// MonthlyProductionResponseMeterReadingsInner struct for MonthlyProductionResponseMeterReadingsInner
type MonthlyProductionResponseMeterReadingsInner struct {
	SerialNumber string `json:"serial_number"`
	Start int32 `json:"start"`
	End int32 `json:"end"`
}

// NewMonthlyProductionResponseMeterReadingsInner instantiates a new MonthlyProductionResponseMeterReadingsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMonthlyProductionResponseMeterReadingsInner(serialNumber string, start int32, end int32) *MonthlyProductionResponseMeterReadingsInner {
	this := MonthlyProductionResponseMeterReadingsInner{}
	this.SerialNumber = serialNumber
	this.Start = start
	this.End = end
	return &this
}

// NewMonthlyProductionResponseMeterReadingsInnerWithDefaults instantiates a new MonthlyProductionResponseMeterReadingsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMonthlyProductionResponseMeterReadingsInnerWithDefaults() *MonthlyProductionResponseMeterReadingsInner {
	this := MonthlyProductionResponseMeterReadingsInner{}
	return &this
}

// GetSerialNumber returns the SerialNumber field value
func (o *MonthlyProductionResponseMeterReadingsInner) GetSerialNumber() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SerialNumber
}

// GetSerialNumberOk returns a tuple with the SerialNumber field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponseMeterReadingsInner) GetSerialNumberOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.SerialNumber, true
}

// SetSerialNumber sets field value
func (o *MonthlyProductionResponseMeterReadingsInner) SetSerialNumber(v string) {
	o.SerialNumber = v
}

// GetStart returns the Start field value
func (o *MonthlyProductionResponseMeterReadingsInner) GetStart() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Start
}

// GetStartOk returns a tuple with the Start field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponseMeterReadingsInner) GetStartOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Start, true
}

// SetStart sets field value
func (o *MonthlyProductionResponseMeterReadingsInner) SetStart(v int32) {
	o.Start = v
}

// GetEnd returns the End field value
func (o *MonthlyProductionResponseMeterReadingsInner) GetEnd() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.End
}

// GetEndOk returns a tuple with the End field value
// and a boolean to check if the value has been set.
func (o *MonthlyProductionResponseMeterReadingsInner) GetEndOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.End, true
}

// SetEnd sets field value
func (o *MonthlyProductionResponseMeterReadingsInner) SetEnd(v int32) {
	o.End = v
}

func (o MonthlyProductionResponseMeterReadingsInner) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["serial_number"] = o.SerialNumber
	}
	if true {
		toSerialize["start"] = o.Start
	}
	if true {
		toSerialize["end"] = o.End
	}
	return json.Marshal(toSerialize)
}

type NullableMonthlyProductionResponseMeterReadingsInner struct {
	value *MonthlyProductionResponseMeterReadingsInner
	isSet bool
}

func (v NullableMonthlyProductionResponseMeterReadingsInner) Get() *MonthlyProductionResponseMeterReadingsInner {
	return v.value
}

func (v *NullableMonthlyProductionResponseMeterReadingsInner) Set(val *MonthlyProductionResponseMeterReadingsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableMonthlyProductionResponseMeterReadingsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableMonthlyProductionResponseMeterReadingsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMonthlyProductionResponseMeterReadingsInner(val *MonthlyProductionResponseMeterReadingsInner) *NullableMonthlyProductionResponseMeterReadingsInner {
	return &NullableMonthlyProductionResponseMeterReadingsInner{value: val, isSet: true}
}

func (v NullableMonthlyProductionResponseMeterReadingsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMonthlyProductionResponseMeterReadingsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


