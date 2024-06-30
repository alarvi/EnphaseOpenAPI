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

import enlighten.commissioning.models.ActivationOwnerCompany
import enlighten.commissioning.models.UserRoleEnum

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. If the query parameter 'expand=owner' passed in the request owner detail will appear in the response.
 *
 * @param firstName 
 * @param lastName 
 * @param email 
 * @param phone 
 * @param active Whether the user is allowed to log in to Enlighten. Values true, false. Default true.
 * @param userId 
 * @param userRoles What type of user this is in Enlighten. For self installer user user_roles will be ['self_installer']. For other users user_roles will be empty.
 * @param enlightenEmails 
 * @param enlightenView 
 * @param uri 
 * @param updatedAt 
 * @param company 
 */


data class ActivationOwner (

    @Json(name = "first_name")
    val firstName: kotlin.String? = null,

    @Json(name = "last_name")
    val lastName: kotlin.String? = null,

    @Json(name = "email")
    val email: kotlin.String? = null,

    @Json(name = "phone")
    val phone: kotlin.String? = null,

    /* Whether the user is allowed to log in to Enlighten. Values true, false. Default true. */
    @Json(name = "active")
    val active: kotlin.Boolean? = null,

    @Json(name = "user_id")
    val userId: kotlin.Int? = null,

    /* What type of user this is in Enlighten. For self installer user user_roles will be ['self_installer']. For other users user_roles will be empty. */
    @Json(name = "user_roles")
    val userRoles: kotlin.collections.List<UserRoleEnum>? = null,

    @Json(name = "enlighten_emails")
    val enlightenEmails: kotlin.Boolean? = null,

    @Json(name = "enlighten_view")
    val enlightenView: kotlin.String? = null,

    @Json(name = "uri")
    val uri: kotlin.String? = null,

    @Json(name = "updated_at")
    val updatedAt: kotlin.Long? = null,

    @Json(name = "company")
    val company: ActivationOwnerCompany? = null

)
