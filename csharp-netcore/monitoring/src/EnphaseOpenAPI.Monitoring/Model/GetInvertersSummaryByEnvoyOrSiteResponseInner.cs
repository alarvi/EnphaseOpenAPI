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
    /// GetInvertersSummaryByEnvoyOrSiteResponseInner
    /// </summary>
    [DataContract(Name = "GetInvertersSummaryByEnvoyOrSiteResponse_inner")]
    public partial class GetInvertersSummaryByEnvoyOrSiteResponseInner : IEquatable<GetInvertersSummaryByEnvoyOrSiteResponseInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetInvertersSummaryByEnvoyOrSiteResponseInner" /> class.
        /// </summary>
        /// <param name="signalStrength">Signal strength..</param>
        /// <param name="microInverters">Microinverters..</param>
        public GetInvertersSummaryByEnvoyOrSiteResponseInner(int signalStrength = default(int), List<GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner> microInverters = default(List<GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner>))
        {
            this.SignalStrength = signalStrength;
            this.MicroInverters = microInverters;
        }

        /// <summary>
        /// Signal strength.
        /// </summary>
        /// <value>Signal strength.</value>
        [DataMember(Name = "signal_strength", EmitDefaultValue = false)]
        public int SignalStrength { get; set; }

        /// <summary>
        /// Microinverters.
        /// </summary>
        /// <value>Microinverters.</value>
        [DataMember(Name = "micro_inverters", EmitDefaultValue = false)]
        public List<GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner> MicroInverters { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetInvertersSummaryByEnvoyOrSiteResponseInner {\n");
            sb.Append("  SignalStrength: ").Append(SignalStrength).Append("\n");
            sb.Append("  MicroInverters: ").Append(MicroInverters).Append("\n");
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
            return this.Equals(input as GetInvertersSummaryByEnvoyOrSiteResponseInner);
        }

        /// <summary>
        /// Returns true if GetInvertersSummaryByEnvoyOrSiteResponseInner instances are equal
        /// </summary>
        /// <param name="input">Instance of GetInvertersSummaryByEnvoyOrSiteResponseInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetInvertersSummaryByEnvoyOrSiteResponseInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.SignalStrength == input.SignalStrength ||
                    this.SignalStrength.Equals(input.SignalStrength)
                ) && 
                (
                    this.MicroInverters == input.MicroInverters ||
                    this.MicroInverters != null &&
                    input.MicroInverters != null &&
                    this.MicroInverters.SequenceEqual(input.MicroInverters)
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
                hashCode = (hashCode * 59) + this.SignalStrength.GetHashCode();
                if (this.MicroInverters != null)
                {
                    hashCode = (hashCode * 59) + this.MicroInverters.GetHashCode();
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
