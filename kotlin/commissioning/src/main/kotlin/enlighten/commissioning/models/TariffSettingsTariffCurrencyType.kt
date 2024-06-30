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
 * Currency type.
 *
 * @param code Tariff currency code. e.g='USD'.
 */


data class TariffSettingsTariffCurrencyType (

    /* Tariff currency code. e.g='USD'. */
    @Json(name = "code")
    val code: kotlin.String? = null

)

