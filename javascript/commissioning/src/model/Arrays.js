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
import ArraysInventoryDetailsInner from './ArraysInventoryDetailsInner';
import ArraysLayersInner from './ArraysLayersInner';
import ModelArray from './ModelArray';

/**
 * The Arrays model module.
 * @module model/Arrays
 * @version 4.0
 */
class Arrays {
    /**
     * Constructs a new <code>Arrays</code>.
     * @alias module:model/Arrays
     */
    constructor() { 
        
        Arrays.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Arrays</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Arrays} obj Optional instance to populate.
     * @return {module:model/Arrays} The populated <code>Arrays</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Arrays();

            if (data.hasOwnProperty('system_id')) {
                obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('angle')) {
                obj['angle'] = ApiClient.convertToType(data['angle'], 'Number');
            }
            if (data.hasOwnProperty('arrays')) {
                obj['arrays'] = ApiClient.convertToType(data['arrays'], [ModelArray]);
            }
            if (data.hasOwnProperty('inventory')) {
                obj['inventory'] = ApiClient.convertToType(data['inventory'], ['String']);
            }
            if (data.hasOwnProperty('inventory_details')) {
                obj['inventory_details'] = ApiClient.convertToType(data['inventory_details'], [ArraysInventoryDetailsInner]);
            }
            if (data.hasOwnProperty('layers')) {
                obj['layers'] = ApiClient.convertToType(data['layers'], [ArraysLayersInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Arrays</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Arrays</code>.
     */
    static validateJSON(data) {
        if (data['arrays']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['arrays'])) {
                throw new Error("Expected the field `arrays` to be an array in the JSON data but got " + data['arrays']);
            }
            // validate the optional field `arrays` (array)
            for (const item of data['arrays']) {
                ModelArray.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['inventory'])) {
            throw new Error("Expected the field `inventory` to be an array in the JSON data but got " + data['inventory']);
        }
        if (data['inventory_details']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['inventory_details'])) {
                throw new Error("Expected the field `inventory_details` to be an array in the JSON data but got " + data['inventory_details']);
            }
            // validate the optional field `inventory_details` (array)
            for (const item of data['inventory_details']) {
                ArraysInventoryDetailsInner.validateJSON(item);
            };
        }
        if (data['layers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['layers'])) {
                throw new Error("Expected the field `layers` to be an array in the JSON data but got " + data['layers']);
            }
            // validate the optional field `layers` (array)
            for (const item of data['layers']) {
                ArraysLayersInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * System ID.
 * @member {Number} system_id
 */
Arrays.prototype['system_id'] = undefined;

/**
 * System created Epoch time.
 * @member {Number} created_at
 */
Arrays.prototype['created_at'] = undefined;

/**
 * System updated Epoch time.
 * @member {Number} updated_at
 */
Arrays.prototype['updated_at'] = undefined;

/**
 * Angle of the system.
 * @member {Number} angle
 */
Arrays.prototype['angle'] = undefined;

/**
 * @member {Array.<module:model/ModelArray>} arrays
 */
Arrays.prototype['arrays'] = undefined;

/**
 * List of active inverter serial numbers.
 * @member {Array.<String>} inventory
 */
Arrays.prototype['inventory'] = undefined;

/**
 * @member {Array.<module:model/ArraysInventoryDetailsInner>} inventory_details
 */
Arrays.prototype['inventory_details'] = undefined;

/**
 * @member {Array.<module:model/ArraysLayersInner>} layers
 */
Arrays.prototype['layers'] = undefined;






export default Arrays;

