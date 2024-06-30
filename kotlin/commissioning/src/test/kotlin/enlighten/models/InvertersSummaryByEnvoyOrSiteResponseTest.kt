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

import enlighten.models.InvertersSummaryByEnvoyOrSiteResponse
import enlighten.models.InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner

class InvertersSummaryByEnvoyOrSiteResponseTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of InvertersSummaryByEnvoyOrSiteResponse
        //val modelInstance = InvertersSummaryByEnvoyOrSiteResponse()

        // to test the property `signalStrength`
        should("test signalStrength") {
            // uncomment below to test the property
            //modelInstance.signalStrength shouldBe ("TODO")
        }

        // to test the property `microInverters` - A list of active inverters on this system, including serial and model numbers.
        should("test microInverters") {
            // uncomment below to test the property
            //modelInstance.microInverters shouldBe ("TODO")
        }

    }
}
