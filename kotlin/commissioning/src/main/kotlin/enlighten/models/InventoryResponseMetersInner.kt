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
 * 
 *
 * @param sn 
 * @param manufacturer 
 * @param model 
 * @param status 
 * @param state 
 */


data class InventoryResponseMetersInner (

    @Json(name = "sn")
    val sn: kotlin.String,

    @Json(name = "manufacturer")
    val manufacturer: kotlin.String,

    @Json(name = "model")
    val model: kotlin.String,

    @Json(name = "status")
    val status: kotlin.String? = null,

    @Json(name = "state")
    val state: kotlin.String? = null

)
