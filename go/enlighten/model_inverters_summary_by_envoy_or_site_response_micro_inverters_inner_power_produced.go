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

// InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced struct for InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced
type InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced struct {
	Value int32 `json:"value"`
	Units string `json:"units"`
	Precision int32 `json:"precision"`
}

// NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced instantiates a new InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced(value int32, units string, precision int32) *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced {
	this := InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced{}
	this.Value = value
	this.Units = units
	this.Precision = precision
	return &this
}

// NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProducedWithDefaults instantiates a new InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProducedWithDefaults() *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced {
	this := InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced{}
	return &this
}

// GetValue returns the Value field value
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) GetValue() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Value
}

// GetValueOk returns a tuple with the Value field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) GetValueOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Value, true
}

// SetValue sets field value
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) SetValue(v int32) {
	o.Value = v
}

// GetUnits returns the Units field value
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) GetUnits() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Units
}

// GetUnitsOk returns a tuple with the Units field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) GetUnitsOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Units, true
}

// SetUnits sets field value
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) SetUnits(v string) {
	o.Units = v
}

// GetPrecision returns the Precision field value
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) GetPrecision() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Precision
}

// GetPrecisionOk returns a tuple with the Precision field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) GetPrecisionOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Precision, true
}

// SetPrecision sets field value
func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) SetPrecision(v int32) {
	o.Precision = v
}

func (o InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["value"] = o.Value
	}
	if true {
		toSerialize["units"] = o.Units
	}
	if true {
		toSerialize["precision"] = o.Precision
	}
	return json.Marshal(toSerialize)
}

type NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced struct {
	value *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced
	isSet bool
}

func (v NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) Get() *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced {
	return v.value
}

func (v *NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) Set(val *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) {
	v.value = val
	v.isSet = true
}

func (v NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) IsSet() bool {
	return v.isSet
}

func (v *NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced(val *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) *NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced {
	return &NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced{value: val, isSet: true}
}

func (v NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


