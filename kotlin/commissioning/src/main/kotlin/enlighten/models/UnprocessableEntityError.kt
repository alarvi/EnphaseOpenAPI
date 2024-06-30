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

package enlighten.models


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param reason 
 * @param message 
 * @param errorMessages 
 * @param start 
 * @param end 
 * @param startAt 
 * @param endAt 
 * @param firstInterval 
 * @param lastInterval 
 */


data class UnprocessableEntityError (

    @Json(name = "reason")
    val reason: kotlin.String? = null,

    @Json(name = "message")
    val message: kotlin.String? = null,

    @Json(name = "errorMessages")
    val errorMessages: kotlin.collections.List<kotlin.String>? = null,

    @Json(name = "start")
    val start: java.time.LocalDate? = null,

    @Json(name = "end")
    val end: java.time.LocalDate? = null,

    @Json(name = "start_at")
    val startAt: kotlin.Int? = null,

    @Json(name = "end_at")
    val endAt: kotlin.Int? = null,

    @Json(name = "first_interval")
    val firstInterval: kotlin.Int? = null,

    @Json(name = "last_interval")
    val lastInterval: kotlin.Int? = null

)
