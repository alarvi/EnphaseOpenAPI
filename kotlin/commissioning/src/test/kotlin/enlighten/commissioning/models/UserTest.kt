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

import enlighten.commissioning.models.User
import enlighten.commissioning.models.Company
import enlighten.commissioning.models.UserRoleEnum

class UserTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of User
        //val modelInstance = User()

        // to test the property `active` - Whether the user is allowed to log in to Enlighten.
        should("test active") {
            // uncomment below to test the property
            //modelInstance.active shouldBe ("TODO")
        }

        // to test the property `userRoles` - What type of user this is in Enlighten. For self installer user user_roles will be ['self_installer']. For other users user_roles will be empty.
        should("test userRoles") {
            // uncomment below to test the property
            //modelInstance.userRoles shouldBe ("TODO")
        }

        // to test the property `email` - Email address of the user.
        should("test email") {
            // uncomment below to test the property
            //modelInstance.email shouldBe ("TODO")
        }

        // to test the property `enlightenEmails` - Whether the user receives automated emails from Enlighten.
        should("test enlightenEmails") {
            // uncomment below to test the property
            //modelInstance.enlightenEmails shouldBe ("TODO")
        }

        // to test the property `enlightenView` - Which view of Enlighten the user has.
        should("test enlightenView") {
            // uncomment below to test the property
            //modelInstance.enlightenView shouldBe ("TODO")
        }

        // to test the property `firstName` - User's first name.
        should("test firstName") {
            // uncomment below to test the property
            //modelInstance.firstName shouldBe ("TODO")
        }

        // to test the property `lastName` - User's last name.
        should("test lastName") {
            // uncomment below to test the property
            //modelInstance.lastName shouldBe ("TODO")
        }

        // to test the property `phone` - Telephone number of the user.
        should("test phone") {
            // uncomment below to test the property
            //modelInstance.phone shouldBe ("TODO")
        }

        // to test the property `uri` - URI to the show() method for the user. System-generated.
        should("test uri") {
            // uncomment below to test the property
            //modelInstance.uri shouldBe ("TODO")
        }

        // to test the property `userId` - Enlighten ID of the user. System-generated.
        should("test userId") {
            // uncomment below to test the property
            //modelInstance.userId shouldBe ("TODO")
        }

        // to test the property `updatedAt` - Last updated date and time in Epoch format.
        should("test updatedAt") {
            // uncomment below to test the property
            //modelInstance.updatedAt shouldBe ("TODO")
        }

        // to test the property `company`
        should("test company") {
            // uncomment below to test the property
            //modelInstance.company shouldBe ("TODO")
        }

    }
}
