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

package enlighten.commissioning.apis

import java.io.IOException
import okhttp3.OkHttpClient
import okhttp3.HttpUrl

import enlighten.commissioning.models.GetGridProfilesResponse
import enlighten.commissioning.models.ServerError
import enlighten.commissioning.models.TooManyRequestsError

import com.squareup.moshi.Json

import enlighten.commissioning.infrastructure.ApiClient
import enlighten.commissioning.infrastructure.ApiResponse
import enlighten.commissioning.infrastructure.ClientException
import enlighten.commissioning.infrastructure.ClientError
import enlighten.commissioning.infrastructure.ServerException
import enlighten.commissioning.infrastructure.ServerError
import enlighten.commissioning.infrastructure.MultiValueMap
import enlighten.commissioning.infrastructure.PartConfig
import enlighten.commissioning.infrastructure.RequestConfig
import enlighten.commissioning.infrastructure.RequestMethod
import enlighten.commissioning.infrastructure.ResponseType
import enlighten.commissioning.infrastructure.Success
import enlighten.commissioning.infrastructure.toMultiValue

class GridProfilesApi(basePath: kotlin.String = defaultBasePath, client: OkHttpClient = ApiClient.defaultClient) : ApiClient(basePath, client) {
    companion object {
        @JvmStatic
        val defaultBasePath: String by lazy {
            System.getProperties().getProperty(ApiClient.baseUrlKey, "https://api.enphaseenergy.com/api/v4")
        }
    }

    /**
     * Lists the available profiles
     * Lists the available profiles.
     * @return GetGridProfilesResponse
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun getGridProfiles() : GetGridProfilesResponse {
        val localVarResponse = getGridProfilesWithHttpInfo()

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as GetGridProfilesResponse
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
     * Lists the available profiles
     * Lists the available profiles.
     * @return ApiResponse<GetGridProfilesResponse?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    fun getGridProfilesWithHttpInfo() : ApiResponse<GetGridProfilesResponse?> {
        val localVariableConfig = getGridProfilesRequestConfig()

        return request<Unit, GetGridProfilesResponse>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation getGridProfiles
     *
     * @return RequestConfig
     */
    fun getGridProfilesRequestConfig() : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/partner/grid_profiles",
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }


    private fun encodeURIComponent(uriComponent: kotlin.String): kotlin.String =
        HttpUrl.Builder().scheme("http").host("localhost").addPathSegment(uriComponent).build().encodedPathSegments[0]
}