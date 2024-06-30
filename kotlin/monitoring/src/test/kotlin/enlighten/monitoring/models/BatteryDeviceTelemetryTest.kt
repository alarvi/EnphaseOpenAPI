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

import enlighten.monitoring.models.BatteryDeviceTelemetry
import enlighten.monitoring.models.BatteryDeviceTelemetryIntervalsInner
import enlighten.monitoring.models.TelemetryGranularityEnum

class BatteryDeviceTelemetryTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of BatteryDeviceTelemetry
        //val modelInstance = BatteryDeviceTelemetry()

        // to test the property `systemId` - System ID.
        should("test systemId") {
            // uncomment below to test the property
            //modelInstance.systemId shouldBe ("TODO")
        }

        // to test the property `serialNumber` - Device serial number.
        should("test serialNumber") {
            // uncomment below to test the property
            //modelInstance.serialNumber shouldBe ("TODO")
        }

        // to test the property `granularity`
        should("test granularity") {
            // uncomment below to test the property
            //modelInstance.granularity shouldBe ("TODO")
        }

        // to test the property `totalDevices` - Shall always be 1 since this is telemetry from individual micros.
        should("test totalDevices") {
            // uncomment below to test the property
            //modelInstance.totalDevices shouldBe ("TODO")
        }

        // to test the property `startAt` - Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response.
        should("test startAt") {
            // uncomment below to test the property
            //modelInstance.startAt shouldBe ("TODO")
        }

        // to test the property `endAt` - End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response.
        should("test endAt") {
            // uncomment below to test the property
            //modelInstance.endAt shouldBe ("TODO")
        }

        // to test the property `items` - List key 'intervals'.
        should("test items") {
            // uncomment below to test the property
            //modelInstance.items shouldBe ("TODO")
        }

        // to test the property `intervals`
        should("test intervals") {
            // uncomment below to test the property
            //modelInstance.intervals shouldBe ("TODO")
        }

        // to test the property `lastReportedTime` - Last reported timestamp.
        should("test lastReportedTime") {
            // uncomment below to test the property
            //modelInstance.lastReportedTime shouldBe ("TODO")
        }

        // to test the property `lastReportedSoc` - Last reported soc percentage.
        should("test lastReportedSoc") {
            // uncomment below to test the property
            //modelInstance.lastReportedSoc shouldBe ("TODO")
        }

    }
}
