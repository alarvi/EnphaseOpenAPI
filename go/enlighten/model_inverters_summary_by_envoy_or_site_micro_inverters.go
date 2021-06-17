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

// InvertersSummaryByEnvoyOrSiteMicroInverters struct for InvertersSummaryByEnvoyOrSiteMicroInverters
type InvertersSummaryByEnvoyOrSiteMicroInverters struct {
	Id int32 `json:"id"`
	// Model number of this Microinverter.
	Model string `json:"model"`
	// The Enphase part number of this Microinverter.
	PartNumber string `json:"part_number"`
	// The serial number of this Microinverter.
	SerialNumber string `json:"serial_number"`
	Sku string `json:"sku"`
	// The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
	Status string `json:"status"`
	PowerProduced int32 `json:"power_produced"`
	ProcLoad string `json:"proc_load"`
	ParamTable string `json:"param_table"`
	EnvoySerialNumber string `json:"envoy_serial_number"`
	Energy InvertersSummaryByEnvoyOrSiteEnergy `json:"energy"`
	GridProfile string `json:"grid_profile"`
	// The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
	LastReportDate string `json:"last_report_date"`
}

// NewInvertersSummaryByEnvoyOrSiteMicroInverters instantiates a new InvertersSummaryByEnvoyOrSiteMicroInverters object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInvertersSummaryByEnvoyOrSiteMicroInverters(id int32, model string, partNumber string, serialNumber string, sku string, status string, powerProduced int32, procLoad string, paramTable string, envoySerialNumber string, energy InvertersSummaryByEnvoyOrSiteEnergy, gridProfile string, lastReportDate string) *InvertersSummaryByEnvoyOrSiteMicroInverters {
	this := InvertersSummaryByEnvoyOrSiteMicroInverters{}
	this.Id = id
	this.Model = model
	this.PartNumber = partNumber
	this.SerialNumber = serialNumber
	this.Sku = sku
	this.Status = status
	this.PowerProduced = powerProduced
	this.ProcLoad = procLoad
	this.ParamTable = paramTable
	this.EnvoySerialNumber = envoySerialNumber
	this.Energy = energy
	this.GridProfile = gridProfile
	this.LastReportDate = lastReportDate
	return &this
}

// NewInvertersSummaryByEnvoyOrSiteMicroInvertersWithDefaults instantiates a new InvertersSummaryByEnvoyOrSiteMicroInverters object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInvertersSummaryByEnvoyOrSiteMicroInvertersWithDefaults() *InvertersSummaryByEnvoyOrSiteMicroInverters {
	this := InvertersSummaryByEnvoyOrSiteMicroInverters{}
	return &this
}

// GetId returns the Id field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetId(v int32) {
	o.Id = v
}

// GetModel returns the Model field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetModel() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Model
}

// GetModelOk returns a tuple with the Model field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetModelOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Model, true
}

// SetModel sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetModel(v string) {
	o.Model = v
}

// GetPartNumber returns the PartNumber field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetPartNumber() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.PartNumber
}

// GetPartNumberOk returns a tuple with the PartNumber field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetPartNumberOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PartNumber, true
}

// SetPartNumber sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetPartNumber(v string) {
	o.PartNumber = v
}

// GetSerialNumber returns the SerialNumber field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetSerialNumber() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SerialNumber
}

// GetSerialNumberOk returns a tuple with the SerialNumber field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetSerialNumberOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SerialNumber, true
}

// SetSerialNumber sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetSerialNumber(v string) {
	o.SerialNumber = v
}

// GetSku returns the Sku field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetSku() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Sku
}

// GetSkuOk returns a tuple with the Sku field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetSkuOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Sku, true
}

// SetSku sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetSku(v string) {
	o.Sku = v
}

// GetStatus returns the Status field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetStatus() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetStatusOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetStatus(v string) {
	o.Status = v
}

// GetPowerProduced returns the PowerProduced field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetPowerProduced() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.PowerProduced
}

// GetPowerProducedOk returns a tuple with the PowerProduced field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetPowerProducedOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PowerProduced, true
}

// SetPowerProduced sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetPowerProduced(v int32) {
	o.PowerProduced = v
}

// GetProcLoad returns the ProcLoad field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetProcLoad() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ProcLoad
}

