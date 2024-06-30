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

import enlighten.models.EnergyLifetimeResponse
import enlighten.models.Meta

class EnergyLifetimeResponseTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of EnergyLifetimeResponse
        //val modelInstance = EnergyLifetimeResponse()

        // to test the property `startDate` - When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
        should("test startDate") {
            // uncomment below to test the property
            //modelInstance.startDate shouldBe ("TODO")
        }

        // to test the property `systemId` - The identifier of the system.
        should("test systemId") {
            // uncomment below to test the property
            //modelInstance.systemId shouldBe ("TODO")
        }

        // to test the property `production` - An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.
        should("test production") {
            // uncomment below to test the property
            //modelInstance.production shouldBe ("TODO")
        }

        // to test the property `meta`
        should("test meta") {
            // uncomment below to test the property
            //modelInstance.meta shouldBe ("TODO")
        }

        // to test the property `microProduction`
        should("test microProduction") {
            // uncomment below to test the property
            //modelInstance.microProduction shouldBe ("TODO")
        }

        // to test the property `meterProduction`
        should("test meterProduction") {
            // uncomment below to test the property
            //modelInstance.meterProduction shouldBe ("TODO")
        }

        // to test the property `meterStartDate` - The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter.
        should("test meterStartDate") {
            // uncomment below to test the property
            //modelInstance.meterStartDate shouldBe ("TODO")
        }

    }
}
