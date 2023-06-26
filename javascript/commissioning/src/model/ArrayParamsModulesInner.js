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
 * The ArrayParamsModulesInner model module.
 * @module model/ArrayParamsModulesInner
 * @version 4.0
 */
class ArrayParamsModulesInner {
    /**
     * Constructs a new <code>ArrayParamsModulesInner</code>.
     * @alias module:model/ArrayParamsModulesInner
     * @param left {Number} Left axis position of module w.r.t Array. Increase the value to move the module to the right, and decrease to move it to the left.
     * @param top {Number} Top axis position of module w.r.t Array. Increase the value to move the module up, and decrease to move it down.
     * @param angle {Number} Angle of the module. Rotate the module clockwise by the given value w.r.t array angle. For example to rotate the array clockwise by 90 degrees pass 90.
     * @param serialNum {String} Inverter serial number mapped with this module.
     */
    constructor(left, top, angle, serialNum) { 
        
        ArrayParamsModulesInner.initialize(this, left, top, angle, serialNum);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, left, top, angle, serialNum) { 
        obj['left'] = left;
        obj['top'] = top;
        obj['angle'] = angle;
        obj['serial_num'] = serialNum;
    }

    /**
     * Constructs a <code>ArrayParamsModulesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArrayParamsModulesInner} obj Optional instance to populate.
     * @return {module:model/ArrayParamsModulesInner} The populated <code>ArrayParamsModulesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArrayParamsModulesInner();

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
     * Validates the JSON data with respect to <code>ArrayParamsModulesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArrayParamsModulesInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArrayParamsModulesInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['serial_num'] && !(typeof data['serial_num'] === 'string' || data['serial_num'] instanceof String)) {
            throw new Error("Expected the field `serial_num` to be a primitive type in the JSON string but got " + data['serial_num']);
        }

        return true;
    }


}

ArrayParamsModulesInner.RequiredProperties = ["left", "top", "angle", "serial_num"];

/**
 * ID of the module. ID cannot be changed. It is only used to identify the array that needs to be updated.
 * @member {Number} id
 */
ArrayParamsModulesInner.prototype['id'] = undefined;

/**
 * Left axis position of module w.r.t Array. Increase the value to move the module to the right, and decrease to move it to the left.
 * @member {Number} left
 */
ArrayParamsModulesInner.prototype['left'] = undefined;

/**
 * Top axis position of module w.r.t Array. Increase the value to move the module up, and decrease to move it down.
 * @member {Number} top
 */
ArrayParamsModulesInner.prototype['top'] = undefined;

/**
 * Angle of the module. Rotate the module clockwise by the given value w.r.t array angle. For example to rotate the array clockwise by 90 degrees pass 90.
 * @member {Number} angle
 */
ArrayParamsModulesInner.prototype['angle'] = undefined;

/**
 * Inverter serial number mapped with this module.
 * @member {String} serial_num
 */
ArrayParamsModulesInner.prototype['serial_num'] = undefined;






export default ArrayParamsModulesInner;

