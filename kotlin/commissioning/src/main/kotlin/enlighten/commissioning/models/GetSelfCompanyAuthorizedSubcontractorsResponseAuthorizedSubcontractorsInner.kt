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

import enlighten.commissioning.models.CompanyRoleEnum

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param companyId Enlighten ID of the company.
 * @param companyName Name of the company.
 * @param location Company location.
 * @param roles 
 * @param uri URI to the show() method for the company. System-generated.
 * @param status Whether the subcontractor is enabled or disabled.
 */


data class GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner (

    /* Enlighten ID of the company. */
    @Json(name = "company_id")
    val companyId: kotlin.Int? = null,

    /* Name of the company. */
    @Json(name = "company_name")
    val companyName: kotlin.String? = null,

    /* Company location. */
    @Json(name = "location")
    val location: kotlin.String? = null,

    @Json(name = "roles")
    val roles: kotlin.collections.List<CompanyRoleEnum>? = null,

    /* URI to the show() method for the company. System-generated. */
    @Json(name = "uri")
    val uri: kotlin.String? = null,

    /* Whether the subcontractor is enabled or disabled. */
    @Json(name = "status")
    val status: kotlin.String? = null

)
