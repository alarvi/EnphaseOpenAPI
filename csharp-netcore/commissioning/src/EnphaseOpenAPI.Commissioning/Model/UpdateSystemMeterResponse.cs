/*
 * The Enphase Commissioning API
 *
 * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
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
using OpenAPIDateConverter = EnphaseOpenAPI.Commissioning.Client.OpenAPIDateConverter;

namespace EnphaseOpenAPI.Commissioning.Model
{
    /// <summary>
    /// UpdateSystemMeterResponse
    /// </summary>
    [DataContract(Name = "UpdateSystemMeterResponse")]
    public partial class UpdateSystemMeterResponse : IEquatable<UpdateSystemMeterResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateSystemMeterResponse" /> class.
        /// </summary>
        /// <param name="serialNumber">Meter serial number..</param>
        /// <param name="manufacturer">Name of the manufacturer..</param>
        /// <param name="model">Model..</param>
        /// <param name="type">Meter type..</param>
        /// <param name="operationalDate">Operational date..</param>
        public UpdateSystemMeterResponse(string serialNumber = default(string), string manufacturer = default(string), string model = default(string), string type = default(string), DateTimeOffset operationalDate = default(DateTimeOffset))
        {
            this.SerialNumber = serialNumber;
            this.Manufacturer = manufacturer;
            this.Model = model;
            this.Type = type;
            this.OperationalDate = operationalDate;
        }

        /// <summary>
        /// Meter serial number.
        /// </summary>
        /// <value>Meter serial number.</value>
        [DataMember(Name = "serial_number", EmitDefaultValue = false)]
        public string SerialNumber { get; set; }

        /// <summary>
        /// Name of the manufacturer.
        /// </summary>
        /// <value>Name of the manufacturer.</value>
        [DataMember(Name = "manufacturer", EmitDefaultValue = false)]
        public string Manufacturer { get; set; }

        /// <summary>
        /// Model.
        /// </summary>
        /// <value>Model.</value>
        [DataMember(Name = "model", EmitDefaultValue = false)]
        public string Model { get; set; }

        /// <summary>
        /// Meter type.
        /// </summary>
        /// <value>Meter type.</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public string Type { get; set; }

        /// <summary>
        /// Operational date.
        /// </summary>
        /// <value>Operational date.</value>
        [DataMember(Name = "operational_date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTimeOffset OperationalDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateSystemMeterResponse {\n");
            sb.Append("  SerialNumber: ").Append(SerialNumber).Append("\n");
            sb.Append("  Manufacturer: ").Append(Manufacturer).Append("\n");
            sb.Append("  Model: ").Append(Model).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  OperationalDate: ").Append(OperationalDate).Append("\n");
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
            return this.Equals(input as UpdateSystemMeterResponse);
        }

        /// <summary>
        /// Returns true if UpdateSystemMeterResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateSystemMeterResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateSystemMeterResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.SerialNumber == input.SerialNumber ||
                    (this.SerialNumber != null &&
                    this.SerialNumber.Equals(input.SerialNumber))
                ) && 
                (
                    this.Manufacturer == input.Manufacturer ||
                    (this.Manufacturer != null &&
                    this.Manufacturer.Equals(input.Manufacturer))
                ) && 
                (
                    this.Model == input.Model ||
                    (this.Model != null &&
                    this.Model.Equals(input.Model))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.OperationalDate == input.OperationalDate ||
                    (this.OperationalDate != null &&
                    this.OperationalDate.Equals(input.OperationalDate))
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
                if (this.SerialNumber != null)
                {
                    hashCode = (hashCode * 59) + this.SerialNumber.GetHashCode();
                }
                if (this.Manufacturer != null)
                {
                    hashCode = (hashCode * 59) + this.Manufacturer.GetHashCode();
                }
                if (this.Model != null)
                {
                    hashCode = (hashCode * 59) + this.Model.GetHashCode();
                }
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
                }
                if (this.OperationalDate != null)
                {
                    hashCode = (hashCode * 59) + this.OperationalDate.GetHashCode();
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
