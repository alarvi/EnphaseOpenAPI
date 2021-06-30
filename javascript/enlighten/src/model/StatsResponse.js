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
import Meta from './Meta';
import StatsResponseIntervals from './StatsResponseIntervals';

/**
 * The StatsResponse model module.
 * @module model/StatsResponse
 * @version 2.0
 */
class StatsResponse {
    /**
     * Constructs a new <code>StatsResponse</code>.
     * @alias module:model/StatsResponse
     * @param systemId {Number} Enlighten ID for this system.
     * @param totalDevices {Number} Number of active microinverters for this system.
     * @param meta {module:model/Meta} 
     * @param intervals {Array.<module:model/StatsResponseIntervals>} A list of intervals between the requested start and end times.
     */
    constructor(systemId, totalDevices, meta, intervals) { 
        
        StatsResponse.initialize(this, systemId, totalDevices, meta, intervals);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, systemId, totalDevices, meta, intervals) { 
        obj['system_id'] = systemId;
        obj['total_devices'] = totalDevices;
        obj['meta'] = meta;
        obj['intervals'] = intervals;
    }

    /**
     * Constructs a <code>StatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatsResponse} obj Optional instance to populate.
     * @return {module:model/StatsResponse} The populated <code>StatsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatsResponse();

            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
            if (data.hasOwnProperty('total_devices')) {
                obj['total_devices'] = ApiClient.convertToType(data['total_devices'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], [StatsResponseIntervals]);
            }
        }
        return obj;
    }


}

/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
StatsResponse.prototype['system_id'] = undefined;

/**
 * Number of active microinverters for this system.
 * @member {Number} total_devices
 */
StatsResponse.prototype['total_devices'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
StatsResponse.prototype['meta'] = undefined;

/**
 * A list of intervals between the requested start and end times.
 * @member {Array.<module:model/StatsResponseIntervals>} intervals
 */
StatsResponse.prototype['intervals'] = undefined;






export default StatsResponse;
