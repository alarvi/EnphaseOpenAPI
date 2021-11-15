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

// SystemsResponseSystems struct for SystemsResponseSystems
type SystemsResponseSystems struct {
	// The Enlighten ID of the system.
	SystemId int32 `json:"system_id"`
	// The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes.
	SystemName string `json:"system_name"`
	// The display name of the system. Use this when displaying the system name on a public list or view.
	SystemPublicName string `json:"system_public_name"`
	// If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned.
	Reference *string `json:"reference,omitempty"`
	// If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned.
	OtherReferences *[]string `json:"other_references,omitempty"`
	// The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference.
	Country string `json:"country"`
	// The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference.
	State string `json:"state"`
	// The name of the city where the system is located.
	City string `json:"city"`
	// The postal code where the system is located.
	PostalCode string `json:"postal_code"`
	// The timezone of the system.
	Timezone string `json:"timezone"`
	ConnectionType ConnectionType `json:"connection_type"`
	// The current status of the system. You can find this and more in the `meta` property.
	// Deprecated
	Status string `json:"status"`
	Meta Meta `json:"meta"`
}

// NewSystemsResponseSystems instantiates a new SystemsResponseSystems object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSystemsResponseSystems(systemId int32, systemName string, systemPublicName string, country string, state string, city string, postalCode string, timezone string, connectionType ConnectionType, status string, meta Meta) *SystemsResponseSystems {
	this := SystemsResponseSystems{}
	this.SystemId = systemId
	this.SystemName = systemName
	this.SystemPublicName = systemPublicName
	this.Country = country
	this.State = state
	this.City = city
	this.PostalCode = postalCode
	this.Timezone = timezone
	this.ConnectionType = connectionType
	this.Status = status
	this.Meta = meta
	return &this
}

// NewSystemsResponseSystemsWithDefaults instantiates a new SystemsResponseSystems object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSystemsResponseSystemsWithDefaults() *SystemsResponseSystems {
	this := SystemsResponseSystems{}
	return &this
}

// GetSystemId returns the SystemId field value
func (o *SystemsResponseSystems) GetSystemId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetSystemIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SystemId, true
}

// SetSystemId sets field value
func (o *SystemsResponseSystems) SetSystemId(v int32) {
	o.SystemId = v
}

// GetSystemName returns the SystemName field value
func (o *SystemsResponseSystems) GetSystemName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SystemName
}

// GetSystemNameOk returns a tuple with the SystemName field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetSystemNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SystemName, true
}

// SetSystemName sets field value
func (o *SystemsResponseSystems) SetSystemName(v string) {
	o.SystemName = v
}

// GetSystemPublicName returns the SystemPublicName field value
func (o *SystemsResponseSystems) GetSystemPublicName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SystemPublicName
}

// GetSystemPublicNameOk returns a tuple with the SystemPublicName field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetSystemPublicNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SystemPublicName, true
}

// SetSystemPublicName sets field value
func (o *SystemsResponseSystems) SetSystemPublicName(v string) {
	o.SystemPublicName = v
}

// GetReference returns the Reference field value if set, zero value otherwise.
func (o *SystemsResponseSystems) GetReference() string {
	if o == nil || o.Reference == nil {
		var ret string
		return ret
	}
	return *o.Reference
}

// GetReferenceOk returns a tuple with the Reference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetReferenceOk() (*string, bool) {
	if o == nil || o.Reference == nil {
		return nil, false
	}
	return o.Reference, true
}

// HasReference returns a boolean if a field has been set.
func (o *SystemsResponseSystems) HasReference() bool {
	if o != nil && o.Reference != nil {
		return true
	}

	return false
}

// SetReference gets a reference to the given string and assigns it to the Reference field.
func (o *SystemsResponseSystems) SetReference(v string) {
	o.Reference = &v
}

// GetOtherReferences returns the OtherReferences field value if set, zero value otherwise.
func (o *SystemsResponseSystems) GetOtherReferences() []string {
	if o == nil || o.OtherReferences == nil {
		var ret []string
		return ret
	}
	return *o.OtherReferences
}

// GetOtherReferencesOk returns a tuple with the OtherReferences field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetOtherReferencesOk() (*[]string, bool) {
	if o == nil || o.OtherReferences == nil {
		return nil, false
	}
	return o.OtherReferences, true
}

// HasOtherReferences returns a boolean if a field has been set.
func (o *SystemsResponseSystems) HasOtherReferences() bool {
	if o != nil && o.OtherReferences != nil {
		return true
	}

	return false
}

// SetOtherReferences gets a reference to the given []string and assigns it to the OtherReferences field.
func (o *SystemsResponseSystems) SetOtherReferences(v []string) {
	o.OtherReferences = &v
}

