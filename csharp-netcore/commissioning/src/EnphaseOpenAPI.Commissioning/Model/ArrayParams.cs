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
    /// ArrayParams
    /// </summary>
    [DataContract(Name = "ArrayParams")]
    public partial class ArrayParams : IEquatable<ArrayParams>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ArrayParams" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ArrayParams() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ArrayParams" /> class.
        /// </summary>
        /// <param name="id">ID of the array. ID cannot be changed. It is only used to identify the array that needs to be updated..</param>
        /// <param name="label">Name of the array. (required).</param>
        /// <param name="angle">Angle of the array. Rotate the array clockwise by the given value. (required).</param>
        /// <param name="tilt">Tilt of the array. (required).</param>
        /// <param name="provisionedEnvoy">Provisioned envoy. (required).</param>
        /// <param name="left">Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left. (required).</param>
        /// <param name="top">Top axis position of array. Increase the value to move the array up, and decrease to move it down. (required).</param>
        /// <param name="modules">modules (required).</param>
        public ArrayParams(int id = default(int), string label = default(string), int angle = default(int), string tilt = default(string), string provisionedEnvoy = default(string), int left = default(int), int top = default(int), List<ArrayParamsModulesInner> modules = default(List<ArrayParamsModulesInner>))
        {
            // to ensure "label" is required (not null)
            if (label == null)
            {
                throw new ArgumentNullException("label is a required property for ArrayParams and cannot be null");
            }
            this.Label = label;
            this.Angle = angle;
            // to ensure "tilt" is required (not null)
            if (tilt == null)
            {
                throw new ArgumentNullException("tilt is a required property for ArrayParams and cannot be null");
            }
            this.Tilt = tilt;
            // to ensure "provisionedEnvoy" is required (not null)
            if (provisionedEnvoy == null)
            {
                throw new ArgumentNullException("provisionedEnvoy is a required property for ArrayParams and cannot be null");
            }
            this.ProvisionedEnvoy = provisionedEnvoy;
            this.Left = left;
            this.Top = top;
            // to ensure "modules" is required (not null)
            if (modules == null)
            {
                throw new ArgumentNullException("modules is a required property for ArrayParams and cannot be null");
            }
            this.Modules = modules;
            this.Id = id;
        }

        /// <summary>
        /// ID of the array. ID cannot be changed. It is only used to identify the array that needs to be updated.
        /// </summary>
        /// <value>ID of the array. ID cannot be changed. It is only used to identify the array that needs to be updated.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public int Id { get; set; }

        /// <summary>
        /// Name of the array.
        /// </summary>
        /// <value>Name of the array.</value>
        [DataMember(Name = "label", IsRequired = true, EmitDefaultValue = true)]
        public string Label { get; set; }

        /// <summary>
        /// Angle of the array. Rotate the array clockwise by the given value.
        /// </summary>
        /// <value>Angle of the array. Rotate the array clockwise by the given value.</value>
        [DataMember(Name = "angle", IsRequired = true, EmitDefaultValue = true)]
        public int Angle { get; set; }

        /// <summary>
        /// Tilt of the array.
        /// </summary>
        /// <value>Tilt of the array.</value>
        [DataMember(Name = "tilt", IsRequired = true, EmitDefaultValue = true)]
        public string Tilt { get; set; }

        /// <summary>
        /// Provisioned envoy.
        /// </summary>
        /// <value>Provisioned envoy.</value>
        [DataMember(Name = "provisioned_envoy", IsRequired = true, EmitDefaultValue = true)]
        public string ProvisionedEnvoy { get; set; }

        /// <summary>
        /// Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left.
        /// </summary>
        /// <value>Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left.</value>
        [DataMember(Name = "left", IsRequired = true, EmitDefaultValue = true)]
        public int Left { get; set; }

        /// <summary>
        /// Top axis position of array. Increase the value to move the array up, and decrease to move it down.
        /// </summary>
        /// <value>Top axis position of array. Increase the value to move the array up, and decrease to move it down.</value>
        [DataMember(Name = "top", IsRequired = true, EmitDefaultValue = true)]
        public int Top { get; set; }

        /// <summary>
        /// Gets or Sets Modules
        /// </summary>
        [DataMember(Name = "modules", IsRequired = true, EmitDefaultValue = true)]
        public List<ArrayParamsModulesInner> Modules { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ArrayParams {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Label: ").Append(Label).Append("\n");
            sb.Append("  Angle: ").Append(Angle).Append("\n");
            sb.Append("  Tilt: ").Append(Tilt).Append("\n");
            sb.Append("  ProvisionedEnvoy: ").Append(ProvisionedEnvoy).Append("\n");
            sb.Append("  Left: ").Append(Left).Append("\n");
            sb.Append("  Top: ").Append(Top).Append("\n");
            sb.Append("  Modules: ").Append(Modules).Append("\n");
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
            return this.Equals(input as ArrayParams);
        }

        /// <summary>
        /// Returns true if ArrayParams instances are equal
        /// </summary>
        /// <param name="input">Instance of ArrayParams to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ArrayParams input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    this.Id.Equals(input.Id)
                ) && 
                (
                    this.Label == input.Label ||
                    (this.Label != null &&
                    this.Label.Equals(input.Label))
                ) && 
                (
                    this.Angle == input.Angle ||
                    this.Angle.Equals(input.Angle)
                ) && 
                (
                    this.Tilt == input.Tilt ||
                    (this.Tilt != null &&
                    this.Tilt.Equals(input.Tilt))
                ) && 
                (
                    this.ProvisionedEnvoy == input.ProvisionedEnvoy ||
                    (this.ProvisionedEnvoy != null &&
                    this.ProvisionedEnvoy.Equals(input.ProvisionedEnvoy))
                ) && 
                (
                    this.Left == input.Left ||
                    this.Left.Equals(input.Left)
                ) && 
                (
                    this.Top == input.Top ||
                    this.Top.Equals(input.Top)
                ) && 
                (
                    this.Modules == input.Modules ||
                    this.Modules != null &&
                    input.Modules != null &&
                    this.Modules.SequenceEqual(input.Modules)
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
                hashCode = (hashCode * 59) + this.Id.GetHashCode();
                if (this.Label != null)
                {
                    hashCode = (hashCode * 59) + this.Label.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Angle.GetHashCode();
                if (this.Tilt != null)
                {
                    hashCode = (hashCode * 59) + this.Tilt.GetHashCode();
                }
                if (this.ProvisionedEnvoy != null)
                {
                    hashCode = (hashCode * 59) + this.ProvisionedEnvoy.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Left.GetHashCode();
                hashCode = (hashCode * 59) + this.Top.GetHashCode();
                if (this.Modules != null)
                {
                    hashCode = (hashCode * 59) + this.Modules.GetHashCode();
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