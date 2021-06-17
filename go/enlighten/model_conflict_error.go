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

// ConflictError struct for ConflictError
type ConflictError struct {
	Reason string `json:"reason"`
	Message []string `json:"message"`
	Period string `json:"period"`
	PeriodStart int32 `json:"period_start"`
	PeriodEnd int32 `json:"period_end"`
	Limit int32 `json:"limit"`
}

// NewConflictError instantiates a new ConflictError object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConflictError(reason string, message []string, period string, periodStart int32, periodEnd int32, limit int32) *ConflictError {
	this := ConflictError{}
	this.Reason = reason
	this.Message = message
	this.Period = period
	this.PeriodStart = periodStart
	this.PeriodEnd = periodEnd
	this.Limit = limit
	return &this
}

// NewConflictErrorWithDefaults instantiates a new ConflictError object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConflictErrorWithDefaults() *ConflictError {
	this := ConflictError{}
	return &this
}

// GetReason returns the Reason field value
func (o *ConflictError) GetReason() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Reason
}

// GetReasonOk returns a tuple with the Reason field value
// and a boolean to check if the value has been set.
func (o *ConflictError) GetReasonOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Reason, true
}

// SetReason sets field value
func (o *ConflictError) SetReason(v string) {
	o.Reason = v
}

// GetMessage returns the Message field value
func (o *ConflictError) GetMessage() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.Message
}

// GetMessageOk returns a tuple with the Message field value
// and a boolean to check if the value has been set.
func (o *ConflictError) GetMessageOk() (*[]string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Message, true
}

// SetMessage sets field value
func (o *ConflictError) SetMessage(v []string) {
	o.Message = v
}

// GetPeriod returns the Period field value
func (o *ConflictError) GetPeriod() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Period
}

// GetPeriodOk returns a tuple with the Period field value
// and a boolean to check if the value has been set.
func (o *ConflictError) GetPeriodOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Period, true
}

// SetPeriod sets field value
func (o *ConflictError) SetPeriod(v string) {
	o.Period = v
}

// GetPeriodStart returns the PeriodStart field value
func (o *ConflictError) GetPeriodStart() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.PeriodStart
}

// GetPeriodStartOk returns a tuple with the PeriodStart field value
// and a boolean to check if the value has been set.
func (o *ConflictError) GetPeriodStartOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PeriodStart, true
}

// SetPeriodStart sets field value
func (o *ConflictError) SetPeriodStart(v int32) {
	o.PeriodStart = v
}

// GetPeriodEnd returns the PeriodEnd field value
func (o *ConflictError) GetPeriodEnd() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.PeriodEnd
}

// GetPeriodEndOk returns a tuple with the PeriodEnd field value
// and a boolean to check if the value has been set.
func (o *ConflictError) GetPeriodEndOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PeriodEnd, true
}

// SetPeriodEnd sets field value
func (o *ConflictError) SetPeriodEnd(v int32) {
	o.PeriodEnd = v
}

// GetLimit returns the Limit field value
func (o *ConflictError) GetLimit() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Limit
}

// GetLimitOk returns a tuple with the Limit field value
// and a boolean to check if the value has been set.
func (o *ConflictError) GetLimitOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Limit, true
}

// SetLimit sets field value
func (o *ConflictError) SetLimit(v int32) {
	o.Limit = v
}

func (o ConflictError) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["reason"] = o.Reason
	}
	if true {
		toSerialize["message"] = o.Message
	}
	if true {
		toSerialize["period"] = o.Period
	}
	if true {
		toSerialize["period_start"] = o.PeriodStart
	}
	if true {
		toSerialize["period_end"] = o.PeriodEnd
	}
	if true {
		toSerialize["limit"] = o.Limit
	}
	return json.Marshal(toSerialize)
}

type NullableConflictError struct {
	value *ConflictError
	isSet bool
}

func (v NullableConflictError) Get() *ConflictError {
	return v.value
}

func (v *NullableConflictError) Set(val *ConflictError) {
	v.value = val
	v.isSet = true
}

func (v NullableConflictError) IsSet() bool {
	return v.isSet
}

func (v *NullableConflictError) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConflictError(val *ConflictError) *NullableConflictError {
	return &NullableConflictError{value: val, isSet: true}
}

func (v NullableConflictError) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConflictError) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

