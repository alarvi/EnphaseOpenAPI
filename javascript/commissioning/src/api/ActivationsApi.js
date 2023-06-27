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


import ApiClient from "../ApiClient";
import DeleteActivationResponse from '../model/DeleteActivationResponse';
import GetActivationOpsProductionModeResponse from '../model/GetActivationOpsProductionModeResponse';
import GetPartnerActivationsResponse from '../model/GetPartnerActivationsResponse';
import GrantActivationUserAccessResponse from '../model/GrantActivationUserAccessResponse';
import RevokeActivationUserAccessResponse from '../model/RevokeActivationUserAccessResponse';
import ServerError from '../model/ServerError';
import SetActivationOpsProductionModeRequest from '../model/SetActivationOpsProductionModeRequest';
import SetActivationOpsProductionModeResponse from '../model/SetActivationOpsProductionModeResponse';
import System from '../model/System';
import SystemExpandEnum from '../model/SystemExpandEnum';
import SystemParams from '../model/SystemParams';
import SystemStageEnum from '../model/SystemStageEnum';
import TooManyRequestsError from '../model/TooManyRequestsError';
import UnprocessableEntityError from '../model/UnprocessableEntityError';

/**
* Activations service.
* @module api/ActivationsApi
* @version 4.0
*/
export default class ActivationsApi {

    /**
    * Constructs a new ActivationsApi. 
    * @alias module:api/ActivationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create new activation
     * Create new activation.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemParams} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/System} and HTTP response
     */
    createPartnerActivationWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['params'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = System;
      return this.apiClient.callApi(
        '/partner/activations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create new activation
     * Create new activation.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemParams} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/System}
     */
    createPartnerActivation(opts) {
      return this.createPartnerActivationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an activation by ID
     * To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.
     * @param {Number} id Enlighten ID of the activation(system).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteActivationResponse} and HTTP response
     */
    deleteActivationWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteActivation");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteActivationResponse;
      return this.apiClient.callApi(
        '/activations/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an activation by ID
     * To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.
     * @param {Number} id Enlighten ID of the activation(system).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteActivationResponse}
     */
    deleteActivation(id) {
      return this.deleteActivationWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get production mode
     * Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetActivationOpsProductionModeResponse} and HTTP response
     */
    getActivationOpsProductionModeWithHttpInfo(activationId) {
      let postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling getActivationOpsProductionMode");
      }

