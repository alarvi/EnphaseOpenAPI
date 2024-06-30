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


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param email Email address of the user. Must be unique within Enlighten. Required.
 * @param firstName User's first name. Required.
 * @param lastName User's last name. Required.
 * @param enlightenEmails Whether the user receives automated emails from Enlighten. Default false.
 * @param enlightenView Which view of Enlighten the user has. Options 'my' for MyEnlighten, 'manager' for Enlighten Manager. Default 'my'. Users who do not belong to companies should be set to 'my'. You must have an agreement with Enphase Energy to set a user to 'manager'. Company ID is required when enlighten_view is 'manager'.
 * @param phone Telephone number of the user. Optional.
 * @param companyId Enlighten-generated ID of the company to which the user belongs, if any.
 */


data class CreateUserRequest (

    /* Email address of the user. Must be unique within Enlighten. Required. */
    @Json(name = "email")
    val email: kotlin.String,

    /* User's first name. Required. */
    @Json(name = "first_name")
    val firstName: kotlin.String,

    /* User's last name. Required. */
    @Json(name = "last_name")
    val lastName: kotlin.String,

    /* Whether the user receives automated emails from Enlighten. Default false. */
    @Json(name = "enlighten_emails")
    val enlightenEmails: kotlin.Boolean? = null,

    /* Which view of Enlighten the user has. Options 'my' for MyEnlighten, 'manager' for Enlighten Manager. Default 'my'. Users who do not belong to companies should be set to 'my'. You must have an agreement with Enphase Energy to set a user to 'manager'. Company ID is required when enlighten_view is 'manager'. */
    @Json(name = "enlighten_view")
    val enlightenView: kotlin.String? = null,

    /* Telephone number of the user. Optional. */
    @Json(name = "phone")
    val phone: kotlin.String? = null,

    /* Enlighten-generated ID of the company to which the user belongs, if any. */
    @Json(name = "company_id")
    val companyId: kotlin.Int? = null

)
