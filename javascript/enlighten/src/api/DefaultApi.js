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


import ApiClient from "../ApiClient";
import ConnectionType from '../model/ConnectionType';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse20010 from '../model/InlineResponse20010';
import InlineResponse20011 from '../model/InlineResponse20011';
import InlineResponse20012 from '../model/InlineResponse20012';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse2007 from '../model/InlineResponse2007';
import InlineResponse2008 from '../model/InlineResponse2008';
import InlineResponse2009 from '../model/InlineResponse2009';
import InlineResponse409 from '../model/InlineResponse409';
import InlineResponse4XX from '../model/InlineResponse4XX';
import InlineResponse5XX from '../model/InlineResponse5XX';
import Status from '../model/Status';

/**
* Default service.
* @module api/DefaultApi
* @version 2.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the consumptionLifetime operation.
     * @callback module:api/DefaultApi~consumptionLifetimeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns `204` - No Content. If you don't have permission to view consumption data, the response code is `401`.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or metering problems.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate The date on which to start the time series. Defaults to the system's operational date.
     * @param {Date} opts.endDate The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
     * @param {module:api/DefaultApi~consumptionLifetimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    consumptionLifetime(userId, systemId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling consumptionLifetime");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling consumptionLifetime");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId,
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;
      return this.apiClient.callApi(
        '/systems/{system_id}/consumption_lifetime', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the consumptionStats operation.
     * @callback module:api/DefaultApi~consumptionStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any consumption meters installed, the response includes an empty intervals array.  If you don't have permission to view consumption data, the response code is `401`.  Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
     * @param {module:api/DefaultApi~consumptionStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */
    consumptionStats(userId, systemId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling consumptionStats");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling consumptionStats");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId,
        'start_at': opts['startAt'],
        'end_at': opts['endAt']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20010;
      return this.apiClient.callApi(
        '/systems/{system_id}/consumption_stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the energyLifetime operation.
     * @callback module:api/DefaultApi~energyLifetimeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as `[909, 4970, 0, 0, 0]`, then no energy has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \"merged time series\". In addition, the response includes the attribute `meter_start_date`, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter `production=all` to the request.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate The date on which to start the time series. Defaults to the system's operational date.
     * @param {Date} opts.endDate The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
     * @param {module:model/String} opts.production When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored.
     * @param {module:api/DefaultApi~energyLifetimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    energyLifetime(userId, systemId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling energyLifetime");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling energyLifetime");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId,
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'production': opts['production']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/systems/{system_id}/energy_lifetime', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the envoys operation.
     * @callback module:api/DefaultApi~envoysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a listing of all active Envoys currently deployed on the system.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {module:api/DefaultApi~envoysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    envoys(userId, systemId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling envoys");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling envoys");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/systems/{system_id}/envoys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inventory operation.
     * @callback module:api/DefaultApi~inventoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \"Active\" does not imply that the device is currently reporting, producing, or measuring energy.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {module:api/DefaultApi~inventoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    inventory(userId, systemId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling inventory");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling inventory");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/systems/{system_id}/inventory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invertersSummaryByEnvoyOrSite operation.
     * @callback module:api/DefaultApi~invertersSummaryByEnvoyOrSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the summary along with the energy produced on the system over its lifetime.
     * @param {String} userId 
     * @param {Number} siteId The identifier of the system.
     * @param {module:api/DefaultApi~invertersSummaryByEnvoyOrSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    invertersSummaryByEnvoyOrSite(userId, siteId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling invertersSummaryByEnvoyOrSite");
      }
      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling invertersSummaryByEnvoyOrSite");
      }

      let pathParams = {
      };
      let queryParams = {
        'user_id': userId,
        'site_id': siteId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/systems/inverters_summary_by_envoy_or_site', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the monthlyProduction operation.
     * @callback module:api/DefaultApi~monthlyProductionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint is deprecated and will be removed in a future release. Use `production_meter_readings` or `energy_lifetime` instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month.
     * @param {module:api/DefaultApi~monthlyProductionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    monthlyProduction(userId, systemId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling monthlyProduction");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling monthlyProduction");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId,
        'start_date': opts['startDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/systems/{system_id}/monthly_production', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productionMeterReadings operation.
     * @callback module:api/DefaultApi~productionMeterReadingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the last known \"odometer\" reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. `read_at` is the time at which the reading was taken, and is always less than or equal to the requested `end_at`. Commonly, the reading will be within 30 minutes of the requested `end_at`; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when `end_at` is close to the current time. Meters that have been retired from a system will show an `end_at` that doesn't change, and that eventually is far away from the current time.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.endAt 
     * @param {module:api/DefaultApi~productionMeterReadingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    productionMeterReadings(userId, systemId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling productionMeterReadings");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling productionMeterReadings");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId,
        'end_at': opts['endAt']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/systems/{system_id}/production_meter_readings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the rgmStats operation.
     * @callback module:api/DefaultApi~rgmStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
     * @param {module:api/DefaultApi~rgmStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    rgmStats(userId, systemId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling rgmStats");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling rgmStats");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId,
        'start_at': opts['startAt'],
        'end_at': opts['endAt']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;
      return this.apiClient.callApi(
        '/systems/{system_id}/rgm_stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchSystemId operation.
     * @callback module:api/DefaultApi~searchSystemIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get system ID by envoy serial number.
     * @param {String} userId 
     * @param {String} serialNum Serial number of the envoy.
     * @param {module:api/DefaultApi~searchSystemIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20012}
     */
    searchSystemId(userId, serialNum, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling searchSystemId");
      }
      // verify the required parameter 'serialNum' is set
      if (serialNum === undefined || serialNum === null) {
        throw new Error("Missing the required parameter 'serialNum' when calling searchSystemId");
      }

      let pathParams = {
      };
      let queryParams = {
        'user_id': userId,
        'serial_num': serialNum
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20012;
      return this.apiClient.callApi(
        '/systems/search_system_id', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stats operation.
     * @callback module:api/DefaultApi~statsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the the system in question. Examples include asking for stats starting at a time that is later than the system's last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is `422` and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn't have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval.
     * @param {module:api/DefaultApi~statsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */
    stats(userId, systemId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling stats");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling stats");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId,
        'start_at': opts['startAt'],
        'end_at': opts['endAt']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;
      return this.apiClient.callApi(
        '/systems/{system_id}/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the summary operation.
     * @callback module:api/DefaultApi~summaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns summary information for the specified system.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.summaryDate Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status.
     * @param {module:api/DefaultApi~summaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */
    summary(userId, systemId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling summary");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling summary");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
        'user_id': userId,
        'summary_date': opts['summaryDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20011;
      return this.apiClient.callApi(
        '/systems/{system_id}/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systems operation.
     * @callback module:api/DefaultApi~systemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the `next` attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.next 
     * @param {Number} opts.limit  (default to 100)
     * @param {Number} opts.systemId 
     * @param {Array.<Number>} opts.systemId2 
     * @param {String} opts.systemName 
     * @param {Array.<String>} opts.systemName2 
     * @param {module:model/Status} opts.status 
     * @param {Array.<module:model/Status>} opts.status2 
     * @param {String} opts.reference 
     * @param {Array.<String>} opts.reference2 
     * @param {String} opts.installer 
     * @param {Array.<String>} opts.installer2 
     * @param {module:model/ConnectionType} opts.connectionType 
     * @param {Array.<module:model/ConnectionType>} opts.connectionType2 
     * @param {module:api/DefaultApi~systemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    systems(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling systems");
      }

      let pathParams = {
      };
      let queryParams = {
        'user_id': userId,
        'next': opts['next'],
        'limit': opts['limit'],
        'system_id': opts['systemId'],
        'system_id[]': this.apiClient.buildCollectionParam(opts['systemId2'], 'multi'),
        'system_name': opts['systemName'],
        'system_name[]': this.apiClient.buildCollectionParam(opts['systemName2'], 'multi'),
        'status': opts['status'],
        'status[]': this.apiClient.buildCollectionParam(opts['status2'], 'multi'),
        'reference': opts['reference'],
        'reference[]': this.apiClient.buildCollectionParam(opts['reference2'], 'multi'),
        'installer': opts['installer'],
        'installer[]': this.apiClient.buildCollectionParam(opts['installer2'], 'multi'),
        'connection_type': opts['connectionType'],
        'connection_type[]': this.apiClient.buildCollectionParam(opts['connectionType2'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/systems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