// GetCountry returns the Country field value
func (o *SystemsResponseSystems) GetCountry() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Country
}

// GetCountryOk returns a tuple with the Country field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetCountryOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Country, true
}

// SetCountry sets field value
func (o *SystemsResponseSystems) SetCountry(v string) {
	o.Country = v
}

// GetState returns the State field value
func (o *SystemsResponseSystems) GetState() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.State
}

// GetStateOk returns a tuple with the State field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetStateOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.State, true
}

// SetState sets field value
func (o *SystemsResponseSystems) SetState(v string) {
	o.State = v
}

// GetCity returns the City field value
func (o *SystemsResponseSystems) GetCity() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.City
}

// GetCityOk returns a tuple with the City field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetCityOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.City, true
}

// SetCity sets field value
func (o *SystemsResponseSystems) SetCity(v string) {
	o.City = v
}

// GetPostalCode returns the PostalCode field value
func (o *SystemsResponseSystems) GetPostalCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.PostalCode
}

// GetPostalCodeOk returns a tuple with the PostalCode field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetPostalCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PostalCode, true
}

// SetPostalCode sets field value
func (o *SystemsResponseSystems) SetPostalCode(v string) {
	o.PostalCode = v
}

// GetTimezone returns the Timezone field value
func (o *SystemsResponseSystems) GetTimezone() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Timezone
}

// GetTimezoneOk returns a tuple with the Timezone field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetTimezoneOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Timezone, true
}

// SetTimezone sets field value
func (o *SystemsResponseSystems) SetTimezone(v string) {
	o.Timezone = v
}

// GetConnectionType returns the ConnectionType field value
func (o *SystemsResponseSystems) GetConnectionType() ConnectionType {
	if o == nil {
		var ret ConnectionType
		return ret
	}

	return o.ConnectionType
}

// GetConnectionTypeOk returns a tuple with the ConnectionType field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetConnectionTypeOk() (*ConnectionType, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ConnectionType, true
}

// SetConnectionType sets field value
func (o *SystemsResponseSystems) SetConnectionType(v ConnectionType) {
	o.ConnectionType = v
}

// GetStatus returns the Status field value
// Deprecated
func (o *SystemsResponseSystems) GetStatus() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
// Deprecated
func (o *SystemsResponseSystems) GetStatusOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
// Deprecated
func (o *SystemsResponseSystems) SetStatus(v string) {
	o.Status = v
}

// GetMeta returns the Meta field value
func (o *SystemsResponseSystems) GetMeta() Meta {
	if o == nil {
		var ret Meta
		return ret
	}

	return o.Meta
}

// GetMetaOk returns a tuple with the Meta field value
// and a boolean to check if the value has been set.
func (o *SystemsResponseSystems) GetMetaOk() (*Meta, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Meta, true
}

// SetMeta sets field value
func (o *SystemsResponseSystems) SetMeta(v Meta) {
	o.Meta = v
}

func (o SystemsResponseSystems) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["system_id"] = o.SystemId
	}
	if true {
		toSerialize["system_name"] = o.SystemName
	}
	if true {
		toSerialize["system_public_name"] = o.SystemPublicName
	}
	if o.Reference != nil {
		toSerialize["reference"] = o.Reference
	}
	if o.OtherReferences != nil {
		toSerialize["other_references"] = o.OtherReferences
	}
	if true {
		toSerialize["country"] = o.Country
	}
	if true {
		toSerialize["state"] = o.State
	}
	if true {
		toSerialize["city"] = o.City
	}
	if true {
		toSerialize["postal_code"] = o.PostalCode
	}
	if true {
		toSerialize["timezone"] = o.Timezone
	}
	if true {
		toSerialize["connection_type"] = o.ConnectionType
	}
	if true {
		toSerialize["status"] = o.Status
	}
	if true {
		toSerialize["meta"] = o.Meta
	}
	return json.Marshal(toSerialize)
}

type NullableSystemsResponseSystems struct {
	value *SystemsResponseSystems
	isSet bool
}

func (v NullableSystemsResponseSystems) Get() *SystemsResponseSystems {
	return v.value
}

func (v *NullableSystemsResponseSystems) Set(val *SystemsResponseSystems) {
	v.value = val
	v.isSet = true
}

func (v NullableSystemsResponseSystems) IsSet() bool {
	return v.isSet
}

func (v *NullableSystemsResponseSystems) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSystemsResponseSystems(val *SystemsResponseSystems) *NullableSystemsResponseSystems {
	return &NullableSystemsResponseSystems{value: val, isSet: true}
}

func (v NullableSystemsResponseSystems) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSystemsResponseSystems) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


