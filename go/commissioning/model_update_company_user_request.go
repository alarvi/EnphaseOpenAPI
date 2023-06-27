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

// checks if the UpdateCompanyUserRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpdateCompanyUserRequest{}

// UpdateCompanyUserRequest struct for UpdateCompanyUserRequest
type UpdateCompanyUserRequest struct {
	// Enlighten-generated ID of the company to which the user belongs, if any. Use the 'company' attribute instead, and the query parameter 'expand=company' to get detailed company information.
	// Deprecated
	CompanyId *int32 `json:"company_id,omitempty"`
	// Email address of the user. Must be unique within Enlighten. Required.
	Email *string `json:"email,omitempty"`
	// Whether the user receives automated emails from Enlighten. Default false.
	EnlightenEmails *bool `json:"enlighten_emails,omitempty"`
	// User's first name. Required.
	FirstName *string `json:"first_name,omitempty"`
	// User's last name. Required.
	LastName *string `json:"last_name,omitempty"`
	// Telephone number of the user. Optional.
	Phone *string `json:"phone,omitempty"`
}

// NewUpdateCompanyUserRequest instantiates a new UpdateCompanyUserRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpdateCompanyUserRequest() *UpdateCompanyUserRequest {
	this := UpdateCompanyUserRequest{}
	return &this
}

// NewUpdateCompanyUserRequestWithDefaults instantiates a new UpdateCompanyUserRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpdateCompanyUserRequestWithDefaults() *UpdateCompanyUserRequest {
	this := UpdateCompanyUserRequest{}
	return &this
}

// GetCompanyId returns the CompanyId field value if set, zero value otherwise.
// Deprecated
func (o *UpdateCompanyUserRequest) GetCompanyId() int32 {
	if o == nil || IsNil(o.CompanyId) {
		var ret int32
		return ret
	}
	return *o.CompanyId
}

// GetCompanyIdOk returns a tuple with the CompanyId field value if set, nil otherwise
// and a boolean to check if the value has been set.
// Deprecated
func (o *UpdateCompanyUserRequest) GetCompanyIdOk() (*int32, bool) {
	if o == nil || IsNil(o.CompanyId) {
		return nil, false
	}
	return o.CompanyId, true
}

// HasCompanyId returns a boolean if a field has been set.
func (o *UpdateCompanyUserRequest) HasCompanyId() bool {
	if o != nil && !IsNil(o.CompanyId) {
		return true
	}

	return false
}

// SetCompanyId gets a reference to the given int32 and assigns it to the CompanyId field.
// Deprecated
func (o *UpdateCompanyUserRequest) SetCompanyId(v int32) {
	o.CompanyId = &v
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *UpdateCompanyUserRequest) GetEmail() string {
	if o == nil || IsNil(o.Email) {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateCompanyUserRequest) GetEmailOk() (*string, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *UpdateCompanyUserRequest) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *UpdateCompanyUserRequest) SetEmail(v string) {
	o.Email = &v
}

// GetEnlightenEmails returns the EnlightenEmails field value if set, zero value otherwise.
func (o *UpdateCompanyUserRequest) GetEnlightenEmails() bool {
	if o == nil || IsNil(o.EnlightenEmails) {
		var ret bool
		return ret
	}
	return *o.EnlightenEmails
}

// GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateCompanyUserRequest) GetEnlightenEmailsOk() (*bool, bool) {
	if o == nil || IsNil(o.EnlightenEmails) {
		return nil, false
	}
	return o.EnlightenEmails, true
}

// HasEnlightenEmails returns a boolean if a field has been set.
func (o *UpdateCompanyUserRequest) HasEnlightenEmails() bool {
	if o != nil && !IsNil(o.EnlightenEmails) {
		return true
	}

	return false
}

// SetEnlightenEmails gets a reference to the given bool and assigns it to the EnlightenEmails field.
func (o *UpdateCompanyUserRequest) SetEnlightenEmails(v bool) {
	o.EnlightenEmails = &v
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *UpdateCompanyUserRequest) GetFirstName() string {
	if o == nil || IsNil(o.FirstName) {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateCompanyUserRequest) GetFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.FirstName) {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *UpdateCompanyUserRequest) HasFirstName() bool {
	if o != nil && !IsNil(o.FirstName) {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *UpdateCompanyUserRequest) SetFirstName(v string) {
	o.FirstName = &v
}

// GetLastName returns the LastName field value if set, zero value otherwise.
func (o *UpdateCompanyUserRequest) GetLastName() string {
	if o == nil || IsNil(o.LastName) {
		var ret string
		return ret
	}
	return *o.LastName
}

// GetLastNameOk returns a tuple with the LastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateCompanyUserRequest) GetLastNameOk() (*string, bool) {
	if o == nil || IsNil(o.LastName) {
		return nil, false
	}
	return o.LastName, true
}

// HasLastName returns a boolean if a field has been set.
func (o *UpdateCompanyUserRequest) HasLastName() bool {
	if o != nil && !IsNil(o.LastName) {
		return true
	}

	return false
}

// SetLastName gets a reference to the given string and assigns it to the LastName field.
func (o *UpdateCompanyUserRequest) SetLastName(v string) {
	o.LastName = &v
}

// GetPhone returns the Phone field value if set, zero value otherwise.
func (o *UpdateCompanyUserRequest) GetPhone() string {
	if o == nil || IsNil(o.Phone) {
		var ret string
		return ret
	}
	return *o.Phone
}

// GetPhoneOk returns a tuple with the Phone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateCompanyUserRequest) GetPhoneOk() (*string, bool) {
	if o == nil || IsNil(o.Phone) {
		return nil, false
	}
	return o.Phone, true
}

// HasPhone returns a boolean if a field has been set.
func (o *UpdateCompanyUserRequest) HasPhone() bool {
	if o != nil && !IsNil(o.Phone) {
		return true
	}

	return false
}

// SetPhone gets a reference to the given string and assigns it to the Phone field.
func (o *UpdateCompanyUserRequest) SetPhone(v string) {
	o.Phone = &v
}

func (o UpdateCompanyUserRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpdateCompanyUserRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompanyId) {
		toSerialize["company_id"] = o.CompanyId
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.EnlightenEmails) {
		toSerialize["enlighten_emails"] = o.EnlightenEmails
	}
	if !IsNil(o.FirstName) {
		toSerialize["first_name"] = o.FirstName
	}
	if !IsNil(o.LastName) {
		toSerialize["last_name"] = o.LastName
	}
	if !IsNil(o.Phone) {
		toSerialize["phone"] = o.Phone
	}
	return toSerialize, nil
}

type NullableUpdateCompanyUserRequest struct {
	value *UpdateCompanyUserRequest
	isSet bool
}

func (v NullableUpdateCompanyUserRequest) Get() *UpdateCompanyUserRequest {
	return v.value
}

func (v *NullableUpdateCompanyUserRequest) Set(val *UpdateCompanyUserRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableUpdateCompanyUserRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableUpdateCompanyUserRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpdateCompanyUserRequest(val *UpdateCompanyUserRequest) *NullableUpdateCompanyUserRequest {
	return &NullableUpdateCompanyUserRequest{value: val, isSet: true}
}

func (v NullableUpdateCompanyUserRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpdateCompanyUserRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

