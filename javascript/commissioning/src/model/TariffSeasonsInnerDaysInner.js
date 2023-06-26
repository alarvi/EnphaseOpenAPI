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
import TariffSeasonsInnerDaysInnerPeriodsInner from './TariffSeasonsInnerDaysInnerPeriodsInner';

/**
 * The TariffSeasonsInnerDaysInner model module.
 * @module model/TariffSeasonsInnerDaysInner
 * @version 4.0
 */
class TariffSeasonsInnerDaysInner {
    /**
     * Constructs a new <code>TariffSeasonsInnerDaysInner</code>.
     * @alias module:model/TariffSeasonsInnerDaysInner
     */
    constructor() { 
        
        TariffSeasonsInnerDaysInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TariffSeasonsInnerDaysInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TariffSeasonsInnerDaysInner} obj Optional instance to populate.
     * @return {module:model/TariffSeasonsInnerDaysInner} The populated <code>TariffSeasonsInnerDaysInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TariffSeasonsInnerDaysInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('days')) {
                obj['days'] = ApiClient.convertToType(data['days'], 'String');
            }
            if (data.hasOwnProperty('must_charge_start')) {
                obj['must_charge_start'] = ApiClient.convertToType(data['must_charge_start'], 'Number');
            }
            if (data.hasOwnProperty('must_charge_duration')) {
                obj['must_charge_duration'] = ApiClient.convertToType(data['must_charge_duration'], 'Number');
            }
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], [TariffSeasonsInnerDaysInnerPeriodsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TariffSeasonsInnerDaysInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TariffSeasonsInnerDaysInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['days'] && !(typeof data['days'] === 'string' || data['days'] instanceof String)) {
            throw new Error("Expected the field `days` to be a primitive type in the JSON string but got " + data['days']);
        }
        if (data['periods']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['periods'])) {
                throw new Error("Expected the field `periods` to be an array in the JSON data but got " + data['periods']);
            }
            // validate the optional field `periods` (array)
            for (const item of data['periods']) {
                TariffSeasonsInnerDaysInnerPeriodsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * ToU days ID. e.g='all_days'.
 * @member {String} id
 */
TariffSeasonsInnerDaysInner.prototype['id'] = undefined;

/**
 * Comma separated days. e.g='Sun,Mon,Tue,Wed,Thu,Fri,Sat'.
 * @member {String} days
 */
TariffSeasonsInnerDaysInner.prototype['days'] = undefined;

/**
 * Must charge start field. e.g=0.
 * @member {Number} must_charge_start
 */
TariffSeasonsInnerDaysInner.prototype['must_charge_start'] = undefined;

/**
 * Must charge duration field. e.g=0.
 * @member {Number} must_charge_duration
 */
TariffSeasonsInnerDaysInner.prototype['must_charge_duration'] = undefined;

/**
 * Periods.
 * @member {Array.<module:model/TariffSeasonsInnerDaysInnerPeriodsInner>} periods
 */
TariffSeasonsInnerDaysInner.prototype['periods'] = undefined;






export default TariffSeasonsInnerDaysInner;

