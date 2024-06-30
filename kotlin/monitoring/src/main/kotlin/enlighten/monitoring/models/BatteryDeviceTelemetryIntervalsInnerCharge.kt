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
 * @param enwh Energy into the battery during the interval.
 */


data class BatteryDeviceTelemetryIntervalsInnerCharge (

    /* Energy into the battery during the interval. */
    @Json(name = "enwh")
    val enwh: kotlin.Int? = null

)
