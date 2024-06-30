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

package enlighten.monitoring.models


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param percent Battery soc percentage.
 */


data class BatteryDeviceTelemetryIntervalsInnerSoc (

    /* Battery soc percentage. */
    @Json(name = "percent")
    val percent: kotlin.Int? = null

)

