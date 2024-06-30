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

import enlighten.commissioning.models.ActivationOwnerCompany
import enlighten.commissioning.models.CompanyRoleEnum

class ActivationOwnerCompanyTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of ActivationOwnerCompany
        //val modelInstance = ActivationOwnerCompany()

        // to test the property `companyId`
        should("test companyId") {
            // uncomment below to test the property
            //modelInstance.companyId shouldBe ("TODO")
        }

        // to test the property `companyName`
        should("test companyName") {
            // uncomment below to test the property
            //modelInstance.companyName shouldBe ("TODO")
        }

        // to test the property `location`
        should("test location") {
            // uncomment below to test the property
            //modelInstance.location shouldBe ("TODO")
        }

        // to test the property `roles` - What type of company this is in Enphase. For installer company roles will be ['installer']. For other role roles will be empty.
        should("test roles") {
            // uncomment below to test the property
            //modelInstance.roles shouldBe ("TODO")
        }

        // to test the property `uri`
        should("test uri") {
            // uncomment below to test the property
            //modelInstance.uri shouldBe ("TODO")
        }

    }
}