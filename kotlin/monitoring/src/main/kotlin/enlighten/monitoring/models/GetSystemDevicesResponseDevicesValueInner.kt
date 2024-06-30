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

import enlighten.monitoring.models.GetSystemDevicesResponseDevicesValueInnerCellularModem

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param id 
 * @param lastReportAt 
 * @param name 
 * @param serialNumber 
 * @param partNumber 
 * @param emuSwVersion 
 * @param sku 
 * @param model 
 * @param status 
 * @param active 
 * @param state 
 * @param configType 
 * @param cellularModem 
 */


data class GetSystemDevicesResponseDevicesValueInner (

    @Json(name = "id")
    val id: kotlin.Int? = null,

    @Json(name = "last_report_at")
    val lastReportAt: kotlin.Long? = null,

    @Json(name = "name")
    val name: kotlin.String? = null,

    @Json(name = "serial_number")
    val serialNumber: kotlin.String? = null,

    @Json(name = "part_number")
    val partNumber: kotlin.String? = null,

    @Json(name = "emu_sw_version")
    val emuSwVersion: kotlin.String? = null,

    @Json(name = "sku")
    val sku: kotlin.String? = null,

    @Json(name = "model")
    val model: kotlin.String? = null,

    @Json(name = "status")
    val status: kotlin.String? = null,

    @Json(name = "active")
    val active: kotlin.Boolean? = null,

    @Json(name = "state")
    val state: kotlin.String? = null,

    @Json(name = "config_type")
    val configType: kotlin.String? = null,

    @Json(name = "cellular_modem")
    val cellularModem: GetSystemDevicesResponseDevicesValueInnerCellularModem? = null

)
