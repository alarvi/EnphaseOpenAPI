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
     * @param reason {String} 
     * @param message {String} 
     * @param errorMessages {Array.<String>} 
     */
    constructor(reason, message, errorMessages) { 
        
        UnprocessableEntityError.initialize(this, reason, message, errorMessages);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reason, message, errorMessages) { 
        obj['reason'] = reason;
        obj['message'] = message;
        obj['errorMessages'] = errorMessages;
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
        }
        return obj;
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






export default UnprocessableEntityError;

