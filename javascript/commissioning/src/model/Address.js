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
 * The Address model module.
 * @module model/Address
 * @version 4.0
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * Location of the system. Use the ISO 3166-1 2-letter code for the country. Latitude and longitude are calculated by Enlighten, not provided by the client.
     * @alias module:model/Address
     */
    constructor() { 
        
        Address.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('street1')) {
                obj['street1'] = ApiClient.convertToType(data['street1'], 'String');
            }
            if (data.hasOwnProperty('street2')) {
                obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Address</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Address</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['street1'] && !(typeof data['street1'] === 'string' || data['street1'] instanceof String)) {
            throw new Error("Expected the field `street1` to be a primitive type in the JSON string but got " + data['street1']);
        }
        // ensure the json data is a string
        if (data['street2'] && !(typeof data['street2'] === 'string' || data['street2'] instanceof String)) {
            throw new Error("Expected the field `street2` to be a primitive type in the JSON string but got " + data['street2']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['postal_code'] && !(typeof data['postal_code'] === 'string' || data['postal_code'] instanceof String)) {
            throw new Error("Expected the field `postal_code` to be a primitive type in the JSON string but got " + data['postal_code']);
        }

        return true;
    }


}



/**
 * Street line 1.
 * @member {String} street1
 */
Address.prototype['street1'] = undefined;

/**
 * Street line 2. This field is optional.
 * @member {String} street2
 */
Address.prototype['street2'] = undefined;

/**
 * City.
 * @member {String} city
 */
Address.prototype['city'] = undefined;

/**
 * State.
 * @member {String} state
 */
Address.prototype['state'] = undefined;

/**
 * Country.
 * @member {String} country
 */
Address.prototype['country'] = undefined;

/**
 * Postal code.
 * @member {String} postal_code
 */
Address.prototype['postal_code'] = undefined;

/**
 * Latitude.
 * @member {Number} latitude
 */
Address.prototype['latitude'] = undefined;

/**
 * Longitude.
 * @member {Number} longitude
 */
Address.prototype['longitude'] = undefined;






export default Address;

