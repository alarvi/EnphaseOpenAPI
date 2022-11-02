<?php
/**
 * SummaryResponse
 *
 * PHP version 7.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Enlighten Systems API
 *
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * The version of the OpenAPI document: 2.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.4.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * SummaryResponse Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class SummaryResponse implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'SummaryResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'current_power' => 'int',
        'energy_lifetime' => 'int',
        'energy_today' => 'int',
        'last_interval_end_at' => 'int',
        'last_report_at' => 'int',
        'modules' => 'int',
        'operational_at' => 'int',
        'size_w' => 'int',
        'source' => 'string',
        'status' => '\OpenAPI\Client\Model\Status',
        'summary_date' => '\DateTime',
        'system_id' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'current_power' => null,
        'energy_lifetime' => null,
        'energy_today' => null,
        'last_interval_end_at' => 'int64',
        'last_report_at' => 'int64',
        'modules' => null,
        'operational_at' => 'int64',
        'size_w' => null,
        'source' => null,
        'status' => null,
        'summary_date' => 'date',
        'system_id' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'current_power' => 'current_power',
        'energy_lifetime' => 'energy_lifetime',
        'energy_today' => 'energy_today',
        'last_interval_end_at' => 'last_interval_end_at',
        'last_report_at' => 'last_report_at',
        'modules' => 'modules',
        'operational_at' => 'operational_at',
        'size_w' => 'size_w',
        'source' => 'source',
        'status' => 'status',
        'summary_date' => 'summary_date',
        'system_id' => 'system_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'current_power' => 'setCurrentPower',
        'energy_lifetime' => 'setEnergyLifetime',
        'energy_today' => 'setEnergyToday',
        'last_interval_end_at' => 'setLastIntervalEndAt',
        'last_report_at' => 'setLastReportAt',
        'modules' => 'setModules',
        'operational_at' => 'setOperationalAt',
        'size_w' => 'setSizeW',
        'source' => 'setSource',
        'status' => 'setStatus',
        'summary_date' => 'setSummaryDate',
        'system_id' => 'setSystemId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'current_power' => 'getCurrentPower',
        'energy_lifetime' => 'getEnergyLifetime',
        'energy_today' => 'getEnergyToday',
        'last_interval_end_at' => 'getLastIntervalEndAt',
        'last_report_at' => 'getLastReportAt',
        'modules' => 'getModules',
        'operational_at' => 'getOperationalAt',
        'size_w' => 'getSizeW',
        'source' => 'getSource',
        'status' => 'getStatus',
        'summary_date' => 'getSummaryDate',
        'system_id' => 'getSystemId'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }

    const SOURCE_MICROINVERTERS = 'microinverters';
    const SOURCE_METER = 'meter';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getSourceAllowableValues()
    {
        return [
            self::SOURCE_MICROINVERTERS,
            self::SOURCE_METER,
        ];
    }

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['current_power'] = $data['current_power'] ?? null;
        $this->container['energy_lifetime'] = $data['energy_lifetime'] ?? null;
        $this->container['energy_today'] = $data['energy_today'] ?? null;
        $this->container['last_interval_end_at'] = $data['last_interval_end_at'] ?? null;
        $this->container['last_report_at'] = $data['last_report_at'] ?? null;
        $this->container['modules'] = $data['modules'] ?? null;
        $this->container['operational_at'] = $data['operational_at'] ?? null;
        $this->container['size_w'] = $data['size_w'] ?? null;
        $this->container['source'] = $data['source'] ?? null;
        $this->container['status'] = $data['status'] ?? null;
        $this->container['summary_date'] = $data['summary_date'] ?? null;
        $this->container['system_id'] = $data['system_id'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['current_power'] === null) {
            $invalidProperties[] = "'current_power' can't be null";
        }
        if ($this->container['energy_lifetime'] === null) {
            $invalidProperties[] = "'energy_lifetime' can't be null";
        }
        if ($this->container['energy_today'] === null) {
            $invalidProperties[] = "'energy_today' can't be null";
        }
        if ($this->container['last_interval_end_at'] === null) {
            $invalidProperties[] = "'last_interval_end_at' can't be null";
        }
        if ($this->container['last_report_at'] === null) {
            $invalidProperties[] = "'last_report_at' can't be null";
        }
        if ($this->container['modules'] === null) {
            $invalidProperties[] = "'modules' can't be null";
        }
        if ($this->container['operational_at'] === null) {
            $invalidProperties[] = "'operational_at' can't be null";
        }
        if ($this->container['size_w'] === null) {
            $invalidProperties[] = "'size_w' can't be null";
        }
        if ($this->container['source'] === null) {
            $invalidProperties[] = "'source' can't be null";
        }
        $allowedValues = $this->getSourceAllowableValues();
        if (!is_null($this->container['source']) && !in_array($this->container['source'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'source', must be one of '%s'",
                $this->container['source'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        if ($this->container['summary_date'] === null) {
            $invalidProperties[] = "'summary_date' can't be null";
        }
        if ($this->container['system_id'] === null) {
            $invalidProperties[] = "'system_id' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets current_power
     *
     * @return int
     */
    public function getCurrentPower()
    {
        return $this->container['current_power'];
    }

    /**
     * Sets current_power
     *
     * @param int $current_power Current power production, in Watts. For historical requests, returns 0.
     *
     * @return self
     */
    public function setCurrentPower($current_power)
    {
        $this->container['current_power'] = $current_power;

        return $this;
    }

    /**
     * Gets energy_lifetime
     *
     * @return int
     */
    public function getEnergyLifetime()
    {
        return $this->container['energy_lifetime'];
    }

    /**
     * Sets energy_lifetime
     *
     * @param int $energy_lifetime Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours.
     *
     * @return self
     */
    public function setEnergyLifetime($energy_lifetime)
    {
        $this->container['energy_lifetime'] = $energy_lifetime;

        return $this;
    }

    /**
     * Gets energy_today
     *
     * @return int
     */
    public function getEnergyToday()
    {
        return $this->container['energy_today'];
    }

    /**
     * Sets energy_today
     *
     * @param int $energy_today Energy produced on the requested day, in Watt-hours.
     *
     * @return self
     */
    public function setEnergyToday($energy_today)
    {
        $this->container['energy_today'] = $energy_today;

        return $this;
    }

    /**
     * Gets last_interval_end_at
     *
     * @return int
     */
    public function getLastIntervalEndAt()
    {
        return $this->container['last_interval_end_at'];
    }

    /**
     * Sets last_interval_end_at
     *
     * @param int $last_interval_end_at The last known time that the system produced energy. When a system has not been communicating for a length of time, the `last_report_at` can be recent, whereas the `last_interval_end_at` may be further back.
     *
     * @return self
     */
    public function setLastIntervalEndAt($last_interval_end_at)
    {
        $this->container['last_interval_end_at'] = $last_interval_end_at;

        return $this;
    }

    /**
     * Gets last_report_at
     *
     * @return int
     */
    public function getLastReportAt()
    {
        return $this->container['last_report_at'];
    }

    /**
     * Sets last_report_at
     *
     * @param int $last_report_at The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
     *
     * @return self
     */
    public function setLastReportAt($last_report_at)
    {
        $this->container['last_report_at'] = $last_report_at;

        return $this;
    }

    /**
     * Gets modules
     *
     * @return int
     */
    public function getModules()
    {
        return $this->container['modules'];
    }

    /**
     * Sets modules
     *
     * @param int $modules Number of active (not retired) modules. For historical requests, returns 0.
     *
     * @return self
     */
    public function setModules($modules)
    {
        $this->container['modules'] = $modules;

        return $this;
    }

    /**
     * Gets operational_at
     *
     * @return int
     */
    public function getOperationalAt()
    {
        return $this->container['operational_at'];
    }

    /**
     * Sets operational_at
     *
     * @param int $operational_at The time at which this system became operational. Corresponds to the system's interconnect time, if one is specified. Otherwise, it is the system's first interval end time. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
     *
     * @return self
     */
    public function setOperationalAt($operational_at)
    {
        $this->container['operational_at'] = $operational_at;

        return $this;
    }

    /**
     * Gets size_w
     *
     * @return int
     */
    public function getSizeW()
    {
        return $this->container['size_w'];
    }

    /**
     * Sets size_w
     *
     * @param int $size_w The size of the system, in Watts. For historical requests, returns 0.
     *
     * @return self
     */
    public function setSizeW($size_w)
    {
        $this->container['size_w'] = $size_w;

        return $this;
    }

    /**
     * Gets source
     *
     * @return string
     */
    public function getSource()
    {
        return $this->container['source'];
    }

    /**
     * Sets source
     *
     * @param string $source Indicates whether the production of this system is measured by its microinverters (`microinverters`) or by revenue-grade meters (`meter`) installed on the system.
     *
     * @return self
     */
    public function setSource($source)
    {
        $allowedValues = $this->getSourceAllowableValues();
        if (!in_array($source, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'source', must be one of '%s'",
                    $source,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['source'] = $source;

        return $this;
    }

    /**
     * Gets status
     *
     * @return \OpenAPI\Client\Model\Status
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param \OpenAPI\Client\Model\Status $status status
     *
     * @return self
     */
    public function setStatus($status)
    {
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets summary_date
     *
     * @return \DateTime
     */
    public function getSummaryDate()
    {
        return $this->container['summary_date'];
    }

    /**
     * Sets summary_date
     *
     * @param \DateTime $summary_date Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
     *
     * @return self
     */
    public function setSummaryDate($summary_date)
    {
        $this->container['summary_date'] = $summary_date;

        return $this;
    }

    /**
     * Gets system_id
     *
     * @return int
     */
    public function getSystemId()
    {
        return $this->container['system_id'];
    }

    /**
     * Sets system_id
     *
     * @param int $system_id The Enlighten ID of the system.
     *
     * @return self
     */
    public function setSystemId($system_id)
    {
        $this->container['system_id'] = $system_id;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


