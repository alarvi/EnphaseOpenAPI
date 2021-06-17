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
import InvertersSummaryByEnvoyOrSiteEnergy from './InvertersSummaryByEnvoyOrSiteEnergy';

/**
 * The InvertersSummaryByEnvoyOrSiteMicroInverters model module.
 * @module model/InvertersSummaryByEnvoyOrSiteMicroInverters
 * @version 2.0
 */
class InvertersSummaryByEnvoyOrSiteMicroInverters {
    /**
     * Constructs a new <code>InvertersSummaryByEnvoyOrSiteMicroInverters</code>.
     * @alias module:model/InvertersSummaryByEnvoyOrSiteMicroInverters
     * @param id {Number} 
     * @param model {String} Model number of this Microinverter.
     * @param partNumber {String} The Enphase part number of this Microinverter.
     * @param serialNumber {String} The serial number of this Microinverter.
     * @param sku {String} 
     * @param status {module:model/InvertersSummaryByEnvoyOrSiteMicroInverters.StatusEnum} The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
     * @param powerProduced {Number} 
     * @param procLoad {String} 
     * @param paramTable {String} 
     * @param envoySerialNumber {String} 
     * @param energy {module:model/InvertersSummaryByEnvoyOrSiteEnergy} 
     * @param gridProfile {String} 
     * @param lastReportDate {Date} The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
     */
    constructor(id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate) { 
        
        InvertersSummaryByEnvoyOrSiteMicroInverters.initialize(this, id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate) { 
        obj['id'] = id;
        obj['model'] = model;
        obj['part_number'] = partNumber;
        obj['serial_number'] = serialNumber;
        obj['sku'] = sku;
        obj['status'] = status;
        obj['power_produced'] = powerProduced;
        obj['proc_load'] = procLoad;
        obj['param_table'] = paramTable;
        obj['envoy_serial_number'] = envoySerialNumber;
        obj['energy'] = energy;
        obj['grid_profile'] = gridProfile;
        obj['last_report_date'] = lastReportDate;
    }

    /**
     * Constructs a <code>InvertersSummaryByEnvoyOrSiteMicroInverters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvertersSummaryByEnvoyOrSiteMicroInverters} obj Optional instance to populate.
     * @return {module:model/InvertersSummaryByEnvoyOrSiteMicroInverters} The populated <code>InvertersSummaryByEnvoyOrSiteMicroInverters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvertersSummaryByEnvoyOrSiteMicroInverters();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('part_number')) {
                obj['part_number'] = ApiClient.convertToType(data['part_number'], 'String');
            }
            if (data.hasOwnProperty('serial_number')) {
                obj['serial_number'] = ApiClient.convertToType(data['serial_number'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('power_produced')) {
                obj['power_produced'] = ApiClient.convertToType(data['power_produced'], 'Number');
            }
            if (data.hasOwnProperty('proc_load')) {
                obj['proc_load'] = ApiClient.convertToType(data['proc_load'], 'String');
            }
            if (data.hasOwnProperty('param_table')) {
                obj['param_table'] = ApiClient.convertToType(data['param_table'], 'String');
            }
            if (data.hasOwnProperty('envoy_serial_number')) {
                obj['envoy_serial_number'] = ApiClient.convertToType(data['envoy_serial_number'], 'String');
            }
            if (data.hasOwnProperty('energy')) {
                obj['energy'] = InvertersSummaryByEnvoyOrSiteEnergy.constructFromObject(data['energy']);
            }
            if (data.hasOwnProperty('grid_profile')) {
                obj['grid_profile'] = ApiClient.convertToType(data['grid_profile'], 'String');
            }
            if (data.hasOwnProperty('last_report_date')) {
                obj['last_report_date'] = ApiClient.convertToType(data['last_report_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['id'] = undefined;

/**
 * Model number of this Microinverter.
 * @member {String} model
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['model'] = undefined;

/**
 * The Enphase part number of this Microinverter.
 * @member {String} part_number
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['part_number'] = undefined;

/**
 * The serial number of this Microinverter.
 * @member {String} serial_number
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['serial_number'] = undefined;

/**
 * @member {String} sku
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['sku'] = undefined;

/**
 * The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
 * @member {module:model/InvertersSummaryByEnvoyOrSiteMicroInverters.StatusEnum} status
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['status'] = undefined;

/**
 * @member {Number} power_produced
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['power_produced'] = undefined;

/**
 * @member {String} proc_load
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['proc_load'] = undefined;

/**
 * @member {String} param_table
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['param_table'] = undefined;

/**
 * @member {String} envoy_serial_number
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['envoy_serial_number'] = undefined;

/**
 * @member {module:model/InvertersSummaryByEnvoyOrSiteEnergy} energy
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['energy'] = undefined;

/**
 * @member {String} grid_profile
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['grid_profile'] = undefined;

/**
 * The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
 * @member {Date} last_report_date
 */
InvertersSummaryByEnvoyOrSiteMicroInverters.prototype['last_report_date'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InvertersSummaryByEnvoyOrSiteMicroInverters['StatusEnum'] = {

    /**
     * value: "normal"
     * @const
     */
    "normal": "normal",

    /**
     * value: "power"
     * @const
     */
    "power": "power",

    /**
     * value: "micro"
     * @const
     */
    "micro": "micro",

    /**
     * value: "retired"
     * @const
     */
    "retired": "retired"
};



export default InvertersSummaryByEnvoyOrSiteMicroInverters;
