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
 * How the microinverters are attached to the panels. Possible values are acm (AC Module), rack_mount (rack- or rail-mounted), zep (Zep Solar compatible), bipv (Building Integrated PV), frame_mount (Enphase Frame Mount), railless_mount (Other Railless Mount).
 *
 * Values: rack_mount,zep,acm,bipv,frame_mount,railless_mount
 */

@JsonClass(generateAdapter = false)
enum class SystemAttachmentTypeEnum(val value: kotlin.String) {

    @Json(name = "rack_mount")
    rack_mount("rack_mount"),

    @Json(name = "zep")
    zep("zep"),

    @Json(name = "acm")
    acm("acm"),

    @Json(name = "bipv")
    bipv("bipv"),

    @Json(name = "frame_mount")
    frame_mount("frame_mount"),

    @Json(name = "railless_mount")
    railless_mount("railless_mount");

    /**
     * Override [toString()] to avoid using the enum variable name as the value, and instead use
     * the actual value defined in the API spec file.
     *
     * This solves a problem when the variable name and its value are different, and ensures that
     * the client sends the correct enum values to the server always.
     */
    override fun toString(): kotlin.String = value

    companion object {
        /**
         * Converts the provided [data] to a [String] on success, null otherwise.
         */
        fun encode(data: kotlin.Any?): kotlin.String? = if (data is SystemAttachmentTypeEnum) "$data" else null

        /**
         * Returns a valid [SystemAttachmentTypeEnum] for [data], null otherwise.
         */
        fun decode(data: kotlin.Any?): SystemAttachmentTypeEnum? = data?.let {
          val normalizedData = "$it".lowercase()
          values().firstOrNull { value ->
            it == value || normalizedData == "$value".lowercase()
          }
        }
    }
}
