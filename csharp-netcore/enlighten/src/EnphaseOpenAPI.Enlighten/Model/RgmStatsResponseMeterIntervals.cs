/*
 * The Enlighten Systems API
 *
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
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
using OpenAPIDateConverter = EnphaseOpenAPI.Enlighten.Client.OpenAPIDateConverter;

namespace EnphaseOpenAPI.Enlighten.Model
{
    /// <summary>
    /// RgmStatsResponseMeterIntervals
    /// </summary>
    [DataContract(Name = "RgmStatsResponse_meter_intervals")]
    public partial class RgmStatsResponseMeterIntervals : IEquatable<RgmStatsResponseMeterIntervals>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RgmStatsResponseMeterIntervals" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RgmStatsResponseMeterIntervals() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RgmStatsResponseMeterIntervals" /> class.
        /// </summary>
        /// <param name="meterSerialNumber">Serial number of the revenue grade meter. (required).</param>
        /// <param name="envoySerialNumber">Serial number of the reporting envoy. (required).</param>
        /// <param name="intervals">Individual meter level interval. (required).</param>
        public RgmStatsResponseMeterIntervals(string meterSerialNumber = default(string), string envoySerialNumber = default(string), List<RgmStatsResponseIntervals1> intervals = default(List<RgmStatsResponseIntervals1>))
        {
            // to ensure "meterSerialNumber" is required (not null)
            this.MeterSerialNumber = meterSerialNumber ?? throw new ArgumentNullException("meterSerialNumber is a required property for RgmStatsResponseMeterIntervals and cannot be null");
            // to ensure "envoySerialNumber" is required (not null)
            this.EnvoySerialNumber = envoySerialNumber ?? throw new ArgumentNullException("envoySerialNumber is a required property for RgmStatsResponseMeterIntervals and cannot be null");
            // to ensure "intervals" is required (not null)
            this.Intervals = intervals ?? throw new ArgumentNullException("intervals is a required property for RgmStatsResponseMeterIntervals and cannot be null");
        }

        /// <summary>
        /// Serial number of the revenue grade meter.
        /// </summary>
        /// <value>Serial number of the revenue grade meter.</value>
        [DataMember(Name = "meter_serial_number", IsRequired = true, EmitDefaultValue = false)]
        public string MeterSerialNumber { get; set; }

        /// <summary>
        /// Serial number of the reporting envoy.
        /// </summary>
        /// <value>Serial number of the reporting envoy.</value>
        [DataMember(Name = "envoy_serial_number", IsRequired = true, EmitDefaultValue = false)]
        public string EnvoySerialNumber { get; set; }

        /// <summary>
        /// Individual meter level interval.
        /// </summary>
        /// <value>Individual meter level interval.</value>
        [DataMember(Name = "intervals", IsRequired = true, EmitDefaultValue = false)]
        public List<RgmStatsResponseIntervals1> Intervals { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class RgmStatsResponseMeterIntervals {\n");
            sb.Append("  MeterSerialNumber: ").Append(MeterSerialNumber).Append("\n");
            sb.Append("  EnvoySerialNumber: ").Append(EnvoySerialNumber).Append("\n");
            sb.Append("  Intervals: ").Append(Intervals).Append("\n");
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
            return this.Equals(input as RgmStatsResponseMeterIntervals);
        }

        /// <summary>
        /// Returns true if RgmStatsResponseMeterIntervals instances are equal
        /// </summary>
        /// <param name="input">Instance of RgmStatsResponseMeterIntervals to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RgmStatsResponseMeterIntervals input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.MeterSerialNumber == input.MeterSerialNumber ||
                    (this.MeterSerialNumber != null &&
                    this.MeterSerialNumber.Equals(input.MeterSerialNumber))
                ) && 
                (
                    this.EnvoySerialNumber == input.EnvoySerialNumber ||
                    (this.EnvoySerialNumber != null &&
                    this.EnvoySerialNumber.Equals(input.EnvoySerialNumber))
                ) && 
                (
                    this.Intervals == input.Intervals ||
                    this.Intervals != null &&
                    input.Intervals != null &&
                    this.Intervals.SequenceEqual(input.Intervals)
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
                if (this.MeterSerialNumber != null)
                    hashCode = hashCode * 59 + this.MeterSerialNumber.GetHashCode();
                if (this.EnvoySerialNumber != null)
                    hashCode = hashCode * 59 + this.EnvoySerialNumber.GetHashCode();
                if (this.Intervals != null)
                    hashCode = hashCode * 59 + this.Intervals.GetHashCode();
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