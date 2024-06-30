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

import enlighten.models.SummaryResponse
import enlighten.models.Status

class SummaryResponseTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of SummaryResponse
        //val modelInstance = SummaryResponse()

        // to test the property `currentPower` - Current power production, in Watts. For historical requests, returns 0.
        should("test currentPower") {
            // uncomment below to test the property
            //modelInstance.currentPower shouldBe ("TODO")
        }

        // to test the property `energyLifetime` - Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours.
        should("test energyLifetime") {
            // uncomment below to test the property
            //modelInstance.energyLifetime shouldBe ("TODO")
        }

        // to test the property `energyToday` - Energy produced on the requested day, in Watt-hours.
        should("test energyToday") {
            // uncomment below to test the property
            //modelInstance.energyToday shouldBe ("TODO")
        }

        // to test the property `lastIntervalEndAt` - The last known time that the system produced energy. When a system has not been communicating for a length of time, the `last_report_at` can be recent, whereas the `last_interval_end_at` may be further back.
        should("test lastIntervalEndAt") {
            // uncomment below to test the property
            //modelInstance.lastIntervalEndAt shouldBe ("TODO")
        }

        // to test the property `lastReportAt` - The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
        should("test lastReportAt") {
            // uncomment below to test the property
            //modelInstance.lastReportAt shouldBe ("TODO")
        }

        // to test the property `modules` - Number of active (not retired) modules. For historical requests, returns 0.
        should("test modules") {
            // uncomment below to test the property
            //modelInstance.modules shouldBe ("TODO")
        }

        // to test the property `operationalAt` - The time at which this system became operational. Corresponds to the system's interconnect time, if one is specified. Otherwise, it is the system's first interval end time. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
        should("test operationalAt") {
            // uncomment below to test the property
            //modelInstance.operationalAt shouldBe ("TODO")
        }

        // to test the property `sizeW` - The size of the system, in Watts. For historical requests, returns 0.
        should("test sizeW") {
            // uncomment below to test the property
            //modelInstance.sizeW shouldBe ("TODO")
        }

        // to test the property `source` - Indicates whether the production of this system is measured by its microinverters (`microinverters`) or by revenue-grade meters (`meter`) installed on the system.
        should("test source") {
            // uncomment below to test the property
            //modelInstance.source shouldBe ("TODO")
        }

        // to test the property `status`
        should("test status") {
            // uncomment below to test the property
            //modelInstance.status shouldBe ("TODO")
        }

        // to test the property `summaryDate` - Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
        should("test summaryDate") {
            // uncomment below to test the property
            //modelInstance.summaryDate shouldBe ("TODO")
        }

        // to test the property `systemId` - The Enlighten ID of the system.
        should("test systemId") {
            // uncomment below to test the property
            //modelInstance.systemId shouldBe ("TODO")
        }

    }
}