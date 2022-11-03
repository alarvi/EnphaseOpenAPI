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

/**
 * The ConsumptionLifetimeResponse model module.
 * @module model/ConsumptionLifetimeResponse
 * @version 2.0
 */
class ConsumptionLifetimeResponse {
    /**
     * Constructs a new <code>ConsumptionLifetimeResponse</code>.
     * @alias module:model/ConsumptionLifetimeResponse
     * @param startDate {Date} When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
     * @param consumption {Array.<Number>} An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.
     * @param meta {module:model/Meta} 
     */
    constructor(startDate, consumption, meta) { 
        
        ConsumptionLifetimeResponse.initialize(this, startDate, consumption, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, startDate, consumption, meta) { 
        obj['start_date'] = startDate;
        obj['consumption'] = consumption;
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>ConsumptionLifetimeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsumptionLifetimeResponse} obj Optional instance to populate.
     * @return {module:model/ConsumptionLifetimeResponse} The populated <code>ConsumptionLifetimeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsumptionLifetimeResponse();

            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
            if (data.hasOwnProperty('consumption')) {
                obj['consumption'] = ApiClient.convertToType(data['consumption'], ['Number']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConsumptionLifetimeResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConsumptionLifetimeResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ConsumptionLifetimeResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['consumption'])) {
            throw new Error("Expected the field `consumption` to be an array in the JSON data but got " + data['consumption']);
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          Meta.validateJSON(data['meta']);
        }

        return true;
    }


}

ConsumptionLifetimeResponse.RequiredProperties = ["start_date", "consumption", "meta"];

/**
 * When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
 * @member {Date} start_date
 */
ConsumptionLifetimeResponse.prototype['start_date'] = undefined;

/**
 * The identifier of the system.
 * @member {Number} system_id
 */
ConsumptionLifetimeResponse.prototype['system_id'] = undefined;

/**
 * An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.
 * @member {Array.<Number>} consumption
 */
ConsumptionLifetimeResponse.prototype['consumption'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
ConsumptionLifetimeResponse.prototype['meta'] = undefined;






export default ConsumptionLifetimeResponse;

