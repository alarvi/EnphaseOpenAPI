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

import enlighten.models.InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner
import enlighten.models.InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy
import enlighten.models.InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced

class InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner
        //val modelInstance = InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner()

        // to test the property `id`
        should("test id") {
            // uncomment below to test the property
            //modelInstance.id shouldBe ("TODO")
        }

        // to test the property `model` - Model number of this Microinverter.
        should("test model") {
            // uncomment below to test the property
            //modelInstance.model shouldBe ("TODO")
        }

        // to test the property `partNumber` - The Enphase part number of this Microinverter.
        should("test partNumber") {
            // uncomment below to test the property
            //modelInstance.partNumber shouldBe ("TODO")
        }

        // to test the property `serialNumber` - The serial number of this Microinverter.
        should("test serialNumber") {
            // uncomment below to test the property
            //modelInstance.serialNumber shouldBe ("TODO")
        }

        // to test the property `sku`
        should("test sku") {
            // uncomment below to test the property
            //modelInstance.sku shouldBe ("TODO")
        }

        // to test the property `status` - The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
        should("test status") {
            // uncomment below to test the property
            //modelInstance.status shouldBe ("TODO")
        }

        // to test the property `powerProduced`
        should("test powerProduced") {
            // uncomment below to test the property
            //modelInstance.powerProduced shouldBe ("TODO")
        }

        // to test the property `procLoad`
        should("test procLoad") {
            // uncomment below to test the property
            //modelInstance.procLoad shouldBe ("TODO")
        }

        // to test the property `paramTable`
        should("test paramTable") {
            // uncomment below to test the property
            //modelInstance.paramTable shouldBe ("TODO")
        }

        // to test the property `envoySerialNumber`
        should("test envoySerialNumber") {
            // uncomment below to test the property
            //modelInstance.envoySerialNumber shouldBe ("TODO")
        }

        // to test the property `energy`
        should("test energy") {
            // uncomment below to test the property
            //modelInstance.energy shouldBe ("TODO")
        }

        // to test the property `gridProfile`
        should("test gridProfile") {
            // uncomment below to test the property
            //modelInstance.gridProfile shouldBe ("TODO")
        }

        // to test the property `lastReportDate` - The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
        should("test lastReportDate") {
            // uncomment below to test the property
            //modelInstance.lastReportDate shouldBe ("TODO")
        }

    }
}