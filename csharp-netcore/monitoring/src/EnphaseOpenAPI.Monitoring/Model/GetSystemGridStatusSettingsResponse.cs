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
    /// GetSystemGridStatusSettingsResponse
    /// </summary>
    [DataContract(Name = "GetSystemGridStatusSettingsResponse")]
    public partial class GetSystemGridStatusSettingsResponse : IEquatable<GetSystemGridStatusSettingsResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSystemGridStatusSettingsResponse" /> class.
        /// </summary>
        /// <param name="systemId">systemId.</param>
        /// <param name="gridState">Indicates whether the site is On Grid, Off Grid or grid status of site is Unknown..</param>
        /// <param name="lastReportDate">Timestamp (in epoch format) at which the system&#39;s Envoy last submitted a report..</param>
        public GetSystemGridStatusSettingsResponse(int systemId = default(int), string gridState = default(string), int lastReportDate = default(int))
        {
            this.SystemId = systemId;
            this.GridState = gridState;
            this.LastReportDate = lastReportDate;
        }

        /// <summary>
        /// Gets or Sets SystemId
        /// </summary>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// Indicates whether the site is On Grid, Off Grid or grid status of site is Unknown.
        /// </summary>
        /// <value>Indicates whether the site is On Grid, Off Grid or grid status of site is Unknown.</value>
        [DataMember(Name = "grid_state", EmitDefaultValue = false)]
        public string GridState { get; set; }

        /// <summary>
        /// Timestamp (in epoch format) at which the system&#39;s Envoy last submitted a report.
        /// </summary>
        /// <value>Timestamp (in epoch format) at which the system&#39;s Envoy last submitted a report.</value>
        [DataMember(Name = "last_report_date", EmitDefaultValue = false)]
        public int LastReportDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSystemGridStatusSettingsResponse {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  GridState: ").Append(GridState).Append("\n");
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
            return this.Equals(input as GetSystemGridStatusSettingsResponse);
        }

        /// <summary>
        /// Returns true if GetSystemGridStatusSettingsResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSystemGridStatusSettingsResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSystemGridStatusSettingsResponse input)
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
                    this.GridState == input.GridState ||
                    (this.GridState != null &&
                    this.GridState.Equals(input.GridState))
                ) && 
                (
                    this.LastReportDate == input.LastReportDate ||
                    this.LastReportDate.Equals(input.LastReportDate)
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
                if (this.GridState != null)
                {
                    hashCode = (hashCode * 59) + this.GridState.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.LastReportDate.GetHashCode();
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
