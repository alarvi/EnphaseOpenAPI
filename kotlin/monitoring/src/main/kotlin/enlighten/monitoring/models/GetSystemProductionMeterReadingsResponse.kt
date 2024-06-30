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

import enlighten.monitoring.models.GetSystemProductionMeterReadingsResponseMeterReadingsInner
import enlighten.monitoring.models.Meta

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param systemId System ID.
 * @param meterReadings Production meter readings.
 * @param meta 
 */


data class GetSystemProductionMeterReadingsResponse (

    /* System ID. */
    @Json(name = "system_id")
    val systemId: kotlin.Int? = null,

    /* Production meter readings. */
    @Json(name = "meter_readings")
    val meterReadings: kotlin.collections.List<GetSystemProductionMeterReadingsResponseMeterReadingsInner>? = null,

    @Json(name = "meta")
    val meta: Meta? = null

)
