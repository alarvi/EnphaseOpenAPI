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

// SummaryResponse struct for SummaryResponse
type SummaryResponse struct {
	// Current power production, in Watts. For historical requests, returns 0.
	CurrentPower int32 `json:"current_power"`
	// Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours.
	EnergyLifetime int32 `json:"energy_lifetime"`
	// Energy produced on the requested day, in Watt-hours.
	EnergyToday int32 `json:"energy_today"`
	// The last known time that the system produced energy. When a system has not been communicating for a length of time, the `last_report_at` can be recent, whereas the `last_interval_end_at` may be further back.
	LastIntervalEndAt int64 `json:"last_interval_end_at"`
	// The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
	LastReportAt int64 `json:"last_report_at"`
	// Number of active (not retired) modules. For historical requests, returns 0.
	Modules int32 `json:"modules"`
	// The time at which this system became operational. Corresponds to the system's interconnect time, if one is specified. Otherwise, it is the system's first interval end time. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
	OperationalAt int64 `json:"operational_at"`
	// The size of the system, in Watts. For historical requests, returns 0.
	SizeW int32 `json:"size_w"`
	// Indicates whether the production of this system is measured by its microinverters (`microinverters`) or by revenue-grade meters (`meter`) installed on the system.
	Source string `json:"source"`
	Status Status `json:"status"`
	// Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
	SummaryDate string `json:"summary_date"`
	// The Enlighten ID of the system.
	SystemId int32 `json:"system_id"`
}

// NewSummaryResponse instantiates a new SummaryResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSummaryResponse(currentPower int32, energyLifetime int32, energyToday int32, lastIntervalEndAt int64, lastReportAt int64, modules int32, operationalAt int64, sizeW int32, source string, status Status, summaryDate string, systemId int32) *SummaryResponse {
	this := SummaryResponse{}
	this.CurrentPower = currentPower
	this.EnergyLifetime = energyLifetime
	this.EnergyToday = energyToday
	this.LastIntervalEndAt = lastIntervalEndAt
	this.LastReportAt = lastReportAt
	this.Modules = modules
	this.OperationalAt = operationalAt
	this.SizeW = sizeW
	this.Source = source
	this.Status = status
	this.SummaryDate = summaryDate
	this.SystemId = systemId
	return &this
}

// NewSummaryResponseWithDefaults instantiates a new SummaryResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSummaryResponseWithDefaults() *SummaryResponse {
	this := SummaryResponse{}
	return &this
}

// GetCurrentPower returns the CurrentPower field value
func (o *SummaryResponse) GetCurrentPower() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.CurrentPower
}

// GetCurrentPowerOk returns a tuple with the CurrentPower field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetCurrentPowerOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.CurrentPower, true
}

// SetCurrentPower sets field value
func (o *SummaryResponse) SetCurrentPower(v int32) {
	o.CurrentPower = v
}

// GetEnergyLifetime returns the EnergyLifetime field value
func (o *SummaryResponse) GetEnergyLifetime() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.EnergyLifetime
}

// GetEnergyLifetimeOk returns a tuple with the EnergyLifetime field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetEnergyLifetimeOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.EnergyLifetime, true
}

// SetEnergyLifetime sets field value
func (o *SummaryResponse) SetEnergyLifetime(v int32) {
	o.EnergyLifetime = v
}

// GetEnergyToday returns the EnergyToday field value
func (o *SummaryResponse) GetEnergyToday() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.EnergyToday
}

// GetEnergyTodayOk returns a tuple with the EnergyToday field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetEnergyTodayOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.EnergyToday, true
}

// SetEnergyToday sets field value
func (o *SummaryResponse) SetEnergyToday(v int32) {
	o.EnergyToday = v
}

// GetLastIntervalEndAt returns the LastIntervalEndAt field value
func (o *SummaryResponse) GetLastIntervalEndAt() int64 {
	if o == nil {
		var ret int64
		return ret
	}

	return o.LastIntervalEndAt
}

// GetLastIntervalEndAtOk returns a tuple with the LastIntervalEndAt field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetLastIntervalEndAtOk() (*int64, bool) {
	if o == nil {
    return nil, false
	}
	return &o.LastIntervalEndAt, true
}

// SetLastIntervalEndAt sets field value
func (o *SummaryResponse) SetLastIntervalEndAt(v int64) {
	o.LastIntervalEndAt = v
}

