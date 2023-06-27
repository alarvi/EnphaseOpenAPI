/*
The Enphase Commissioning API

Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.

API version: 4.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package commissioning

import (
	"encoding/json"
	"fmt"
)

// SystemSourceEnum Source of production measurements taken on the system. When 'meter', production values come from a revenue-grade meter on the system. When 'microinverters', production values come from the microinverters on the system.
type SystemSourceEnum string

// List of SystemSourceEnum
const (
	SYSTEMSOURCEENUM_METER SystemSourceEnum = "meter"
	SYSTEMSOURCEENUM_MICROINVERTERS SystemSourceEnum = "microinverters"
)

// All allowed values of SystemSourceEnum enum
var AllowedSystemSourceEnumEnumValues = []SystemSourceEnum{
	"meter",
	"microinverters",
}

func (v *SystemSourceEnum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := SystemSourceEnum(value)
	for _, existing := range AllowedSystemSourceEnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid SystemSourceEnum", value)
}

// NewSystemSourceEnumFromValue returns a pointer to a valid SystemSourceEnum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewSystemSourceEnumFromValue(v string) (*SystemSourceEnum, error) {
	ev := SystemSourceEnum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for SystemSourceEnum: valid values are %v", v, AllowedSystemSourceEnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v SystemSourceEnum) IsValid() bool {
	for _, existing := range AllowedSystemSourceEnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to SystemSourceEnum value
func (v SystemSourceEnum) Ptr() *SystemSourceEnum {
	return &v
}

type NullableSystemSourceEnum struct {
	value *SystemSourceEnum
	isSet bool
}

func (v NullableSystemSourceEnum) Get() *SystemSourceEnum {
	return v.value
}

func (v *NullableSystemSourceEnum) Set(val *SystemSourceEnum) {
	v.value = val
	v.isSet = true
}

func (v NullableSystemSourceEnum) IsSet() bool {
	return v.isSet
}

func (v *NullableSystemSourceEnum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSystemSourceEnum(val *SystemSourceEnum) *NullableSystemSourceEnum {
	return &NullableSystemSourceEnum{value: val, isSet: true}
}

func (v NullableSystemSourceEnum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSystemSourceEnum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
