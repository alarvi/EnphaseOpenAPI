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

// ConsumptionLifetimeResponse struct for ConsumptionLifetimeResponse
type ConsumptionLifetimeResponse struct {
	// When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
	StartDate string `json:"start_date"`
	// The identifier of the system.
	SystemId *int32 `json:"system_id,omitempty"`
	// An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.
	Consumption []int32 `json:"consumption"`
	Meta Meta `json:"meta"`
}

// NewConsumptionLifetimeResponse instantiates a new ConsumptionLifetimeResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConsumptionLifetimeResponse(startDate string, consumption []int32, meta Meta) *ConsumptionLifetimeResponse {
	this := ConsumptionLifetimeResponse{}
	this.StartDate = startDate
	this.Consumption = consumption
	this.Meta = meta
	return &this
}

// NewConsumptionLifetimeResponseWithDefaults instantiates a new ConsumptionLifetimeResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConsumptionLifetimeResponseWithDefaults() *ConsumptionLifetimeResponse {
	this := ConsumptionLifetimeResponse{}
	return &this
}

// GetStartDate returns the StartDate field value
func (o *ConsumptionLifetimeResponse) GetStartDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value
// and a boolean to check if the value has been set.
func (o *ConsumptionLifetimeResponse) GetStartDateOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.StartDate, true
}

// SetStartDate sets field value
func (o *ConsumptionLifetimeResponse) SetStartDate(v string) {
	o.StartDate = v
}

// GetSystemId returns the SystemId field value if set, zero value otherwise.
func (o *ConsumptionLifetimeResponse) GetSystemId() int32 {
	if o == nil || o.SystemId == nil {
		var ret int32
		return ret
	}
	return *o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConsumptionLifetimeResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil || o.SystemId == nil {
		return nil, false
	}
	return o.SystemId, true
}

// HasSystemId returns a boolean if a field has been set.
func (o *ConsumptionLifetimeResponse) HasSystemId() bool {
	if o != nil && o.SystemId != nil {
		return true
	}

	return false
}

// SetSystemId gets a reference to the given int32 and assigns it to the SystemId field.
func (o *ConsumptionLifetimeResponse) SetSystemId(v int32) {
	o.SystemId = &v
}

// GetConsumption returns the Consumption field value
func (o *ConsumptionLifetimeResponse) GetConsumption() []int32 {
	if o == nil {
		var ret []int32
		return ret
	}

	return o.Consumption
}

// GetConsumptionOk returns a tuple with the Consumption field value
// and a boolean to check if the value has been set.
func (o *ConsumptionLifetimeResponse) GetConsumptionOk() (*[]int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Consumption, true
}

// SetConsumption sets field value
func (o *ConsumptionLifetimeResponse) SetConsumption(v []int32) {
	o.Consumption = v
}

// GetMeta returns the Meta field value
func (o *ConsumptionLifetimeResponse) GetMeta() Meta {
	if o == nil {
		var ret Meta
		return ret
	}

	return o.Meta
}

// GetMetaOk returns a tuple with the Meta field value
// and a boolean to check if the value has been set.
func (o *ConsumptionLifetimeResponse) GetMetaOk() (*Meta, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Meta, true
}

// SetMeta sets field value
func (o *ConsumptionLifetimeResponse) SetMeta(v Meta) {
	o.Meta = v
}

func (o ConsumptionLifetimeResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["start_date"] = o.StartDate
	}
	if o.SystemId != nil {
		toSerialize["system_id"] = o.SystemId
	}
	if true {
		toSerialize["consumption"] = o.Consumption
	}
	if true {
		toSerialize["meta"] = o.Meta
	}
	return json.Marshal(toSerialize)
}

type NullableConsumptionLifetimeResponse struct {
	value *ConsumptionLifetimeResponse
	isSet bool
}

func (v NullableConsumptionLifetimeResponse) Get() *ConsumptionLifetimeResponse {
	return v.value
}

func (v *NullableConsumptionLifetimeResponse) Set(val *ConsumptionLifetimeResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableConsumptionLifetimeResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableConsumptionLifetimeResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConsumptionLifetimeResponse(val *ConsumptionLifetimeResponse) *NullableConsumptionLifetimeResponse {
	return &NullableConsumptionLifetimeResponse{value: val, isSet: true}
}

func (v NullableConsumptionLifetimeResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConsumptionLifetimeResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


