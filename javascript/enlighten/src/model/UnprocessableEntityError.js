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
 * The UnprocessableEntityError model module.
 * @module model/UnprocessableEntityError
 * @version 2.0
 */
class UnprocessableEntityError {
    /**
     * Constructs a new <code>UnprocessableEntityError</code>.
     * @alias module:model/UnprocessableEntityError
     */
    constructor() { 
        
        UnprocessableEntityError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnprocessableEntityError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnprocessableEntityError} obj Optional instance to populate.
     * @return {module:model/UnprocessableEntityError} The populated <code>UnprocessableEntityError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnprocessableEntityError();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errorMessages')) {
                obj['errorMessages'] = ApiClient.convertToType(data['errorMessages'], ['String']);
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Number');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('first_interval')) {
                obj['first_interval'] = ApiClient.convertToType(data['first_interval'], 'Number');
            }
            if (data.hasOwnProperty('last_interval')) {
                obj['last_interval'] = ApiClient.convertToType(data['last_interval'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UnprocessableEntityError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UnprocessableEntityError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errorMessages'])) {
            throw new Error("Expected the field `errorMessages` to be an array in the JSON data but got " + data['errorMessages']);
        }

        return true;
    }


}



/**
 * @member {String} reason
 */
UnprocessableEntityError.prototype['reason'] = undefined;

/**
 * @member {String} message
 */
UnprocessableEntityError.prototype['message'] = undefined;

/**
 * @member {Array.<String>} errorMessages
 */
UnprocessableEntityError.prototype['errorMessages'] = undefined;

/**
 * @member {Date} start
 */
UnprocessableEntityError.prototype['start'] = undefined;

/**
 * @member {Date} end
 */
UnprocessableEntityError.prototype['end'] = undefined;

/**
 * @member {Number} start_at
 */
UnprocessableEntityError.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
UnprocessableEntityError.prototype['end_at'] = undefined;

/**
 * @member {Number} first_interval
 */
UnprocessableEntityError.prototype['first_interval'] = undefined;

/**
 * @member {Number} last_interval
 */
UnprocessableEntityError.prototype['last_interval'] = undefined;






export default UnprocessableEntityError;

