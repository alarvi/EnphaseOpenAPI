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

import enlighten.monitoring.models.SystemDetails

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param total Total number of systems available.
 * @param currentPage Current page of the systems result. Default is 1.
 * @param propertySize Max number of records from API per page is 100. Default is 10.
 * @param count Total number of systems actually returned for the current page.
 * @param items Named key of the list data. In this endpoint, it is systems.
 * @param systems List of filtered systems.
 */


data class SearchSystemsResponse (

    /* Total number of systems available. */
    @Json(name = "total")
    val total: kotlin.Int? = null,

    /* Current page of the systems result. Default is 1. */
    @Json(name = "current_page")
    val currentPage: kotlin.Int? = null,

    /* Max number of records from API per page is 100. Default is 10. */
    @Json(name = "size")
    val propertySize: kotlin.Int? = null,

    /* Total number of systems actually returned for the current page. */
    @Json(name = "count")
    val count: kotlin.Int? = null,

    /* Named key of the list data. In this endpoint, it is systems. */
    @Json(name = "items")
    val items: kotlin.String? = null,

    /* List of filtered systems. */
    @Json(name = "systems")
    val systems: kotlin.collections.List<SystemDetails>? = null

)
