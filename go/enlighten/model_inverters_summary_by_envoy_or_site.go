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

// InvertersSummaryByEnvoyOrSite struct for InvertersSummaryByEnvoyOrSite
type InvertersSummaryByEnvoyOrSite struct {
	SignalStrength int32 `json:"signal_strength"`
	// A list of active inverters on this system, including serial and model numbers.
	MicroInverters []InvertersSummaryByEnvoyOrSiteMicroInverters `json:"micro_inverters"`
}

// NewInvertersSummaryByEnvoyOrSite instantiates a new InvertersSummaryByEnvoyOrSite object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInvertersSummaryByEnvoyOrSite(signalStrength int32, microInverters []InvertersSummaryByEnvoyOrSiteMicroInverters) *InvertersSummaryByEnvoyOrSite {
	this := InvertersSummaryByEnvoyOrSite{}
	this.SignalStrength = signalStrength
	this.MicroInverters = microInverters
	return &this
}

// NewInvertersSummaryByEnvoyOrSiteWithDefaults instantiates a new InvertersSummaryByEnvoyOrSite object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInvertersSummaryByEnvoyOrSiteWithDefaults() *InvertersSummaryByEnvoyOrSite {
	this := InvertersSummaryByEnvoyOrSite{}
	return &this
}

// GetSignalStrength returns the SignalStrength field value
func (o *InvertersSummaryByEnvoyOrSite) GetSignalStrength() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SignalStrength
}

// GetSignalStrengthOk returns a tuple with the SignalStrength field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSite) GetSignalStrengthOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SignalStrength, true
}

// SetSignalStrength sets field value
func (o *InvertersSummaryByEnvoyOrSite) SetSignalStrength(v int32) {
	o.SignalStrength = v
}

// GetMicroInverters returns the MicroInverters field value
func (o *InvertersSummaryByEnvoyOrSite) GetMicroInverters() []InvertersSummaryByEnvoyOrSiteMicroInverters {
	if o == nil {
		var ret []InvertersSummaryByEnvoyOrSiteMicroInverters
		return ret
	}

	return o.MicroInverters
}

// GetMicroInvertersOk returns a tuple with the MicroInverters field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSite) GetMicroInvertersOk() (*[]InvertersSummaryByEnvoyOrSiteMicroInverters, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MicroInverters, true
}

// SetMicroInverters sets field value
func (o *InvertersSummaryByEnvoyOrSite) SetMicroInverters(v []InvertersSummaryByEnvoyOrSiteMicroInverters) {
	o.MicroInverters = v
}

func (o InvertersSummaryByEnvoyOrSite) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["signal_strength"] = o.SignalStrength
	}
	if true {
		toSerialize["micro_inverters"] = o.MicroInverters
	}
	return json.Marshal(toSerialize)
}

type NullableInvertersSummaryByEnvoyOrSite struct {
	value *InvertersSummaryByEnvoyOrSite
	isSet bool
}

func (v NullableInvertersSummaryByEnvoyOrSite) Get() *InvertersSummaryByEnvoyOrSite {
	return v.value
}

func (v *NullableInvertersSummaryByEnvoyOrSite) Set(val *InvertersSummaryByEnvoyOrSite) {
	v.value = val
	v.isSet = true
}

func (v NullableInvertersSummaryByEnvoyOrSite) IsSet() bool {
	return v.isSet
}

func (v *NullableInvertersSummaryByEnvoyOrSite) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInvertersSummaryByEnvoyOrSite(val *InvertersSummaryByEnvoyOrSite) *NullableInvertersSummaryByEnvoyOrSite {
	return &NullableInvertersSummaryByEnvoyOrSite{value: val, isSet: true}
}

func (v NullableInvertersSummaryByEnvoyOrSite) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInvertersSummaryByEnvoyOrSite) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

