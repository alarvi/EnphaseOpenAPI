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
    /// GetSystemBatteryTelemetryResponseIntervalsInnerSoc
    /// </summary>
    [DataContract(Name = "GetSystemBatteryTelemetryResponse_intervals_inner_soc")]
    public partial class GetSystemBatteryTelemetryResponseIntervalsInnerSoc : IEquatable<GetSystemBatteryTelemetryResponseIntervalsInnerSoc>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSystemBatteryTelemetryResponseIntervalsInnerSoc" /> class.
        /// </summary>
        /// <param name="percent">Battery soc percentage..</param>
        /// <param name="devicesReporting">Number of devices reporting..</param>
        public GetSystemBatteryTelemetryResponseIntervalsInnerSoc(int percent = default(int), int devicesReporting = default(int))
        {
            this.Percent = percent;
            this.DevicesReporting = devicesReporting;
        }

        /// <summary>
        /// Battery soc percentage.
        /// </summary>
        /// <value>Battery soc percentage.</value>
        [DataMember(Name = "percent", EmitDefaultValue = false)]
        public int Percent { get; set; }

        /// <summary>
        /// Number of devices reporting.
        /// </summary>
        /// <value>Number of devices reporting.</value>
        [DataMember(Name = "devices_reporting", EmitDefaultValue = false)]
        public int DevicesReporting { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSystemBatteryTelemetryResponseIntervalsInnerSoc {\n");
            sb.Append("  Percent: ").Append(Percent).Append("\n");
            sb.Append("  DevicesReporting: ").Append(DevicesReporting).Append("\n");
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
            return this.Equals(input as GetSystemBatteryTelemetryResponseIntervalsInnerSoc);
        }

        /// <summary>
        /// Returns true if GetSystemBatteryTelemetryResponseIntervalsInnerSoc instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSystemBatteryTelemetryResponseIntervalsInnerSoc to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSystemBatteryTelemetryResponseIntervalsInnerSoc input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Percent == input.Percent ||
                    this.Percent.Equals(input.Percent)
                ) && 
                (
                    this.DevicesReporting == input.DevicesReporting ||
                    this.DevicesReporting.Equals(input.DevicesReporting)
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
                hashCode = (hashCode * 59) + this.Percent.GetHashCode();
                hashCode = (hashCode * 59) + this.DevicesReporting.GetHashCode();
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