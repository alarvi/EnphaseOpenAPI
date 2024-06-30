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

import enlighten.commissioning.models.GetPartnerActivationsResponseSystemsInner

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param systems Zero or more activations.
 * @param next If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 10. The maximum page size is 1000.
 */


data class GetPartnerActivationsResponse (

    /* Zero or more activations. */
    @Json(name = "systems")
    val systems: kotlin.collections.List<GetPartnerActivationsResponseSystemsInner>? = null,

    /* If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 10. The maximum page size is 1000. */
    @Json(name = "next")
    val next: kotlin.String? = null

)

