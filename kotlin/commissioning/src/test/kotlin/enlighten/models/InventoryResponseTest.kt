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

import enlighten.models.InventoryResponse
import enlighten.models.InventoryResponseEnvoysInner
import enlighten.models.InventoryResponseMetersInner
import enlighten.models.Meta

class InventoryResponseTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of InventoryResponse
        //val modelInstance = InventoryResponse()

        // to test the property `systemId` - Enlighten ID for this system.
        should("test systemId") {
            // uncomment below to test the property
            //modelInstance.systemId shouldBe ("TODO")
        }

        // to test the property `inverters` - A list of inverters on this system, including serial and model numbers.
        should("test inverters") {
            // uncomment below to test the property
            //modelInstance.inverters shouldBe ("TODO")
        }

        // to test the property `meters` - A list of meters on this system, including serial number, manufacturer, and model number.
        should("test meters") {
            // uncomment below to test the property
            //modelInstance.meters shouldBe ("TODO")
        }

        // to test the property `meta`
        should("test meta") {
            // uncomment below to test the property
            //modelInstance.meta shouldBe ("TODO")
        }

        // to test the property `envoys` - A list of Envoys on this system, including serial number.
        should("test envoys") {
            // uncomment below to test the property
            //modelInstance.envoys shouldBe ("TODO")
        }

    }
}