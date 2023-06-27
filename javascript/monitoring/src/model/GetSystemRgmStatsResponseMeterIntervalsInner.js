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
import GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner from './GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner';

/**
 * The GetSystemRgmStatsResponseMeterIntervalsInner model module.
 * @module model/GetSystemRgmStatsResponseMeterIntervalsInner
 * @version 4.0
 */
class GetSystemRgmStatsResponseMeterIntervalsInner {
    /**
     * Constructs a new <code>GetSystemRgmStatsResponseMeterIntervalsInner</code>.
     * @alias module:model/GetSystemRgmStatsResponseMeterIntervalsInner
     */
    constructor() { 
        
        GetSystemRgmStatsResponseMeterIntervalsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSystemRgmStatsResponseMeterIntervalsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSystemRgmStatsResponseMeterIntervalsInner} obj Optional instance to populate.
     * @return {module:model/GetSystemRgmStatsResponseMeterIntervalsInner} The populated <code>GetSystemRgmStatsResponseMeterIntervalsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSystemRgmStatsResponseMeterIntervalsInner();

            if (data.hasOwnProperty('meter_serial_number')) {
                obj['meter_serial_number'] = ApiClient.convertToType(data['meter_serial_number'], 'String');
            }
            if (data.hasOwnProperty('envoy_serial_number')) {
                obj['envoy_serial_number'] = ApiClient.convertToType(data['envoy_serial_number'], 'String');
            }
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], [GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetSystemRgmStatsResponseMeterIntervalsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSystemRgmStatsResponseMeterIntervalsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['meter_serial_number'] && !(typeof data['meter_serial_number'] === 'string' || data['meter_serial_number'] instanceof String)) {
            throw new Error("Expected the field `meter_serial_number` to be a primitive type in the JSON string but got " + data['meter_serial_number']);
        }
        // ensure the json data is a string
        if (data['envoy_serial_number'] && !(typeof data['envoy_serial_number'] === 'string' || data['envoy_serial_number'] instanceof String)) {
            throw new Error("Expected the field `envoy_serial_number` to be a primitive type in the JSON string but got " + data['envoy_serial_number']);
        }
        if (data['intervals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['intervals'])) {
                throw new Error("Expected the field `intervals` to be an array in the JSON data but got " + data['intervals']);
            }
            // validate the optional field `intervals` (array)
            for (const item of data['intervals']) {
                GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Meter serial number.
 * @member {String} meter_serial_number
 */
GetSystemRgmStatsResponseMeterIntervalsInner.prototype['meter_serial_number'] = undefined;

/**
 * Envoy serial number of the system that the micro reports to.
 * @member {String} envoy_serial_number
 */
GetSystemRgmStatsResponseMeterIntervalsInner.prototype['envoy_serial_number'] = undefined;

/**
 * Individual meter level interval.
 * @member {Array.<module:model/GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner>} intervals
 */
GetSystemRgmStatsResponseMeterIntervalsInner.prototype['intervals'] = undefined;






export default GetSystemRgmStatsResponseMeterIntervalsInner;
