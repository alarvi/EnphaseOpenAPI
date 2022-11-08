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
 * The RgmStatsResponseIntervalsInner model module.
 * @module model/RgmStatsResponseIntervalsInner
 * @version 2.0
 */
class RgmStatsResponseIntervalsInner {
    /**
     * Constructs a new <code>RgmStatsResponseIntervalsInner</code>.
     * @alias module:model/RgmStatsResponseIntervalsInner
     * @param endAt {Number} End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
     * @param whDel {Number} Energy delivered during this interval, in Watt-hours.
     * @param devicesReporting {Number} Number of revenue-grade meters that reported data for this interval at the time of the request.
     */
    constructor(endAt, whDel, devicesReporting) { 
        
        RgmStatsResponseIntervalsInner.initialize(this, endAt, whDel, devicesReporting);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, endAt, whDel, devicesReporting) { 
        obj['end_at'] = endAt;
        obj['wh_del'] = whDel;
        obj['devices_reporting'] = devicesReporting;
    }

    /**
     * Constructs a <code>RgmStatsResponseIntervalsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RgmStatsResponseIntervalsInner} obj Optional instance to populate.
     * @return {module:model/RgmStatsResponseIntervalsInner} The populated <code>RgmStatsResponseIntervalsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RgmStatsResponseIntervalsInner();

            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('wh_del')) {
                obj['wh_del'] = ApiClient.convertToType(data['wh_del'], 'Number');
            }
            if (data.hasOwnProperty('devices_reporting')) {
                obj['devices_reporting'] = ApiClient.convertToType(data['devices_reporting'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RgmStatsResponseIntervalsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RgmStatsResponseIntervalsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RgmStatsResponseIntervalsInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

RgmStatsResponseIntervalsInner.RequiredProperties = ["end_at", "wh_del", "devices_reporting"];

/**
 * End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Number} end_at
 */
RgmStatsResponseIntervalsInner.prototype['end_at'] = undefined;

/**
 * Energy delivered during this interval, in Watt-hours.
 * @member {Number} wh_del
 */
RgmStatsResponseIntervalsInner.prototype['wh_del'] = undefined;

/**
 * Number of revenue-grade meters that reported data for this interval at the time of the request.
 * @member {Number} devices_reporting
 */
RgmStatsResponseIntervalsInner.prototype['devices_reporting'] = undefined;






export default RgmStatsResponseIntervalsInner;
