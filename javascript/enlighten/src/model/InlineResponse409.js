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
 * The InlineResponse409 model module.
 * @module model/InlineResponse409
 * @version 2.0
 */
class InlineResponse409 {
    /**
     * Constructs a new <code>InlineResponse409</code>.
     * @alias module:model/InlineResponse409
     * @param reason {String} 
     * @param message {Array.<String>} 
     * @param period {module:model/InlineResponse409.PeriodEnum} 
     * @param periodStart {Number} 
     * @param periodEnd {Number} 
     * @param limit {Number} 
     */
    constructor(reason, message, period, periodStart, periodEnd, limit) { 
        
        InlineResponse409.initialize(this, reason, message, period, periodStart, periodEnd, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reason, message, period, periodStart, periodEnd, limit) { 
        obj['reason'] = reason;
        obj['message'] = message;
        obj['period'] = period;
        obj['period_start'] = periodStart;
        obj['period_end'] = periodEnd;
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>InlineResponse409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse409} obj Optional instance to populate.
     * @return {module:model/InlineResponse409} The populated <code>InlineResponse409</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse409();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], ['String']);
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('period_start')) {
                obj['period_start'] = ApiClient.convertToType(data['period_start'], 'Number');
            }
            if (data.hasOwnProperty('period_end')) {
                obj['period_end'] = ApiClient.convertToType(data['period_end'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} reason
 */
InlineResponse409.prototype['reason'] = undefined;

/**
 * @member {Array.<String>} message
 */
InlineResponse409.prototype['message'] = undefined;

/**
 * @member {module:model/InlineResponse409.PeriodEnum} period
 */
InlineResponse409.prototype['period'] = undefined;

/**
 * @member {Number} period_start
 */
InlineResponse409.prototype['period_start'] = undefined;

/**
 * @member {Number} period_end
 */
InlineResponse409.prototype['period_end'] = undefined;

/**
 * @member {Number} limit
 */
InlineResponse409.prototype['limit'] = undefined;





/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse409['PeriodEnum'] = {

    /**
     * value: "hour"
     * @const
     */
    "hour": "hour",

    /**
     * value: "minute"
     * @const
     */
    "minute": "minute",

    /**
     * value: "second"
     * @const
     */
    "second": "second"
};



export default InlineResponse409;
