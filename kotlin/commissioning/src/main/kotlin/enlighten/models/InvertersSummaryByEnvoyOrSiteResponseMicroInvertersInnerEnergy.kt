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
 * Returns the lifetime energy of the Microinverter. If the system has never produced energy, the energy value would be 0.
 *
 * @param `value` 
 * @param units 
 * @param precision 
 */


data class InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy (

    @Json(name = "value")
    val `value`: kotlin.Int,

    @Json(name = "units")
    val units: InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy.Units,

    @Json(name = "precision")
    val precision: kotlin.Int

) {

    /**
     * 
     *
     * Values: Wh,kJ
     */
    @JsonClass(generateAdapter = false)
    enum class Units(val value: kotlin.String) {
        @Json(name = "Wh") Wh("Wh"),
        @Json(name = "kJ") kJ("kJ");
    }
}
