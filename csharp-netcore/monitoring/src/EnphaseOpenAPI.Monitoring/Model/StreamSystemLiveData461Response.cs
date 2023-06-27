/*
 * The Enphase Monitoring API
 *
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
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
using OpenAPIDateConverter = EnphaseOpenAPI.Monitoring.Client.OpenAPIDateConverter;

namespace EnphaseOpenAPI.Monitoring.Model
{
    /// <summary>
    /// StreamSystemLiveData461Response
    /// </summary>
    [DataContract(Name = "StreamSystemLiveData_461_response")]
    public partial class StreamSystemLiveData461Response : IEquatable<StreamSystemLiveData461Response>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StreamSystemLiveData461Response" /> class.
        /// </summary>
        /// <param name="error">error.</param>
        /// <param name="timestampEpoch">Timestamp in epoch format..</param>
        /// <param name="timestampUtc">Timestamp in UTC format..</param>
        /// <param name="type">validation_error.</param>
        public StreamSystemLiveData461Response(StreamSystemLiveData461ResponseError error = default(StreamSystemLiveData461ResponseError), int timestampEpoch = default(int), string timestampUtc = default(string), string type = default(string))
        {
            this.Error = error;
            this.TimestampEpoch = timestampEpoch;
            this.TimestampUtc = timestampUtc;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets Error
        /// </summary>
        [DataMember(Name = "error", EmitDefaultValue = false)]
        public StreamSystemLiveData461ResponseError Error { get; set; }

        /// <summary>
        /// Timestamp in epoch format.
        /// </summary>
        /// <value>Timestamp in epoch format.</value>
        [DataMember(Name = "timestamp_epoch", EmitDefaultValue = false)]
        public int TimestampEpoch { get; set; }

        /// <summary>
        /// Timestamp in UTC format.
        /// </summary>
        /// <value>Timestamp in UTC format.</value>
        [DataMember(Name = "timestamp_utc", EmitDefaultValue = false)]
        public string TimestampUtc { get; set; }

        /// <summary>
        /// validation_error
        /// </summary>
        /// <value>validation_error</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public string Type { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class StreamSystemLiveData461Response {\n");
            sb.Append("  Error: ").Append(Error).Append("\n");
            sb.Append("  TimestampEpoch: ").Append(TimestampEpoch).Append("\n");
            sb.Append("  TimestampUtc: ").Append(TimestampUtc).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
            return this.Equals(input as StreamSystemLiveData461Response);
        }

        /// <summary>
        /// Returns true if StreamSystemLiveData461Response instances are equal
        /// </summary>
        /// <param name="input">Instance of StreamSystemLiveData461Response to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(StreamSystemLiveData461Response input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Error == input.Error ||
                    (this.Error != null &&
                    this.Error.Equals(input.Error))
                ) && 
                (
                    this.TimestampEpoch == input.TimestampEpoch ||
                    this.TimestampEpoch.Equals(input.TimestampEpoch)
                ) && 
                (
                    this.TimestampUtc == input.TimestampUtc ||
                    (this.TimestampUtc != null &&
                    this.TimestampUtc.Equals(input.TimestampUtc))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
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
                if (this.Error != null)
                {
                    hashCode = (hashCode * 59) + this.Error.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.TimestampEpoch.GetHashCode();
                if (this.TimestampUtc != null)
                {
                    hashCode = (hashCode * 59) + this.TimestampUtc.GetHashCode();
                }
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
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
