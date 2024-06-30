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

import enlighten.commissioning.models.GetCompanyUsersResponseUsersInner
import enlighten.commissioning.models.GetPvManufacturerModelsResponsePvManufacturers

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param pvManufacturers 
 * @param pvModels A list of PV models for this manufacturer. Each element in the list is an array including the model's primary key and name. The list may be empty.
 */


data class GetPvManufacturerModelsResponse (

    @Json(name = "pv_manufacturers")
    val pvManufacturers: GetPvManufacturerModelsResponsePvManufacturers? = null,

    /* A list of PV models for this manufacturer. Each element in the list is an array including the model's primary key and name. The list may be empty. */
    @Json(name = "pv_models")
    val pvModels: kotlin.collections.List<kotlin.collections.List<GetCompanyUsersResponseUsersInner>>? = null

)
