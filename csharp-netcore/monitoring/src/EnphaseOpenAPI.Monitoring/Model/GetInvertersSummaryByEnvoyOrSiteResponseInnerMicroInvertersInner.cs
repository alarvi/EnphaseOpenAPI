/*
 * The Enphase Monitoring API
 *
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
 *
 * The version of the OpenAPI document: 4.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = EnphaseOpenAPI.Monitoring.Client.OpenAPIDateConverter;

namespace EnphaseOpenAPI.Monitoring.Model
{
    /// <summary>
    /// GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner
    /// </summary>
    [DataContract(Name = "GetInvertersSummaryByEnvoyOrSiteResponse_inner_micro_inverters_inner")]
    public partial class GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner : IEquatable<GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner" /> class.
        /// </summary>
        /// <param name="id">Numeric ID of the microinverter..</param>
        /// <param name="serialNumber">Serial number of the microinverter..</param>
        /// <param name="model">Microinverter model type..</param>
        /// <param name="partNumber">Microinverter part number..</param>
        /// <param name="sku">SKU of the microinverter..</param>
        /// <param name="status">Current status of the micro inverter..</param>
        /// <param name="powerProduced">powerProduced.</param>
        /// <param name="procLoad">Processor load..</param>
        /// <param name="paramTable">Parameter table..</param>
        /// <param name="envoySerialNumber">Envoy serial number of the system that the micro reports to..</param>
        /// <param name="energy">energy.</param>
        /// <param name="gridProfile">Grid profile ID..</param>
        /// <param name="lastReportDate">Date on which the microinverter last reported..</param>
        public GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner(int id = default(int), string serialNumber = default(string), string model = default(string), string partNumber = default(string), string sku = default(string), string status = default(string), GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced powerProduced = default(GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced), string procLoad = default(string), string paramTable = default(string), string envoySerialNumber = default(string), GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy energy = default(GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy), string gridProfile = default(string), DateTimeOffset lastReportDate = default(DateTimeOffset))
        {
            this.Id = id;
            this.SerialNumber = serialNumber;
            this.Model = model;
            this.PartNumber = partNumber;
            this.Sku = sku;
            this.Status = status;
            this.PowerProduced = powerProduced;
            this.ProcLoad = procLoad;
            this.ParamTable = paramTable;
            this.EnvoySerialNumber = envoySerialNumber;
            this.Energy = energy;
            this.GridProfile = gridProfile;
            this.LastReportDate = lastReportDate;
        }

        /// <summary>
        /// Numeric ID of the microinverter.
        /// </summary>
        /// <value>Numeric ID of the microinverter.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public int Id { get; set; }

        /// <summary>
        /// Serial number of the microinverter.
        /// </summary>
        /// <value>Serial number of the microinverter.</value>
        [DataMember(Name = "serial_number", EmitDefaultValue = false)]
        public string SerialNumber { get; set; }

        /// <summary>
        /// Microinverter model type.
        /// </summary>
        /// <value>Microinverter model type.</value>
        [DataMember(Name = "model", EmitDefaultValue = false)]
        public string Model { get; set; }

        /// <summary>
        /// Microinverter part number.
        /// </summary>
        /// <value>Microinverter part number.</value>
        [DataMember(Name = "part_number", EmitDefaultValue = false)]
        public string PartNumber { get; set; }

        /// <summary>
        /// SKU of the microinverter.
        /// </summary>
        /// <value>SKU of the microinverter.</value>
        [DataMember(Name = "sku", EmitDefaultValue = false)]
        public string Sku { get; set; }

        /// <summary>
        /// Current status of the micro inverter.
        /// </summary>
        /// <value>Current status of the micro inverter.</value>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public string Status { get; set; }

        /// <summary>
        /// Gets or Sets PowerProduced
        /// </summary>
        [DataMember(Name = "power_produced", EmitDefaultValue = false)]
        public GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced PowerProduced { get; set; }

        /// <summary>
        /// Processor load.
        /// </summary>
        /// <value>Processor load.</value>
        [DataMember(Name = "proc_load", EmitDefaultValue = false)]
        public string ProcLoad { get; set; }

        /// <summary>
        /// Parameter table.
        /// </summary>
        /// <value>Parameter table.</value>
        [DataMember(Name = "param_table", EmitDefaultValue = false)]
        public string ParamTable { get; set; }

        /// <summary>
        /// Envoy serial number of the system that the micro reports to.
        /// </summary>
        /// <value>Envoy serial number of the system that the micro reports to.</value>
        [DataMember(Name = "envoy_serial_number", EmitDefaultValue = false)]
        public string EnvoySerialNumber { get; set; }

        /// <summary>
        /// Gets or Sets Energy
        /// </summary>
        [DataMember(Name = "energy", EmitDefaultValue = false)]
        public GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy Energy { get; set; }

        /// <summary>
        /// Grid profile ID.
        /// </summary>
        /// <value>Grid profile ID.</value>
        [DataMember(Name = "grid_profile", EmitDefaultValue = false)]
        public string GridProfile { get; set; }

        /// <summary>
        /// Date on which the microinverter last reported.
        /// </summary>
        /// <value>Date on which the microinverter last reported.</value>
        [DataMember(Name = "last_report_date", EmitDefaultValue = false)]
        public DateTimeOffset LastReportDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SerialNumber: ").Append(SerialNumber).Append("\n");
            sb.Append("  Model: ").Append(Model).Append("\n");
            sb.Append("  PartNumber: ").Append(PartNumber).Append("\n");
            sb.Append("  Sku: ").Append(Sku).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  PowerProduced: ").Append(PowerProduced).Append("\n");
            sb.Append("  ProcLoad: ").Append(ProcLoad).Append("\n");
            sb.Append("  ParamTable: ").Append(ParamTable).Append("\n");
            sb.Append("  EnvoySerialNumber: ").Append(EnvoySerialNumber).Append("\n");
            sb.Append("  Energy: ").Append(Energy).Append("\n");
            sb.Append("  GridProfile: ").Append(GridProfile).Append("\n");
            sb.Append("  LastReportDate: ").Append(LastReportDate).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner);
        }

        /// <summary>
        /// Returns true if GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner instances are equal
        /// </summary>
        /// <param name="input">Instance of GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    this.Id.Equals(input.Id)
                ) && 
                (
                    this.SerialNumber == input.SerialNumber ||
                    (this.SerialNumber != null &&
                    this.SerialNumber.Equals(input.SerialNumber))
                ) && 
                (
                    this.Model == input.Model ||
                    (this.Model != null &&
                    this.Model.Equals(input.Model))
                ) && 
                (
                    this.PartNumber == input.PartNumber ||
                    (this.PartNumber != null &&
                    this.PartNumber.Equals(input.PartNumber))
                ) && 
                (
                    this.Sku == input.Sku ||
                    (this.Sku != null &&
                    this.Sku.Equals(input.Sku))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.PowerProduced == input.PowerProduced ||
                    (this.PowerProduced != null &&
                    this.PowerProduced.Equals(input.PowerProduced))
                ) && 
                (
                    this.ProcLoad == input.ProcLoad ||
                    (this.ProcLoad != null &&
                    this.ProcLoad.Equals(input.ProcLoad))
                ) && 
                (
                    this.ParamTable == input.ParamTable ||
                    (this.ParamTable != null &&
                    this.ParamTable.Equals(input.ParamTable))
                ) && 
                (
                    this.EnvoySerialNumber == input.EnvoySerialNumber ||
                    (this.EnvoySerialNumber != null &&
                    this.EnvoySerialNumber.Equals(input.EnvoySerialNumber))
                ) && 
                (
                    this.Energy == input.Energy ||
                    (this.Energy != null &&
                    this.Energy.Equals(input.Energy))
                ) && 
                (
                    this.GridProfile == input.GridProfile ||
                    (this.GridProfile != null &&
                    this.GridProfile.Equals(input.GridProfile))
                ) && 
                (
                    this.LastReportDate == input.LastReportDate ||
                    (this.LastReportDate != null &&
                    this.LastReportDate.Equals(input.LastReportDate))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                hashCode = (hashCode * 59) + this.Id.GetHashCode();
                if (this.SerialNumber != null)
                {
                    hashCode = (hashCode * 59) + this.SerialNumber.GetHashCode();
                }
                if (this.Model != null)
                {
                    hashCode = (hashCode * 59) + this.Model.GetHashCode();
                }
                if (this.PartNumber != null)
                {
                    hashCode = (hashCode * 59) + this.PartNumber.GetHashCode();
                }
                if (this.Sku != null)
                {
                    hashCode = (hashCode * 59) + this.Sku.GetHashCode();
                }
                if (this.Status != null)
                {
                    hashCode = (hashCode * 59) + this.Status.GetHashCode();
                }
                if (this.PowerProduced != null)
                {
                    hashCode = (hashCode * 59) + this.PowerProduced.GetHashCode();
                }
                if (this.ProcLoad != null)
                {
                    hashCode = (hashCode * 59) + this.ProcLoad.GetHashCode();
                }
                if (this.ParamTable != null)
                {
                    hashCode = (hashCode * 59) + this.ParamTable.GetHashCode();
                }
                if (this.EnvoySerialNumber != null)
                {
                    hashCode = (hashCode * 59) + this.EnvoySerialNumber.GetHashCode();
                }
                if (this.Energy != null)
                {
                    hashCode = (hashCode * 59) + this.Energy.GetHashCode();
                }
                if (this.GridProfile != null)
                {
                    hashCode = (hashCode * 59) + this.GridProfile.GetHashCode();
                }
                if (this.LastReportDate != null)
                {
                    hashCode = (hashCode * 59) + this.LastReportDate.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}