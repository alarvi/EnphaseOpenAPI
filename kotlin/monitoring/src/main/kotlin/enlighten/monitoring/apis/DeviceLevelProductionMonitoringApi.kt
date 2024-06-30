/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package enlighten.monitoring.apis

import java.io.IOException
import okhttp3.OkHttpClient
import okhttp3.HttpUrl

import enlighten.monitoring.models.BatteryDeviceTelemetry
import enlighten.monitoring.models.ClientError
import enlighten.monitoring.models.GetSystemMicroDeviceTelemetryResponse
import enlighten.monitoring.models.GetSystems500Response
import enlighten.monitoring.models.MethodNotAllowedError
import enlighten.monitoring.models.NotImplementedError
import enlighten.monitoring.models.TelemetryGranularityEnum
import enlighten.monitoring.models.TooManyRequestsError

import com.squareup.moshi.Json

import enlighten.monitoring.infrastructure.ApiClient
import enlighten.monitoring.infrastructure.ApiResponse
import enlighten.monitoring.infrastructure.ClientException
import enlighten.monitoring.infrastructure.ClientError
import enlighten.monitoring.infrastructure.ServerException
import enlighten.monitoring.infrastructure.ServerError
import enlighten.monitoring.infrastructure.MultiValueMap
import enlighten.monitoring.infrastructure.PartConfig
import enlighten.monitoring.infrastructure.RequestConfig
import enlighten.monitoring.infrastructure.RequestMethod
import enlighten.monitoring.infrastructure.ResponseType
import enlighten.monitoring.infrastructure.Success
import enlighten.monitoring.infrastructure.toMultiValue

class DeviceLevelProductionMonitoringApi(basePath: kotlin.String = defaultBasePath, client: OkHttpClient = ApiClient.defaultClient) : ApiClient(basePath, client) {
    companion object {
        @JvmStatic
        val defaultBasePath: String by lazy {
            System.getProperties().getProperty(ApiClient.baseUrlKey, "https://api.enphaseenergy.com/api/v4")
        }
    }

    /**
     * Retrieves telemetry for single ACB
     * Retrieves telemetry for single ACB. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the acb.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return BatteryDeviceTelemetry
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun getSystemAcbDeviceTelemetry(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long? = null, granularity: TelemetryGranularityEnum? = null) : BatteryDeviceTelemetry {
        val localVarResponse = getSystemAcbDeviceTelemetryWithHttpInfo(systemId = systemId, serialNo = serialNo, startAt = startAt, granularity = granularity)

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as BatteryDeviceTelemetry
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()} ${localVarError.body}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Retrieves telemetry for single ACB
     * Retrieves telemetry for single ACB. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the acb.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return ApiResponse<BatteryDeviceTelemetry?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    fun getSystemAcbDeviceTelemetryWithHttpInfo(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long?, granularity: TelemetryGranularityEnum?) : ApiResponse<BatteryDeviceTelemetry?> {
        val localVariableConfig = getSystemAcbDeviceTelemetryRequestConfig(systemId = systemId, serialNo = serialNo, startAt = startAt, granularity = granularity)

        return request<Unit, BatteryDeviceTelemetry>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation getSystemAcbDeviceTelemetry
     *
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the acb.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return RequestConfig
     */
    fun getSystemAcbDeviceTelemetryRequestConfig(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long?, granularity: TelemetryGranularityEnum?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, kotlin.collections.List<kotlin.String>>()
            .apply {
                if (startAt != null) {
                    put("start_at", listOf(startAt.toString()))
                }
                if (granularity != null) {
                    put("granularity", listOf(granularity.toString()))
                }
            }
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/systems/{system_id}/devices/acbs/{serial_no}/telemetry".replace("{"+"system_id"+"}", encodeURIComponent(systemId.toString())).replace("{"+"serial_no"+"}", encodeURIComponent(serialNo.toString())),
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }

