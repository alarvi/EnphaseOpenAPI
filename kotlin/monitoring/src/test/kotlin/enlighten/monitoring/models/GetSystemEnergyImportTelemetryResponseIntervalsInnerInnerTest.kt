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

import io.kotlintest.shouldBe
import io.kotlintest.specs.ShouldSpec

import enlighten.monitoring.models.GetSystemEnergyImportTelemetryResponseIntervalsInnerInner

class GetSystemEnergyImportTelemetryResponseIntervalsInnerInnerTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of GetSystemEnergyImportTelemetryResponseIntervalsInnerInner
        //val modelInstance = GetSystemEnergyImportTelemetryResponseIntervalsInnerInner()

        // to test the property `endAt` - End time of the telemetry interval.
        should("test endAt") {
            // uncomment below to test the property
            //modelInstance.endAt shouldBe ("TODO")
        }

        // to test the property `whImported` - Energy imported (in Watt-Hours) during that period.
        should("test whImported") {
            // uncomment below to test the property
            //modelInstance.whImported shouldBe ("TODO")
        }

    }
}