// GetProcLoadOk returns a tuple with the ProcLoad field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetProcLoadOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ProcLoad, true
}

// SetProcLoad sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetProcLoad(v string) {
	o.ProcLoad = v
}

// GetParamTable returns the ParamTable field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetParamTable() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ParamTable
}

// GetParamTableOk returns a tuple with the ParamTable field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetParamTableOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ParamTable, true
}

// SetParamTable sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetParamTable(v string) {
	o.ParamTable = v
}

// GetEnvoySerialNumber returns the EnvoySerialNumber field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetEnvoySerialNumber() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.EnvoySerialNumber
}

// GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetEnvoySerialNumberOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.EnvoySerialNumber, true
}

// SetEnvoySerialNumber sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetEnvoySerialNumber(v string) {
	o.EnvoySerialNumber = v
}

// GetEnergy returns the Energy field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetEnergy() InvertersSummaryByEnvoyOrSiteEnergy {
	if o == nil {
		var ret InvertersSummaryByEnvoyOrSiteEnergy
		return ret
	}

	return o.Energy
}

// GetEnergyOk returns a tuple with the Energy field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetEnergyOk() (*InvertersSummaryByEnvoyOrSiteEnergy, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Energy, true
}

// SetEnergy sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetEnergy(v InvertersSummaryByEnvoyOrSiteEnergy) {
	o.Energy = v
}

// GetGridProfile returns the GridProfile field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetGridProfile() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.GridProfile
}

// GetGridProfileOk returns a tuple with the GridProfile field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetGridProfileOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.GridProfile, true
}

// SetGridProfile sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetGridProfile(v string) {
	o.GridProfile = v
}

// GetLastReportDate returns the LastReportDate field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetLastReportDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.LastReportDate
}

// GetLastReportDateOk returns a tuple with the LastReportDate field value
// and a boolean to check if the value has been set.
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetLastReportDateOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.LastReportDate, true
}

// SetLastReportDate sets field value
func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetLastReportDate(v string) {
	o.LastReportDate = v
}

func (o InvertersSummaryByEnvoyOrSiteMicroInverters) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["model"] = o.Model
	}
	if true {
		toSerialize["part_number"] = o.PartNumber
	}
	if true {
		toSerialize["serial_number"] = o.SerialNumber
	}
	if true {
		toSerialize["sku"] = o.Sku
	}
	if true {
		toSerialize["status"] = o.Status
	}
	if true {
		toSerialize["power_produced"] = o.PowerProduced
	}
	if true {
		toSerialize["proc_load"] = o.ProcLoad
	}
	if true {
		toSerialize["param_table"] = o.ParamTable
	}
	if true {
		toSerialize["envoy_serial_number"] = o.EnvoySerialNumber
	}
	if true {
		toSerialize["energy"] = o.Energy
	}
	if true {
		toSerialize["grid_profile"] = o.GridProfile
	}
	if true {
		toSerialize["last_report_date"] = o.LastReportDate
	}
	return json.Marshal(toSerialize)
}

type NullableInvertersSummaryByEnvoyOrSiteMicroInverters struct {
	value *InvertersSummaryByEnvoyOrSiteMicroInverters
	isSet bool
}

func (v NullableInvertersSummaryByEnvoyOrSiteMicroInverters) Get() *InvertersSummaryByEnvoyOrSiteMicroInverters {
	return v.value
}

func (v *NullableInvertersSummaryByEnvoyOrSiteMicroInverters) Set(val *InvertersSummaryByEnvoyOrSiteMicroInverters) {
	v.value = val
	v.isSet = true
}

func (v NullableInvertersSummaryByEnvoyOrSiteMicroInverters) IsSet() bool {
	return v.isSet
}

func (v *NullableInvertersSummaryByEnvoyOrSiteMicroInverters) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInvertersSummaryByEnvoyOrSiteMicroInverters(val *InvertersSummaryByEnvoyOrSiteMicroInverters) *NullableInvertersSummaryByEnvoyOrSiteMicroInverters {
	return &NullableInvertersSummaryByEnvoyOrSiteMicroInverters{value: val, isSet: true}
}

func (v NullableInvertersSummaryByEnvoyOrSiteMicroInverters) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInvertersSummaryByEnvoyOrSiteMicroInverters) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

