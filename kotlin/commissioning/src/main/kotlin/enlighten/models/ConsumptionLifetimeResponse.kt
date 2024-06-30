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

import enlighten.models.Meta

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param startDate When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
 * @param consumption An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.
 * @param meta 
 * @param systemId The identifier of the system.
 */


data class ConsumptionLifetimeResponse (

    /* When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response. */
    @Json(name = "start_date")
    val startDate: java.time.LocalDate,

    /* An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. */
    @Json(name = "consumption")
    val consumption: kotlin.collections.List<kotlin.Int>,

    @Json(name = "meta")
    val meta: Meta,

    /* The identifier of the system. */
    @Json(name = "system_id")
    val systemId: kotlin.Int? = null

)
