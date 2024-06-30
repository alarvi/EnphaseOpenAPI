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

import enlighten.monitoring.models.GetSystemRgmStatsResponseMeterIntervalsInner
import enlighten.monitoring.models.GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner

class GetSystemRgmStatsResponseMeterIntervalsInnerTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of GetSystemRgmStatsResponseMeterIntervalsInner
        //val modelInstance = GetSystemRgmStatsResponseMeterIntervalsInner()

        // to test the property `meterSerialNumber` - Meter serial number.
        should("test meterSerialNumber") {
            // uncomment below to test the property
            //modelInstance.meterSerialNumber shouldBe ("TODO")
        }

        // to test the property `envoySerialNumber` - Envoy serial number of the system that the micro reports to.
        should("test envoySerialNumber") {
            // uncomment below to test the property
            //modelInstance.envoySerialNumber shouldBe ("TODO")
        }

        // to test the property `intervals` - Individual meter level interval.
        should("test intervals") {
            // uncomment below to test the property
            //modelInstance.intervals shouldBe ("TODO")
        }

    }
}