/**
 * The Enphase Monitoring API
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetSystemBatteryTelemetryResponseIntervalsInnerCharge model module.
 * @module model/GetSystemBatteryTelemetryResponseIntervalsInnerCharge
 * @version 4.0
 */
class GetSystemBatteryTelemetryResponseIntervalsInnerCharge {
    /**
     * Constructs a new <code>GetSystemBatteryTelemetryResponseIntervalsInnerCharge</code>.
     * @alias module:model/GetSystemBatteryTelemetryResponseIntervalsInnerCharge
     */
    constructor() { 
        
        GetSystemBatteryTelemetryResponseIntervalsInnerCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSystemBatteryTelemetryResponseIntervalsInnerCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSystemBatteryTelemetryResponseIntervalsInnerCharge} obj Optional instance to populate.
     * @return {module:model/GetSystemBatteryTelemetryResponseIntervalsInnerCharge} The populated <code>GetSystemBatteryTelemetryResponseIntervalsInnerCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSystemBatteryTelemetryResponseIntervalsInnerCharge();

            if (data.hasOwnProperty('enwh')) {
                obj['enwh'] = ApiClient.convertToType(data['enwh'], 'Number');
            }
            if (data.hasOwnProperty('devices_reporting')) {
                obj['devices_reporting'] = ApiClient.convertToType(data['devices_reporting'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetSystemBatteryTelemetryResponseIntervalsInnerCharge</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSystemBatteryTelemetryResponseIntervalsInnerCharge</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Energy into the battery during the interval.
 * @member {Number} enwh
 */
GetSystemBatteryTelemetryResponseIntervalsInnerCharge.prototype['enwh'] = undefined;

/**
 * Number of devices reporting.
 * @member {Number} devices_reporting
 */
GetSystemBatteryTelemetryResponseIntervalsInnerCharge.prototype['devices_reporting'] = undefined;






export default GetSystemBatteryTelemetryResponseIntervalsInnerCharge;

