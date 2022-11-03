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
 * The SearchSystemIdResponse model module.
 * @module model/SearchSystemIdResponse
 * @version 2.0
 */
class SearchSystemIdResponse {
    /**
     * Constructs a new <code>SearchSystemIdResponse</code>.
     * @alias module:model/SearchSystemIdResponse
     * @param systemId {Number} The Enlighten ID of the system.
     */
    constructor(systemId) { 
        
        SearchSystemIdResponse.initialize(this, systemId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, systemId) { 
        obj['system_id'] = systemId;
    }

    /**
     * Constructs a <code>SearchSystemIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchSystemIdResponse} obj Optional instance to populate.
     * @return {module:model/SearchSystemIdResponse} The populated <code>SearchSystemIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchSystemIdResponse();

            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchSystemIdResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchSystemIdResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchSystemIdResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SearchSystemIdResponse.RequiredProperties = ["system_id"];

/**
 * The Enlighten ID of the system.
 * @member {Number} system_id
 */
SearchSystemIdResponse.prototype['system_id'] = undefined;






export default SearchSystemIdResponse;

