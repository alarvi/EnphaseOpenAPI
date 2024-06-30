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
 * @param mode 
 * @param totalMicros Total number of microinverters in the system.
 * @param energyProducingMicros Total number of microinverters producing energy in the system.
 */


data class GetActivationOpsProductionModeResponse (

    @Json(name = "mode")
    val mode: kotlin.String? = null,

    /* Total number of microinverters in the system. */
    @Json(name = "total_micros")
    val totalMicros: kotlin.Int? = null,

    /* Total number of microinverters producing energy in the system. */
    @Json(name = "energy_producing_micros")
    val energyProducingMicros: kotlin.Int? = null

)

