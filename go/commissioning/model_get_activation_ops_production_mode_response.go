/*
The Enphase Commissioning API

Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.

API version: 4.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package commissioning

import (
	"encoding/json"
)

// checks if the GetActivationOpsProductionModeResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetActivationOpsProductionModeResponse{}

// GetActivationOpsProductionModeResponse struct for GetActivationOpsProductionModeResponse
type GetActivationOpsProductionModeResponse struct {
	Mode *string `json:"mode,omitempty"`
	// Total number of microinverters in the system.
	TotalMicros *int32 `json:"total_micros,omitempty"`
	// Total number of microinverters producing energy in the system.
	EnergyProducingMicros *int32 `json:"energy_producing_micros,omitempty"`
}

// NewGetActivationOpsProductionModeResponse instantiates a new GetActivationOpsProductionModeResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetActivationOpsProductionModeResponse() *GetActivationOpsProductionModeResponse {
	this := GetActivationOpsProductionModeResponse{}
	return &this
}

// NewGetActivationOpsProductionModeResponseWithDefaults instantiates a new GetActivationOpsProductionModeResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetActivationOpsProductionModeResponseWithDefaults() *GetActivationOpsProductionModeResponse {
	this := GetActivationOpsProductionModeResponse{}
	return &this
}

// GetMode returns the Mode field value if set, zero value otherwise.
func (o *GetActivationOpsProductionModeResponse) GetMode() string {
	if o == nil || IsNil(o.Mode) {
		var ret string
		return ret
	}
	return *o.Mode
}

// GetModeOk returns a tuple with the Mode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetActivationOpsProductionModeResponse) GetModeOk() (*string, bool) {
	if o == nil || IsNil(o.Mode) {
		return nil, false
	}
	return o.Mode, true
}

// HasMode returns a boolean if a field has been set.
func (o *GetActivationOpsProductionModeResponse) HasMode() bool {
	if o != nil && !IsNil(o.Mode) {
		return true
	}

	return false
}

// SetMode gets a reference to the given string and assigns it to the Mode field.
func (o *GetActivationOpsProductionModeResponse) SetMode(v string) {
	o.Mode = &v
}

// GetTotalMicros returns the TotalMicros field value if set, zero value otherwise.
func (o *GetActivationOpsProductionModeResponse) GetTotalMicros() int32 {
	if o == nil || IsNil(o.TotalMicros) {
		var ret int32
		return ret
	}
	return *o.TotalMicros
}

// GetTotalMicrosOk returns a tuple with the TotalMicros field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetActivationOpsProductionModeResponse) GetTotalMicrosOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalMicros) {
		return nil, false
	}
	return o.TotalMicros, true
}

// HasTotalMicros returns a boolean if a field has been set.
func (o *GetActivationOpsProductionModeResponse) HasTotalMicros() bool {
	if o != nil && !IsNil(o.TotalMicros) {
		return true
	}

	return false
}

// SetTotalMicros gets a reference to the given int32 and assigns it to the TotalMicros field.
func (o *GetActivationOpsProductionModeResponse) SetTotalMicros(v int32) {
	o.TotalMicros = &v
}

// GetEnergyProducingMicros returns the EnergyProducingMicros field value if set, zero value otherwise.
func (o *GetActivationOpsProductionModeResponse) GetEnergyProducingMicros() int32 {
	if o == nil || IsNil(o.EnergyProducingMicros) {
		var ret int32
		return ret
	}
	return *o.EnergyProducingMicros
}

// GetEnergyProducingMicrosOk returns a tuple with the EnergyProducingMicros field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetActivationOpsProductionModeResponse) GetEnergyProducingMicrosOk() (*int32, bool) {
	if o == nil || IsNil(o.EnergyProducingMicros) {
		return nil, false
	}
	return o.EnergyProducingMicros, true
}

// HasEnergyProducingMicros returns a boolean if a field has been set.
func (o *GetActivationOpsProductionModeResponse) HasEnergyProducingMicros() bool {
	if o != nil && !IsNil(o.EnergyProducingMicros) {
		return true
	}

	return false
}

// SetEnergyProducingMicros gets a reference to the given int32 and assigns it to the EnergyProducingMicros field.
func (o *GetActivationOpsProductionModeResponse) SetEnergyProducingMicros(v int32) {
	o.EnergyProducingMicros = &v
}

func (o GetActivationOpsProductionModeResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetActivationOpsProductionModeResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Mode) {
		toSerialize["mode"] = o.Mode
	}
	if !IsNil(o.TotalMicros) {
		toSerialize["total_micros"] = o.TotalMicros
	}
	if !IsNil(o.EnergyProducingMicros) {
		toSerialize["energy_producing_micros"] = o.EnergyProducingMicros
	}
	return toSerialize, nil
}

type NullableGetActivationOpsProductionModeResponse struct {
	value *GetActivationOpsProductionModeResponse
	isSet bool
}

func (v NullableGetActivationOpsProductionModeResponse) Get() *GetActivationOpsProductionModeResponse {
	return v.value
}

func (v *NullableGetActivationOpsProductionModeResponse) Set(val *GetActivationOpsProductionModeResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableGetActivationOpsProductionModeResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableGetActivationOpsProductionModeResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetActivationOpsProductionModeResponse(val *GetActivationOpsProductionModeResponse) *NullableGetActivationOpsProductionModeResponse {
	return &NullableGetActivationOpsProductionModeResponse{value: val, isSet: true}
}

func (v NullableGetActivationOpsProductionModeResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetActivationOpsProductionModeResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

