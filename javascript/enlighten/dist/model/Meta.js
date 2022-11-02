"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Status = _interopRequireDefault(require("./Status"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Meta model module.
 * @module model/Meta
 * @version 2.0
 */
var Meta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Meta</code>.
   * Information about the system that you can use to ascertain the timeliness of the production data included in the response.
   * @alias module:model/Meta
   * @param status {module:model/Status} 
   * @param lastReportAt {Number} 
   * @param lastEnergyAt {Number} 
   * @param operationalAt {Number} 
   */
  function Meta(status, lastReportAt, lastEnergyAt, operationalAt) {
    _classCallCheck(this, Meta);
    Meta.initialize(this, status, lastReportAt, lastEnergyAt, operationalAt);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Meta, null, [{
    key: "initialize",
    value: function initialize(obj, status, lastReportAt, lastEnergyAt, operationalAt) {
      obj['status'] = status;
      obj['last_report_at'] = lastReportAt;
      obj['last_energy_at'] = lastEnergyAt;
      obj['operational_at'] = operationalAt;
    }

    /**
     * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Meta} obj Optional instance to populate.
     * @return {module:model/Meta} The populated <code>Meta</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Meta();
        if (data.hasOwnProperty('status')) {
          obj['status'] = _Status["default"].constructFromObject(data['status']);
        }
        if (data.hasOwnProperty('last_report_at')) {
          obj['last_report_at'] = _ApiClient["default"].convertToType(data['last_report_at'], 'Number');
        }
        if (data.hasOwnProperty('last_energy_at')) {
          obj['last_energy_at'] = _ApiClient["default"].convertToType(data['last_energy_at'], 'Number');
        }
        if (data.hasOwnProperty('operational_at')) {
          obj['operational_at'] = _ApiClient["default"].convertToType(data['operational_at'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return Meta;
}();
/**
 * @member {module:model/Status} status
 */
Meta.prototype['status'] = undefined;

/**
 * @member {Number} last_report_at
 */
Meta.prototype['last_report_at'] = undefined;

/**
 * @member {Number} last_energy_at
 */
Meta.prototype['last_energy_at'] = undefined;

/**
 * @member {Number} operational_at
 */
Meta.prototype['operational_at'] = undefined;
var _default = Meta;
exports["default"] = _default;