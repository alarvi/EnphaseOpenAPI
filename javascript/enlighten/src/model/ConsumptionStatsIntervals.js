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

/**
 * The ConsumptionStatsIntervals model module.
 * @module model/ConsumptionStatsIntervals
 * @version 2.0
 */
class ConsumptionStatsIntervals {
    /**
     * Constructs a new <code>ConsumptionStatsIntervals</code>.
     * @alias module:model/ConsumptionStatsIntervals
     * @param endAt {Number} End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
     * @param enwh {Number} Energy consumed during this interval, in Watt-hours.
     * @param devicesReporting {Number} Number of consumption meters that reported data for this interval at the time of the request.
     */
    constructor(endAt, enwh, devicesReporting) { 
        
        ConsumptionStatsIntervals.initialize(this, endAt, enwh, devicesReporting);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, endAt, enwh, devicesReporting) { 
        obj['end_at'] = endAt;
        obj['enwh'] = enwh;
        obj['devices_reporting'] = devicesReporting;
    }

    /**
     * Constructs a <code>ConsumptionStatsIntervals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsumptionStatsIntervals} obj Optional instance to populate.
     * @return {module:model/ConsumptionStatsIntervals} The populated <code>ConsumptionStatsIntervals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsumptionStatsIntervals();

            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('enwh')) {
                obj['enwh'] = ApiClient.convertToType(data['enwh'], 'Number');
            }
            if (data.hasOwnProperty('devices_reporting')) {
                obj['devices_reporting'] = ApiClient.convertToType(data['devices_reporting'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Number} end_at
 */
ConsumptionStatsIntervals.prototype['end_at'] = undefined;

/**
 * Energy consumed during this interval, in Watt-hours.
 * @member {Number} enwh
 */
ConsumptionStatsIntervals.prototype['enwh'] = undefined;

/**
 * Number of consumption meters that reported data for this interval at the time of the request.
 * @member {Number} devices_reporting
 */
ConsumptionStatsIntervals.prototype['devices_reporting'] = undefined;






export default ConsumptionStatsIntervals;
