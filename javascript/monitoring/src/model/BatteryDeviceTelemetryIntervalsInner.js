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
import BatteryDeviceTelemetryIntervalsInnerCharge from './BatteryDeviceTelemetryIntervalsInnerCharge';
import BatteryDeviceTelemetryIntervalsInnerDischarge from './BatteryDeviceTelemetryIntervalsInnerDischarge';
import BatteryDeviceTelemetryIntervalsInnerSoc from './BatteryDeviceTelemetryIntervalsInnerSoc';

/**
 * The BatteryDeviceTelemetryIntervalsInner model module.
 * @module model/BatteryDeviceTelemetryIntervalsInner
 * @version 4.0
 */
class BatteryDeviceTelemetryIntervalsInner {
    /**
     * Constructs a new <code>BatteryDeviceTelemetryIntervalsInner</code>.
     * @alias module:model/BatteryDeviceTelemetryIntervalsInner
     */
    constructor() { 
        
        BatteryDeviceTelemetryIntervalsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatteryDeviceTelemetryIntervalsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatteryDeviceTelemetryIntervalsInner} obj Optional instance to populate.
     * @return {module:model/BatteryDeviceTelemetryIntervalsInner} The populated <code>BatteryDeviceTelemetryIntervalsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatteryDeviceTelemetryIntervalsInner();

            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('charge')) {
                obj['charge'] = BatteryDeviceTelemetryIntervalsInnerCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('discharge')) {
                obj['discharge'] = BatteryDeviceTelemetryIntervalsInnerDischarge.constructFromObject(data['discharge']);
            }
            if (data.hasOwnProperty('soc')) {
                obj['soc'] = BatteryDeviceTelemetryIntervalsInnerSoc.constructFromObject(data['soc']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatteryDeviceTelemetryIntervalsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatteryDeviceTelemetryIntervalsInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `charge`
        if (data['charge']) { // data not null
          BatteryDeviceTelemetryIntervalsInnerCharge.validateJSON(data['charge']);
        }
        // validate the optional field `discharge`
        if (data['discharge']) { // data not null
          BatteryDeviceTelemetryIntervalsInnerDischarge.validateJSON(data['discharge']);
        }
        // validate the optional field `soc`
        if (data['soc']) { // data not null
          BatteryDeviceTelemetryIntervalsInnerSoc.validateJSON(data['soc']);
        }

        return true;
    }


}



/**
 * End time of the telemetry interval.
 * @member {Number} end_at
 */
BatteryDeviceTelemetryIntervalsInner.prototype['end_at'] = undefined;

/**
 * @member {module:model/BatteryDeviceTelemetryIntervalsInnerCharge} charge
 */
BatteryDeviceTelemetryIntervalsInner.prototype['charge'] = undefined;

/**
 * @member {module:model/BatteryDeviceTelemetryIntervalsInnerDischarge} discharge
 */
BatteryDeviceTelemetryIntervalsInner.prototype['discharge'] = undefined;

/**
 * @member {module:model/BatteryDeviceTelemetryIntervalsInnerSoc} soc
 */
BatteryDeviceTelemetryIntervalsInner.prototype['soc'] = undefined;






export default BatteryDeviceTelemetryIntervalsInner;