// GetLastReportAt returns the LastReportAt field value
func (o *SummaryResponse) GetLastReportAt() int64 {
	if o == nil {
		var ret int64
		return ret
	}

	return o.LastReportAt
}

// GetLastReportAtOk returns a tuple with the LastReportAt field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetLastReportAtOk() (*int64, bool) {
	if o == nil {
    return nil, false
	}
	return &o.LastReportAt, true
}

// SetLastReportAt sets field value
func (o *SummaryResponse) SetLastReportAt(v int64) {
	o.LastReportAt = v
}

// GetModules returns the Modules field value
func (o *SummaryResponse) GetModules() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Modules
}

// GetModulesOk returns a tuple with the Modules field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetModulesOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Modules, true
}

// SetModules sets field value
func (o *SummaryResponse) SetModules(v int32) {
	o.Modules = v
}

// GetOperationalAt returns the OperationalAt field value
func (o *SummaryResponse) GetOperationalAt() int64 {
	if o == nil {
		var ret int64
		return ret
	}

	return o.OperationalAt
}

// GetOperationalAtOk returns a tuple with the OperationalAt field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetOperationalAtOk() (*int64, bool) {
	if o == nil {
    return nil, false
	}
	return &o.OperationalAt, true
}

// SetOperationalAt sets field value
func (o *SummaryResponse) SetOperationalAt(v int64) {
	o.OperationalAt = v
}

// GetSizeW returns the SizeW field value
func (o *SummaryResponse) GetSizeW() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SizeW
}

// GetSizeWOk returns a tuple with the SizeW field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetSizeWOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.SizeW, true
}

// SetSizeW sets field value
func (o *SummaryResponse) SetSizeW(v int32) {
	o.SizeW = v
}

// GetSource returns the Source field value
func (o *SummaryResponse) GetSource() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Source
}

// GetSourceOk returns a tuple with the Source field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetSourceOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Source, true
}

// SetSource sets field value
func (o *SummaryResponse) SetSource(v string) {
	o.Source = v
}

// GetStatus returns the Status field value
func (o *SummaryResponse) GetStatus() Status {
	if o == nil {
		var ret Status
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetStatusOk() (*Status, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *SummaryResponse) SetStatus(v Status) {
	o.Status = v
}

// GetSummaryDate returns the SummaryDate field value
func (o *SummaryResponse) GetSummaryDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SummaryDate
}

// GetSummaryDateOk returns a tuple with the SummaryDate field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetSummaryDateOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.SummaryDate, true
}

// SetSummaryDate sets field value
func (o *SummaryResponse) SetSummaryDate(v string) {
	o.SummaryDate = v
}

// GetSystemId returns the SystemId field value
func (o *SummaryResponse) GetSystemId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value
// and a boolean to check if the value has been set.
func (o *SummaryResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.SystemId, true
}

// SetSystemId sets field value
func (o *SummaryResponse) SetSystemId(v int32) {
	o.SystemId = v
}

func (o SummaryResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["current_power"] = o.CurrentPower
	}
	if true {
		toSerialize["energy_lifetime"] = o.EnergyLifetime
	}
	if true {
		toSerialize["energy_today"] = o.EnergyToday
	}
	if true {
		toSerialize["last_interval_end_at"] = o.LastIntervalEndAt
	}
	if true {
		toSerialize["last_report_at"] = o.LastReportAt
	}
	if true {
		toSerialize["modules"] = o.Modules
	}
	if true {
		toSerialize["operational_at"] = o.OperationalAt
	}
	if true {
		toSerialize["size_w"] = o.SizeW
	}
	if true {
		toSerialize["source"] = o.Source
	}
	if true {
		toSerialize["status"] = o.Status
	}
	if true {
		toSerialize["summary_date"] = o.SummaryDate
	}
	if true {
		toSerialize["system_id"] = o.SystemId
	}
	return json.Marshal(toSerialize)
}

type NullableSummaryResponse struct {
	value *SummaryResponse
	isSet bool
}

func (v NullableSummaryResponse) Get() *SummaryResponse {
	return v.value
}

func (v *NullableSummaryResponse) Set(val *SummaryResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableSummaryResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableSummaryResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSummaryResponse(val *SummaryResponse) *NullableSummaryResponse {
	return &NullableSummaryResponse{value: val, isSet: true}
}

func (v NullableSummaryResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSummaryResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


