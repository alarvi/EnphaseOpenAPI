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
    /// GetSystemMicroDeviceTelemetryResponseIntervalsInner
    /// </summary>
    [DataContract(Name = "GetSystemMicroDeviceTelemetryResponse_intervals_inner")]
    public partial class GetSystemMicroDeviceTelemetryResponseIntervalsInner : IEquatable<GetSystemMicroDeviceTelemetryResponseIntervalsInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSystemMicroDeviceTelemetryResponseIntervalsInner" /> class.
        /// </summary>
        /// <param name="endAt">End time of the telemetry interval..</param>
        /// <param name="powr">Average power (in Watt) produced by all the microinverters during this interval, measured in Watts..</param>
        /// <param name="enwh">Energy produced (in Watt-Hours) from all the microinverters combined during that period..</param>
        public GetSystemMicroDeviceTelemetryResponseIntervalsInner(long endAt = default(long), int powr = default(int), int enwh = default(int))
        {
            this.EndAt = endAt;
            this.Powr = powr;
            this.Enwh = enwh;
        }

        /// <summary>
        /// End time of the telemetry interval.
        /// </summary>
        /// <value>End time of the telemetry interval.</value>
        [DataMember(Name = "end_at", EmitDefaultValue = false)]
        public long EndAt { get; set; }

        /// <summary>
        /// Average power (in Watt) produced by all the microinverters during this interval, measured in Watts.
        /// </summary>
        /// <value>Average power (in Watt) produced by all the microinverters during this interval, measured in Watts.</value>
        [DataMember(Name = "powr", EmitDefaultValue = false)]
        public int Powr { get; set; }

        /// <summary>
        /// Energy produced (in Watt-Hours) from all the microinverters combined during that period.
        /// </summary>
        /// <value>Energy produced (in Watt-Hours) from all the microinverters combined during that period.</value>
        [DataMember(Name = "enwh", EmitDefaultValue = false)]
        public int Enwh { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSystemMicroDeviceTelemetryResponseIntervalsInner {\n");
            sb.Append("  EndAt: ").Append(EndAt).Append("\n");
            sb.Append("  Powr: ").Append(Powr).Append("\n");
            sb.Append("  Enwh: ").Append(Enwh).Append("\n");
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
            return this.Equals(input as GetSystemMicroDeviceTelemetryResponseIntervalsInner);
        }

        /// <summary>
        /// Returns true if GetSystemMicroDeviceTelemetryResponseIntervalsInner instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSystemMicroDeviceTelemetryResponseIntervalsInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSystemMicroDeviceTelemetryResponseIntervalsInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.EndAt == input.EndAt ||
                    this.EndAt.Equals(input.EndAt)
                ) && 
                (
                    this.Powr == input.Powr ||
                    this.Powr.Equals(input.Powr)
                ) && 
                (
                    this.Enwh == input.Enwh ||
                    this.Enwh.Equals(input.Enwh)
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
                hashCode = (hashCode * 59) + this.EndAt.GetHashCode();
                hashCode = (hashCode * 59) + this.Powr.GetHashCode();
                hashCode = (hashCode * 59) + this.Enwh.GetHashCode();
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
