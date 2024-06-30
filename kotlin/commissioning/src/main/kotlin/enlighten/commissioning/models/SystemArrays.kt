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

import enlighten.commissioning.models.SystemArray
import enlighten.commissioning.models.SystemArraysInventoryDetailsInner
import enlighten.commissioning.models.SystemArraysLayersInner

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param systemId System ID.
 * @param createdAt System created Epoch time.
 * @param updatedAt System updated Epoch time.
 * @param angle Angle of the system.
 * @param arrays 
 * @param inventory List of active inverter serial numbers.
 * @param inventoryDetails 
 * @param layers 
 */


data class SystemArrays (

    /* System ID. */
    @Json(name = "system_id")
    val systemId: kotlin.Int? = null,

    /* System created Epoch time. */
    @Json(name = "created_at")
    val createdAt: kotlin.Long? = null,

    /* System updated Epoch time. */
    @Json(name = "updated_at")
    val updatedAt: kotlin.Long? = null,

    /* Angle of the system. */
    @Json(name = "angle")
    val angle: kotlin.Int? = null,

    @Json(name = "arrays")
    val arrays: kotlin.collections.List<SystemArray>? = null,

    /* List of active inverter serial numbers. */
    @Json(name = "inventory")
    val inventory: kotlin.collections.List<kotlin.String>? = null,

    @Json(name = "inventory_details")
    val inventoryDetails: kotlin.collections.List<SystemArraysInventoryDetailsInner>? = null,

    @Json(name = "layers")
    val layers: kotlin.collections.List<SystemArraysLayersInner>? = null

)

