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
import CreateCompanyUserRequest from '../model/CreateCompanyUserRequest';
import GetCompanyUsersResponse from '../model/GetCompanyUsersResponse';
import GetSelfCompanyBranchesResponse from '../model/GetSelfCompanyBranchesResponse';
import ServerError from '../model/ServerError';
import TooManyRequestsError from '../model/TooManyRequestsError';
import UnprocessableEntityError from '../model/UnprocessableEntityError';
import UpdateCompanyUserRequest from '../model/UpdateCompanyUserRequest';
import User from '../model/User';
import UserExpandEnum from '../model/UserExpandEnum';

/**
* Companies service.
* @module api/CompaniesApi
* @version 4.0
*/
export default class CompaniesApi {

    /**
    * Constructs a new CompaniesApi. 
    * @alias module:api/CompaniesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create company user
     * Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.
     * @param {Number} companyId Company ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCompanyUserRequest} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    createCompanyUserWithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = opts['params'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createCompanyUser");
      }

      let pathParams = {
        'company_id': companyId
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
      let returnType = User;
      return this.apiClient.callApi(
        '/companies/{company_id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create company user
     * Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.
     * @param {Number} companyId Company ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCompanyUserRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    createCompanyUser(companyId, opts) {
      return this.createCompanyUserWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the requested user
     * Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.
     * @param {Number} companyId Company ID.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} [expand] Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    getCompanyUserWithHttpInfo(companyId, userId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanyUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getCompanyUser");
      }

      let pathParams = {
        'company_id': companyId,
        'user_id': userId
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
      let returnType = User;
      return this.apiClient.callApi(
        '/companies/{company_id}/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the requested user
     * Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.
     * @param {Number} companyId Company ID.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} opts.expand Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    getCompanyUser(companyId, userId, opts) {
      return this.getCompanyUserWithHttpInfo(companyId, userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all users with in a company
     * Returns the users in the given company.
     * @param {Number} companyId Company ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCompanyUsersResponse} and HTTP response
     */
    getCompanyUsersWithHttpInfo(companyId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanyUsers");
      }

      let pathParams = {
        'company_id': companyId
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
      let returnType = GetCompanyUsersResponse;
      return this.apiClient.callApi(
        '/companies/{company_id}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all users with in a company
     * Returns the users in the given company.
     * @param {Number} companyId Company ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCompanyUsersResponse}
     */
    getCompanyUsers(companyId) {
      return this.getCompanyUsersWithHttpInfo(companyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * User's company and its branches
     * Returns information about the API user's company and its branches, if any.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSelfCompanyBranchesResponse} and HTTP response
     */
    getSelfCompanyBranchesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = GetSelfCompanyBranchesResponse;
      return this.apiClient.callApi(
        '/companies/self/branches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * User's company and its branches
     * Returns information about the API user's company and its branches, if any.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSelfCompanyBranchesResponse}
     */
    getSelfCompanyBranches() {
      return this.getSelfCompanyBranchesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update company user
     * Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.
     * @param {Number} companyId Company ID.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateCompanyUserRequest} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    updateCompanyUserWithHttpInfo(companyId, userId, opts) {
      opts = opts || {};
      let postBody = opts['params'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling updateCompanyUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateCompanyUser");
      }

      let pathParams = {
        'company_id': companyId,
        'user_id': userId
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
      let returnType = User;
      return this.apiClient.callApi(
        '/companies/{company_id}/users/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update company user
     * Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.
     * @param {Number} companyId Company ID.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateCompanyUserRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    updateCompanyUser(companyId, userId, opts) {
      return this.updateCompanyUserWithHttpInfo(companyId, userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
