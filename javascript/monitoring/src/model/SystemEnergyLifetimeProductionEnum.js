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
* Enum class SystemEnergyLifetimeProductionEnum.
* @enum {}
* @readonly
*/
export default class SystemEnergyLifetimeProductionEnum {
    
        /**
         * value: "all"
         * @const
         */
        "all" = "all";

    

    /**
    * Returns a <code>SystemEnergyLifetimeProductionEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SystemEnergyLifetimeProductionEnum} The enum <code>SystemEnergyLifetimeProductionEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
