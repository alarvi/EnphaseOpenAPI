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
 * The ArrayModulesInner model module.
 * @module model/ArrayModulesInner
 * @version 4.0
 */
class ArrayModulesInner {
    /**
     * Constructs a new <code>ArrayModulesInner</code>.
     * @alias module:model/ArrayModulesInner
     */
    constructor() { 
        
        ArrayModulesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArrayModulesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArrayModulesInner} obj Optional instance to populate.
     * @return {module:model/ArrayModulesInner} The populated <code>ArrayModulesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArrayModulesInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('left')) {
                obj['left'] = ApiClient.convertToType(data['left'], 'Number');
            }
            if (data.hasOwnProperty('top')) {
                obj['top'] = ApiClient.convertToType(data['top'], 'Number');
            }
            if (data.hasOwnProperty('angle')) {
                obj['angle'] = ApiClient.convertToType(data['angle'], 'Number');
            }
            if (data.hasOwnProperty('serial_num')) {
                obj['serial_num'] = ApiClient.convertToType(data['serial_num'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArrayModulesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArrayModulesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['serial_num'] && !(typeof data['serial_num'] === 'string' || data['serial_num'] instanceof String)) {
            throw new Error("Expected the field `serial_num` to be a primitive type in the JSON string but got " + data['serial_num']);
        }

        return true;
    }


}



/**
 * ID of the module.
 * @member {Number} id
 */
ArrayModulesInner.prototype['id'] = undefined;

/**
 * Left axis position of module.
 * @member {Number} left
 */
ArrayModulesInner.prototype['left'] = undefined;

/**
 * Top axis position of module.
 * @member {Number} top
 */
ArrayModulesInner.prototype['top'] = undefined;

/**
 * Angle of the module.
 * @member {Number} angle
 */
ArrayModulesInner.prototype['angle'] = undefined;

/**
 * Inverter serial number mapped with this module.
 * @member {String} serial_num
 */
ArrayModulesInner.prototype['serial_num'] = undefined;






export default ArrayModulesInner;

