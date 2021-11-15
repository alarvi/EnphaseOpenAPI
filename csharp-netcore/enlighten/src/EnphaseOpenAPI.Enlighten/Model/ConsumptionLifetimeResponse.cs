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
    /// ConsumptionLifetimeResponse
    /// </summary>
    [DataContract(Name = "ConsumptionLifetimeResponse")]
    public partial class ConsumptionLifetimeResponse : IEquatable<ConsumptionLifetimeResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsumptionLifetimeResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ConsumptionLifetimeResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsumptionLifetimeResponse" /> class.
        /// </summary>
        /// <param name="startDate">When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. (required).</param>
        /// <param name="systemId">The identifier of the system..</param>
        /// <param name="consumption">An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. (required).</param>
        /// <param name="meta">meta (required).</param>
        public ConsumptionLifetimeResponse(DateTimeOffset startDate = default(DateTimeOffset), int systemId = default(int), List<int> consumption = default(List<int>), Meta meta = default(Meta))
        {
            this.StartDate = startDate;
            // to ensure "consumption" is required (not null)
            if (consumption == null) {
                throw new ArgumentNullException("consumption is a required property for ConsumptionLifetimeResponse and cannot be null");
            }
            this.Consumption = consumption;
            // to ensure "meta" is required (not null)
            if (meta == null) {
                throw new ArgumentNullException("meta is a required property for ConsumptionLifetimeResponse and cannot be null");
            }
            this.Meta = meta;
            this.SystemId = systemId;
        }

        /// <summary>
        /// When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response.
        /// </summary>
        /// <value>When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response.</value>
        [DataMember(Name = "start_date", IsRequired = true, EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTimeOffset StartDate { get; set; }

        /// <summary>
        /// The identifier of the system.
        /// </summary>
        /// <value>The identifier of the system.</value>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.
        /// </summary>
        /// <value>An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.</value>
        [DataMember(Name = "consumption", IsRequired = true, EmitDefaultValue = false)]
        public List<int> Consumption { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", IsRequired = true, EmitDefaultValue = false)]
        public Meta Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ConsumptionLifetimeResponse {\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  Consumption: ").Append(Consumption).Append("\n");
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
            return this.Equals(input as ConsumptionLifetimeResponse);
        }

        /// <summary>
        /// Returns true if ConsumptionLifetimeResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of ConsumptionLifetimeResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ConsumptionLifetimeResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.SystemId == input.SystemId ||
                    this.SystemId.Equals(input.SystemId)
                ) && 
                (
                    this.Consumption == input.Consumption ||
                    this.Consumption != null &&
                    input.Consumption != null &&
                    this.Consumption.SequenceEqual(input.Consumption)
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
                if (this.StartDate != null)
                    hashCode = hashCode * 59 + this.StartDate.GetHashCode();
                hashCode = hashCode * 59 + this.SystemId.GetHashCode();
                if (this.Consumption != null)
                    hashCode = hashCode * 59 + this.Consumption.GetHashCode();
                if (this.Meta != null)
                    hashCode = hashCode * 59 + this.Meta.GetHashCode();
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
