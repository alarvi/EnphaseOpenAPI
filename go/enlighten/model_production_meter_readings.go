/*
 * The Enlighten Systems API
 *
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * API version: 2.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package enlighten

import (
	"encoding/json"
)

// ProductionMeterReadings struct for ProductionMeterReadings
type ProductionMeterReadings struct {
	SystemId int32 `json:"system_id"`
	MeterReadings []ProductionMeterReadingsMeterReadings `json:"meter_readings"`
	Meta Meta `json:"meta"`
}

// NewProductionMeterReadings instantiates a new ProductionMeterReadings object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProductionMeterReadings(systemId int32, meterReadings []ProductionMeterReadingsMeterReadings, meta Meta) *ProductionMeterReadings {
	this := ProductionMeterReadings{}
	this.SystemId = systemId
	this.MeterReadings = meterReadings
	this.Meta = meta
	return &this
}

// NewProductionMeterReadingsWithDefaults instantiates a new ProductionMeterReadings object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProductionMeterReadingsWithDefaults() *ProductionMeterReadings {
	this := ProductionMeterReadings{}
	return &this
}

// GetSystemId returns the SystemId field value
func (o *ProductionMeterReadings) GetSystemId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value
// and a boolean to check if the value has been set.
func (o *ProductionMeterReadings) GetSystemIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SystemId, true
}

// SetSystemId sets field value
func (o *ProductionMeterReadings) SetSystemId(v int32) {
	o.SystemId = v
}

// GetMeterReadings returns the MeterReadings field value
func (o *ProductionMeterReadings) GetMeterReadings() []ProductionMeterReadingsMeterReadings {
	if o == nil {
		var ret []ProductionMeterReadingsMeterReadings
		return ret
	}

	return o.MeterReadings
}

// GetMeterReadingsOk returns a tuple with the MeterReadings field value
// and a boolean to check if the value has been set.
func (o *ProductionMeterReadings) GetMeterReadingsOk() (*[]ProductionMeterReadingsMeterReadings, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MeterReadings, true
}

// SetMeterReadings sets field value
func (o *ProductionMeterReadings) SetMeterReadings(v []ProductionMeterReadingsMeterReadings) {
	o.MeterReadings = v
}

// GetMeta returns the Meta field value
func (o *ProductionMeterReadings) GetMeta() Meta {
	if o == nil {
		var ret Meta
		return ret
	}

	return o.Meta
}

// GetMetaOk returns a tuple with the Meta field value
// and a boolean to check if the value has been set.
func (o *ProductionMeterReadings) GetMetaOk() (*Meta, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Meta, true
}

// SetMeta sets field value
func (o *ProductionMeterReadings) SetMeta(v Meta) {
	o.Meta = v
}

func (o ProductionMeterReadings) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["system_id"] = o.SystemId
	}
	if true {
		toSerialize["meter_readings"] = o.MeterReadings
	}
	if true {
		toSerialize["meta"] = o.Meta
	}
	return json.Marshal(toSerialize)
}

type NullableProductionMeterReadings struct {
	value *ProductionMeterReadings
	isSet bool
}

func (v NullableProductionMeterReadings) Get() *ProductionMeterReadings {
	return v.value
}

func (v *NullableProductionMeterReadings) Set(val *ProductionMeterReadings) {
	v.value = val
	v.isSet = true
}

func (v NullableProductionMeterReadings) IsSet() bool {
	return v.isSet
}

func (v *NullableProductionMeterReadings) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProductionMeterReadings(val *ProductionMeterReadings) *NullableProductionMeterReadings {
	return &NullableProductionMeterReadings{value: val, isSet: true}
}

func (v NullableProductionMeterReadings) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProductionMeterReadings) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

