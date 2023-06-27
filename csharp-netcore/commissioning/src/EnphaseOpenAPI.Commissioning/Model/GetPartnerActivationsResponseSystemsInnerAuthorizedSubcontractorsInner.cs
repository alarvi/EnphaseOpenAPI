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
    /// GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner
    /// </summary>
    [DataContract(Name = "GetPartnerActivationsResponse_systems_inner_authorized_subcontractors_inner")]
    public partial class GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner : IEquatable<GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner" /> class.
        /// </summary>
        /// <param name="authorizedSubcontractorId">The Enlighten ID of the sub-contractor of this system. System-generated..</param>
        /// <param name="authorizedSubcontractorName">Name of the sub-contractor of this system..</param>
        /// <param name="status">Current status of the subcontractor for the site. This field will be shown only for pending and rejected sub-contractors..</param>
        public GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner(int authorizedSubcontractorId = default(int), string authorizedSubcontractorName = default(string), string status = default(string))
        {
            this.AuthorizedSubcontractorId = authorizedSubcontractorId;
            this.AuthorizedSubcontractorName = authorizedSubcontractorName;
            this.Status = status;
        }

        /// <summary>
        /// The Enlighten ID of the sub-contractor of this system. System-generated.
        /// </summary>
        /// <value>The Enlighten ID of the sub-contractor of this system. System-generated.</value>
        [DataMember(Name = "authorized_subcontractor_id", EmitDefaultValue = false)]
        public int AuthorizedSubcontractorId { get; set; }

        /// <summary>
        /// Name of the sub-contractor of this system.
        /// </summary>
        /// <value>Name of the sub-contractor of this system.</value>
        [DataMember(Name = "authorized_subcontractor_name", EmitDefaultValue = false)]
        public string AuthorizedSubcontractorName { get; set; }

        /// <summary>
        /// Current status of the subcontractor for the site. This field will be shown only for pending and rejected sub-contractors.
        /// </summary>
        /// <value>Current status of the subcontractor for the site. This field will be shown only for pending and rejected sub-contractors.</value>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public string Status { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner {\n");
            sb.Append("  AuthorizedSubcontractorId: ").Append(AuthorizedSubcontractorId).Append("\n");
            sb.Append("  AuthorizedSubcontractorName: ").Append(AuthorizedSubcontractorName).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
            return this.Equals(input as GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner);
        }

        /// <summary>
        /// Returns true if GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner instances are equal
        /// </summary>
        /// <param name="input">Instance of GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.AuthorizedSubcontractorId == input.AuthorizedSubcontractorId ||
                    this.AuthorizedSubcontractorId.Equals(input.AuthorizedSubcontractorId)
                ) && 
                (
                    this.AuthorizedSubcontractorName == input.AuthorizedSubcontractorName ||
                    (this.AuthorizedSubcontractorName != null &&
                    this.AuthorizedSubcontractorName.Equals(input.AuthorizedSubcontractorName))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
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
                hashCode = (hashCode * 59) + this.AuthorizedSubcontractorId.GetHashCode();
                if (this.AuthorizedSubcontractorName != null)
                {
                    hashCode = (hashCode * 59) + this.AuthorizedSubcontractorName.GetHashCode();
                }
                if (this.Status != null)
                {
                    hashCode = (hashCode * 59) + this.Status.GetHashCode();
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