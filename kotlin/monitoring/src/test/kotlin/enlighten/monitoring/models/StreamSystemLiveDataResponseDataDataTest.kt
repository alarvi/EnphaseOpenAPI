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

import enlighten.monitoring.models.StreamSystemLiveDataResponseDataData

class StreamSystemLiveDataResponseDataDataTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of StreamSystemLiveDataResponseDataData
        //val modelInstance = StreamSystemLiveDataResponseDataData()

        // to test the property `batteryMode` - Battery mode of the site. Available values are Savings Mode, Full Backup, and Self-consumption.
        should("test batteryMode") {
            // uncomment below to test the property
            //modelInstance.batteryMode shouldBe ("TODO")
        }

        // to test the property `batteryPower` - Battery power in watts; Power will be positive in case of discharge and negative in case of charge.
        should("test batteryPower") {
            // uncomment below to test the property
            //modelInstance.batteryPower shouldBe ("TODO")
        }

        // to test the property `batterySoc` - Battery soc in percentage.
        should("test batterySoc") {
            // uncomment below to test the property
            //modelInstance.batterySoc shouldBe ("TODO")
        }

        // to test the property `consumptionPower` - Consumption power in watts.
        should("test consumptionPower") {
            // uncomment below to test the property
            //modelInstance.consumptionPower shouldBe ("TODO")
        }

        // to test the property `envoySerialNumber`
        should("test envoySerialNumber") {
            // uncomment below to test the property
            //modelInstance.envoySerialNumber shouldBe ("TODO")
        }

        // to test the property `generatorPower` - Generator power in watts.
        should("test generatorPower") {
            // uncomment below to test the property
            //modelInstance.generatorPower shouldBe ("TODO")
        }

        // to test the property `gridPower` - Grid power in watts; Power will be negative in case of export and positive in case of import.
        should("test gridPower") {
            // uncomment below to test the property
            //modelInstance.gridPower shouldBe ("TODO")
        }

        // to test the property `gridStatus` - Grid state of the site. Available values are On Grid, Off Grid, Unknown.
        should("test gridStatus") {
            // uncomment below to test the property
            //modelInstance.gridStatus shouldBe ("TODO")
        }

        // to test the property `pvPower` - PV power in watts.
        should("test pvPower") {
            // uncomment below to test the property
            //modelInstance.pvPower shouldBe ("TODO")
        }

        // to test the property `systemId` - The unique numeric ID of the system.
        should("test systemId") {
            // uncomment below to test the property
            //modelInstance.systemId shouldBe ("TODO")
        }

    }
}