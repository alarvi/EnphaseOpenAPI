/*
The Enphase Monitoring API

Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.

API version: 4.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monitoring

import (
	"encoding/json"
)

// checks if the StreamSystemLiveData466ResponseError type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StreamSystemLiveData466ResponseError{}

// StreamSystemLiveData466ResponseError struct for StreamSystemLiveData466ResponseError
type StreamSystemLiveData466ResponseError struct {
	// 466
	Code *int32 `json:"code,omitempty"`
	Details []map[string]interface{} `json:"details,omitempty"`
	// Envoy must be active and envoy version must be at least 6.0.0.
	Message *string `json:"message,omitempty"`
	// UNSUPPORTED_ENVOY
	Status *string `json:"status,omitempty"`
}

// NewStreamSystemLiveData466ResponseError instantiates a new StreamSystemLiveData466ResponseError object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStreamSystemLiveData466ResponseError() *StreamSystemLiveData466ResponseError {
	this := StreamSystemLiveData466ResponseError{}
	return &this
}

// NewStreamSystemLiveData466ResponseErrorWithDefaults instantiates a new StreamSystemLiveData466ResponseError object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStreamSystemLiveData466ResponseErrorWithDefaults() *StreamSystemLiveData466ResponseError {
	this := StreamSystemLiveData466ResponseError{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *StreamSystemLiveData466ResponseError) GetCode() int32 {
	if o == nil || IsNil(o.Code) {
		var ret int32
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StreamSystemLiveData466ResponseError) GetCodeOk() (*int32, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *StreamSystemLiveData466ResponseError) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given int32 and assigns it to the Code field.
func (o *StreamSystemLiveData466ResponseError) SetCode(v int32) {
	o.Code = &v
}

// GetDetails returns the Details field value if set, zero value otherwise.
func (o *StreamSystemLiveData466ResponseError) GetDetails() []map[string]interface{} {
	if o == nil || IsNil(o.Details) {
		var ret []map[string]interface{}
		return ret
	}
	return o.Details
}

// GetDetailsOk returns a tuple with the Details field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StreamSystemLiveData466ResponseError) GetDetailsOk() ([]map[string]interface{}, bool) {
	if o == nil || IsNil(o.Details) {
		return nil, false
	}
	return o.Details, true
}

// HasDetails returns a boolean if a field has been set.
func (o *StreamSystemLiveData466ResponseError) HasDetails() bool {
	if o != nil && !IsNil(o.Details) {
		return true
	}

	return false
}

// SetDetails gets a reference to the given []map[string]interface{} and assigns it to the Details field.
func (o *StreamSystemLiveData466ResponseError) SetDetails(v []map[string]interface{}) {
	o.Details = v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *StreamSystemLiveData466ResponseError) GetMessage() string {
	if o == nil || IsNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StreamSystemLiveData466ResponseError) GetMessageOk() (*string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *StreamSystemLiveData466ResponseError) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *StreamSystemLiveData466ResponseError) SetMessage(v string) {
	o.Message = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *StreamSystemLiveData466ResponseError) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StreamSystemLiveData466ResponseError) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *StreamSystemLiveData466ResponseError) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *StreamSystemLiveData466ResponseError) SetStatus(v string) {
	o.Status = &v
}

func (o StreamSystemLiveData466ResponseError) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StreamSystemLiveData466ResponseError) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Details) {
		toSerialize["details"] = o.Details
	}
	if !IsNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableStreamSystemLiveData466ResponseError struct {
	value *StreamSystemLiveData466ResponseError
	isSet bool
}

func (v NullableStreamSystemLiveData466ResponseError) Get() *StreamSystemLiveData466ResponseError {
	return v.value
}

func (v *NullableStreamSystemLiveData466ResponseError) Set(val *StreamSystemLiveData466ResponseError) {
	v.value = val
	v.isSet = true
}

func (v NullableStreamSystemLiveData466ResponseError) IsSet() bool {
	return v.isSet
}

func (v *NullableStreamSystemLiveData466ResponseError) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStreamSystemLiveData466ResponseError(val *StreamSystemLiveData466ResponseError) *NullableStreamSystemLiveData466ResponseError {
	return &NullableStreamSystemLiveData466ResponseError{value: val, isSet: true}
}

func (v NullableStreamSystemLiveData466ResponseError) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStreamSystemLiveData466ResponseError) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


