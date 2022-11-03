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
    /// SystemsResponse
    /// </summary>
    [DataContract(Name = "SystemsResponse")]
    public partial class SystemsResponse : IEquatable<SystemsResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SystemsResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SystemsResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SystemsResponse" /> class.
        /// </summary>
        /// <param name="systems">systems (required).</param>
        /// <param name="next">next.</param>
        public SystemsResponse(List<SystemsResponseSystemsInner> systems = default(List<SystemsResponseSystemsInner>), string next = default(string))
        {
            // to ensure "systems" is required (not null)
            if (systems == null)
            {
                throw new ArgumentNullException("systems is a required property for SystemsResponse and cannot be null");
            }
            this.Systems = systems;
            this.Next = next;
        }

        /// <summary>
        /// Gets or Sets Systems
        /// </summary>
        [DataMember(Name = "systems", IsRequired = true, EmitDefaultValue = true)]
        public List<SystemsResponseSystemsInner> Systems { get; set; }

        /// <summary>
        /// Gets or Sets Next
        /// </summary>
        [DataMember(Name = "next", EmitDefaultValue = false)]
        public string Next { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SystemsResponse {\n");
            sb.Append("  Systems: ").Append(Systems).Append("\n");
            sb.Append("  Next: ").Append(Next).Append("\n");
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
            return this.Equals(input as SystemsResponse);
        }

        /// <summary>
        /// Returns true if SystemsResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of SystemsResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SystemsResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Systems == input.Systems ||
                    this.Systems != null &&
                    input.Systems != null &&
                    this.Systems.SequenceEqual(input.Systems)
                ) && 
                (
                    this.Next == input.Next ||
                    (this.Next != null &&
                    this.Next.Equals(input.Next))
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
                if (this.Systems != null)
                {
                    hashCode = (hashCode * 59) + this.Systems.GetHashCode();
                }
                if (this.Next != null)
                {
                    hashCode = (hashCode * 59) + this.Next.GetHashCode();
                }
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
