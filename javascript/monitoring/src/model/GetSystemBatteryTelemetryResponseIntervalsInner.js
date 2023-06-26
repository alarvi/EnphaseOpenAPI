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
import GetSystemBatteryTelemetryResponseIntervalsInnerCharge from './GetSystemBatteryTelemetryResponseIntervalsInnerCharge';
import GetSystemBatteryTelemetryResponseIntervalsInnerDischarge from './GetSystemBatteryTelemetryResponseIntervalsInnerDischarge';
import GetSystemBatteryTelemetryResponseIntervalsInnerSoc from './GetSystemBatteryTelemetryResponseIntervalsInnerSoc';

/**
 * The GetSystemBatteryTelemetryResponseIntervalsInner model module.
 * @module model/GetSystemBatteryTelemetryResponseIntervalsInner
 * @version 4.0
 */
class GetSystemBatteryTelemetryResponseIntervalsInner {
    /**
     * Constructs a new <code>GetSystemBatteryTelemetryResponseIntervalsInner</code>.
     * @alias module:model/GetSystemBatteryTelemetryResponseIntervalsInner
     */
    constructor() { 
        
        GetSystemBatteryTelemetryResponseIntervalsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSystemBatteryTelemetryResponseIntervalsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSystemBatteryTelemetryResponseIntervalsInner} obj Optional instance to populate.
     * @return {module:model/GetSystemBatteryTelemetryResponseIntervalsInner} The populated <code>GetSystemBatteryTelemetryResponseIntervalsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSystemBatteryTelemetryResponseIntervalsInner();

            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('charge')) {
                obj['charge'] = GetSystemBatteryTelemetryResponseIntervalsInnerCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('discharge')) {
                obj['discharge'] = GetSystemBatteryTelemetryResponseIntervalsInnerDischarge.constructFromObject(data['discharge']);
            }
            if (data.hasOwnProperty('soc')) {
                obj['soc'] = GetSystemBatteryTelemetryResponseIntervalsInnerSoc.constructFromObject(data['soc']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetSystemBatteryTelemetryResponseIntervalsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSystemBatteryTelemetryResponseIntervalsInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `charge`
        if (data['charge']) { // data not null
          GetSystemBatteryTelemetryResponseIntervalsInnerCharge.validateJSON(data['charge']);
        }
        // validate the optional field `discharge`
        if (data['discharge']) { // data not null
          GetSystemBatteryTelemetryResponseIntervalsInnerDischarge.validateJSON(data['discharge']);
        }
        // validate the optional field `soc`
        if (data['soc']) { // data not null
          GetSystemBatteryTelemetryResponseIntervalsInnerSoc.validateJSON(data['soc']);
        }

        return true;
    }


}



/**
 * End time of the telemetry interval.
 * @member {Number} end_at
 */
GetSystemBatteryTelemetryResponseIntervalsInner.prototype['end_at'] = undefined;

/**
 * @member {module:model/GetSystemBatteryTelemetryResponseIntervalsInnerCharge} charge
 */
GetSystemBatteryTelemetryResponseIntervalsInner.prototype['charge'] = undefined;

/**
 * @member {module:model/GetSystemBatteryTelemetryResponseIntervalsInnerDischarge} discharge
 */
GetSystemBatteryTelemetryResponseIntervalsInner.prototype['discharge'] = undefined;

/**
 * @member {module:model/GetSystemBatteryTelemetryResponseIntervalsInnerSoc} soc
 */
GetSystemBatteryTelemetryResponseIntervalsInner.prototype['soc'] = undefined;






export default GetSystemBatteryTelemetryResponseIntervalsInner;