      let pathParams = {
        'activation_id': activationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetActivationOpsProductionModeResponse;
      return this.apiClient.callApi(
        '/activations/{activation_id}/ops/production_mode', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get production mode
     * Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetActivationOpsProductionModeResponse}
     */
    getActivationOpsProductionMode(activationId) {
      return this.getActivationOpsProductionModeWithHttpInfo(activationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves an Activation by ID
     * By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner's name within the system hash, the response includes detailed information about the owner by using expand=owner. You can also expand the owner's company by using expand=owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand=host will include details about the system host. You can also expand the host's company by using expand=host.company. The response now includes information about the host and the company he belongs to.
     * @param {Number} id Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemExpandEnum} [expand] Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/System} and HTTP response
     */
    getPartnerActivationWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPartnerActivation");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = System;
      return this.apiClient.callApi(
        '/partner/activations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves an Activation by ID
     * By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner's name within the system hash, the response includes detailed information about the owner by using expand=owner. You can also expand the owner's company by using expand=owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand=host will include details about the system host. You can also expand the host's company by using expand=host.company. The response now includes information about the host and the company he belongs to.
     * @param {Number} id Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemExpandEnum} opts.expand Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/System}
     */
    getPartnerActivation(id, opts) {
      return this.getPartnerActivationWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of Activations
     * Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn't exist, API will return an empty array.
     * @param {Object} opts Optional parameters
     * @param {String} [next] If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.
     * @param {Number} [limit] There is a limit to the number of activations which can be returned at one time.
     * @param {module:model/SystemStageEnum} [stage] Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems.
     * @param {String} [reference] Filter activations by company reference.
     * @param {Number} [installerId] Filter activations by installer ID.
     * @param {String} [systemName] Filter activations by system name.
     * @param {String} [address] Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.
     * @param {String} [region] Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.
     * @param {String} [search] Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPartnerActivationsResponse} and HTTP response
     */
    getPartnerActivationsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'next': opts['next'],
        'limit': opts['limit'],
        'stage': opts['stage'],
        'reference': opts['reference'],
        'installer_id': opts['installerId'],
        'system_name': opts['systemName'],
        'address': opts['address'],
        'region': opts['region'],
        'search': opts['search']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPartnerActivationsResponse;
      return this.apiClient.callApi(
        '/partner/activations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of Activations
     * Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn't exist, API will return an empty array.
     * @param {Object} opts Optional parameters
     * @param {String} opts.next If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.
     * @param {Number} opts.limit There is a limit to the number of activations which can be returned at one time.
     * @param {module:model/SystemStageEnum} opts.stage Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems.
     * @param {String} opts.reference Filter activations by company reference.
     * @param {Number} opts.installerId Filter activations by installer ID.
     * @param {String} opts.systemName Filter activations by system name.
     * @param {String} opts.address Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.
     * @param {String} opts.region Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.
     * @param {String} opts.search Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPartnerActivationsResponse}
     */
    getPartnerActivations(opts) {
      return this.getPartnerActivationsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Grant Access
     * Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.
     * @param {Number} activationId Enlighten ID of the activation(system).
     * @param {Number} userId Enlighten ID of the user which you want to grant access.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GrantActivationUserAccessResponse} and HTTP response
     */
    grantActivationUserAccessWithHttpInfo(activationId, userId) {
      let postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling grantActivationUserAccess");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling grantActivationUserAccess");
      }

      let pathParams = {
        'activation_id': activationId,
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GrantActivationUserAccessResponse;
      return this.apiClient.callApi(
        '/activations/{activation_id}/users/{user_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Grant Access
     * Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.
     * @param {Number} activationId Enlighten ID of the activation(system).
     * @param {Number} userId Enlighten ID of the user which you want to grant access.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GrantActivationUserAccessResponse}
     */
    grantActivationUserAccess(activationId, userId) {
      return this.grantActivationUserAccessWithHttpInfo(activationId, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Revoke Access
     * Revokes a user's permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.
     * @param {Number} activationId Enlighten ID of the activation(system).
     * @param {Number} userId Enlighten ID of the user which you want to revoke the access.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevokeActivationUserAccessResponse} and HTTP response
     */
    revokeActivationUserAccessWithHttpInfo(activationId, userId) {
      let postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling revokeActivationUserAccess");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling revokeActivationUserAccess");
      }

      let pathParams = {
        'activation_id': activationId,
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RevokeActivationUserAccessResponse;
      return this.apiClient.callApi(
        '/activations/{activation_id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Revoke Access
     * Revokes a user's permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.
     * @param {Number} activationId Enlighten ID of the activation(system).
     * @param {Number} userId Enlighten ID of the user which you want to revoke the access.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevokeActivationUserAccessResponse}
     */
    revokeActivationUserAccess(activationId, userId) {
      return this.revokeActivationUserAccessWithHttpInfo(activationId, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set production mode
     * Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SetActivationOpsProductionModeRequest} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SetActivationOpsProductionModeResponse} and HTTP response
     */
    setActivationOpsProductionModeWithHttpInfo(activationId, opts) {
      opts = opts || {};
      let postBody = opts['params'];
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling setActivationOpsProductionMode");
      }

      let pathParams = {
        'activation_id': activationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SetActivationOpsProductionModeResponse;
      return this.apiClient.callApi(
        '/activations/{activation_id}/ops/production_mode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set production mode
     * Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SetActivationOpsProductionModeRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SetActivationOpsProductionModeResponse}
     */
    setActivationOpsProductionMode(activationId, opts) {
      return this.setActivationOpsProductionModeWithHttpInfo(activationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an activation.
     * Update an activation.
     * @param {Number} id Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemParams} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/System} and HTTP response
     */
    updatePartnerActivationWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['params'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePartnerActivation");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = System;
      return this.apiClient.callApi(
        '/partner/activations/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an activation.
     * Update an activation.
     * @param {Number} id Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemParams} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/System}
     */
    updatePartnerActivation(id, opts) {
      return this.updatePartnerActivationWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}