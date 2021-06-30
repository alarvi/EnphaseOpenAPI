/**
 * The Enlighten Systems API
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RgmStatsResponseIntervals1 from './RgmStatsResponseIntervals1';

/**
 * The RgmStatsResponseMeterIntervals model module.
 * @module model/RgmStatsResponseMeterIntervals
 * @version 2.0
 */
class RgmStatsResponseMeterIntervals {
    /**
     * Constructs a new <code>RgmStatsResponseMeterIntervals</code>.
     * @alias module:model/RgmStatsResponseMeterIntervals
     * @param meterSerialNumber {String} Serial number of the revenue grade meter.
     * @param envoySerialNumber {String} Serial number of the reporting envoy.
     * @param intervals {Array.<module:model/RgmStatsResponseIntervals1>} Individual meter level interval.
     */
    constructor(meterSerialNumber, envoySerialNumber, intervals) { 
        
        RgmStatsResponseMeterIntervals.initialize(this, meterSerialNumber, envoySerialNumber, intervals);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meterSerialNumber, envoySerialNumber, intervals) { 
        obj['meter_serial_number'] = meterSerialNumber;
        obj['envoy_serial_number'] = envoySerialNumber;
        obj['intervals'] = intervals;
    }

    /**
     * Constructs a <code>RgmStatsResponseMeterIntervals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RgmStatsResponseMeterIntervals} obj Optional instance to populate.
     * @return {module:model/RgmStatsResponseMeterIntervals} The populated <code>RgmStatsResponseMeterIntervals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RgmStatsResponseMeterIntervals();

            if (data.hasOwnProperty('meter_serial_number')) {
                obj['meter_serial_number'] = ApiClient.convertToType(data['meter_serial_number'], 'String');
            }
            if (data.hasOwnProperty('envoy_serial_number')) {
                obj['envoy_serial_number'] = ApiClient.convertToType(data['envoy_serial_number'], 'String');
            }
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], [RgmStatsResponseIntervals1]);
            }
        }
        return obj;
    }


}

/**
 * Serial number of the revenue grade meter.
 * @member {String} meter_serial_number
 */
RgmStatsResponseMeterIntervals.prototype['meter_serial_number'] = undefined;

/**
 * Serial number of the reporting envoy.
 * @member {String} envoy_serial_number
 */
RgmStatsResponseMeterIntervals.prototype['envoy_serial_number'] = undefined;

/**
 * Individual meter level interval.
 * @member {Array.<module:model/RgmStatsResponseIntervals1>} intervals
 */
RgmStatsResponseMeterIntervals.prototype['intervals'] = undefined;






export default RgmStatsResponseMeterIntervals;
