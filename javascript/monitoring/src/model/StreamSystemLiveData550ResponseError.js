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

/**
 * The StreamSystemLiveData550ResponseError model module.
 * @module model/StreamSystemLiveData550ResponseError
 * @version 4.0
 */
class StreamSystemLiveData550ResponseError {
    /**
     * Constructs a new <code>StreamSystemLiveData550ResponseError</code>.
     * @alias module:model/StreamSystemLiveData550ResponseError
     */
    constructor() { 
        
        StreamSystemLiveData550ResponseError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StreamSystemLiveData550ResponseError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamSystemLiveData550ResponseError} obj Optional instance to populate.
     * @return {module:model/StreamSystemLiveData550ResponseError} The populated <code>StreamSystemLiveData550ResponseError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StreamSystemLiveData550ResponseError();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [Object]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StreamSystemLiveData550ResponseError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreamSystemLiveData550ResponseError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['details'])) {
            throw new Error("Expected the field `details` to be an array in the JSON data but got " + data['details']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * 550
 * @member {Number} code
 */
StreamSystemLiveData550ResponseError.prototype['code'] = undefined;

/**
 * @member {Array.<Object>} details
 */
StreamSystemLiveData550ResponseError.prototype['details'] = undefined;

/**
 * Service unreachable, please try again.
 * @member {String} message
 */
StreamSystemLiveData550ResponseError.prototype['message'] = undefined;

/**
 * SERVICE_UNREACHABLE
 * @member {String} status
 */
StreamSystemLiveData550ResponseError.prototype['status'] = undefined;






export default StreamSystemLiveData550ResponseError;

