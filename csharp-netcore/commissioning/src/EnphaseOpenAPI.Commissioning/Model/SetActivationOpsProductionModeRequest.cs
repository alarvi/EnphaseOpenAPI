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
    /// SetActivationOpsProductionModeRequest
    /// </summary>
    [DataContract(Name = "SetActivationOpsProductionModeRequest")]
    public partial class SetActivationOpsProductionModeRequest : IEquatable<SetActivationOpsProductionModeRequest>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets Mode
        /// </summary>
        [DataMember(Name = "mode", IsRequired = true, EmitDefaultValue = true)]
        public SystemProductionModeEnum Mode { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="SetActivationOpsProductionModeRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SetActivationOpsProductionModeRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SetActivationOpsProductionModeRequest" /> class.
        /// </summary>
        /// <param name="mode">mode (required).</param>
        public SetActivationOpsProductionModeRequest(SystemProductionModeEnum mode = default(SystemProductionModeEnum))
        {
            this.Mode = mode;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SetActivationOpsProductionModeRequest {\n");
            sb.Append("  Mode: ").Append(Mode).Append("\n");
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
            return this.Equals(input as SetActivationOpsProductionModeRequest);
        }

        /// <summary>
        /// Returns true if SetActivationOpsProductionModeRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of SetActivationOpsProductionModeRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SetActivationOpsProductionModeRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Mode == input.Mode ||
                    this.Mode.Equals(input.Mode)
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
                hashCode = (hashCode * 59) + this.Mode.GetHashCode();
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