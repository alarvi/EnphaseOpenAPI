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
 * @param id Period ID. e.g='period_1'.
 * @param start Period start. e.g=0.
 * @param rate Period rate. e.g=0.0.
 * @param error Dynamic fields will appear.
 */


data class TariffSeasonsInnerDaysInnerPeriodsInner (

    /* Period ID. e.g='period_1'. */
    @Json(name = "id")
    val id: kotlin.String? = null,

    /* Period start. e.g=0. */
    @Json(name = "start")
    val start: kotlin.String? = null,

    /* Period rate. e.g=0.0. */
    @Json(name = "rate")
    val rate: kotlin.String? = null,

    /* Dynamic fields will appear. */
    @Json(name = "error")
    val error: kotlin.collections.Map<kotlin.String, kotlin.Any>? = null

)
