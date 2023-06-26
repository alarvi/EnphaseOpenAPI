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
import TariffSeasonsInner from './TariffSeasonsInner';
import TariffSettingsTariffCurrencyType from './TariffSettingsTariffCurrencyType';
import TariffSettingsTariffSingleRate from './TariffSettingsTariffSingleRate';

/**
 * The TariffSettingsTariff model module.
 * @module model/TariffSettingsTariff
 * @version 4.0
 */
class TariffSettingsTariff {
    /**
     * Constructs a new <code>TariffSettingsTariff</code>.
     * @alias module:model/TariffSettingsTariff
     */
    constructor() { 
        
        TariffSettingsTariff.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TariffSettingsTariff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TariffSettingsTariff} obj Optional instance to populate.
     * @return {module:model/TariffSettingsTariff} The populated <code>TariffSettingsTariff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TariffSettingsTariff();

            if (data.hasOwnProperty('currency_type')) {
                obj['currency_type'] = TariffSettingsTariffCurrencyType.constructFromObject(data['currency_type']);
            }
            if (data.hasOwnProperty('single_rate')) {
                obj['single_rate'] = TariffSettingsTariffSingleRate.constructFromObject(data['single_rate']);
            }
            if (data.hasOwnProperty('seasons')) {
                obj['seasons'] = ApiClient.convertToType(data['seasons'], [TariffSeasonsInner]);
            }
            if (data.hasOwnProperty('seasons_sell')) {
                obj['seasons_sell'] = ApiClient.convertToType(data['seasons_sell'], [TariffSeasonsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TariffSettingsTariff</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TariffSettingsTariff</code>.
     */
    static validateJSON(data) {
        // validate the optional field `currency_type`
        if (data['currency_type']) { // data not null
          TariffSettingsTariffCurrencyType.validateJSON(data['currency_type']);
        }
        // validate the optional field `single_rate`
        if (data['single_rate']) { // data not null
          TariffSettingsTariffSingleRate.validateJSON(data['single_rate']);
        }
        if (data['seasons']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['seasons'])) {
                throw new Error("Expected the field `seasons` to be an array in the JSON data but got " + data['seasons']);
            }
            // validate the optional field `seasons` (array)
            for (const item of data['seasons']) {
                TariffSeasonsInner.validateJSON(item);
            };
        }
        if (data['seasons_sell']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['seasons_sell'])) {
                throw new Error("Expected the field `seasons_sell` to be an array in the JSON data but got " + data['seasons_sell']);
            }
            // validate the optional field `seasons_sell` (array)
            for (const item of data['seasons_sell']) {
                TariffSeasonsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/TariffSettingsTariffCurrencyType} currency_type
 */
TariffSettingsTariff.prototype['currency_type'] = undefined;

/**
 * @member {module:model/TariffSettingsTariffSingleRate} single_rate
 */
TariffSettingsTariff.prototype['single_rate'] = undefined;

/**
 * ToU seasons.
 * @member {Array.<module:model/TariffSeasonsInner>} seasons
 */
TariffSettingsTariff.prototype['seasons'] = undefined;

/**
 * ToU seasons.
 * @member {Array.<module:model/TariffSeasonsInner>} seasons_sell
 */
TariffSettingsTariff.prototype['seasons_sell'] = undefined;






export default TariffSettingsTariff;

