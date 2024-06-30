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

import enlighten.commissioning.models.CreateCompanyUserRequest

class CreateCompanyUserRequestTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of CreateCompanyUserRequest
        //val modelInstance = CreateCompanyUserRequest()

        // to test the property `email` - Email address of the user. Must be unique within Enlighten. Required.
        should("test email") {
            // uncomment below to test the property
            //modelInstance.email shouldBe ("TODO")
        }

        // to test the property `firstName` - User's first name. Required.
        should("test firstName") {
            // uncomment below to test the property
            //modelInstance.firstName shouldBe ("TODO")
        }

        // to test the property `lastName` - User's last name. Required.
        should("test lastName") {
            // uncomment below to test the property
            //modelInstance.lastName shouldBe ("TODO")
        }

        // to test the property `enlightenEmails` - Whether the user receives automated emails from Enlighten. Default false.
        should("test enlightenEmails") {
            // uncomment below to test the property
            //modelInstance.enlightenEmails shouldBe ("TODO")
        }

        // to test the property `phone` - Telephone number of the user. Optional.
        should("test phone") {
            // uncomment below to test the property
            //modelInstance.phone shouldBe ("TODO")
        }

    }
}