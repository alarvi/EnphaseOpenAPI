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
 * The BatteryDeviceTelemetryIntervalsInnerDischarge model module.
 * @module model/BatteryDeviceTelemetryIntervalsInnerDischarge
 * @version 4.0
 */
class BatteryDeviceTelemetryIntervalsInnerDischarge {
    /**
     * Constructs a new <code>BatteryDeviceTelemetryIntervalsInnerDischarge</code>.
     * @alias module:model/BatteryDeviceTelemetryIntervalsInnerDischarge
     */
    constructor() { 
        
        BatteryDeviceTelemetryIntervalsInnerDischarge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatteryDeviceTelemetryIntervalsInnerDischarge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatteryDeviceTelemetryIntervalsInnerDischarge} obj Optional instance to populate.
     * @return {module:model/BatteryDeviceTelemetryIntervalsInnerDischarge} The populated <code>BatteryDeviceTelemetryIntervalsInnerDischarge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatteryDeviceTelemetryIntervalsInnerDischarge();

            if (data.hasOwnProperty('enwh')) {
                obj['enwh'] = ApiClient.convertToType(data['enwh'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatteryDeviceTelemetryIntervalsInnerDischarge</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatteryDeviceTelemetryIntervalsInnerDischarge</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Energy discharged from the battery during the interval.
 * @member {Number} enwh
 */
BatteryDeviceTelemetryIntervalsInnerDischarge.prototype['enwh'] = undefined;






export default BatteryDeviceTelemetryIntervalsInnerDischarge;

