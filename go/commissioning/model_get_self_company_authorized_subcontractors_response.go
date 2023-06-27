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

// checks if the GetSelfCompanyAuthorizedSubcontractorsResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSelfCompanyAuthorizedSubcontractorsResponse{}

// GetSelfCompanyAuthorizedSubcontractorsResponse struct for GetSelfCompanyAuthorizedSubcontractorsResponse
type GetSelfCompanyAuthorizedSubcontractorsResponse struct {
	// Enlighten ID of the API user's company.
	CompanyId *int32 `json:"company_id,omitempty"`
	// Name of the API user's company.
	CompanyName *string `json:"company_name,omitempty"`
	// A list of subcontractors belonging to the API user's company. May be empty.
	AuthorizedSubcontractors []GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner `json:"authorized_subcontractors,omitempty"`
}

// NewGetSelfCompanyAuthorizedSubcontractorsResponse instantiates a new GetSelfCompanyAuthorizedSubcontractorsResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSelfCompanyAuthorizedSubcontractorsResponse() *GetSelfCompanyAuthorizedSubcontractorsResponse {
	this := GetSelfCompanyAuthorizedSubcontractorsResponse{}
	return &this
}

// NewGetSelfCompanyAuthorizedSubcontractorsResponseWithDefaults instantiates a new GetSelfCompanyAuthorizedSubcontractorsResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSelfCompanyAuthorizedSubcontractorsResponseWithDefaults() *GetSelfCompanyAuthorizedSubcontractorsResponse {
	this := GetSelfCompanyAuthorizedSubcontractorsResponse{}
	return &this
}

// GetCompanyId returns the CompanyId field value if set, zero value otherwise.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetCompanyId() int32 {
	if o == nil || IsNil(o.CompanyId) {
		var ret int32
		return ret
	}
	return *o.CompanyId
}

// GetCompanyIdOk returns a tuple with the CompanyId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetCompanyIdOk() (*int32, bool) {
	if o == nil || IsNil(o.CompanyId) {
		return nil, false
	}
	return o.CompanyId, true
}

// HasCompanyId returns a boolean if a field has been set.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) HasCompanyId() bool {
	if o != nil && !IsNil(o.CompanyId) {
		return true
	}

	return false
}

// SetCompanyId gets a reference to the given int32 and assigns it to the CompanyId field.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) SetCompanyId(v int32) {
	o.CompanyId = &v
}

// GetCompanyName returns the CompanyName field value if set, zero value otherwise.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetCompanyName() string {
	if o == nil || IsNil(o.CompanyName) {
		var ret string
		return ret
	}
	return *o.CompanyName
}

// GetCompanyNameOk returns a tuple with the CompanyName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetCompanyNameOk() (*string, bool) {
	if o == nil || IsNil(o.CompanyName) {
		return nil, false
	}
	return o.CompanyName, true
}

// HasCompanyName returns a boolean if a field has been set.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) HasCompanyName() bool {
	if o != nil && !IsNil(o.CompanyName) {
		return true
	}

	return false
}

// SetCompanyName gets a reference to the given string and assigns it to the CompanyName field.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) SetCompanyName(v string) {
	o.CompanyName = &v
}

// GetAuthorizedSubcontractors returns the AuthorizedSubcontractors field value if set, zero value otherwise.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetAuthorizedSubcontractors() []GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner {
	if o == nil || IsNil(o.AuthorizedSubcontractors) {
		var ret []GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner
		return ret
	}
	return o.AuthorizedSubcontractors
}

// GetAuthorizedSubcontractorsOk returns a tuple with the AuthorizedSubcontractors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetAuthorizedSubcontractorsOk() ([]GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner, bool) {
	if o == nil || IsNil(o.AuthorizedSubcontractors) {
		return nil, false
	}
	return o.AuthorizedSubcontractors, true
}

// HasAuthorizedSubcontractors returns a boolean if a field has been set.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) HasAuthorizedSubcontractors() bool {
	if o != nil && !IsNil(o.AuthorizedSubcontractors) {
		return true
	}

	return false
}

// SetAuthorizedSubcontractors gets a reference to the given []GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner and assigns it to the AuthorizedSubcontractors field.
func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) SetAuthorizedSubcontractors(v []GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) {
	o.AuthorizedSubcontractors = v
}

func (o GetSelfCompanyAuthorizedSubcontractorsResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSelfCompanyAuthorizedSubcontractorsResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompanyId) {
		toSerialize["company_id"] = o.CompanyId
	}
	if !IsNil(o.CompanyName) {
		toSerialize["company_name"] = o.CompanyName
	}
	if !IsNil(o.AuthorizedSubcontractors) {
		toSerialize["authorized_subcontractors"] = o.AuthorizedSubcontractors
	}
	return toSerialize, nil
}

type NullableGetSelfCompanyAuthorizedSubcontractorsResponse struct {
	value *GetSelfCompanyAuthorizedSubcontractorsResponse
	isSet bool
}

func (v NullableGetSelfCompanyAuthorizedSubcontractorsResponse) Get() *GetSelfCompanyAuthorizedSubcontractorsResponse {
	return v.value
}

func (v *NullableGetSelfCompanyAuthorizedSubcontractorsResponse) Set(val *GetSelfCompanyAuthorizedSubcontractorsResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSelfCompanyAuthorizedSubcontractorsResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSelfCompanyAuthorizedSubcontractorsResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSelfCompanyAuthorizedSubcontractorsResponse(val *GetSelfCompanyAuthorizedSubcontractorsResponse) *NullableGetSelfCompanyAuthorizedSubcontractorsResponse {
	return &NullableGetSelfCompanyAuthorizedSubcontractorsResponse{value: val, isSet: true}
}

func (v NullableGetSelfCompanyAuthorizedSubcontractorsResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSelfCompanyAuthorizedSubcontractorsResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

