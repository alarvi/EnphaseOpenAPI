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

package enlighten.commissioning.models

import io.kotlintest.shouldBe
import io.kotlintest.specs.ShouldSpec

import enlighten.commissioning.models.GetPvManufacturerModelsResponse
import enlighten.commissioning.models.GetCompanyUsersResponseUsersInner
import enlighten.commissioning.models.GetPvManufacturerModelsResponsePvManufacturers

class GetPvManufacturerModelsResponseTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of GetPvManufacturerModelsResponse
        //val modelInstance = GetPvManufacturerModelsResponse()

        // to test the property `pvManufacturers`
        should("test pvManufacturers") {
            // uncomment below to test the property
            //modelInstance.pvManufacturers shouldBe ("TODO")
        }

        // to test the property `pvModels` - A list of PV models for this manufacturer. Each element in the list is an array including the model's primary key and name. The list may be empty.
        should("test pvModels") {
            // uncomment below to test the property
            //modelInstance.pvModels shouldBe ("TODO")
        }

    }
}
