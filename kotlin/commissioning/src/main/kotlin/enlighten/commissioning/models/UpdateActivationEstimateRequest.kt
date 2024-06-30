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
 * @param degradeFactor Annual production degradation factor for the system, from year 0 of the system's life. Must be 0.0% or higher.
 * @param monthEstimates Estimated monthly production of the system, in kWh. A value for each month must be provided, and must be greater than 0. Send an empty array if you need to remove monthly estimates.
 */


data class UpdateActivationEstimateRequest (

    /* Annual production degradation factor for the system, from year 0 of the system's life. Must be 0.0% or higher. */
    @Json(name = "degrade_factor")
    val degradeFactor: kotlin.String,

    /* Estimated monthly production of the system, in kWh. A value for each month must be provided, and must be greater than 0. Send an empty array if you need to remove monthly estimates. */
    @Json(name = "month_estimates")
    val monthEstimates: kotlin.collections.List<kotlin.String>

)
