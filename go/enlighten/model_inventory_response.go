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

// InventoryResponse struct for InventoryResponse
type InventoryResponse struct {
	// Enlighten ID for this system.
	SystemId int32 `json:"system_id"`
	// A list of Envoys on this system, including serial number.
	Envoys []InventoryResponseEnvoys `json:"envoys,omitempty"`
	// A list of inverters on this system, including serial and model numbers.
	Inverters []InventoryResponseEnvoys `json:"inverters"`
	// A list of meters on this system, including serial number, manufacturer, and model number.
	Meters []InventoryResponseMeters `json:"meters"`
	Meta Meta `json:"meta"`
}

// NewInventoryResponse instantiates a new InventoryResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInventoryResponse(systemId int32, inverters []InventoryResponseEnvoys, meters []InventoryResponseMeters, meta Meta) *InventoryResponse {
	this := InventoryResponse{}
	this.SystemId = systemId
	this.Inverters = inverters
	this.Meters = meters
	this.Meta = meta
	return &this
}

// NewInventoryResponseWithDefaults instantiates a new InventoryResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInventoryResponseWithDefaults() *InventoryResponse {
	this := InventoryResponse{}
	return &this
}

// GetSystemId returns the SystemId field value
func (o *InventoryResponse) GetSystemId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value
// and a boolean to check if the value has been set.
func (o *InventoryResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SystemId, true
}

// SetSystemId sets field value
func (o *InventoryResponse) SetSystemId(v int32) {
	o.SystemId = v
}

// GetEnvoys returns the Envoys field value if set, zero value otherwise.
func (o *InventoryResponse) GetEnvoys() []InventoryResponseEnvoys {
	if o == nil || o.Envoys == nil {
		var ret []InventoryResponseEnvoys
		return ret
	}
	return o.Envoys
}

// GetEnvoysOk returns a tuple with the Envoys field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryResponse) GetEnvoysOk() ([]InventoryResponseEnvoys, bool) {
	if o == nil || o.Envoys == nil {
		return nil, false
	}
	return o.Envoys, true
}

// HasEnvoys returns a boolean if a field has been set.
func (o *InventoryResponse) HasEnvoys() bool {
	if o != nil && o.Envoys != nil {
		return true
	}

	return false
}

// SetEnvoys gets a reference to the given []InventoryResponseEnvoys and assigns it to the Envoys field.
func (o *InventoryResponse) SetEnvoys(v []InventoryResponseEnvoys) {
	o.Envoys = v
}

// GetInverters returns the Inverters field value
func (o *InventoryResponse) GetInverters() []InventoryResponseEnvoys {
	if o == nil {
		var ret []InventoryResponseEnvoys
		return ret
	}

	return o.Inverters
}

// GetInvertersOk returns a tuple with the Inverters field value
// and a boolean to check if the value has been set.
func (o *InventoryResponse) GetInvertersOk() ([]InventoryResponseEnvoys, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Inverters, true
}

// SetInverters sets field value
func (o *InventoryResponse) SetInverters(v []InventoryResponseEnvoys) {
	o.Inverters = v
}

// GetMeters returns the Meters field value
func (o *InventoryResponse) GetMeters() []InventoryResponseMeters {
	if o == nil {
		var ret []InventoryResponseMeters
		return ret
	}

	return o.Meters
}

// GetMetersOk returns a tuple with the Meters field value
// and a boolean to check if the value has been set.
func (o *InventoryResponse) GetMetersOk() ([]InventoryResponseMeters, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Meters, true
}

// SetMeters sets field value
func (o *InventoryResponse) SetMeters(v []InventoryResponseMeters) {
	o.Meters = v
}

// GetMeta returns the Meta field value
func (o *InventoryResponse) GetMeta() Meta {
	if o == nil {
		var ret Meta
		return ret
	}

	return o.Meta
}

// GetMetaOk returns a tuple with the Meta field value
// and a boolean to check if the value has been set.
func (o *InventoryResponse) GetMetaOk() (*Meta, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Meta, true
}

// SetMeta sets field value
func (o *InventoryResponse) SetMeta(v Meta) {
	o.Meta = v
}

func (o InventoryResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["system_id"] = o.SystemId
	}
	if o.Envoys != nil {
		toSerialize["envoys"] = o.Envoys
	}
	if true {
		toSerialize["inverters"] = o.Inverters
	}
	if true {
		toSerialize["meters"] = o.Meters
	}
	if true {
		toSerialize["meta"] = o.Meta
	}
	return json.Marshal(toSerialize)
}

type NullableInventoryResponse struct {
	value *InventoryResponse
	isSet bool
}

func (v NullableInventoryResponse) Get() *InventoryResponse {
	return v.value
}

func (v *NullableInventoryResponse) Set(val *InventoryResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableInventoryResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableInventoryResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInventoryResponse(val *InventoryResponse) *NullableInventoryResponse {
	return &NullableInventoryResponse{value: val, isSet: true}
}

func (v NullableInventoryResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInventoryResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


