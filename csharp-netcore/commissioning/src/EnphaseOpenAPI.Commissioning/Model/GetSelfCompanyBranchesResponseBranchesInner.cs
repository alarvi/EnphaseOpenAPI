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
    /// GetSelfCompanyBranchesResponseBranchesInner
    /// </summary>
    [DataContract(Name = "GetSelfCompanyBranchesResponse_branches_inner")]
    public partial class GetSelfCompanyBranchesResponseBranchesInner : IEquatable<GetSelfCompanyBranchesResponseBranchesInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSelfCompanyBranchesResponseBranchesInner" /> class.
        /// </summary>
        /// <param name="companyId">Enlighten ID of the company..</param>
        /// <param name="companyName">Name of the company..</param>
        /// <param name="location">Company location..</param>
        /// <param name="roles">What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty..</param>
        /// <param name="uri">URI to the show() method for the company. System-generated..</param>
        public GetSelfCompanyBranchesResponseBranchesInner(int companyId = default(int), string companyName = default(string), string location = default(string), List<CompanyRoleEnum> roles = default(List<CompanyRoleEnum>), string uri = default(string))
        {
            this.CompanyId = companyId;
            this.CompanyName = companyName;
            this.Location = location;
            this.Roles = roles;
            this.Uri = uri;
        }

        /// <summary>
        /// Enlighten ID of the company.
        /// </summary>
        /// <value>Enlighten ID of the company.</value>
        [DataMember(Name = "company_id", EmitDefaultValue = false)]
        public int CompanyId { get; set; }

        /// <summary>
        /// Name of the company.
        /// </summary>
        /// <value>Name of the company.</value>
        [DataMember(Name = "company_name", EmitDefaultValue = false)]
        public string CompanyName { get; set; }

        /// <summary>
        /// Company location.
        /// </summary>
        /// <value>Company location.</value>
        [DataMember(Name = "location", EmitDefaultValue = false)]
        public string Location { get; set; }

        /// <summary>
        /// What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty.
        /// </summary>
        /// <value>What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty.</value>
        [DataMember(Name = "roles", EmitDefaultValue = false)]
        public List<CompanyRoleEnum> Roles { get; set; }

        /// <summary>
        /// URI to the show() method for the company. System-generated.
        /// </summary>
        /// <value>URI to the show() method for the company. System-generated.</value>
        [DataMember(Name = "uri", EmitDefaultValue = false)]
        public string Uri { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSelfCompanyBranchesResponseBranchesInner {\n");
            sb.Append("  CompanyId: ").Append(CompanyId).Append("\n");
            sb.Append("  CompanyName: ").Append(CompanyName).Append("\n");
            sb.Append("  Location: ").Append(Location).Append("\n");
            sb.Append("  Roles: ").Append(Roles).Append("\n");
            sb.Append("  Uri: ").Append(Uri).Append("\n");
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
            return this.Equals(input as GetSelfCompanyBranchesResponseBranchesInner);
        }

        /// <summary>
        /// Returns true if GetSelfCompanyBranchesResponseBranchesInner instances are equal
        /// </summary>
        /// <param name="input">Instance of GetSelfCompanyBranchesResponseBranchesInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetSelfCompanyBranchesResponseBranchesInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.CompanyId == input.CompanyId ||
                    this.CompanyId.Equals(input.CompanyId)
                ) && 
                (
                    this.CompanyName == input.CompanyName ||
                    (this.CompanyName != null &&
                    this.CompanyName.Equals(input.CompanyName))
                ) && 
                (
                    this.Location == input.Location ||
                    (this.Location != null &&
                    this.Location.Equals(input.Location))
                ) && 
                (
                    this.Roles == input.Roles ||
                    this.Roles != null &&
                    input.Roles != null &&
                    this.Roles.SequenceEqual(input.Roles)
                ) && 
                (
                    this.Uri == input.Uri ||
                    (this.Uri != null &&
                    this.Uri.Equals(input.Uri))
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
                hashCode = (hashCode * 59) + this.CompanyId.GetHashCode();
                if (this.CompanyName != null)
                {
                    hashCode = (hashCode * 59) + this.CompanyName.GetHashCode();
                }
                if (this.Location != null)
                {
                    hashCode = (hashCode * 59) + this.Location.GetHashCode();
                }
                if (this.Roles != null)
                {
                    hashCode = (hashCode * 59) + this.Roles.GetHashCode();
                }
                if (this.Uri != null)
                {
                    hashCode = (hashCode * 59) + this.Uri.GetHashCode();
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
