/**
 * The Enphase Monitoring API
 * Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import BatteryDeviceTelemetry from './model/BatteryDeviceTelemetry';
import BatteryDeviceTelemetryIntervalsInner from './model/BatteryDeviceTelemetryIntervalsInner';
import BatteryDeviceTelemetryIntervalsInnerCharge from './model/BatteryDeviceTelemetryIntervalsInnerCharge';
import BatteryDeviceTelemetryIntervalsInnerDischarge from './model/BatteryDeviceTelemetryIntervalsInnerDischarge';
import BatteryDeviceTelemetryIntervalsInnerSoc from './model/BatteryDeviceTelemetryIntervalsInnerSoc';
import BatterySettings from './model/BatterySettings';
import ClientError from './model/ClientError';
import DataTemporarilyUnavailableError from './model/DataTemporarilyUnavailableError';
import GetInvertersSummaryByEnvoyOrSiteResponseInner from './model/GetInvertersSummaryByEnvoyOrSiteResponseInner';
import GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner from './model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner';
import GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy from './model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy';
import GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced from './model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced';
import GetSystemBatteryLifetimeResponse from './model/GetSystemBatteryLifetimeResponse';
import GetSystemBatteryTelemetryResponse from './model/GetSystemBatteryTelemetryResponse';
import GetSystemBatteryTelemetryResponseIntervalsInner from './model/GetSystemBatteryTelemetryResponseIntervalsInner';
import GetSystemBatteryTelemetryResponseIntervalsInnerCharge from './model/GetSystemBatteryTelemetryResponseIntervalsInnerCharge';
import GetSystemBatteryTelemetryResponseIntervalsInnerDischarge from './model/GetSystemBatteryTelemetryResponseIntervalsInnerDischarge';
import GetSystemBatteryTelemetryResponseIntervalsInnerSoc from './model/GetSystemBatteryTelemetryResponseIntervalsInnerSoc';
import GetSystemConsumptionLifetimeResponse from './model/GetSystemConsumptionLifetimeResponse';
import GetSystemConsumptionMeterTelemetryResponse from './model/GetSystemConsumptionMeterTelemetryResponse';
import GetSystemConsumptionMeterTelemetryResponseIntervalsInner from './model/GetSystemConsumptionMeterTelemetryResponseIntervalsInner';
import GetSystemDevicesResponse from './model/GetSystemDevicesResponse';
import GetSystemDevicesResponseDevicesValueInner from './model/GetSystemDevicesResponseDevicesValueInner';
import GetSystemDevicesResponseDevicesValueInnerCellularModem from './model/GetSystemDevicesResponseDevicesValueInnerCellularModem';
import GetSystemEnergyExportLifetimeResponse from './model/GetSystemEnergyExportLifetimeResponse';
import GetSystemEnergyExportTelemetryResponse from './model/GetSystemEnergyExportTelemetryResponse';
import GetSystemEnergyExportTelemetryResponseIntervalsInnerInner from './model/GetSystemEnergyExportTelemetryResponseIntervalsInnerInner';
import GetSystemEnergyImportLifetimeResponse from './model/GetSystemEnergyImportLifetimeResponse';
import GetSystemEnergyImportTelemetryResponse from './model/GetSystemEnergyImportTelemetryResponse';
import GetSystemEnergyImportTelemetryResponseIntervalsInnerInner from './model/GetSystemEnergyImportTelemetryResponseIntervalsInnerInner';
import GetSystemEnergyLifetimeResponse from './model/GetSystemEnergyLifetimeResponse';
import GetSystemGridStatusSettingsResponse from './model/GetSystemGridStatusSettingsResponse';
import GetSystemMicroDeviceTelemetryResponse from './model/GetSystemMicroDeviceTelemetryResponse';
import GetSystemMicroDeviceTelemetryResponseIntervalsInner from './model/GetSystemMicroDeviceTelemetryResponseIntervalsInner';
import GetSystemProductionMeterReadingsResponse from './model/GetSystemProductionMeterReadingsResponse';
import GetSystemProductionMeterReadingsResponseMeterReadingsInner from './model/GetSystemProductionMeterReadingsResponseMeterReadingsInner';
import GetSystemProductionMeterTelemetryResponse from './model/GetSystemProductionMeterTelemetryResponse';
import GetSystemProductionMeterTelemetryResponseIntervalsInner from './model/GetSystemProductionMeterTelemetryResponseIntervalsInner';
import GetSystemProductionMicroTelemetryResponse from './model/GetSystemProductionMicroTelemetryResponse';
import GetSystemProductionMicroTelemetryResponseIntervalsInner from './model/GetSystemProductionMicroTelemetryResponseIntervalsInner';
import GetSystemRgmStatsResponse from './model/GetSystemRgmStatsResponse';
import GetSystemRgmStatsResponseIntervalsInner from './model/GetSystemRgmStatsResponseIntervalsInner';
import GetSystemRgmStatsResponseMeterIntervalsInner from './model/GetSystemRgmStatsResponseMeterIntervalsInner';
import GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner from './model/GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner';
import GetSystemSummaryResponse from './model/GetSystemSummaryResponse';
import GetSystems500Response from './model/GetSystems500Response';
import GetSystemsResponse from './model/GetSystemsResponse';
import InternalServerError from './model/InternalServerError';
import LoadControlSettings from './model/LoadControlSettings';
import LoadControlSettingsLoadControlDataInner from './model/LoadControlSettingsLoadControlDataInner';
import Meta from './model/Meta';
import MethodNotAllowedError from './model/MethodNotAllowedError';
import NotImplementedError from './model/NotImplementedError';
import RetrieveSystemIdResponse from './model/RetrieveSystemIdResponse';
import SearchSystemsRequest from './model/SearchSystemsRequest';
import SearchSystemsRequestSystem from './model/SearchSystemsRequestSystem';
import SearchSystemsResponse from './model/SearchSystemsResponse';
import StormGuardSettings from './model/StormGuardSettings';
import StreamSystemLiveData401Response from './model/StreamSystemLiveData401Response';
import StreamSystemLiveData401ResponseError from './model/StreamSystemLiveData401ResponseError';
import StreamSystemLiveData403Response from './model/StreamSystemLiveData403Response';
import StreamSystemLiveData403ResponseError from './model/StreamSystemLiveData403ResponseError';
import StreamSystemLiveData429Response from './model/StreamSystemLiveData429Response';
import StreamSystemLiveData429ResponseError from './model/StreamSystemLiveData429ResponseError';
import StreamSystemLiveData461Response from './model/StreamSystemLiveData461Response';
import StreamSystemLiveData461ResponseError from './model/StreamSystemLiveData461ResponseError';
import StreamSystemLiveData462Response from './model/StreamSystemLiveData462Response';
import StreamSystemLiveData462ResponseError from './model/StreamSystemLiveData462ResponseError';
import StreamSystemLiveData463Response from './model/StreamSystemLiveData463Response';
import StreamSystemLiveData463ResponseError from './model/StreamSystemLiveData463ResponseError';
import StreamSystemLiveData466Response from './model/StreamSystemLiveData466Response';
import StreamSystemLiveData466ResponseError from './model/StreamSystemLiveData466ResponseError';
import StreamSystemLiveData468Response from './model/StreamSystemLiveData468Response';
import StreamSystemLiveData468ResponseError from './model/StreamSystemLiveData468ResponseError';
import StreamSystemLiveData472Response from './model/StreamSystemLiveData472Response';
import StreamSystemLiveData472ResponseError from './model/StreamSystemLiveData472ResponseError';
import StreamSystemLiveData550Response from './model/StreamSystemLiveData550Response';
import StreamSystemLiveData550ResponseError from './model/StreamSystemLiveData550ResponseError';
import StreamSystemLiveData551Response from './model/StreamSystemLiveData551Response';
import StreamSystemLiveData551ResponseError from './model/StreamSystemLiveData551ResponseError';
import StreamSystemLiveData552Response from './model/StreamSystemLiveData552Response';
import StreamSystemLiveData552ResponseError from './model/StreamSystemLiveData552ResponseError';
import StreamSystemLiveDataResponse from './model/StreamSystemLiveDataResponse';
import StreamSystemLiveDataResponseData from './model/StreamSystemLiveDataResponseData';
import StreamSystemLiveDataResponseDataData from './model/StreamSystemLiveDataResponseDataData';
import System from './model/System';
import SystemAddress from './model/SystemAddress';
import SystemAttachmentTypeEnum from './model/SystemAttachmentTypeEnum';
import SystemConnectionTypeEnum from './model/SystemConnectionTypeEnum';
import SystemEnergyLifetimeProductionEnum from './model/SystemEnergyLifetimeProductionEnum';
import SystemPublicNameEnum from './model/SystemPublicNameEnum';
import SystemSortByEnum from './model/SystemSortByEnum';
import SystemStatusEnum from './model/SystemStatusEnum';
import TelemetryGranularityEnum from './model/TelemetryGranularityEnum';
import TooManyRequestsError from './model/TooManyRequestsError';
import UpdateSystemBatterySettingsRequest from './model/UpdateSystemBatterySettingsRequest';
import UpdateSystemLoadControlSettingsRequest from './model/UpdateSystemLoadControlSettingsRequest';
import UpdateSystemStormGuardSettingsRequest from './model/UpdateSystemStormGuardSettingsRequest';
import DeviceLevelProductionMonitoringApi from './api/DeviceLevelProductionMonitoringApi';
import SiteLevelConsumptionMonitoringApi from './api/SiteLevelConsumptionMonitoringApi';
import SiteLevelProductionMonitoringApi from './api/SiteLevelProductionMonitoringApi';
import StreamingAPIsApi from './api/StreamingAPIsApi';
import SystemConfigurationsApi from './api/SystemConfigurationsApi';
import SystemDetailsApi from './api/SystemDetailsApi';


/**
* Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TheEnphaseMonitoringApi = require('index'); // See note below*.
* var xxxSvc = new TheEnphaseMonitoringApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TheEnphaseMonitoringApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TheEnphaseMonitoringApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TheEnphaseMonitoringApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 4.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BatteryDeviceTelemetry model constructor.
     * @property {module:model/BatteryDeviceTelemetry}
     */
    BatteryDeviceTelemetry,

    /**
     * The BatteryDeviceTelemetryIntervalsInner model constructor.
     * @property {module:model/BatteryDeviceTelemetryIntervalsInner}
     */
    BatteryDeviceTelemetryIntervalsInner,

    /**
     * The BatteryDeviceTelemetryIntervalsInnerCharge model constructor.
     * @property {module:model/BatteryDeviceTelemetryIntervalsInnerCharge}
     */
    BatteryDeviceTelemetryIntervalsInnerCharge,

    /**
     * The BatteryDeviceTelemetryIntervalsInnerDischarge model constructor.
     * @property {module:model/BatteryDeviceTelemetryIntervalsInnerDischarge}
     */
    BatteryDeviceTelemetryIntervalsInnerDischarge,

    /**
     * The BatteryDeviceTelemetryIntervalsInnerSoc model constructor.
     * @property {module:model/BatteryDeviceTelemetryIntervalsInnerSoc}
     */
    BatteryDeviceTelemetryIntervalsInnerSoc,

    /**
     * The BatterySettings model constructor.
     * @property {module:model/BatterySettings}
     */
    BatterySettings,

    /**
     * The ClientError model constructor.
     * @property {module:model/ClientError}
     */
    ClientError,

    /**
     * The DataTemporarilyUnavailableError model constructor.
     * @property {module:model/DataTemporarilyUnavailableError}
     */
    DataTemporarilyUnavailableError,

    /**
     * The GetInvertersSummaryByEnvoyOrSiteResponseInner model constructor.
     * @property {module:model/GetInvertersSummaryByEnvoyOrSiteResponseInner}
     */
    GetInvertersSummaryByEnvoyOrSiteResponseInner,

    /**
     * The GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner model constructor.
     * @property {module:model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner}
     */
    GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner,

    /**
     * The GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy model constructor.
     * @property {module:model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy}
     */
    GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy,

    /**
     * The GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced model constructor.
     * @property {module:model/GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced}
     */
    GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced,

    /**
     * The GetSystemBatteryLifetimeResponse model constructor.
     * @property {module:model/GetSystemBatteryLifetimeResponse}
     */
    GetSystemBatteryLifetimeResponse,

    /**
     * The GetSystemBatteryTelemetryResponse model constructor.
     * @property {module:model/GetSystemBatteryTelemetryResponse}
     */
    GetSystemBatteryTelemetryResponse,

    /**
     * The GetSystemBatteryTelemetryResponseIntervalsInner model constructor.
     * @property {module:model/GetSystemBatteryTelemetryResponseIntervalsInner}
     */
    GetSystemBatteryTelemetryResponseIntervalsInner,

    /**
     * The GetSystemBatteryTelemetryResponseIntervalsInnerCharge model constructor.
     * @property {module:model/GetSystemBatteryTelemetryResponseIntervalsInnerCharge}
     */
    GetSystemBatteryTelemetryResponseIntervalsInnerCharge,

    /**
     * The GetSystemBatteryTelemetryResponseIntervalsInnerDischarge model constructor.
     * @property {module:model/GetSystemBatteryTelemetryResponseIntervalsInnerDischarge}
     */
    GetSystemBatteryTelemetryResponseIntervalsInnerDischarge,

    /**
     * The GetSystemBatteryTelemetryResponseIntervalsInnerSoc model constructor.
     * @property {module:model/GetSystemBatteryTelemetryResponseIntervalsInnerSoc}
     */
    GetSystemBatteryTelemetryResponseIntervalsInnerSoc,

    /**
     * The GetSystemConsumptionLifetimeResponse model constructor.
     * @property {module:model/GetSystemConsumptionLifetimeResponse}
     */
    GetSystemConsumptionLifetimeResponse,

    /**
     * The GetSystemConsumptionMeterTelemetryResponse model constructor.
     * @property {module:model/GetSystemConsumptionMeterTelemetryResponse}
     */
    GetSystemConsumptionMeterTelemetryResponse,

    /**
     * The GetSystemConsumptionMeterTelemetryResponseIntervalsInner model constructor.
     * @property {module:model/GetSystemConsumptionMeterTelemetryResponseIntervalsInner}
     */
    GetSystemConsumptionMeterTelemetryResponseIntervalsInner,

    /**
     * The GetSystemDevicesResponse model constructor.
     * @property {module:model/GetSystemDevicesResponse}
     */
    GetSystemDevicesResponse,

    /**
     * The GetSystemDevicesResponseDevicesValueInner model constructor.
     * @property {module:model/GetSystemDevicesResponseDevicesValueInner}
     */
    GetSystemDevicesResponseDevicesValueInner,

    /**
     * The GetSystemDevicesResponseDevicesValueInnerCellularModem model constructor.
     * @property {module:model/GetSystemDevicesResponseDevicesValueInnerCellularModem}
     */
    GetSystemDevicesResponseDevicesValueInnerCellularModem,

    /**
     * The GetSystemEnergyExportLifetimeResponse model constructor.
     * @property {module:model/GetSystemEnergyExportLifetimeResponse}
     */
    GetSystemEnergyExportLifetimeResponse,

    /**
     * The GetSystemEnergyExportTelemetryResponse model constructor.
     * @property {module:model/GetSystemEnergyExportTelemetryResponse}
     */
    GetSystemEnergyExportTelemetryResponse,

    /**
     * The GetSystemEnergyExportTelemetryResponseIntervalsInnerInner model constructor.
     * @property {module:model/GetSystemEnergyExportTelemetryResponseIntervalsInnerInner}
     */
    GetSystemEnergyExportTelemetryResponseIntervalsInnerInner,

    /**
     * The GetSystemEnergyImportLifetimeResponse model constructor.
     * @property {module:model/GetSystemEnergyImportLifetimeResponse}
     */
    GetSystemEnergyImportLifetimeResponse,

    /**
     * The GetSystemEnergyImportTelemetryResponse model constructor.
     * @property {module:model/GetSystemEnergyImportTelemetryResponse}
     */
    GetSystemEnergyImportTelemetryResponse,

    /**
     * The GetSystemEnergyImportTelemetryResponseIntervalsInnerInner model constructor.
     * @property {module:model/GetSystemEnergyImportTelemetryResponseIntervalsInnerInner}
     */
    GetSystemEnergyImportTelemetryResponseIntervalsInnerInner,

    /**
     * The GetSystemEnergyLifetimeResponse model constructor.
     * @property {module:model/GetSystemEnergyLifetimeResponse}
     */
    GetSystemEnergyLifetimeResponse,

    /**
     * The GetSystemGridStatusSettingsResponse model constructor.
     * @property {module:model/GetSystemGridStatusSettingsResponse}
     */
    GetSystemGridStatusSettingsResponse,

    /**
     * The GetSystemMicroDeviceTelemetryResponse model constructor.
     * @property {module:model/GetSystemMicroDeviceTelemetryResponse}
     */
    GetSystemMicroDeviceTelemetryResponse,

    /**
     * The GetSystemMicroDeviceTelemetryResponseIntervalsInner model constructor.
     * @property {module:model/GetSystemMicroDeviceTelemetryResponseIntervalsInner}
     */
    GetSystemMicroDeviceTelemetryResponseIntervalsInner,

    /**
     * The GetSystemProductionMeterReadingsResponse model constructor.
     * @property {module:model/GetSystemProductionMeterReadingsResponse}
     */
    GetSystemProductionMeterReadingsResponse,

    /**
     * The GetSystemProductionMeterReadingsResponseMeterReadingsInner model constructor.
     * @property {module:model/GetSystemProductionMeterReadingsResponseMeterReadingsInner}
     */
    GetSystemProductionMeterReadingsResponseMeterReadingsInner,

    /**
     * The GetSystemProductionMeterTelemetryResponse model constructor.
     * @property {module:model/GetSystemProductionMeterTelemetryResponse}
     */
    GetSystemProductionMeterTelemetryResponse,

    /**
     * The GetSystemProductionMeterTelemetryResponseIntervalsInner model constructor.
     * @property {module:model/GetSystemProductionMeterTelemetryResponseIntervalsInner}
     */
    GetSystemProductionMeterTelemetryResponseIntervalsInner,

    /**
     * The GetSystemProductionMicroTelemetryResponse model constructor.
     * @property {module:model/GetSystemProductionMicroTelemetryResponse}
     */
    GetSystemProductionMicroTelemetryResponse,

    /**
     * The GetSystemProductionMicroTelemetryResponseIntervalsInner model constructor.
     * @property {module:model/GetSystemProductionMicroTelemetryResponseIntervalsInner}
     */
    GetSystemProductionMicroTelemetryResponseIntervalsInner,

    /**
     * The GetSystemRgmStatsResponse model constructor.
     * @property {module:model/GetSystemRgmStatsResponse}
     */
    GetSystemRgmStatsResponse,

    /**
     * The GetSystemRgmStatsResponseIntervalsInner model constructor.
     * @property {module:model/GetSystemRgmStatsResponseIntervalsInner}
     */
    GetSystemRgmStatsResponseIntervalsInner,

    /**
     * The GetSystemRgmStatsResponseMeterIntervalsInner model constructor.
     * @property {module:model/GetSystemRgmStatsResponseMeterIntervalsInner}
     */
    GetSystemRgmStatsResponseMeterIntervalsInner,

    /**
     * The GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner model constructor.
     * @property {module:model/GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner}
     */
    GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner,

    /**
     * The GetSystemSummaryResponse model constructor.
     * @property {module:model/GetSystemSummaryResponse}
     */
    GetSystemSummaryResponse,

    /**
     * The GetSystems500Response model constructor.
     * @property {module:model/GetSystems500Response}
     */
    GetSystems500Response,

    /**
     * The GetSystemsResponse model constructor.
     * @property {module:model/GetSystemsResponse}
     */
    GetSystemsResponse,

    /**
     * The InternalServerError model constructor.
     * @property {module:model/InternalServerError}
     */
    InternalServerError,

    /**
     * The LoadControlSettings model constructor.
     * @property {module:model/LoadControlSettings}
     */
    LoadControlSettings,

    /**
     * The LoadControlSettingsLoadControlDataInner model constructor.
     * @property {module:model/LoadControlSettingsLoadControlDataInner}
     */
    LoadControlSettingsLoadControlDataInner,

    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta,

    /**
     * The MethodNotAllowedError model constructor.
     * @property {module:model/MethodNotAllowedError}
     */
    MethodNotAllowedError,

    /**
     * The NotImplementedError model constructor.
     * @property {module:model/NotImplementedError}
     */
    NotImplementedError,

    /**
     * The RetrieveSystemIdResponse model constructor.
     * @property {module:model/RetrieveSystemIdResponse}
     */
    RetrieveSystemIdResponse,

    /**
     * The SearchSystemsRequest model constructor.
     * @property {module:model/SearchSystemsRequest}
     */
    SearchSystemsRequest,

    /**
     * The SearchSystemsRequestSystem model constructor.
     * @property {module:model/SearchSystemsRequestSystem}
     */
    SearchSystemsRequestSystem,

    /**
     * The SearchSystemsResponse model constructor.
     * @property {module:model/SearchSystemsResponse}
     */
    SearchSystemsResponse,

    /**
     * The StormGuardSettings model constructor.
     * @property {module:model/StormGuardSettings}
     */
    StormGuardSettings,

    /**
     * The StreamSystemLiveData401Response model constructor.
     * @property {module:model/StreamSystemLiveData401Response}
     */
    StreamSystemLiveData401Response,

    /**
     * The StreamSystemLiveData401ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData401ResponseError}
     */
    StreamSystemLiveData401ResponseError,

    /**
     * The StreamSystemLiveData403Response model constructor.
     * @property {module:model/StreamSystemLiveData403Response}
     */
    StreamSystemLiveData403Response,

    /**
     * The StreamSystemLiveData403ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData403ResponseError}
     */
    StreamSystemLiveData403ResponseError,

    /**
     * The StreamSystemLiveData429Response model constructor.
     * @property {module:model/StreamSystemLiveData429Response}
     */
    StreamSystemLiveData429Response,

    /**
     * The StreamSystemLiveData429ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData429ResponseError}
     */
    StreamSystemLiveData429ResponseError,

    /**
     * The StreamSystemLiveData461Response model constructor.
     * @property {module:model/StreamSystemLiveData461Response}
     */
    StreamSystemLiveData461Response,

    /**
     * The StreamSystemLiveData461ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData461ResponseError}
     */
    StreamSystemLiveData461ResponseError,

    /**
     * The StreamSystemLiveData462Response model constructor.
     * @property {module:model/StreamSystemLiveData462Response}
     */
    StreamSystemLiveData462Response,

    /**
     * The StreamSystemLiveData462ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData462ResponseError}
     */
    StreamSystemLiveData462ResponseError,

    /**
     * The StreamSystemLiveData463Response model constructor.
     * @property {module:model/StreamSystemLiveData463Response}
     */
    StreamSystemLiveData463Response,

    /**
     * The StreamSystemLiveData463ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData463ResponseError}
     */
    StreamSystemLiveData463ResponseError,

    /**
     * The StreamSystemLiveData466Response model constructor.
     * @property {module:model/StreamSystemLiveData466Response}
     */
    StreamSystemLiveData466Response,

    /**
     * The StreamSystemLiveData466ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData466ResponseError}
     */
    StreamSystemLiveData466ResponseError,

    /**
     * The StreamSystemLiveData468Response model constructor.
     * @property {module:model/StreamSystemLiveData468Response}
     */
    StreamSystemLiveData468Response,

    /**
     * The StreamSystemLiveData468ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData468ResponseError}
     */
    StreamSystemLiveData468ResponseError,

    /**
     * The StreamSystemLiveData472Response model constructor.
     * @property {module:model/StreamSystemLiveData472Response}
     */
    StreamSystemLiveData472Response,

    /**
     * The StreamSystemLiveData472ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData472ResponseError}
     */
    StreamSystemLiveData472ResponseError,

    /**
     * The StreamSystemLiveData550Response model constructor.
     * @property {module:model/StreamSystemLiveData550Response}
     */
    StreamSystemLiveData550Response,

    /**
     * The StreamSystemLiveData550ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData550ResponseError}
     */
    StreamSystemLiveData550ResponseError,

    /**
     * The StreamSystemLiveData551Response model constructor.
     * @property {module:model/StreamSystemLiveData551Response}
     */
    StreamSystemLiveData551Response,

    /**
     * The StreamSystemLiveData551ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData551ResponseError}
     */
    StreamSystemLiveData551ResponseError,

    /**
     * The StreamSystemLiveData552Response model constructor.
     * @property {module:model/StreamSystemLiveData552Response}
     */
    StreamSystemLiveData552Response,

    /**
     * The StreamSystemLiveData552ResponseError model constructor.
     * @property {module:model/StreamSystemLiveData552ResponseError}
     */
    StreamSystemLiveData552ResponseError,

    /**
     * The StreamSystemLiveDataResponse model constructor.
     * @property {module:model/StreamSystemLiveDataResponse}
     */
    StreamSystemLiveDataResponse,

    /**
     * The StreamSystemLiveDataResponseData model constructor.
     * @property {module:model/StreamSystemLiveDataResponseData}
     */
    StreamSystemLiveDataResponseData,

    /**
     * The StreamSystemLiveDataResponseDataData model constructor.
     * @property {module:model/StreamSystemLiveDataResponseDataData}
     */
    StreamSystemLiveDataResponseDataData,

    /**
     * The System model constructor.
     * @property {module:model/System}
     */
    System,

    /**
     * The SystemAddress model constructor.
     * @property {module:model/SystemAddress}
     */
    SystemAddress,

    /**
     * The SystemAttachmentTypeEnum model constructor.
     * @property {module:model/SystemAttachmentTypeEnum}
     */
    SystemAttachmentTypeEnum,

    /**
     * The SystemConnectionTypeEnum model constructor.
     * @property {module:model/SystemConnectionTypeEnum}
     */
    SystemConnectionTypeEnum,

    /**
     * The SystemEnergyLifetimeProductionEnum model constructor.
     * @property {module:model/SystemEnergyLifetimeProductionEnum}
     */
    SystemEnergyLifetimeProductionEnum,

    /**
     * The SystemPublicNameEnum model constructor.
     * @property {module:model/SystemPublicNameEnum}
     */
    SystemPublicNameEnum,

    /**
     * The SystemSortByEnum model constructor.
     * @property {module:model/SystemSortByEnum}
     */
    SystemSortByEnum,

    /**
     * The SystemStatusEnum model constructor.
     * @property {module:model/SystemStatusEnum}
     */
    SystemStatusEnum,

    /**
     * The TelemetryGranularityEnum model constructor.
     * @property {module:model/TelemetryGranularityEnum}
     */
    TelemetryGranularityEnum,

    /**
     * The TooManyRequestsError model constructor.
     * @property {module:model/TooManyRequestsError}
     */
    TooManyRequestsError,

    /**
     * The UpdateSystemBatterySettingsRequest model constructor.
     * @property {module:model/UpdateSystemBatterySettingsRequest}
     */
    UpdateSystemBatterySettingsRequest,

    /**
     * The UpdateSystemLoadControlSettingsRequest model constructor.
     * @property {module:model/UpdateSystemLoadControlSettingsRequest}
     */
    UpdateSystemLoadControlSettingsRequest,

    /**
     * The UpdateSystemStormGuardSettingsRequest model constructor.
     * @property {module:model/UpdateSystemStormGuardSettingsRequest}
     */
    UpdateSystemStormGuardSettingsRequest,

    /**
    * The DeviceLevelProductionMonitoringApi service constructor.
    * @property {module:api/DeviceLevelProductionMonitoringApi}
    */
    DeviceLevelProductionMonitoringApi,

    /**
    * The SiteLevelConsumptionMonitoringApi service constructor.
    * @property {module:api/SiteLevelConsumptionMonitoringApi}
    */
    SiteLevelConsumptionMonitoringApi,

    /**
    * The SiteLevelProductionMonitoringApi service constructor.
    * @property {module:api/SiteLevelProductionMonitoringApi}
    */
    SiteLevelProductionMonitoringApi,

    /**
    * The StreamingAPIsApi service constructor.
    * @property {module:api/StreamingAPIsApi}
    */
    StreamingAPIsApi,

    /**
    * The SystemConfigurationsApi service constructor.
    * @property {module:api/SystemConfigurationsApi}
    */
    SystemConfigurationsApi,

    /**
    * The SystemDetailsApi service constructor.
    * @property {module:api/SystemDetailsApi}
    */
    SystemDetailsApi
};
