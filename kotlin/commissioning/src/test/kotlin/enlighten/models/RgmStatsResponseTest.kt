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

import enlighten.models.RgmStatsResponse
import enlighten.models.Meta
import enlighten.models.RgmStatsResponseIntervalsInner
import enlighten.models.RgmStatsResponseMeterIntervalsInner

class RgmStatsResponseTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of RgmStatsResponse
        //val modelInstance = RgmStatsResponse()

        // to test the property `systemId` - Enlighten ID for this system.
        should("test systemId") {
            // uncomment below to test the property
            //modelInstance.systemId shouldBe ("TODO")
        }

        // to test the property `totalDevices` - Number of active revenue-grade meters for this system.
        should("test totalDevices") {
            // uncomment below to test the property
            //modelInstance.totalDevices shouldBe ("TODO")
        }

        // to test the property `meta`
        should("test meta") {
            // uncomment below to test the property
            //modelInstance.meta shouldBe ("TODO")
        }

        // to test the property `intervals` - A list of intervals between the requested start and end times.
        should("test intervals") {
            // uncomment below to test the property
            //modelInstance.intervals shouldBe ("TODO")
        }

        // to test the property `meterIntervals` - A list of intervals of a meter between the requested start and end times.
        should("test meterIntervals") {
            // uncomment below to test the property
            //modelInstance.meterIntervals shouldBe ("TODO")
        }

    }
}
