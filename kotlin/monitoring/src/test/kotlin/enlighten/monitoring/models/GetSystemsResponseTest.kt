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

import enlighten.monitoring.models.GetSystemsResponse
import enlighten.monitoring.models.SystemDetails

class GetSystemsResponseTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of GetSystemsResponse
        //val modelInstance = GetSystemsResponse()

        // to test the property `propertySize` - Maximum number of records shown per page. Default=10, Min=1, Max=100.
        should("test propertySize") {
            // uncomment below to test the property
            //modelInstance.propertySize shouldBe ("TODO")
        }

        // to test the property `count` - Total number of systems actually returned for the current page.
        should("test count") {
            // uncomment below to test the property
            //modelInstance.count shouldBe ("TODO")
        }

        // to test the property `total` - Total number of systems.
        should("test total") {
            // uncomment below to test the property
            //modelInstance.total shouldBe ("TODO")
        }

        // to test the property `currentPage` - Number of the current page fetched.
        should("test currentPage") {
            // uncomment below to test the property
            //modelInstance.currentPage shouldBe ("TODO")
        }

        // to test the property `items` - Named key of the list data. In this endpoint, it is systems.
        should("test items") {
            // uncomment below to test the property
            //modelInstance.items shouldBe ("TODO")
        }

        // to test the property `systems` - List of systems.
        should("test systems") {
            // uncomment below to test the property
            //modelInstance.systems shouldBe ("TODO")
        }

    }
}