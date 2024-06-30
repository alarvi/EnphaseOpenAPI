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

import enlighten.commissioning.models.CreateUserRequest
import enlighten.commissioning.models.ServerError
import enlighten.commissioning.models.TooManyRequestsError
import enlighten.commissioning.models.UnprocessableEntityError
import enlighten.commissioning.models.User

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

class HomeOwnerApi(basePath: kotlin.String = defaultBasePath, client: OkHttpClient = ApiClient.defaultClient) : ApiClient(basePath, client) {
    companion object {
        @JvmStatic
        val defaultBasePath: String by lazy {
            System.getProperties().getProperty(ApiClient.baseUrlKey, "https://api.enphaseenergy.com/api/v4")
        }
    }

    /**
     * Create Home owner
     * Create a home owner user. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in &#39;application/x-www-form-urlencoded&#39; format, in this endpoint, key will be &#39;user&#39; and value will be a JSON dictionary of user fields. Using this API to create both homeowner as well as a company user. If you want to create company user, then pass company_id inside the user object.
     * @param params  (optional)
     * @return User
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun createUser(params: CreateUserRequest? = null) : User {
        val localVarResponse = createUserWithHttpInfo(params = params)

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as User
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
     * Create Home owner
     * Create a home owner user. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in &#39;application/x-www-form-urlencoded&#39; format, in this endpoint, key will be &#39;user&#39; and value will be a JSON dictionary of user fields. Using this API to create both homeowner as well as a company user. If you want to create company user, then pass company_id inside the user object.
     * @param params  (optional)
     * @return ApiResponse<User?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    fun createUserWithHttpInfo(params: CreateUserRequest?) : ApiResponse<User?> {
        val localVariableConfig = createUserRequestConfig(params = params)

        return request<CreateUserRequest, User>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation createUser
     *
     * @param params  (optional)
     * @return RequestConfig
     */
    fun createUserRequestConfig(params: CreateUserRequest?) : RequestConfig<CreateUserRequest> {
        val localVariableBody = params
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        localVariableHeaders["Content-Type"] = "application/json"
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.POST,
            path = "/users",
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }


    private fun encodeURIComponent(uriComponent: kotlin.String): kotlin.String =
        HttpUrl.Builder().scheme("http").host("localhost").addPathSegment(uriComponent).build().encodedPathSegments[0]
}