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

import io.kotlintest.shouldBe
import io.kotlintest.specs.ShouldSpec

import enlighten.models.EnvoysResponseEnvoysInner

class EnvoysResponseEnvoysInnerTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of EnvoysResponseEnvoysInner
        //val modelInstance = EnvoysResponseEnvoysInner()

        // to test the property `envoyId` - The Enlighten ID of the Envoy.
        should("test envoyId") {
            // uncomment below to test the property
            //modelInstance.envoyId shouldBe ("TODO")
        }

        // to test the property `lastReportAt` - The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the `datetime_format` query parameter is `iso8601`, `last_report_at` is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null.
        should("test lastReportAt") {
            // uncomment below to test the property
            //modelInstance.lastReportAt shouldBe ("TODO")
        }

        // to test the property `name` - The human-friendly name of this Envoy.
        should("test name") {
            // uncomment below to test the property
            //modelInstance.name shouldBe ("TODO")
        }

        // to test the property `partNumber` - The Enphase part number of this Envoy.
        should("test partNumber") {
            // uncomment below to test the property
            //modelInstance.partNumber shouldBe ("TODO")
        }

        // to test the property `serialNumber` - The serial number of this Envoy.
        should("test serialNumber") {
            // uncomment below to test the property
            //modelInstance.serialNumber shouldBe ("TODO")
        }

        // to test the property `status` - The current status of this Envoy. * `normal` - The Envoy is operating normally. * `comm` - The Envoy is not communicating to Enlighten.
        should("test status") {
            // uncomment below to test the property
            //modelInstance.status shouldBe ("TODO")
        }

    }
}