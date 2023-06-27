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
    /// GetPartnerActivationsResponseSystemsInner
    /// </summary>
    [DataContract(Name = "GetPartnerActivationsResponse_systems_inner")]
    public partial class GetPartnerActivationsResponseSystemsInner : IEquatable<GetPartnerActivationsResponseSystemsInner>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets SystemType
        /// </summary>
        [DataMember(Name = "system_type", EmitDefaultValue = false)]
        public SystemTypeEnum? SystemType { get; set; }

        /// <summary>
        /// Gets or Sets InternetConnection
        /// </summary>
        [DataMember(Name = "internet_connection", EmitDefaultValue = false)]
        public SystemInternetConnectionEnum? InternetConnection { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="GetPartnerActivationsResponseSystemsInner" /> class.
        /// </summary>
        /// <param name="systemId">Enlighten ID of this system. System-generated..</param>
        /// <param name="systemName">Name of the system..</param>
        /// <param name="systemType">systemType.</param>
        /// <param name="status">System&#39;s status..</param>
        /// <param name="timezone">System&#39;s timezone..</param>
        /// <param name="stage">What stage of the activation process this activation is in. System-generated..</param>
        /// <param name="internetConnection">internetConnection.</param>
        /// <param name="lease">Whether the system is leased. Default false..</param>
        /// <param name="operational">Whether this system is permitted to operate. Default true..</param>
        /// <param name="owner">Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself..</param>
        /// <param name="ownerId">Enlighten ID of this system owner. System-generated..</param>
        /// <param name="host">Name of the system host..</param>
        /// <param name="hostId">Enlighten ID of this system host. System-generated..</param>
        /// <param name="installerName">Name of the installer..</param>
        /// <param name="installerId">Enlighten ID of the installer of this system..</param>
        /// <param name="maintainerName">Name of the maintainer..</param>
        /// <param name="maintainerId">Enlighten ID of the maintainer of this system..</param>
        /// <param name="authorizedSubcontractors">List of sub-contractors of this system..</param>
        /// <param name="uri">URI for this activation..</param>
        /// <param name="updatedAt">Activation last updated timestamp..</param>
        /// <param name="reference">Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system..</param>
        /// <param name="otherReferences">Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system..</param>
        /// <param name="address">address.</param>
        public GetPartnerActivationsResponseSystemsInner(int systemId = default(int), string systemName = default(string), SystemTypeEnum? systemType = default(SystemTypeEnum?), string status = default(string), string timezone = default(string), int stage = default(int), SystemInternetConnectionEnum? internetConnection = default(SystemInternetConnectionEnum?), bool lease = default(bool), bool operational = default(bool), string owner = default(string), int ownerId = default(int), string host = default(string), int hostId = default(int), string installerName = default(string), int installerId = default(int), string maintainerName = default(string), int maintainerId = default(int), List<GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner> authorizedSubcontractors = default(List<GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner>), string uri = default(string), long updatedAt = default(long), string reference = default(string), List<string> otherReferences = default(List<string>), Address address = default(Address))
        {
            this.SystemId = systemId;
            this.SystemName = systemName;
            this.SystemType = systemType;
            this.Status = status;
            this.Timezone = timezone;
            this.Stage = stage;
            this.InternetConnection = internetConnection;
            this.Lease = lease;
            this.Operational = operational;
            this.Owner = owner;
            this.OwnerId = ownerId;
            this.Host = host;
            this.HostId = hostId;
            this.InstallerName = installerName;
            this.InstallerId = installerId;
            this.MaintainerName = maintainerName;
            this.MaintainerId = maintainerId;
            this.AuthorizedSubcontractors = authorizedSubcontractors;
            this.Uri = uri;
            this.UpdatedAt = updatedAt;
            this.Reference = reference;
            this.OtherReferences = otherReferences;
            this.Address = address;
        }

        /// <summary>
        /// Enlighten ID of this system. System-generated.
        /// </summary>
        /// <value>Enlighten ID of this system. System-generated.</value>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// Name of the system.
        /// </summary>
        /// <value>Name of the system.</value>
        [DataMember(Name = "system_name", EmitDefaultValue = false)]
        public string SystemName { get; set; }

        /// <summary>
        /// System&#39;s status.
        /// </summary>
        /// <value>System&#39;s status.</value>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public string Status { get; set; }

        /// <summary>
        /// System&#39;s timezone.
        /// </summary>
        /// <value>System&#39;s timezone.</value>
        [DataMember(Name = "timezone", EmitDefaultValue = false)]
        public string Timezone { get; set; }

        /// <summary>
        /// What stage of the activation process this activation is in. System-generated.
        /// </summary>
        /// <value>What stage of the activation process this activation is in. System-generated.</value>
        [DataMember(Name = "stage", EmitDefaultValue = false)]
        public int Stage { get; set; }

        /// <summary>
        /// Whether the system is leased. Default false.
        /// </summary>
        /// <value>Whether the system is leased. Default false.</value>
        [DataMember(Name = "lease", EmitDefaultValue = true)]
        public bool Lease { get; set; }

        /// <summary>
        /// Whether this system is permitted to operate. Default true.
        /// </summary>
        /// <value>Whether this system is permitted to operate. Default true.</value>
        [DataMember(Name = "operational", EmitDefaultValue = true)]
        public bool Operational { get; set; }

        /// <summary>
        /// Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself.
        /// </summary>
        /// <value>Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself.</value>
        [DataMember(Name = "owner", EmitDefaultValue = false)]
        public string Owner { get; set; }

        /// <summary>
        /// Enlighten ID of this system owner. System-generated.
        /// </summary>
        /// <value>Enlighten ID of this system owner. System-generated.</value>
        [DataMember(Name = "owner_id", EmitDefaultValue = false)]
        public int OwnerId { get; set; }

        /// <summary>
        /// Name of the system host.
        /// </summary>
        /// <value>Name of the system host.</value>
        [DataMember(Name = "host", EmitDefaultValue = false)]
        public string Host { get; set; }

        /// <summary>
        /// Enlighten ID of this system host. System-generated.
        /// </summary>
        /// <value>Enlighten ID of this system host. System-generated.</value>
        [DataMember(Name = "host_id", EmitDefaultValue = false)]
        public int HostId { get; set; }

        /// <summary>
        /// Name of the installer.
        /// </summary>
        /// <value>Name of the installer.</value>
        [DataMember(Name = "installer_name", EmitDefaultValue = false)]
        public string InstallerName { get; set; }

        /// <summary>
        /// Enlighten ID of the installer of this system.
        /// </summary>
        /// <value>Enlighten ID of the installer of this system.</value>
        [DataMember(Name = "installer_id", EmitDefaultValue = false)]
        public int InstallerId { get; set; }

        /// <summary>
        /// Name of the maintainer.
        /// </summary>
        /// <value>Name of the maintainer.</value>
        [DataMember(Name = "maintainer_name", EmitDefaultValue = false)]
        public string MaintainerName { get; set; }

        /// <summary>
        /// Enlighten ID of the maintainer of this system.
        /// </summary>
        /// <value>Enlighten ID of the maintainer of this system.</value>
        [DataMember(Name = "maintainer_id", EmitDefaultValue = false)]
        public int MaintainerId { get; set; }

        /// <summary>
        /// List of sub-contractors of this system.
        /// </summary>
        /// <value>List of sub-contractors of this system.</value>
        [DataMember(Name = "authorized_subcontractors", EmitDefaultValue = false)]
        public List<GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner> AuthorizedSubcontractors { get; set; }

        /// <summary>
        /// URI for this activation.
        /// </summary>
        /// <value>URI for this activation.</value>
        [DataMember(Name = "uri", EmitDefaultValue = false)]
        public string Uri { get; set; }

        /// <summary>
        /// Activation last updated timestamp.
        /// </summary>
        /// <value>Activation last updated timestamp.</value>
        [DataMember(Name = "updated_at", EmitDefaultValue = false)]
        public long UpdatedAt { get; set; }

        /// <summary>
        /// Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system.
        /// </summary>
        /// <value>Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system.</value>
        [DataMember(Name = "reference", EmitDefaultValue = false)]
        public string Reference { get; set; }

        /// <summary>
        /// Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system.
        /// </summary>
        /// <value>Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system.</value>
        [DataMember(Name = "other_references", EmitDefaultValue = false)]
        public List<string> OtherReferences { get; set; }

        /// <summary>
        /// Gets or Sets Address
        /// </summary>
        [DataMember(Name = "address", EmitDefaultValue = false)]
        public Address Address { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetPartnerActivationsResponseSystemsInner {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  SystemName: ").Append(SystemName).Append("\n");
            sb.Append("  SystemType: ").Append(SystemType).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  Timezone: ").Append(Timezone).Append("\n");
            sb.Append("  Stage: ").Append(Stage).Append("\n");
            sb.Append("  InternetConnection: ").Append(InternetConnection).Append("\n");
            sb.Append("  Lease: ").Append(Lease).Append("\n");
            sb.Append("  Operational: ").Append(Operational).Append("\n");
            sb.Append("  Owner: ").Append(Owner).Append("\n");
            sb.Append("  OwnerId: ").Append(OwnerId).Append("\n");
            sb.Append("  Host: ").Append(Host).Append("\n");
            sb.Append("  HostId: ").Append(HostId).Append("\n");
            sb.Append("  InstallerName: ").Append(InstallerName).Append("\n");
            sb.Append("  InstallerId: ").Append(InstallerId).Append("\n");
            sb.Append("  MaintainerName: ").Append(MaintainerName).Append("\n");
            sb.Append("  MaintainerId: ").Append(MaintainerId).Append("\n");
            sb.Append("  AuthorizedSubcontractors: ").Append(AuthorizedSubcontractors).Append("\n");
            sb.Append("  Uri: ").Append(Uri).Append("\n");
            sb.Append("  UpdatedAt: ").Append(UpdatedAt).Append("\n");
            sb.Append("  Reference: ").Append(Reference).Append("\n");
            sb.Append("  OtherReferences: ").Append(OtherReferences).Append("\n");
            sb.Append("  Address: ").Append(Address).Append("\n");
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
            return this.Equals(input as GetPartnerActivationsResponseSystemsInner);
        }

        /// <summary>
        /// Returns true if GetPartnerActivationsResponseSystemsInner instances are equal
        /// </summary>
        /// <param name="input">Instance of GetPartnerActivationsResponseSystemsInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetPartnerActivationsResponseSystemsInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.SystemId == input.SystemId ||
                    this.SystemId.Equals(input.SystemId)
                ) && 
                (
                    this.SystemName == input.SystemName ||
                    (this.SystemName != null &&
                    this.SystemName.Equals(input.SystemName))
                ) && 
                (
                    this.SystemType == input.SystemType ||
                    this.SystemType.Equals(input.SystemType)
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.Timezone == input.Timezone ||
                    (this.Timezone != null &&
                    this.Timezone.Equals(input.Timezone))
                ) && 
                (
                    this.Stage == input.Stage ||
                    this.Stage.Equals(input.Stage)
                ) && 
                (
                    this.InternetConnection == input.InternetConnection ||
                    this.InternetConnection.Equals(input.InternetConnection)
                ) && 
                (
                    this.Lease == input.Lease ||
                    this.Lease.Equals(input.Lease)
                ) && 
                (
                    this.Operational == input.Operational ||
                    this.Operational.Equals(input.Operational)
                ) && 
                (
                    this.Owner == input.Owner ||
                    (this.Owner != null &&
                    this.Owner.Equals(input.Owner))
                ) && 
                (
                    this.OwnerId == input.OwnerId ||
                    this.OwnerId.Equals(input.OwnerId)
                ) && 
                (
                    this.Host == input.Host ||
                    (this.Host != null &&
                    this.Host.Equals(input.Host))
                ) && 
                (
                    this.HostId == input.HostId ||
                    this.HostId.Equals(input.HostId)
                ) && 
                (
                    this.InstallerName == input.InstallerName ||
                    (this.InstallerName != null &&
                    this.InstallerName.Equals(input.InstallerName))
                ) && 
                (
                    this.InstallerId == input.InstallerId ||
                    this.InstallerId.Equals(input.InstallerId)
                ) && 
                (
                    this.MaintainerName == input.MaintainerName ||
                    (this.MaintainerName != null &&
                    this.MaintainerName.Equals(input.MaintainerName))
                ) && 
                (
                    this.MaintainerId == input.MaintainerId ||
                    this.MaintainerId.Equals(input.MaintainerId)
                ) && 
                (
                    this.AuthorizedSubcontractors == input.AuthorizedSubcontractors ||
                    this.AuthorizedSubcontractors != null &&
                    input.AuthorizedSubcontractors != null &&
                    this.AuthorizedSubcontractors.SequenceEqual(input.AuthorizedSubcontractors)
                ) && 
                (
                    this.Uri == input.Uri ||
                    (this.Uri != null &&
                    this.Uri.Equals(input.Uri))
                ) && 
                (
                    this.UpdatedAt == input.UpdatedAt ||
                    this.UpdatedAt.Equals(input.UpdatedAt)
                ) && 
                (
                    this.Reference == input.Reference ||
                    (this.Reference != null &&
                    this.Reference.Equals(input.Reference))
                ) && 
                (
                    this.OtherReferences == input.OtherReferences ||
                    this.OtherReferences != null &&
                    input.OtherReferences != null &&
                    this.OtherReferences.SequenceEqual(input.OtherReferences)
                ) && 
                (
                    this.Address == input.Address ||
                    (this.Address != null &&
                    this.Address.Equals(input.Address))
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
                hashCode = (hashCode * 59) + this.SystemId.GetHashCode();
                if (this.SystemName != null)
                {
                    hashCode = (hashCode * 59) + this.SystemName.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.SystemType.GetHashCode();
                if (this.Status != null)
                {
                    hashCode = (hashCode * 59) + this.Status.GetHashCode();
                }
                if (this.Timezone != null)
                {
                    hashCode = (hashCode * 59) + this.Timezone.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Stage.GetHashCode();
                hashCode = (hashCode * 59) + this.InternetConnection.GetHashCode();
                hashCode = (hashCode * 59) + this.Lease.GetHashCode();
                hashCode = (hashCode * 59) + this.Operational.GetHashCode();
                if (this.Owner != null)
                {
                    hashCode = (hashCode * 59) + this.Owner.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.OwnerId.GetHashCode();
                if (this.Host != null)
                {
                    hashCode = (hashCode * 59) + this.Host.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.HostId.GetHashCode();
                if (this.InstallerName != null)
                {
                    hashCode = (hashCode * 59) + this.InstallerName.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.InstallerId.GetHashCode();
                if (this.MaintainerName != null)
                {
                    hashCode = (hashCode * 59) + this.MaintainerName.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.MaintainerId.GetHashCode();
                if (this.AuthorizedSubcontractors != null)
                {
                    hashCode = (hashCode * 59) + this.AuthorizedSubcontractors.GetHashCode();
                }
                if (this.Uri != null)
                {
                    hashCode = (hashCode * 59) + this.Uri.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.UpdatedAt.GetHashCode();
                if (this.Reference != null)
                {
                    hashCode = (hashCode * 59) + this.Reference.GetHashCode();
                }
                if (this.OtherReferences != null)
                {
                    hashCode = (hashCode * 59) + this.OtherReferences.GetHashCode();
                }
                if (this.Address != null)
                {
                    hashCode = (hashCode * 59) + this.Address.GetHashCode();
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
