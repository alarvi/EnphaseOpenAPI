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
 * The ServerError model module.
 * @module model/ServerError
 * @version 4.0
 */
class ServerError {
    /**
     * Constructs a new <code>ServerError</code>.
     * @alias module:model/ServerError
     */
    constructor() { 
        
        ServerError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServerError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServerError} obj Optional instance to populate.
     * @return {module:model/ServerError} The populated <code>ServerError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServerError();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServerError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServerError</code>.
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

        return true;
    }


}



/**
 * @member {String} reason
 */
ServerError.prototype['reason'] = undefined;

/**
 * @member {Array.<String>} message
 */
ServerError.prototype['message'] = undefined;






export default ServerError;

