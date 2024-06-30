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

import enlighten.monitoring.models.GetSystemProductionMicroTelemetryResponseIntervalsInner

class GetSystemProductionMicroTelemetryResponseIntervalsInnerTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of GetSystemProductionMicroTelemetryResponseIntervalsInner
        //val modelInstance = GetSystemProductionMicroTelemetryResponseIntervalsInner()

        // to test the property `endAt` - End time of the telemetry interval.
        should("test endAt") {
            // uncomment below to test the property
            //modelInstance.endAt shouldBe ("TODO")
        }

        // to test the property `devicesReporting` - Number of devices reporting.
        should("test devicesReporting") {
            // uncomment below to test the property
            //modelInstance.devicesReporting shouldBe ("TODO")
        }

        // to test the property `powr` - Average power (in Watt) produced by all the microinverters during this interval, measured in Watts.
        should("test powr") {
            // uncomment below to test the property
            //modelInstance.powr shouldBe ("TODO")
        }

        // to test the property `enwh` - Energy produced (in Watt-Hours) from all the microinverters combined during that period.
        should("test enwh") {
            // uncomment below to test the property
            //modelInstance.enwh shouldBe ("TODO")
        }

    }
}
