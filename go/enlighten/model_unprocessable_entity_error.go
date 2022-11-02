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

// UnprocessableEntityError struct for UnprocessableEntityError
type UnprocessableEntityError struct {
	Reason *string `json:"reason,omitempty"`
	Message *string `json:"message,omitempty"`
	ErrorMessages []string `json:"errorMessages,omitempty"`
	Start *string `json:"start,omitempty"`
	End *string `json:"end,omitempty"`
	StartAt *int32 `json:"start_at,omitempty"`
	EndAt *int32 `json:"end_at,omitempty"`
	FirstInterval *int32 `json:"first_interval,omitempty"`
	LastInterval *int32 `json:"last_interval,omitempty"`
}

// NewUnprocessableEntityError instantiates a new UnprocessableEntityError object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUnprocessableEntityError() *UnprocessableEntityError {
	this := UnprocessableEntityError{}
	return &this
}

// NewUnprocessableEntityErrorWithDefaults instantiates a new UnprocessableEntityError object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUnprocessableEntityErrorWithDefaults() *UnprocessableEntityError {
	this := UnprocessableEntityError{}
	return &this
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetReason() string {
	if o == nil || o.Reason == nil {
		var ret string
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetReasonOk() (*string, bool) {
	if o == nil || o.Reason == nil {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasReason() bool {
	if o != nil && o.Reason != nil {
		return true
	}

	return false
}

// SetReason gets a reference to the given string and assigns it to the Reason field.
func (o *UnprocessableEntityError) SetReason(v string) {
	o.Reason = &v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetMessage() string {
	if o == nil || o.Message == nil {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetMessageOk() (*string, bool) {
	if o == nil || o.Message == nil {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasMessage() bool {
	if o != nil && o.Message != nil {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *UnprocessableEntityError) SetMessage(v string) {
	o.Message = &v
}

// GetErrorMessages returns the ErrorMessages field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetErrorMessages() []string {
	if o == nil || o.ErrorMessages == nil {
		var ret []string
		return ret
	}
	return o.ErrorMessages
}

// GetErrorMessagesOk returns a tuple with the ErrorMessages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetErrorMessagesOk() ([]string, bool) {
	if o == nil || o.ErrorMessages == nil {
		return nil, false
	}
	return o.ErrorMessages, true
}

// HasErrorMessages returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasErrorMessages() bool {
	if o != nil && o.ErrorMessages != nil {
		return true
	}

	return false
}

// SetErrorMessages gets a reference to the given []string and assigns it to the ErrorMessages field.
func (o *UnprocessableEntityError) SetErrorMessages(v []string) {
	o.ErrorMessages = v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetStart() string {
	if o == nil || o.Start == nil {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetStartOk() (*string, bool) {
	if o == nil || o.Start == nil {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasStart() bool {
	if o != nil && o.Start != nil {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *UnprocessableEntityError) SetStart(v string) {
	o.Start = &v
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetEnd() string {
	if o == nil || o.End == nil {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetEndOk() (*string, bool) {
	if o == nil || o.End == nil {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasEnd() bool {
	if o != nil && o.End != nil {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *UnprocessableEntityError) SetEnd(v string) {
	o.End = &v
}

// GetStartAt returns the StartAt field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetStartAt() int32 {
	if o == nil || o.StartAt == nil {
		var ret int32
		return ret
	}
	return *o.StartAt
}

// GetStartAtOk returns a tuple with the StartAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetStartAtOk() (*int32, bool) {
	if o == nil || o.StartAt == nil {
		return nil, false
	}
	return o.StartAt, true
}

// HasStartAt returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasStartAt() bool {
	if o != nil && o.StartAt != nil {
		return true
	}

	return false
}

// SetStartAt gets a reference to the given int32 and assigns it to the StartAt field.
func (o *UnprocessableEntityError) SetStartAt(v int32) {
	o.StartAt = &v
}

// GetEndAt returns the EndAt field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetEndAt() int32 {
	if o == nil || o.EndAt == nil {
		var ret int32
		return ret
	}
	return *o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetEndAtOk() (*int32, bool) {
	if o == nil || o.EndAt == nil {
		return nil, false
	}
	return o.EndAt, true
}

// HasEndAt returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasEndAt() bool {
	if o != nil && o.EndAt != nil {
		return true
	}

	return false
}

// SetEndAt gets a reference to the given int32 and assigns it to the EndAt field.
func (o *UnprocessableEntityError) SetEndAt(v int32) {
	o.EndAt = &v
}

// GetFirstInterval returns the FirstInterval field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetFirstInterval() int32 {
	if o == nil || o.FirstInterval == nil {
		var ret int32
		return ret
	}
	return *o.FirstInterval
}

// GetFirstIntervalOk returns a tuple with the FirstInterval field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetFirstIntervalOk() (*int32, bool) {
	if o == nil || o.FirstInterval == nil {
		return nil, false
	}
	return o.FirstInterval, true
}

// HasFirstInterval returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasFirstInterval() bool {
	if o != nil && o.FirstInterval != nil {
		return true
	}

	return false
}

// SetFirstInterval gets a reference to the given int32 and assigns it to the FirstInterval field.
func (o *UnprocessableEntityError) SetFirstInterval(v int32) {
	o.FirstInterval = &v
}

// GetLastInterval returns the LastInterval field value if set, zero value otherwise.
func (o *UnprocessableEntityError) GetLastInterval() int32 {
	if o == nil || o.LastInterval == nil {
		var ret int32
		return ret
	}
	return *o.LastInterval
}

// GetLastIntervalOk returns a tuple with the LastInterval field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnprocessableEntityError) GetLastIntervalOk() (*int32, bool) {
	if o == nil || o.LastInterval == nil {
		return nil, false
	}
	return o.LastInterval, true
}

// HasLastInterval returns a boolean if a field has been set.
func (o *UnprocessableEntityError) HasLastInterval() bool {
	if o != nil && o.LastInterval != nil {
		return true
	}

	return false
}

// SetLastInterval gets a reference to the given int32 and assigns it to the LastInterval field.
func (o *UnprocessableEntityError) SetLastInterval(v int32) {
	o.LastInterval = &v
}

func (o UnprocessableEntityError) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Reason != nil {
		toSerialize["reason"] = o.Reason
	}
	if o.Message != nil {
		toSerialize["message"] = o.Message
	}
	if o.ErrorMessages != nil {
		toSerialize["errorMessages"] = o.ErrorMessages
	}
	if o.Start != nil {
		toSerialize["start"] = o.Start
	}
	if o.End != nil {
		toSerialize["end"] = o.End
	}
	if o.StartAt != nil {
		toSerialize["start_at"] = o.StartAt
	}
	if o.EndAt != nil {
		toSerialize["end_at"] = o.EndAt
	}
	if o.FirstInterval != nil {
		toSerialize["first_interval"] = o.FirstInterval
	}
	if o.LastInterval != nil {
		toSerialize["last_interval"] = o.LastInterval
	}
	return json.Marshal(toSerialize)
}

type NullableUnprocessableEntityError struct {
	value *UnprocessableEntityError
	isSet bool
}

func (v NullableUnprocessableEntityError) Get() *UnprocessableEntityError {
	return v.value
}

func (v *NullableUnprocessableEntityError) Set(val *UnprocessableEntityError) {
	v.value = val
	v.isSet = true
}

func (v NullableUnprocessableEntityError) IsSet() bool {
	return v.isSet
}

func (v *NullableUnprocessableEntityError) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUnprocessableEntityError(val *UnprocessableEntityError) *NullableUnprocessableEntityError {
	return &NullableUnprocessableEntityError{value: val, isSet: true}
}

func (v NullableUnprocessableEntityError) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUnprocessableEntityError) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


