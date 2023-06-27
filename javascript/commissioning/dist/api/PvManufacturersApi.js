"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetPvManufacturersResponse = _interopRequireDefault(require("../model/GetPvManufacturersResponse"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _TooManyRequestsError = _interopRequireDefault(require("../model/TooManyRequestsError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
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
/**
* PvManufacturers service.
* @module api/PvManufacturersApi
* @version 4.0
*/
var PvManufacturersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PvManufacturersApi. 
  * @alias module:api/PvManufacturersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PvManufacturersApi(apiClient) {
    _classCallCheck(this, PvManufacturersApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns PV module manufacturers
   * Returns information about the PV module manufacturers known in Enlighten.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPvManufacturersResponse} and HTTP response
   */
  _createClass(PvManufacturersApi, [{
    key: "getPvManufacturersWithHttpInfo",
    value: function getPvManufacturersWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetPvManufacturersResponse["default"];
      return this.apiClient.callApi('/pv_manufacturers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns PV module manufacturers
     * Returns information about the PV module manufacturers known in Enlighten.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPvManufacturersResponse}
     */
  }, {
    key: "getPvManufacturers",
    value: function getPvManufacturers() {
      return this.getPvManufacturersWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return PvManufacturersApi;
}();
exports["default"] = PvManufacturersApi;