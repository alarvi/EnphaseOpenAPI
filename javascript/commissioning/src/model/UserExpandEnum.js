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
* Enum class UserExpandEnum.
* @enum {}
* @readonly
*/
export default class UserExpandEnum {
    
        /**
         * value: "company"
         * @const
         */
        "company" = "company";

    

    /**
    * Returns a <code>UserExpandEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/UserExpandEnum} The enum <code>UserExpandEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
