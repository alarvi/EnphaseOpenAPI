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
    /// StatsResponseIntervals
    /// </summary>
    [DataContract(Name = "StatsResponse_intervals")]
    public partial class StatsResponseIntervals : IEquatable<StatsResponseIntervals>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StatsResponseIntervals" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected StatsResponseIntervals() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="StatsResponseIntervals" /> class.
        /// </summary>
        /// <param name="endAt">End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). (required).</param>
        /// <param name="powr">Average power produced by microinverters during this interval, in Watts. (required).</param>
        /// <param name="enwh">Energy produced by microinverters during this interval, in Watt-hours. (required).</param>
        /// <param name="devicesReporting">Number of microinverters that reported data for this interval at the time of the request. (required).</param>
        public StatsResponseIntervals(long endAt = default(long), int powr = default(int), int enwh = default(int), int devicesReporting = default(int))
        {
            this.EndAt = endAt;
            this.Powr = powr;
            this.Enwh = enwh;
            this.DevicesReporting = devicesReporting;
        }

        /// <summary>
        /// End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes).
        /// </summary>
        /// <value>End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes).</value>
        [DataMember(Name = "end_at", IsRequired = true, EmitDefaultValue = false)]
        public long EndAt { get; set; }

        /// <summary>
        /// Average power produced by microinverters during this interval, in Watts.
        /// </summary>
        /// <value>Average power produced by microinverters during this interval, in Watts.</value>
        [DataMember(Name = "powr", IsRequired = true, EmitDefaultValue = false)]
        public int Powr { get; set; }

        /// <summary>
        /// Energy produced by microinverters during this interval, in Watt-hours.
        /// </summary>
        /// <value>Energy produced by microinverters during this interval, in Watt-hours.</value>
        [DataMember(Name = "enwh", IsRequired = true, EmitDefaultValue = false)]
        public int Enwh { get; set; }

        /// <summary>
        /// Number of microinverters that reported data for this interval at the time of the request.
        /// </summary>
        /// <value>Number of microinverters that reported data for this interval at the time of the request.</value>
        [DataMember(Name = "devices_reporting", IsRequired = true, EmitDefaultValue = false)]
        public int DevicesReporting { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class StatsResponseIntervals {\n");
            sb.Append("  EndAt: ").Append(EndAt).Append("\n");
            sb.Append("  Powr: ").Append(Powr).Append("\n");
            sb.Append("  Enwh: ").Append(Enwh).Append("\n");
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
            return this.Equals(input as StatsResponseIntervals);
        }

        /// <summary>
        /// Returns true if StatsResponseIntervals instances are equal
        /// </summary>
        /// <param name="input">Instance of StatsResponseIntervals to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(StatsResponseIntervals input)
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
                hashCode = (hashCode * 59) + this.EndAt.GetHashCode();
                hashCode = (hashCode * 59) + this.Powr.GetHashCode();
                hashCode = (hashCode * 59) + this.Enwh.GetHashCode();
                hashCode = (hashCode * 59) + this.DevicesReporting.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
