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
 * The SystemParamsEnchargeInner model module.
 * @module model/SystemParamsEnchargeInner
 * @version 4.0
 */
class SystemParamsEnchargeInner {
    /**
     * Constructs a new <code>SystemParamsEnchargeInner</code>.
     * @alias module:model/SystemParamsEnchargeInner
     */
    constructor() { 
        
        SystemParamsEnchargeInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SystemParamsEnchargeInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemParamsEnchargeInner} obj Optional instance to populate.
     * @return {module:model/SystemParamsEnchargeInner} The populated <code>SystemParamsEnchargeInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemParamsEnchargeInner();

            if (data.hasOwnProperty('envoy_serial_number')) {
                obj['envoy_serial_number'] = ApiClient.convertToType(data['envoy_serial_number'], 'String');
            }
            if (data.hasOwnProperty('encharge_serial_numbers')) {
                obj['encharge_serial_numbers'] = ApiClient.convertToType(data['encharge_serial_numbers'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SystemParamsEnchargeInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SystemParamsEnchargeInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['envoy_serial_number'] && !(typeof data['envoy_serial_number'] === 'string' || data['envoy_serial_number'] instanceof String)) {
            throw new Error("Expected the field `envoy_serial_number` to be a primitive type in the JSON string but got " + data['envoy_serial_number']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['encharge_serial_numbers'])) {
            throw new Error("Expected the field `encharge_serial_numbers` to be an array in the JSON data but got " + data['encharge_serial_numbers']);
        }

        return true;
    }


}



/**
 * Envoy serial number.
 * @member {String} envoy_serial_number
 */
SystemParamsEnchargeInner.prototype['envoy_serial_number'] = undefined;

/**
 * Encharge serial numbers.
 * @member {Array.<String>} encharge_serial_numbers
 */
SystemParamsEnchargeInner.prototype['encharge_serial_numbers'] = undefined;






export default SystemParamsEnchargeInner;
