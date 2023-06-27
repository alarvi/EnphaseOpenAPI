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
import GetSystemConsumptionMeterTelemetryResponseIntervalsInner from './GetSystemConsumptionMeterTelemetryResponseIntervalsInner';
import Meta from './Meta';
import TelemetryGranularityEnum from './TelemetryGranularityEnum';

/**
 * The GetSystemConsumptionMeterTelemetryResponse model module.
 * @module model/GetSystemConsumptionMeterTelemetryResponse
 * @version 4.0
 */
class GetSystemConsumptionMeterTelemetryResponse {
    /**
     * Constructs a new <code>GetSystemConsumptionMeterTelemetryResponse</code>.
     * @alias module:model/GetSystemConsumptionMeterTelemetryResponse
     */
    constructor() { 
        
        GetSystemConsumptionMeterTelemetryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSystemConsumptionMeterTelemetryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSystemConsumptionMeterTelemetryResponse} obj Optional instance to populate.
     * @return {module:model/GetSystemConsumptionMeterTelemetryResponse} The populated <code>GetSystemConsumptionMeterTelemetryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSystemConsumptionMeterTelemetryResponse();

            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
            if (data.hasOwnProperty('granularity')) {
                obj['granularity'] = TelemetryGranularityEnum.constructFromObject(data['granularity']);
            }
            if (data.hasOwnProperty('total_devices')) {
                obj['total_devices'] = ApiClient.convertToType(data['total_devices'], 'Number');
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Number');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], 'String');
            }
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], [GetSystemConsumptionMeterTelemetryResponseIntervalsInner]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetSystemConsumptionMeterTelemetryResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSystemConsumptionMeterTelemetryResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['items'] && !(typeof data['items'] === 'string' || data['items'] instanceof String)) {
            throw new Error("Expected the field `items` to be a primitive type in the JSON string but got " + data['items']);
        }
        if (data['intervals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['intervals'])) {
                throw new Error("Expected the field `intervals` to be an array in the JSON data but got " + data['intervals']);
            }
            // validate the optional field `intervals` (array)
            for (const item of data['intervals']) {
                GetSystemConsumptionMeterTelemetryResponseIntervalsInner.validateJSON(item);
            };
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          Meta.validateJSON(data['meta']);
        }

        return true;
    }


}



/**
 * Unique numeric ID of the system.
 * @member {Number} system_id
 */
GetSystemConsumptionMeterTelemetryResponse.prototype['system_id'] = undefined;

/**
 * @member {module:model/TelemetryGranularityEnum} granularity
 */
GetSystemConsumptionMeterTelemetryResponse.prototype['granularity'] = undefined;

/**
 * Number of non-retired consumption meters in the site.
 * @member {Number} total_devices
 */
GetSystemConsumptionMeterTelemetryResponse.prototype['total_devices'] = undefined;

/**
 * Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
 * @member {Number} start_at
 */
GetSystemConsumptionMeterTelemetryResponse.prototype['start_at'] = undefined;

/**
 * End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.
 * @member {Number} end_at
 */
GetSystemConsumptionMeterTelemetryResponse.prototype['end_at'] = undefined;

/**
 * List key 'intervals'.
 * @member {String} items
 */
GetSystemConsumptionMeterTelemetryResponse.prototype['items'] = undefined;

/**
 * @member {Array.<module:model/GetSystemConsumptionMeterTelemetryResponseIntervalsInner>} intervals
 */
GetSystemConsumptionMeterTelemetryResponse.prototype['intervals'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
GetSystemConsumptionMeterTelemetryResponse.prototype['meta'] = undefined;






export default GetSystemConsumptionMeterTelemetryResponse;
