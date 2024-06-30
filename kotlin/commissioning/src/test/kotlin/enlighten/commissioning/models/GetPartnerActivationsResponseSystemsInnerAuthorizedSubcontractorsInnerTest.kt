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

import enlighten.commissioning.models.GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner

class GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInnerTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner
        //val modelInstance = GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner()

        // to test the property `authorizedSubcontractorId` - The Enlighten ID of the sub-contractor of this system. System-generated.
        should("test authorizedSubcontractorId") {
            // uncomment below to test the property
            //modelInstance.authorizedSubcontractorId shouldBe ("TODO")
        }

        // to test the property `authorizedSubcontractorName` - Name of the sub-contractor of this system.
        should("test authorizedSubcontractorName") {
            // uncomment below to test the property
            //modelInstance.authorizedSubcontractorName shouldBe ("TODO")
        }

        // to test the property `status` - Current status of the subcontractor for the site. This field will be shown only for pending and rejected sub-contractors.
        should("test status") {
            // uncomment below to test the property
            //modelInstance.status shouldBe ("TODO")
        }

    }
}