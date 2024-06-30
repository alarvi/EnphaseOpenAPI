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

import enlighten.commissioning.models.ArrayParams

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param angle Angle of the system.
 * @param arrays 
 */


data class UpdateSystemArraysRequest (

    /* Angle of the system. */
    @Json(name = "angle")
    val angle: kotlin.Int,

    @Json(name = "arrays")
    val arrays: kotlin.collections.List<ArrayParams>

)

