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
    /// GetCompanyUsersResponse
    /// </summary>
    [DataContract(Name = "GetCompanyUsersResponse")]
    public partial class GetCompanyUsersResponse : IEquatable<GetCompanyUsersResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetCompanyUsersResponse" /> class.
        /// </summary>
        /// <param name="users">Zero or more users. Each user is an array. In that first value of the array is Enlighten ID of the user. System-generated. Second value of the array is the email address of the user..</param>
        public GetCompanyUsersResponse(List<GetCompanyUsersResponseUsersInner> users = default(List<GetCompanyUsersResponseUsersInner>))
        {
            this.Users = users;
        }

        /// <summary>
        /// Zero or more users. Each user is an array. In that first value of the array is Enlighten ID of the user. System-generated. Second value of the array is the email address of the user.
        /// </summary>
        /// <value>Zero or more users. Each user is an array. In that first value of the array is Enlighten ID of the user. System-generated. Second value of the array is the email address of the user.</value>
        [DataMember(Name = "users", EmitDefaultValue = false)]
        public List<GetCompanyUsersResponseUsersInner> Users { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetCompanyUsersResponse {\n");
            sb.Append("  Users: ").Append(Users).Append("\n");
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
            return this.Equals(input as GetCompanyUsersResponse);
        }

        /// <summary>
        /// Returns true if GetCompanyUsersResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetCompanyUsersResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetCompanyUsersResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Users == input.Users ||
                    this.Users != null &&
                    input.Users != null &&
                    this.Users.SequenceEqual(input.Users)
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
                if (this.Users != null)
                {
                    hashCode = (hashCode * 59) + this.Users.GetHashCode();
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
