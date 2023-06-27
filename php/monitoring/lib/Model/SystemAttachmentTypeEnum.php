<?php
/**
 * SystemAttachmentTypeEnum
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  EnphaseOpenAPI\Monitoring
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Enphase Monitoring API
 *
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
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

namespace EnphaseOpenAPI\Monitoring\Model;
use \EnphaseOpenAPI\Monitoring\ObjectSerializer;

/**
 * SystemAttachmentTypeEnum Class Doc Comment
 *
 * @category Class
 * @description Micro inverter attachment type.
 * @package  EnphaseOpenAPI\Monitoring
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class SystemAttachmentTypeEnum
{
    /**
     * Possible values of this enum
     */
    public const RACK_MOUNT = 'rack_mount';

    public const ZEP = 'zep';

    public const ACM = 'acm';

    public const BIPV = 'bipv';

    public const FRAME_MOUNT = 'frame_mount';

    public const RAILLESS_MOUNT = 'railless_mount';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::RACK_MOUNT,
            self::ZEP,
            self::ACM,
            self::BIPV,
            self::FRAME_MOUNT,
            self::RAILLESS_MOUNT
        ];
    }
}