    /**
     * Retrieves telemetry for single Encharge
     * Retrieves telemetry for single Encharge. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the Encharge.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return BatteryDeviceTelemetry
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun getSystemEnchargeDeviceTelemetry(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long? = null, granularity: TelemetryGranularityEnum? = null) : BatteryDeviceTelemetry {
        val localVarResponse = getSystemEnchargeDeviceTelemetryWithHttpInfo(systemId = systemId, serialNo = serialNo, startAt = startAt, granularity = granularity)

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as BatteryDeviceTelemetry
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()} ${localVarError.body}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Retrieves telemetry for single Encharge
     * Retrieves telemetry for single Encharge. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the Encharge.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return ApiResponse<BatteryDeviceTelemetry?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    fun getSystemEnchargeDeviceTelemetryWithHttpInfo(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long?, granularity: TelemetryGranularityEnum?) : ApiResponse<BatteryDeviceTelemetry?> {
        val localVariableConfig = getSystemEnchargeDeviceTelemetryRequestConfig(systemId = systemId, serialNo = serialNo, startAt = startAt, granularity = granularity)

        return request<Unit, BatteryDeviceTelemetry>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation getSystemEnchargeDeviceTelemetry
     *
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the Encharge.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return RequestConfig
     */
    fun getSystemEnchargeDeviceTelemetryRequestConfig(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long?, granularity: TelemetryGranularityEnum?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, kotlin.collections.List<kotlin.String>>()
            .apply {
                if (startAt != null) {
                    put("start_at", listOf(startAt.toString()))
                }
                if (granularity != null) {
                    put("granularity", listOf(granularity.toString()))
                }
            }
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/systems/{system_id}/devices/encharges/{serial_no}/telemetry".replace("{"+"system_id"+"}", encodeURIComponent(systemId.toString())).replace("{"+"serial_no"+"}", encodeURIComponent(serialNo.toString())),
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }

    /**
     * Retrieves telemetry for single micro/pcu
     * Retrieves telemetry for single micro/pcu. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the individual solar Microinverter.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return GetSystemMicroDeviceTelemetryResponse
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun getSystemMicroDeviceTelemetry(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long? = null, granularity: TelemetryGranularityEnum? = null) : GetSystemMicroDeviceTelemetryResponse {
        val localVarResponse = getSystemMicroDeviceTelemetryWithHttpInfo(systemId = systemId, serialNo = serialNo, startAt = startAt, granularity = granularity)

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as GetSystemMicroDeviceTelemetryResponse
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()} ${localVarError.body}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Retrieves telemetry for single micro/pcu
     * Retrieves telemetry for single micro/pcu. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the individual solar Microinverter.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return ApiResponse<GetSystemMicroDeviceTelemetryResponse?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    fun getSystemMicroDeviceTelemetryWithHttpInfo(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long?, granularity: TelemetryGranularityEnum?) : ApiResponse<GetSystemMicroDeviceTelemetryResponse?> {
        val localVariableConfig = getSystemMicroDeviceTelemetryRequestConfig(systemId = systemId, serialNo = serialNo, startAt = startAt, granularity = granularity)

        return request<Unit, GetSystemMicroDeviceTelemetryResponse>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation getSystemMicroDeviceTelemetry
     *
     * @param systemId Unique numeric ID of the system.
     * @param serialNo Serial number of the individual solar Microinverter.
     * @param startAt Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
     * @param granularity Granularity of the telemetry data. Default is &#39;day&#39;. (optional)
     * @return RequestConfig
     */
    fun getSystemMicroDeviceTelemetryRequestConfig(systemId: kotlin.Int, serialNo: kotlin.String, startAt: kotlin.Long?, granularity: TelemetryGranularityEnum?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, kotlin.collections.List<kotlin.String>>()
            .apply {
                if (startAt != null) {
                    put("start_at", listOf(startAt.toString()))
                }
                if (granularity != null) {
                    put("granularity", listOf(granularity.toString()))
                }
            }
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/systems/{system_id}/devices/micros/{serial_no}/telemetry".replace("{"+"system_id"+"}", encodeURIComponent(systemId.toString())).replace("{"+"serial_no"+"}", encodeURIComponent(serialNo.toString())),
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }


    private fun encodeURIComponent(uriComponent: kotlin.String): kotlin.String =
        HttpUrl.Builder().scheme("http").host("localhost").addPathSegment(uriComponent).build().encodedPathSegments[0]
}
