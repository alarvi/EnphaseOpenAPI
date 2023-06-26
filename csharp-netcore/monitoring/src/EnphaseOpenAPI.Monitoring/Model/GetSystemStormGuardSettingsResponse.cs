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
    /// GetSystemStormGuardSettingsResponse
    /// </summary>
    [DataContract(Name = "GetSystemStormGuardSettingsResponse")]
    public partial class GetSystemStormGuardSettingsResponse : IEquatable<GetSystemStormGuardSettingsResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSystemStormGuardSettingsResponse" /> class.
        /// </summary>
        /// <param name="systemId">systemId.</param>
        /// <param name="stormGuardStatus">Overrides your battery profile to full backup mode when a severe weather condition alert is issued in the locality..</param>
        /// <param name="stormAlert">True if severe weather condition alert is issued in the locality..</param>
        public GetSystemStormGuardSettingsResponse(int systemId = default(int), string stormGuardStatus = default(string), bool stormAlert = default(bool))
        {
            this.SystemId = systemId;
            this.StormGuardStatus = stormGuardStatus;
            this.StormAlert = stormAlert;
        }

        /// <summary>
        /// Gets or Sets SystemId
        /// </summary>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// Overrides your battery profile to full backup mode when a severe weather condition alert is issued in the locality.
        /// </summary>
        /// <value>Overrides your battery profile to full backup mode when a severe weather condition alert is issued in the locality.</value>
        [DataMember(Name = "storm_guard_status", EmitDefaultValue = false)]
        public string StormGuardStatus { get; set; }

        /// <summary>
        /// True if severe weather condition alert is issued in the locality.
        /// </summary>
        /// <value>True if severe weather condition alert is issued in the locality.</value>
        [DataMember(Name = "storm_alert", EmitDefaultValue = true)]
        public bool StormAlert { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSystemStormGuardSettingsResponse {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  StormGuardStatus: ").Append(StormGuardStatus).Append("\n");
            sb.Append("  StormAlert: ").Append(StormAlert).Append("\n");
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
            return this.Equals(input as GetSystemStormGuardSettingsResponse);
        }

        /// <summary>
        /// Returns true if GetSystemStormGuardSettingsResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSystemStormGuardSettingsResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSystemStormGuardSettingsResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.SystemId == input.SystemId ||
                    this.SystemId.Equals(input.SystemId)
                ) && 
                (
                    this.StormGuardStatus == input.StormGuardStatus ||
                    (this.StormGuardStatus != null &&
                    this.StormGuardStatus.Equals(input.StormGuardStatus))
                ) && 
                (
                    this.StormAlert == input.StormAlert ||
                    this.StormAlert.Equals(input.StormAlert)
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
                hashCode = (hashCode * 59) + this.SystemId.GetHashCode();
                if (this.StormGuardStatus != null)
                {
                    hashCode = (hashCode * 59) + this.StormGuardStatus.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.StormAlert.GetHashCode();
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
