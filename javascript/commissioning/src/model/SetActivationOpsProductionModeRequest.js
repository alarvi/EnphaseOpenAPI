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
import SystemProductionModeEnum from './SystemProductionModeEnum';

/**
 * The SetActivationOpsProductionModeRequest model module.
 * @module model/SetActivationOpsProductionModeRequest
 * @version 4.0
 */
class SetActivationOpsProductionModeRequest {
    /**
     * Constructs a new <code>SetActivationOpsProductionModeRequest</code>.
     * @alias module:model/SetActivationOpsProductionModeRequest
     * @param mode {module:model/SystemProductionModeEnum} 
     */
    constructor(mode) { 
        
        SetActivationOpsProductionModeRequest.initialize(this, mode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mode) { 
        obj['mode'] = mode;
    }

    /**
     * Constructs a <code>SetActivationOpsProductionModeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetActivationOpsProductionModeRequest} obj Optional instance to populate.
     * @return {module:model/SetActivationOpsProductionModeRequest} The populated <code>SetActivationOpsProductionModeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetActivationOpsProductionModeRequest();

            if (data.hasOwnProperty('mode')) {
                obj['mode'] = SystemProductionModeEnum.constructFromObject(data['mode']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetActivationOpsProductionModeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetActivationOpsProductionModeRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SetActivationOpsProductionModeRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SetActivationOpsProductionModeRequest.RequiredProperties = ["mode"];

/**
 * @member {module:model/SystemProductionModeEnum} mode
 */
SetActivationOpsProductionModeRequest.prototype['mode'] = undefined;






export default SetActivationOpsProductionModeRequest;

