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
    /// Information about the manufacturer whose PV module models are in the response.
    /// </summary>
    [DataContract(Name = "GetPvManufacturerModelsResponse_pv_manufacturers")]
    public partial class GetPvManufacturerModelsResponsePvManufacturers : IEquatable<GetPvManufacturerModelsResponsePvManufacturers>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetPvManufacturerModelsResponsePvManufacturers" /> class.
        /// </summary>
        /// <param name="pvManufacturerId">Pv manufacturer ID..</param>
        /// <param name="name">Name of the Pv manufacturer..</param>
        public GetPvManufacturerModelsResponsePvManufacturers(int pvManufacturerId = default(int), string name = default(string))
        {
            this.PvManufacturerId = pvManufacturerId;
            this.Name = name;
        }

        /// <summary>
        /// Pv manufacturer ID.
        /// </summary>
        /// <value>Pv manufacturer ID.</value>
        [DataMember(Name = "pv_manufacturer_id", EmitDefaultValue = false)]
        public int PvManufacturerId { get; set; }

        /// <summary>
        /// Name of the Pv manufacturer.
        /// </summary>
        /// <value>Name of the Pv manufacturer.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetPvManufacturerModelsResponsePvManufacturers {\n");
            sb.Append("  PvManufacturerId: ").Append(PvManufacturerId).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
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
            return this.Equals(input as GetPvManufacturerModelsResponsePvManufacturers);
        }

        /// <summary>
        /// Returns true if GetPvManufacturerModelsResponsePvManufacturers instances are equal
        /// </summary>
        /// <param name="input">Instance of GetPvManufacturerModelsResponsePvManufacturers to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetPvManufacturerModelsResponsePvManufacturers input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.PvManufacturerId == input.PvManufacturerId ||
                    this.PvManufacturerId.Equals(input.PvManufacturerId)
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
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
                hashCode = (hashCode * 59) + this.PvManufacturerId.GetHashCode();
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
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
