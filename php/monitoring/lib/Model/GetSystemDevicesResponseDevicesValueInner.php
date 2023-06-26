<?php
/**
 * GetSystemDevicesResponseDevicesValueInner
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

use \ArrayAccess;
use \EnphaseOpenAPI\Monitoring\ObjectSerializer;

/**
 * GetSystemDevicesResponseDevicesValueInner Class Doc Comment
 *
 * @category Class
 * @package  EnphaseOpenAPI\Monitoring
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class GetSystemDevicesResponseDevicesValueInner implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'GetSystemDevicesResponse_devices_value_inner';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'last_report_at' => 'int',
        'name' => 'string',
        'serial_number' => 'string',
        'part_number' => 'string',
        'emu_sw_version' => 'string',
        'sku' => 'string',
        'model' => 'string',
        'status' => 'string',
        'active' => 'bool',
        'state' => 'string',
        'config_type' => 'string',
        'cellular_modem' => '\EnphaseOpenAPI\Monitoring\Model\GetSystemDevicesResponseDevicesValueInnerCellularModem'
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
        'last_report_at' => 'int64',
        'name' => null,
        'serial_number' => null,
        'part_number' => null,
        'emu_sw_version' => null,
        'sku' => null,
        'model' => null,
        'status' => null,
        'active' => null,
        'state' => null,
        'config_type' => null,
        'cellular_modem' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'id' => false,
		'last_report_at' => false,
		'name' => false,
		'serial_number' => false,
		'part_number' => false,
		'emu_sw_version' => false,
		'sku' => false,
		'model' => false,
		'status' => false,
		'active' => false,
		'state' => false,
		'config_type' => false,
		'cellular_modem' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

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
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'id' => 'id',
        'last_report_at' => 'last_report_at',
        'name' => 'name',
        'serial_number' => 'serial_number',
        'part_number' => 'part_number',
        'emu_sw_version' => 'emu_sw_version',
        'sku' => 'sku',
        'model' => 'model',
        'status' => 'status',
        'active' => 'active',
        'state' => 'state',
        'config_type' => 'config_type',
        'cellular_modem' => 'cellular_modem'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'last_report_at' => 'setLastReportAt',
        'name' => 'setName',
        'serial_number' => 'setSerialNumber',
        'part_number' => 'setPartNumber',
        'emu_sw_version' => 'setEmuSwVersion',
        'sku' => 'setSku',
        'model' => 'setModel',
        'status' => 'setStatus',
        'active' => 'setActive',
        'state' => 'setState',
        'config_type' => 'setConfigType',
        'cellular_modem' => 'setCellularModem'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'last_report_at' => 'getLastReportAt',
        'name' => 'getName',
        'serial_number' => 'getSerialNumber',
        'part_number' => 'getPartNumber',
        'emu_sw_version' => 'getEmuSwVersion',
        'sku' => 'getSku',
        'model' => 'getModel',
        'status' => 'getStatus',
        'active' => 'getActive',
        'state' => 'getState',
        'config_type' => 'getConfigType',
        'cellular_modem' => 'getCellularModem'
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
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('last_report_at', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('serial_number', $data ?? [], null);
        $this->setIfExists('part_number', $data ?? [], null);
        $this->setIfExists('emu_sw_version', $data ?? [], null);
        $this->setIfExists('sku', $data ?? [], null);
        $this->setIfExists('model', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('active', $data ?? [], null);
        $this->setIfExists('state', $data ?? [], null);
        $this->setIfExists('config_type', $data ?? [], null);
        $this->setIfExists('cellular_modem', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

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
     * @return int|null
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int|null $id id
     *
     * @return self
     */
    public function setId($id)
    {
        if (is_null($id)) {
            throw new \InvalidArgumentException('non-nullable id cannot be null');
        }
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets last_report_at
     *
     * @return int|null
     */
    public function getLastReportAt()
    {
        return $this->container['last_report_at'];
    }

    /**
     * Sets last_report_at
     *
     * @param int|null $last_report_at last_report_at
     *
     * @return self
     */
    public function setLastReportAt($last_report_at)
    {
        if (is_null($last_report_at)) {
            throw new \InvalidArgumentException('non-nullable last_report_at cannot be null');
        }
        $this->container['last_report_at'] = $last_report_at;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string|null $name name
     *
     * @return self
     */
    public function setName($name)
    {
        if (is_null($name)) {
            throw new \InvalidArgumentException('non-nullable name cannot be null');
        }
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets serial_number
     *
     * @return string|null
     */
    public function getSerialNumber()
    {
        return $this->container['serial_number'];
    }

    /**
     * Sets serial_number
     *
     * @param string|null $serial_number serial_number
     *
     * @return self
     */
    public function setSerialNumber($serial_number)
    {
        if (is_null($serial_number)) {
            throw new \InvalidArgumentException('non-nullable serial_number cannot be null');
        }
        $this->container['serial_number'] = $serial_number;

        return $this;
    }

    /**
     * Gets part_number
     *
     * @return string|null
     */
    public function getPartNumber()
    {
        return $this->container['part_number'];
    }

    /**
     * Sets part_number
     *
     * @param string|null $part_number part_number
     *
     * @return self
     */
    public function setPartNumber($part_number)
    {
        if (is_null($part_number)) {
            throw new \InvalidArgumentException('non-nullable part_number cannot be null');
        }
        $this->container['part_number'] = $part_number;

        return $this;
    }

    /**
     * Gets emu_sw_version
     *
     * @return string|null
     */
    public function getEmuSwVersion()
    {
        return $this->container['emu_sw_version'];
    }

    /**
     * Sets emu_sw_version
     *
     * @param string|null $emu_sw_version emu_sw_version
     *
     * @return self
     */
    public function setEmuSwVersion($emu_sw_version)
    {
        if (is_null($emu_sw_version)) {
            throw new \InvalidArgumentException('non-nullable emu_sw_version cannot be null');
        }
        $this->container['emu_sw_version'] = $emu_sw_version;

        return $this;
    }

    /**
     * Gets sku
     *
     * @return string|null
     */
    public function getSku()
    {
        return $this->container['sku'];
    }

    /**
     * Sets sku
     *
     * @param string|null $sku sku
     *
     * @return self
     */
    public function setSku($sku)
    {
        if (is_null($sku)) {
            throw new \InvalidArgumentException('non-nullable sku cannot be null');
        }
        $this->container['sku'] = $sku;

        return $this;
    }

    /**
     * Gets model
     *
     * @return string|null
     */
    public function getModel()
    {
        return $this->container['model'];
    }

    /**
     * Sets model
     *
     * @param string|null $model model
     *
     * @return self
     */
    public function setModel($model)
    {
        if (is_null($model)) {
            throw new \InvalidArgumentException('non-nullable model cannot be null');
        }
        $this->container['model'] = $model;

        return $this;
    }

    /**
     * Gets status
     *
     * @return string|null
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string|null $status status
     *
     * @return self
     */
    public function setStatus($status)
    {
        if (is_null($status)) {
            throw new \InvalidArgumentException('non-nullable status cannot be null');
        }
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets active
     *
     * @return bool|null
     */
    public function getActive()
    {
        return $this->container['active'];
    }

    /**
     * Sets active
     *
     * @param bool|null $active active
     *
     * @return self
     */
    public function setActive($active)
    {
        if (is_null($active)) {
            throw new \InvalidArgumentException('non-nullable active cannot be null');
        }
        $this->container['active'] = $active;

        return $this;
    }

    /**
     * Gets state
     *
     * @return string|null
     */
    public function getState()
    {
        return $this->container['state'];
    }

    /**
     * Sets state
     *
     * @param string|null $state state
     *
     * @return self
     */
    public function setState($state)
    {
        if (is_null($state)) {
            throw new \InvalidArgumentException('non-nullable state cannot be null');
        }
        $this->container['state'] = $state;

        return $this;
    }

    /**
     * Gets config_type
     *
     * @return string|null
     */
    public function getConfigType()
    {
        return $this->container['config_type'];
    }

    /**
     * Sets config_type
     *
     * @param string|null $config_type config_type
     *
     * @return self
     */
    public function setConfigType($config_type)
    {
        if (is_null($config_type)) {
            throw new \InvalidArgumentException('non-nullable config_type cannot be null');
        }
        $this->container['config_type'] = $config_type;

        return $this;
    }

    /**
     * Gets cellular_modem
     *
     * @return \EnphaseOpenAPI\Monitoring\Model\GetSystemDevicesResponseDevicesValueInnerCellularModem|null
     */
    public function getCellularModem()
    {
        return $this->container['cellular_modem'];
    }

    /**
     * Sets cellular_modem
     *
     * @param \EnphaseOpenAPI\Monitoring\Model\GetSystemDevicesResponseDevicesValueInnerCellularModem|null $cellular_modem cellular_modem
     *
     * @return self
     */
    public function setCellularModem($cellular_modem)
    {
        if (is_null($cellular_modem)) {
            throw new \InvalidArgumentException('non-nullable cellular_modem cannot be null');
        }
        $this->container['cellular_modem'] = $cellular_modem;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
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
    #[\ReturnTypeWillChange]
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
    public function offsetSet($offset, $value): void
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
    public function offsetUnset($offset): void
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
    #[\ReturnTypeWillChange]
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


