/**
 * The Enphase Commissioning API
 * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
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
 * The TooManyRequestsError model module.
 * @module model/TooManyRequestsError
 * @version 4.0
 */
class TooManyRequestsError {
    /**
     * Constructs a new <code>TooManyRequestsError</code>.
     * @alias module:model/TooManyRequestsError
     */
    constructor() { 
        
        TooManyRequestsError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TooManyRequestsError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TooManyRequestsError} obj Optional instance to populate.
     * @return {module:model/TooManyRequestsError} The populated <code>TooManyRequestsError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TooManyRequestsError();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], ['String']);
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('period_start')) {
                obj['period_start'] = ApiClient.convertToType(data['period_start'], 'Number');
            }
            if (data.hasOwnProperty('period_end')) {
                obj['period_end'] = ApiClient.convertToType(data['period_end'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TooManyRequestsError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TooManyRequestsError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['message'])) {
            throw new Error("Expected the field `message` to be an array in the JSON data but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['period'] && !(typeof data['period'] === 'string' || data['period'] instanceof String)) {
            throw new Error("Expected the field `period` to be a primitive type in the JSON string but got " + data['period']);
        }

        return true;
    }


}



/**
 * Response code.
 * @member {String} reason
 */
TooManyRequestsError.prototype['reason'] = undefined;

/**
 * @member {Array.<String>} message
 */
TooManyRequestsError.prototype['message'] = undefined;

/**
 * Quota exceeded for minute/month.
 * @member {String} period
 */
TooManyRequestsError.prototype['period'] = undefined;

/**
 * Starting period timestamp.
 * @member {Number} period_start
 */
TooManyRequestsError.prototype['period_start'] = undefined;

/**
 * Ending period timestamp.
 * @member {Number} period_end
 */
TooManyRequestsError.prototype['period_end'] = undefined;

/**
 * Limit count for the period.
 * @member {Number} limit
 */
TooManyRequestsError.prototype['limit'] = undefined;






export default TooManyRequestsError;

