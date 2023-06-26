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
    /// BatteryDeviceTelemetry
    /// </summary>
    [DataContract(Name = "BatteryDeviceTelemetry")]
    public partial class BatteryDeviceTelemetry : IEquatable<BatteryDeviceTelemetry>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets Granularity
        /// </summary>
        [DataMember(Name = "granularity", EmitDefaultValue = false)]
        public TelemetryGranularityEnum? Granularity { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="BatteryDeviceTelemetry" /> class.
        /// </summary>
        /// <param name="systemId">System ID..</param>
        /// <param name="serialNumber">Device serial number..</param>
        /// <param name="granularity">granularity.</param>
        /// <param name="totalDevices">Shall always be 1 since this is telemetry from individual micros..</param>
        /// <param name="startAt">Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response..</param>
        /// <param name="endAt">End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response..</param>
        /// <param name="items">List key &#39;intervals&#39;..</param>
        /// <param name="intervals">intervals.</param>
        /// <param name="lastReportedTime">Last reported timestamp..</param>
        /// <param name="lastReportedSoc">Last reported soc percentage..</param>
        public BatteryDeviceTelemetry(int systemId = default(int), string serialNumber = default(string), TelemetryGranularityEnum? granularity = default(TelemetryGranularityEnum?), int totalDevices = default(int), long startAt = default(long), long endAt = default(long), string items = default(string), List<BatteryDeviceTelemetryIntervalsInner> intervals = default(List<BatteryDeviceTelemetryIntervalsInner>), int lastReportedTime = default(int), string lastReportedSoc = default(string))
        {
            this.SystemId = systemId;
            this.SerialNumber = serialNumber;
            this.Granularity = granularity;
            this.TotalDevices = totalDevices;
            this.StartAt = startAt;
            this.EndAt = endAt;
            this.Items = items;
            this.Intervals = intervals;
            this.LastReportedTime = lastReportedTime;
            this.LastReportedSoc = lastReportedSoc;
        }

        /// <summary>
        /// System ID.
        /// </summary>
        /// <value>System ID.</value>
        [DataMember(Name = "system_id", EmitDefaultValue = false)]
        public int SystemId { get; set; }

        /// <summary>
        /// Device serial number.
        /// </summary>
        /// <value>Device serial number.</value>
        [DataMember(Name = "serial_number", EmitDefaultValue = false)]
        public string SerialNumber { get; set; }

        /// <summary>
        /// Shall always be 1 since this is telemetry from individual micros.
        /// </summary>
        /// <value>Shall always be 1 since this is telemetry from individual micros.</value>
        [DataMember(Name = "total_devices", EmitDefaultValue = false)]
        public int TotalDevices { get; set; }

        /// <summary>
        /// Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response.
        /// </summary>
        /// <value>Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response.</value>
        [DataMember(Name = "start_at", EmitDefaultValue = false)]
        public long StartAt { get; set; }

        /// <summary>
        /// End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response.
        /// </summary>
        /// <value>End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response.</value>
        [DataMember(Name = "end_at", EmitDefaultValue = false)]
        public long EndAt { get; set; }

        /// <summary>
        /// List key &#39;intervals&#39;.
        /// </summary>
        /// <value>List key &#39;intervals&#39;.</value>
        [DataMember(Name = "items", EmitDefaultValue = false)]
        public string Items { get; set; }

        /// <summary>
        /// Gets or Sets Intervals
        /// </summary>
        [DataMember(Name = "intervals", EmitDefaultValue = false)]
        public List<BatteryDeviceTelemetryIntervalsInner> Intervals { get; set; }

        /// <summary>
        /// Last reported timestamp.
        /// </summary>
        /// <value>Last reported timestamp.</value>
        [DataMember(Name = "last_reported_time", EmitDefaultValue = false)]
        public int LastReportedTime { get; set; }

        /// <summary>
        /// Last reported soc percentage.
        /// </summary>
        /// <value>Last reported soc percentage.</value>
        [DataMember(Name = "last_reported_soc", EmitDefaultValue = false)]
        public string LastReportedSoc { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class BatteryDeviceTelemetry {\n");
            sb.Append("  SystemId: ").Append(SystemId).Append("\n");
            sb.Append("  SerialNumber: ").Append(SerialNumber).Append("\n");
            sb.Append("  Granularity: ").Append(Granularity).Append("\n");
            sb.Append("  TotalDevices: ").Append(TotalDevices).Append("\n");
            sb.Append("  StartAt: ").Append(StartAt).Append("\n");
            sb.Append("  EndAt: ").Append(EndAt).Append("\n");
            sb.Append("  Items: ").Append(Items).Append("\n");
            sb.Append("  Intervals: ").Append(Intervals).Append("\n");
            sb.Append("  LastReportedTime: ").Append(LastReportedTime).Append("\n");
            sb.Append("  LastReportedSoc: ").Append(LastReportedSoc).Append("\n");
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
            return this.Equals(input as BatteryDeviceTelemetry);
        }

        /// <summary>
        /// Returns true if BatteryDeviceTelemetry instances are equal
        /// </summary>
        /// <param name="input">Instance of BatteryDeviceTelemetry to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BatteryDeviceTelemetry input)
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
                    this.SerialNumber == input.SerialNumber ||
                    (this.SerialNumber != null &&
                    this.SerialNumber.Equals(input.SerialNumber))
                ) && 
                (
                    this.Granularity == input.Granularity ||
                    this.Granularity.Equals(input.Granularity)
                ) && 
                (
                    this.TotalDevices == input.TotalDevices ||
                    this.TotalDevices.Equals(input.TotalDevices)
                ) && 
                (
                    this.StartAt == input.StartAt ||
                    this.StartAt.Equals(input.StartAt)
                ) && 
                (
                    this.EndAt == input.EndAt ||
                    this.EndAt.Equals(input.EndAt)
                ) && 
                (
                    this.Items == input.Items ||
                    (this.Items != null &&
                    this.Items.Equals(input.Items))
                ) && 
                (
                    this.Intervals == input.Intervals ||
                    this.Intervals != null &&
                    input.Intervals != null &&
                    this.Intervals.SequenceEqual(input.Intervals)
                ) && 
                (
                    this.LastReportedTime == input.LastReportedTime ||
                    this.LastReportedTime.Equals(input.LastReportedTime)
                ) && 
                (
                    this.LastReportedSoc == input.LastReportedSoc ||
                    (this.LastReportedSoc != null &&
                    this.LastReportedSoc.Equals(input.LastReportedSoc))
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
                if (this.SerialNumber != null)
                {
                    hashCode = (hashCode * 59) + this.SerialNumber.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Granularity.GetHashCode();
                hashCode = (hashCode * 59) + this.TotalDevices.GetHashCode();
                hashCode = (hashCode * 59) + this.StartAt.GetHashCode();
                hashCode = (hashCode * 59) + this.EndAt.GetHashCode();
                if (this.Items != null)
                {
                    hashCode = (hashCode * 59) + this.Items.GetHashCode();
                }
                if (this.Intervals != null)
                {
                    hashCode = (hashCode * 59) + this.Intervals.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.LastReportedTime.GetHashCode();
                if (this.LastReportedSoc != null)
                {
                    hashCode = (hashCode * 59) + this.LastReportedSoc.GetHashCode();
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
