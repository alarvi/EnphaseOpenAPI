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
    /// GetSystemProductionMeterReadingsResponse
    /// </summary>
    [DataContract(Name = "GetSystemProductionMeterReadingsResponse")]
    public partial class GetSystemProductionMeterReadingsResponse : IEquatable<GetSystemProductionMeterReadingsResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSystemProductionMeterReadingsResponse" /> class.
        /// </summary>
        /// <param name="systemId">System ID..</param>
        /// <param name="meterReadings">Production meter readings..</param>
        /// <param name="meta">meta.</param>
        public GetSystemProductionMeterReadingsResponse(int systemId = default(int), List<GetSystemProductionMeterReadingsResponseMeterReadingsInner> meterReadings = default(List<GetSystemProductionMeterReadingsResponseMeterReadingsInner>), Meta meta = default(Meta))
        {
            this.SystemId = systemId;
            this.MeterReadings = meterReadings;
            this.Meta = meta;
        }

        /// <summary>
        /// System ID.
        /// </summary>
        /// <value>System ID.</value>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// Production meter readings.
        /// </summary>
        /// <value>Production meter readings.</value>
        [DataMember(Name = "meter_readings", EmitDefaultValue = false)]
        public List<GetSystemProductionMeterReadingsResponseMeterReadingsInner> MeterReadings { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", EmitDefaultValue = false)]
        public Meta Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSystemProductionMeterReadingsResponse {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  MeterReadings: ").Append(MeterReadings).Append("\n");
            sb.Append("  Meta: ").Append(Meta).Append("\n");
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
            return this.Equals(input as GetSystemProductionMeterReadingsResponse);
        }

        /// <summary>
        /// Returns true if GetSystemProductionMeterReadingsResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSystemProductionMeterReadingsResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSystemProductionMeterReadingsResponse input)
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
                    this.MeterReadings == input.MeterReadings ||
                    this.MeterReadings != null &&
                    input.MeterReadings != null &&
                    this.MeterReadings.SequenceEqual(input.MeterReadings)
                ) && 
                (
                    this.Meta == input.Meta ||
                    (this.Meta != null &&
                    this.Meta.Equals(input.Meta))
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
                if (this.MeterReadings != null)
                {
                    hashCode = (hashCode * 59) + this.MeterReadings.GetHashCode();
                }
                if (this.Meta != null)
                {
                    hashCode = (hashCode * 59) + this.Meta.GetHashCode();
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
