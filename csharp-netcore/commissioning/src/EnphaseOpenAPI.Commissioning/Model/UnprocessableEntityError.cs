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
    /// UnprocessableEntityError
    /// </summary>
    [DataContract(Name = "UnprocessableEntityError")]
    public partial class UnprocessableEntityError : IEquatable<UnprocessableEntityError>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UnprocessableEntityError" /> class.
        /// </summary>
        /// <param name="errorCode">errorCode.</param>
        /// <param name="errorMessages">errorMessages.</param>
        public UnprocessableEntityError(int errorCode = default(int), List<string> errorMessages = default(List<string>))
        {
            this.ErrorCode = errorCode;
            this.ErrorMessages = errorMessages;
        }

        /// <summary>
        /// Gets or Sets ErrorCode
        /// </summary>
        [DataMember(Name = "errorCode", EmitDefaultValue = false)]
        public int ErrorCode { get; set; }

        /// <summary>
        /// Gets or Sets ErrorMessages
        /// </summary>
        [DataMember(Name = "errorMessages", EmitDefaultValue = false)]
        public List<string> ErrorMessages { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UnprocessableEntityError {\n");
            sb.Append("  ErrorCode: ").Append(ErrorCode).Append("\n");
            sb.Append("  ErrorMessages: ").Append(ErrorMessages).Append("\n");
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
            return this.Equals(input as UnprocessableEntityError);
        }

        /// <summary>
        /// Returns true if UnprocessableEntityError instances are equal
        /// </summary>
        /// <param name="input">Instance of UnprocessableEntityError to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UnprocessableEntityError input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ErrorCode == input.ErrorCode ||
                    this.ErrorCode.Equals(input.ErrorCode)
                ) && 
                (
                    this.ErrorMessages == input.ErrorMessages ||
                    this.ErrorMessages != null &&
                    input.ErrorMessages != null &&
                    this.ErrorMessages.SequenceEqual(input.ErrorMessages)
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
                hashCode = (hashCode * 59) + this.ErrorCode.GetHashCode();
                if (this.ErrorMessages != null)
                {
                    hashCode = (hashCode * 59) + this.ErrorMessages.GetHashCode();
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
