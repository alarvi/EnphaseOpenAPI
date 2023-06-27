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
 * The ArraysLayersInner model module.
 * @module model/ArraysLayersInner
 * @version 4.0
 */
class ArraysLayersInner {
    /**
     * Constructs a new <code>ArraysLayersInner</code>.
     * @alias module:model/ArraysLayersInner
     */
    constructor() { 
        
        ArraysLayersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArraysLayersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArraysLayersInner} obj Optional instance to populate.
     * @return {module:model/ArraysLayersInner} The populated <code>ArraysLayersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArraysLayersInner();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('scale')) {
                obj['scale'] = ApiClient.convertToType(data['scale'], 'Number');
            }
            if (data.hasOwnProperty('angle')) {
                obj['angle'] = ApiClient.convertToType(data['angle'], 'Number');
            }
            if (data.hasOwnProperty('opacity')) {
                obj['opacity'] = ApiClient.convertToType(data['opacity'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('left')) {
                obj['left'] = ApiClient.convertToType(data['left'], 'Number');
            }
            if (data.hasOwnProperty('top')) {
                obj['top'] = ApiClient.convertToType(data['top'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArraysLayersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArraysLayersInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['file'] && !(typeof data['file'] === 'string' || data['file'] instanceof String)) {
            throw new Error("Expected the field `file` to be a primitive type in the JSON string but got " + data['file']);
        }

        return true;
    }


}



/**
 * Background image url.
 * @member {String} file
 */
ArraysLayersInner.prototype['file'] = undefined;

/**
 * Zoom level.
 * @member {Number} scale
 */
ArraysLayersInner.prototype['scale'] = undefined;

/**
 * Angle of the layer.
 * @member {Number} angle
 */
ArraysLayersInner.prototype['angle'] = undefined;

/**
 * Opacity of the layer.
 * @member {Number} opacity
 */
ArraysLayersInner.prototype['opacity'] = undefined;

/**
 * Width of the layer.
 * @member {Number} width
 */
ArraysLayersInner.prototype['width'] = undefined;

/**
 * Height of the layer.
 * @member {Number} height
 */
ArraysLayersInner.prototype['height'] = undefined;

/**
 * Left of the layer.
 * @member {Number} left
 */
ArraysLayersInner.prototype['left'] = undefined;

/**
 * Top of the layer.
 * @member {Number} top
 */
ArraysLayersInner.prototype['top'] = undefined;






export default ArraysLayersInner;
