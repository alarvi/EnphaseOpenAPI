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

import ApiClient from '../ApiClient';
import SystemHostCompany from './SystemHostCompany';
import UserRoleEnum from './UserRoleEnum';

/**
 * The SystemHost model module.
 * @module model/SystemHost
 * @version 4.0
 */
class SystemHost {
    /**
     * Constructs a new <code>SystemHost</code>.
     * Name of the system host. If the query parameter &#39;expand&#x3D;host&#39; passed in the request host detail will appear in the response.
     * @alias module:model/SystemHost
     */
    constructor() { 
        
        SystemHost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SystemHost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemHost} obj Optional instance to populate.
     * @return {module:model/SystemHost} The populated <code>SystemHost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemHost();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('user_roles')) {
                obj['user_roles'] = ApiClient.convertToType(data['user_roles'], [UserRoleEnum]);
            }
            if (data.hasOwnProperty('enlighten_emails')) {
                obj['enlighten_emails'] = ApiClient.convertToType(data['enlighten_emails'], 'Boolean');
            }
            if (data.hasOwnProperty('enlighten_view')) {
                obj['enlighten_view'] = ApiClient.convertToType(data['enlighten_view'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = SystemHostCompany.constructFromObject(data['company']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SystemHost</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SystemHost</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['user_roles'])) {
            throw new Error("Expected the field `user_roles` to be an array in the JSON data but got " + data['user_roles']);
        }
        // ensure the json data is a string
        if (data['enlighten_view'] && !(typeof data['enlighten_view'] === 'string' || data['enlighten_view'] instanceof String)) {
            throw new Error("Expected the field `enlighten_view` to be a primitive type in the JSON string but got " + data['enlighten_view']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }
        // validate the optional field `company`
        if (data['company']) { // data not null
          SystemHostCompany.validateJSON(data['company']);
        }

        return true;
    }


}



/**
 * @member {String} first_name
 */
SystemHost.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
SystemHost.prototype['last_name'] = undefined;

/**
 * @member {String} email
 */
SystemHost.prototype['email'] = undefined;

/**
 * @member {String} phone
 */
SystemHost.prototype['phone'] = undefined;

/**
 * Whether the user is allowed to log in to Enlighten. Values true, false. Default true.
 * @member {Boolean} active
 */
SystemHost.prototype['active'] = undefined;

/**
 * @member {Number} user_id
 */
SystemHost.prototype['user_id'] = undefined;

/**
 * What type of user this is in Enlighten. For self installer user user_roles will be ['self_installer']. For other users user_roles will be empty.
 * @member {Array.<module:model/UserRoleEnum>} user_roles
 */
SystemHost.prototype['user_roles'] = undefined;

/**
 * @member {Boolean} enlighten_emails
 */
SystemHost.prototype['enlighten_emails'] = undefined;

/**
 * @member {String} enlighten_view
 */
SystemHost.prototype['enlighten_view'] = undefined;

/**
 * @member {String} uri
 */
SystemHost.prototype['uri'] = undefined;

/**
 * @member {Number} updated_at
 */
SystemHost.prototype['updated_at'] = undefined;

/**
 * @member {module:model/SystemHostCompany} company
 */
SystemHost.prototype['company'] = undefined;






export default SystemHost;

