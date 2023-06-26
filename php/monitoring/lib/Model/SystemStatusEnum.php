<?php
/**
 * SystemStatusEnum
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
 * SystemStatusEnum Class Doc Comment
 *
 * @category Class
 * @package  EnphaseOpenAPI\Monitoring
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class SystemStatusEnum
{
    /**
     * Possible values of this enum
     */
    public const DEACTIVATED = 'deactivated';

    public const NORMAL = 'normal';

    public const COMM = 'comm';

    public const MICRO = 'micro';

    public const POWER = 'power';

    public const METER = 'meter';

    public const METER_ISSUE = 'meter_issue';

    public const BATTERY = 'battery';

    public const STORAGE_IDLE = 'storage_idle';

    public const ENCHARGE = 'encharge';

    public const ENCHARGE_ISSUE = 'encharge_issue';

    public const ENPOWER = 'enpower';

    public const ENPOWER_ISSUE = 'enpower_issue';

    public const RETIRED = 'retired';

    public const NOT_MONITORED = 'not_monitored';

    public const UNUSED = 'unused';

    public const DISABLED = 'disabled';

    public const DEBUG = 'debug';

    public const INFO = 'info';

    public const MONITORED = 'monitored';

    public const MUTED = 'muted';

    public const WARNING = 'warning';

    public const ERROR = 'error';

    public const NO_DATA = 'no_data';

    public const RMA = 'rma';

    public const UNKNOWN = 'unknown';

    public const NSR = 'nsr';

    public const ANY = 'any';

    public const DATA_UPLOAD = 'data_upload';

    public const ON_GRID = 'on_grid';

    public const OFF_GRID = 'off_grid';

    public const GRID_UNKNOWN = 'grid_unknown';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::DEACTIVATED,
            self::NORMAL,
            self::COMM,
            self::MICRO,
            self::POWER,
            self::METER,
            self::METER_ISSUE,
            self::BATTERY,
            self::STORAGE_IDLE,
            self::ENCHARGE,
            self::ENCHARGE_ISSUE,
            self::ENPOWER,
            self::ENPOWER_ISSUE,
            self::RETIRED,
            self::NOT_MONITORED,
            self::UNUSED,
            self::DISABLED,
            self::DEBUG,
            self::INFO,
            self::MONITORED,
            self::MUTED,
            self::WARNING,
            self::ERROR,
            self::NO_DATA,
            self::RMA,
            self::UNKNOWN,
            self::NSR,
            self::ANY,
            self::DATA_UPLOAD,
            self::ON_GRID,
            self::OFF_GRID,
            self::GRID_UNKNOWN
        ];
    }
}


