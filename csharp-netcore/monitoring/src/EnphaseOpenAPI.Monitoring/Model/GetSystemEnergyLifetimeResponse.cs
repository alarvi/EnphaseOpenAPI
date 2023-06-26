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
    /// GetSystemEnergyLifetimeResponse
    /// </summary>
    [DataContract(Name = "GetSystemEnergyLifetimeResponse")]
    public partial class GetSystemEnergyLifetimeResponse : IEquatable<GetSystemEnergyLifetimeResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSystemEnergyLifetimeResponse" /> class.
        /// </summary>
        /// <param name="systemId">System ID..</param>
        /// <param name="startDate">When no start_date parameter is specified on the request, this is the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, it is included here in the response..</param>
        /// <param name="meterStartDate">First day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter..</param>
        /// <param name="production">An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty..</param>
        /// <param name="microProduction">microProduction.</param>
        /// <param name="meterProduction">meterProduction.</param>
        /// <param name="meta">meta.</param>
        public GetSystemEnergyLifetimeResponse(int systemId = default(int), DateTimeOffset startDate = default(DateTimeOffset), DateTimeOffset meterStartDate = default(DateTimeOffset), List<int> production = default(List<int>), List<int> microProduction = default(List<int>), List<int> meterProduction = default(List<int>), Meta meta = default(Meta))
        {
            this.SystemId = systemId;
            this.StartDate = startDate;
            this.MeterStartDate = meterStartDate;
            this.Production = production;
            this.MicroProduction = microProduction;
            this.MeterProduction = meterProduction;
            this.Meta = meta;
        }

        /// <summary>
        /// System ID.
        /// </summary>
        /// <value>System ID.</value>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// When no start_date parameter is specified on the request, this is the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, it is included here in the response.
        /// </summary>
        /// <value>When no start_date parameter is specified on the request, this is the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, it is included here in the response.</value>
        [DataMember(Name = "start_date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTimeOffset StartDate { get; set; }

        /// <summary>
        /// First day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter.
        /// </summary>
        /// <value>First day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter.</value>
        [DataMember(Name = "meter_start_date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTimeOffset MeterStartDate { get; set; }

        /// <summary>
        /// An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.
        /// </summary>
        /// <value>An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.</value>
        [DataMember(Name = "production", EmitDefaultValue = false)]
        public List<int> Production { get; set; }

        /// <summary>
        /// Gets or Sets MicroProduction
        /// </summary>
        [DataMember(Name = "micro_production", EmitDefaultValue = false)]
        public List<int> MicroProduction { get; set; }

        /// <summary>
        /// Gets or Sets MeterProduction
        /// </summary>
        [DataMember(Name = "meter_production", EmitDefaultValue = false)]
        public List<int> MeterProduction { get; set; }

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
            sb.Append("class GetSystemEnergyLifetimeResponse {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  MeterStartDate: ").Append(MeterStartDate).Append("\n");
            sb.Append("  Production: ").Append(Production).Append("\n");
            sb.Append("  MicroProduction: ").Append(MicroProduction).Append("\n");
            sb.Append("  MeterProduction: ").Append(MeterProduction).Append("\n");
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
            return this.Equals(input as GetSystemEnergyLifetimeResponse);
        }

        /// <summary>
        /// Returns true if GetSystemEnergyLifetimeResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSystemEnergyLifetimeResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSystemEnergyLifetimeResponse input)
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
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.MeterStartDate == input.MeterStartDate ||
                    (this.MeterStartDate != null &&
                    this.MeterStartDate.Equals(input.MeterStartDate))
                ) && 
                (
                    this.Production == input.Production ||
                    this.Production != null &&
                    input.Production != null &&
                    this.Production.SequenceEqual(input.Production)
                ) && 
                (
                    this.MicroProduction == input.MicroProduction ||
                    this.MicroProduction != null &&
                    input.MicroProduction != null &&
                    this.MicroProduction.SequenceEqual(input.MicroProduction)
                ) && 
                (
                    this.MeterProduction == input.MeterProduction ||
                    this.MeterProduction != null &&
                    input.MeterProduction != null &&
                    this.MeterProduction.SequenceEqual(input.MeterProduction)
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
                if (this.StartDate != null)
                {
                    hashCode = (hashCode * 59) + this.StartDate.GetHashCode();
                }
                if (this.MeterStartDate != null)
                {
                    hashCode = (hashCode * 59) + this.MeterStartDate.GetHashCode();
                }
                if (this.Production != null)
                {
                    hashCode = (hashCode * 59) + this.Production.GetHashCode();
                }
                if (this.MicroProduction != null)
                {
                    hashCode = (hashCode * 59) + this.MicroProduction.GetHashCode();
                }
                if (this.MeterProduction != null)
                {
                    hashCode = (hashCode * 59) + this.MeterProduction.GetHashCode();
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
