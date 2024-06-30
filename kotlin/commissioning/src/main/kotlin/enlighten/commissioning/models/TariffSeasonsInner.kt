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

import enlighten.commissioning.models.TariffSeasonsInnerDaysInner

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param id ToU year ID. e.g='all_year_long'.
 * @param start Start of season. e.g='1/1'.
 * @param days ToU seasons.
 * @param enableChargeFromGrid 
 * @param enableDischargeToGrid 
 */


data class TariffSeasonsInner (

    /* ToU year ID. e.g='all_year_long'. */
    @Json(name = "id")
    val id: kotlin.String? = null,

    /* Start of season. e.g='1/1'. */
    @Json(name = "start")
    val start: kotlin.String? = null,

    /* ToU seasons. */
    @Json(name = "days")
    val days: kotlin.collections.List<TariffSeasonsInnerDaysInner>? = null,

    @Json(name = "enable_charge_from_grid")
    val enableChargeFromGrid: kotlin.Boolean? = null,

    @Json(name = "enable_discharge_to_grid")
    val enableDischargeToGrid: kotlin.Boolean? = null

)
