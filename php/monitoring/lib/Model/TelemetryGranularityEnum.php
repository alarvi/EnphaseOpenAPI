<?php
/**
 * TelemetryGranularityEnum
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
 * TelemetryGranularityEnum Class Doc Comment
 *
 * @category Class
 * @description Granularity of the telemetry data. Default is &#39;day&#39;.
 * @package  EnphaseOpenAPI\Monitoring
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class TelemetryGranularityEnum
{
    /**
     * Possible values of this enum
     */
    public const _15MINS = '15mins';

    public const DAY = 'day';

    public const WEEK = 'week';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::_15MINS,
            self::DAY,
            self::WEEK
        ];
    }
}

