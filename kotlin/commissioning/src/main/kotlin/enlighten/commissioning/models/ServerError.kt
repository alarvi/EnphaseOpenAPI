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

package enlighten.commissioning.models


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param reason 
 * @param message 
 */


data class ServerError (

    @Json(name = "reason")
    val reason: kotlin.String? = null,

    @Json(name = "message")
    val message: kotlin.collections.List<kotlin.String>? = null

)

