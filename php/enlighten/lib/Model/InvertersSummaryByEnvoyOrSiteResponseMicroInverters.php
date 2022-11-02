<?php
/**
 * InvertersSummaryByEnvoyOrSiteResponseMicroInverters
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
 * InvertersSummaryByEnvoyOrSiteResponseMicroInverters Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class InvertersSummaryByEnvoyOrSiteResponseMicroInverters implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'InvertersSummaryByEnvoyOrSiteResponse_micro_inverters';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'model' => 'string',
        'part_number' => 'string',
        'serial_number' => 'string',
        'sku' => 'string',
        'status' => 'string',
        'power_produced' => '\OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSiteResponsePowerProduced',
        'proc_load' => 'string',
        'param_table' => 'string',
        'envoy_serial_number' => 'string',
        'energy' => '\OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSiteResponseEnergy',
        'grid_profile' => 'string',
        'last_report_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'id' => null,
        'model' => null,
        'part_number' => null,
        'serial_number' => null,
        'sku' => null,
        'status' => null,
        'power_produced' => null,
        'proc_load' => null,
        'param_table' => null,
        'envoy_serial_number' => null,
        'energy' => null,
        'grid_profile' => null,
        'last_report_date' => 'date'
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
        'id' => 'id',
        'model' => 'model',
        'part_number' => 'part_number',
        'serial_number' => 'serial_number',
        'sku' => 'sku',
        'status' => 'status',
        'power_produced' => 'power_produced',
        'proc_load' => 'proc_load',
        'param_table' => 'param_table',
        'envoy_serial_number' => 'envoy_serial_number',
        'energy' => 'energy',
        'grid_profile' => 'grid_profile',
        'last_report_date' => 'last_report_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'model' => 'setModel',
        'part_number' => 'setPartNumber',
        'serial_number' => 'setSerialNumber',
        'sku' => 'setSku',
        'status' => 'setStatus',
        'power_produced' => 'setPowerProduced',
        'proc_load' => 'setProcLoad',
        'param_table' => 'setParamTable',
        'envoy_serial_number' => 'setEnvoySerialNumber',
        'energy' => 'setEnergy',
        'grid_profile' => 'setGridProfile',
        'last_report_date' => 'setLastReportDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'model' => 'getModel',
        'part_number' => 'getPartNumber',
        'serial_number' => 'getSerialNumber',
        'sku' => 'getSku',
        'status' => 'getStatus',
        'power_produced' => 'getPowerProduced',
        'proc_load' => 'getProcLoad',
        'param_table' => 'getParamTable',
        'envoy_serial_number' => 'getEnvoySerialNumber',
        'energy' => 'getEnergy',
        'grid_profile' => 'getGridProfile',
        'last_report_date' => 'getLastReportDate'
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

    const STATUS_NORMAL = 'normal';
    const STATUS_POWER = 'power';
    const STATUS_MICRO = 'micro';
    const STATUS_RETIRED = 'retired';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getStatusAllowableValues()
    {
        return [
            self::STATUS_NORMAL,
            self::STATUS_POWER,
            self::STATUS_MICRO,
            self::STATUS_RETIRED,
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
        $this->container['id'] = $data['id'] ?? null;
        $this->container['model'] = $data['model'] ?? null;
        $this->container['part_number'] = $data['part_number'] ?? null;
        $this->container['serial_number'] = $data['serial_number'] ?? null;
        $this->container['sku'] = $data['sku'] ?? null;
        $this->container['status'] = $data['status'] ?? null;
        $this->container['power_produced'] = $data['power_produced'] ?? null;
        $this->container['proc_load'] = $data['proc_load'] ?? null;
        $this->container['param_table'] = $data['param_table'] ?? null;
        $this->container['envoy_serial_number'] = $data['envoy_serial_number'] ?? null;
        $this->container['energy'] = $data['energy'] ?? null;
        $this->container['grid_profile'] = $data['grid_profile'] ?? null;
        $this->container['last_report_date'] = $data['last_report_date'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['id'] === null) {
            $invalidProperties[] = "'id' can't be null";
        }
        if ($this->container['model'] === null) {
            $invalidProperties[] = "'model' can't be null";
        }
        if ($this->container['part_number'] === null) {
            $invalidProperties[] = "'part_number' can't be null";
        }
        if ($this->container['serial_number'] === null) {
            $invalidProperties[] = "'serial_number' can't be null";
        }
        if ($this->container['sku'] === null) {
            $invalidProperties[] = "'sku' can't be null";
        }
        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        $allowedValues = $this->getStatusAllowableValues();
        if (!is_null($this->container['status']) && !in_array($this->container['status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'status', must be one of '%s'",
                $this->container['status'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['power_produced'] === null) {
            $invalidProperties[] = "'power_produced' can't be null";
        }
        if ($this->container['proc_load'] === null) {
            $invalidProperties[] = "'proc_load' can't be null";
        }
        if ($this->container['param_table'] === null) {
            $invalidProperties[] = "'param_table' can't be null";
        }
        if ($this->container['envoy_serial_number'] === null) {
            $invalidProperties[] = "'envoy_serial_number' can't be null";
        }
        if ($this->container['energy'] === null) {
            $invalidProperties[] = "'energy' can't be null";
        }
        if ($this->container['grid_profile'] === null) {
            $invalidProperties[] = "'grid_profile' can't be null";
        }
        if ($this->container['last_report_date'] === null) {
            $invalidProperties[] = "'last_report_date' can't be null";
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
     * Gets id
     *
     * @return int
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int $id id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets model
     *
     * @return string
     */
    public function getModel()
    {
        return $this->container['model'];
    }

    /**
     * Sets model
     *
     * @param string $model Model number of this Microinverter.
     *
     * @return self
     */
    public function setModel($model)
    {
        $this->container['model'] = $model;

        return $this;
    }

    /**
     * Gets part_number
     *
     * @return string
     */
    public function getPartNumber()
    {
        return $this->container['part_number'];
    }

    /**
     * Sets part_number
     *
     * @param string $part_number The Enphase part number of this Microinverter.
     *
     * @return self
     */
    public function setPartNumber($part_number)
    {
        $this->container['part_number'] = $part_number;

        return $this;
    }

    /**
     * Gets serial_number
     *
     * @return string
     */
    public function getSerialNumber()
    {
        return $this->container['serial_number'];
    }

    /**
     * Sets serial_number
     *
     * @param string $serial_number The serial number of this Microinverter.
     *
     * @return self
     */
    public function setSerialNumber($serial_number)
    {
        $this->container['serial_number'] = $serial_number;

        return $this;
    }

    /**
     * Gets sku
     *
     * @return string
     */
    public function getSku()
    {
        return $this->container['sku'];
    }

    /**
     * Sets sku
     *
     * @param string $sku sku
     *
     * @return self
     */
    public function setSku($sku)
    {
        $this->container['sku'] = $sku;

        return $this;
    }

    /**
     * Gets status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string $status The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
     *
     * @return self
     */
    public function setStatus($status)
    {
        $allowedValues = $this->getStatusAllowableValues();
        if (!in_array($status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'status', must be one of '%s'",
                    $status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets power_produced
     *
     * @return \OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSiteResponsePowerProduced
     */
    public function getPowerProduced()
    {
        return $this->container['power_produced'];
    }

    /**
     * Sets power_produced
     *
     * @param \OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSiteResponsePowerProduced $power_produced power_produced
     *
     * @return self
     */
    public function setPowerProduced($power_produced)
    {
        $this->container['power_produced'] = $power_produced;

        return $this;
    }

    /**
     * Gets proc_load
     *
     * @return string
     */
    public function getProcLoad()
    {
        return $this->container['proc_load'];
    }

    /**
     * Sets proc_load
     *
     * @param string $proc_load proc_load
     *
     * @return self
     */
    public function setProcLoad($proc_load)
    {
        $this->container['proc_load'] = $proc_load;

        return $this;
    }

    /**
     * Gets param_table
     *
     * @return string
     */
    public function getParamTable()
    {
        return $this->container['param_table'];
    }

    /**
     * Sets param_table
     *
     * @param string $param_table param_table
     *
     * @return self
     */
    public function setParamTable($param_table)
    {
        $this->container['param_table'] = $param_table;

        return $this;
    }

    /**
     * Gets envoy_serial_number
     *
     * @return string
     */
    public function getEnvoySerialNumber()
    {
        return $this->container['envoy_serial_number'];
    }

    /**
     * Sets envoy_serial_number
     *
     * @param string $envoy_serial_number envoy_serial_number
     *
     * @return self
     */
    public function setEnvoySerialNumber($envoy_serial_number)
    {
        $this->container['envoy_serial_number'] = $envoy_serial_number;

        return $this;
    }

    /**
     * Gets energy
     *
     * @return \OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSiteResponseEnergy
     */
    public function getEnergy()
    {
        return $this->container['energy'];
    }

    /**
     * Sets energy
     *
     * @param \OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSiteResponseEnergy $energy energy
     *
     * @return self
     */
    public function setEnergy($energy)
    {
        $this->container['energy'] = $energy;

        return $this;
    }

    /**
     * Gets grid_profile
     *
     * @return string
     */
    public function getGridProfile()
    {
        return $this->container['grid_profile'];
    }

    /**
     * Sets grid_profile
     *
     * @param string $grid_profile grid_profile
     *
     * @return self
     */
    public function setGridProfile($grid_profile)
    {
        $this->container['grid_profile'] = $grid_profile;

        return $this;
    }

    /**
     * Gets last_report_date
     *
     * @return \DateTime
     */
    public function getLastReportDate()
    {
        return $this->container['last_report_date'];
    }

    /**
     * Sets last_report_date
     *
     * @param \DateTime $last_report_date The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
     *
     * @return self
     */
    public function setLastReportDate($last_report_date)
    {
        $this->container['last_report_date'] = $last_report_date;

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


