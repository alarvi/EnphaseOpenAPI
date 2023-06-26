<?php
/**
 * CompanyRoleEnum
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  EnphaseOpenAPI\Commissioning
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Enphase Commissioning API
 *
 * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
 *
 * The version of the OpenAPI document: 4.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 6.6.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace EnphaseOpenAPI\Commissioning\Model;
use \EnphaseOpenAPI\Commissioning\ObjectSerializer;

/**
 * CompanyRoleEnum Class Doc Comment
 *
 * @category Class
 * @package  EnphaseOpenAPI\Commissioning
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class CompanyRoleEnum
{
    /**
     * Possible values of this enum
     */
    public const INSTALLER = 'installer';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::INSTALLER
        ];
    }
}


