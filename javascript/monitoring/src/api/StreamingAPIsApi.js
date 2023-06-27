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


import ApiClient from "../ApiClient";
import StreamSystemLiveData401Response from '../model/StreamSystemLiveData401Response';
import StreamSystemLiveData403Response from '../model/StreamSystemLiveData403Response';
import StreamSystemLiveData429Response from '../model/StreamSystemLiveData429Response';
import StreamSystemLiveData461Response from '../model/StreamSystemLiveData461Response';
import StreamSystemLiveData462Response from '../model/StreamSystemLiveData462Response';
import StreamSystemLiveData463Response from '../model/StreamSystemLiveData463Response';
import StreamSystemLiveData466Response from '../model/StreamSystemLiveData466Response';
import StreamSystemLiveData468Response from '../model/StreamSystemLiveData468Response';
import StreamSystemLiveData472Response from '../model/StreamSystemLiveData472Response';
import StreamSystemLiveData550Response from '../model/StreamSystemLiveData550Response';
import StreamSystemLiveData551Response from '../model/StreamSystemLiveData551Response';
import StreamSystemLiveData552Response from '../model/StreamSystemLiveData552Response';
import StreamSystemLiveDataResponse from '../model/StreamSystemLiveDataResponse';

/**
* StreamingAPIs service.
* @module api/StreamingAPIsApi
* @version 4.0
*/
export default class StreamingAPIsApi {

    /**
    * Constructs a new StreamingAPIsApi. 
    * @alias module:api/StreamingAPIsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Site Level Live Status
     * API users can get real time live status data on demand for a given system. User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator. Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge. User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing 'duration' as a header parameter with a minimum value of 30 and maximum value of 300.
     * @param {Number} systemId Unique numeric ID of the system.
     * @param {Object} opts Optional parameters
     * @param {Number} [duration] Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamSystemLiveDataResponse} and HTTP response
     */
    streamSystemLiveDataWithHttpInfo(systemId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling streamSystemLiveData");
      }

      let pathParams = {
        'system_id': systemId
      };
      let queryParams = {
      };
      let headerParams = {
        'duration': opts['duration']
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = [];
      let accepts = ['text/event-stream'];
      let returnType = StreamSystemLiveDataResponse;
      return this.apiClient.callApi(
        '/systems/{system_id}/live_data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Site Level Live Status
     * API users can get real time live status data on demand for a given system. User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator. Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge. User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing 'duration' as a header parameter with a minimum value of 30 and maximum value of 300.
     * @param {Number} systemId Unique numeric ID of the system.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.duration Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamSystemLiveDataResponse}
     */
    streamSystemLiveData(systemId, opts) {
      return this.streamSystemLiveDataWithHttpInfo(systemId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
