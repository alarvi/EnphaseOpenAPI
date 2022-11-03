/**
 * The Enlighten Systems API
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced model module.
 * @module model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced
 * @version 2.0
 */
class InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced {
    /**
     * Constructs a new <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced</code>.
     * @alias module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced
     * @param value {Number} 
     * @param units {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.UnitsEnum} 
     * @param precision {Number} 
     */
    constructor(value, units, precision) { 
        
        InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.initialize(this, value, units, precision);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, units, precision) { 
        obj['value'] = value;
        obj['units'] = units;
        obj['precision'] = precision;
    }

    /**
     * Constructs a <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced} obj Optional instance to populate.
     * @return {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced} The populated <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'String');
            }
            if (data.hasOwnProperty('precision')) {
                obj['precision'] = ApiClient.convertToType(data['precision'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['units'] && !(typeof data['units'] === 'string' || data['units'] instanceof String)) {
            throw new Error("Expected the field `units` to be a primitive type in the JSON string but got " + data['units']);
        }

        return true;
    }


}

InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.RequiredProperties = ["value", "units", "precision"];

/**
 * @member {Number} value
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.prototype['value'] = undefined;

/**
 * @member {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.UnitsEnum} units
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.prototype['units'] = undefined;

/**
 * @member {Number} precision
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.prototype['precision'] = undefined;





/**
 * Allowed values for the <code>units</code> property.
 * @enum {String}
 * @readonly
 */
InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced['UnitsEnum'] = {

    /**
     * value: "W"
     * @const
     */
    "W": "W"
};



export default InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced;

