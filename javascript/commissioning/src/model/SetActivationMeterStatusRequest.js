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
import SystemMeterStatusEnum from './SystemMeterStatusEnum';

/**
 * The SetActivationMeterStatusRequest model module.
 * @module model/SetActivationMeterStatusRequest
 * @version 4.0
 */
class SetActivationMeterStatusRequest {
    /**
     * Constructs a new <code>SetActivationMeterStatusRequest</code>.
     * @alias module:model/SetActivationMeterStatusRequest
     */
    constructor() { 
        
        SetActivationMeterStatusRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetActivationMeterStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetActivationMeterStatusRequest} obj Optional instance to populate.
     * @return {module:model/SetActivationMeterStatusRequest} The populated <code>SetActivationMeterStatusRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetActivationMeterStatusRequest();

            if (data.hasOwnProperty('status')) {
                obj['status'] = SystemMeterStatusEnum.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetActivationMeterStatusRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetActivationMeterStatusRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/SystemMeterStatusEnum} status
 */
SetActivationMeterStatusRequest.prototype['status'] = undefined;






export default SetActivationMeterStatusRequest;

