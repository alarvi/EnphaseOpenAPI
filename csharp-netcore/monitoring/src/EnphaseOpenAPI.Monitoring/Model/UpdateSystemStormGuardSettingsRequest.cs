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
    /// UpdateSystemStormGuardSettingsRequest
    /// </summary>
    [DataContract(Name = "UpdateSystemStormGuardSettingsRequest")]
    public partial class UpdateSystemStormGuardSettingsRequest : IEquatable<UpdateSystemStormGuardSettingsRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateSystemStormGuardSettingsRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateSystemStormGuardSettingsRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateSystemStormGuardSettingsRequest" /> class.
        /// </summary>
        /// <param name="stormGuardStatus">Overrides your battery profile to full backup mode when a severe weather condition alert is issued in the locality. Available values are enabled, disabled. (required).</param>
        public UpdateSystemStormGuardSettingsRequest(string stormGuardStatus = default(string))
        {
            // to ensure "stormGuardStatus" is required (not null)
            if (stormGuardStatus == null)
            {
                throw new ArgumentNullException("stormGuardStatus is a required property for UpdateSystemStormGuardSettingsRequest and cannot be null");
            }
            this.StormGuardStatus = stormGuardStatus;
        }

        /// <summary>
        /// Overrides your battery profile to full backup mode when a severe weather condition alert is issued in the locality. Available values are enabled, disabled.
        /// </summary>
        /// <value>Overrides your battery profile to full backup mode when a severe weather condition alert is issued in the locality. Available values are enabled, disabled.</value>
        [DataMember(Name = "storm_guard_status", IsRequired = true, EmitDefaultValue = true)]
        public string StormGuardStatus { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateSystemStormGuardSettingsRequest {\n");
            sb.Append("  StormGuardStatus: ").Append(StormGuardStatus).Append("\n");
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
            return this.Equals(input as UpdateSystemStormGuardSettingsRequest);
        }

        /// <summary>
        /// Returns true if UpdateSystemStormGuardSettingsRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateSystemStormGuardSettingsRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateSystemStormGuardSettingsRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.StormGuardStatus == input.StormGuardStatus ||
                    (this.StormGuardStatus != null &&
                    this.StormGuardStatus.Equals(input.StormGuardStatus))
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
                if (this.StormGuardStatus != null)
                {
                    hashCode = (hashCode * 59) + this.StormGuardStatus.GetHashCode();
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
