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

import enlighten.models.RgmStatsResponseMeterIntervalsInner
import enlighten.models.RgmStatsResponseMeterIntervalsInnerIntervalsInner

class RgmStatsResponseMeterIntervalsInnerTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of RgmStatsResponseMeterIntervalsInner
        //val modelInstance = RgmStatsResponseMeterIntervalsInner()

        // to test the property `meterSerialNumber` - Serial number of the revenue grade meter.
        should("test meterSerialNumber") {
            // uncomment below to test the property
            //modelInstance.meterSerialNumber shouldBe ("TODO")
        }

        // to test the property `envoySerialNumber` - Serial number of the reporting envoy.
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
