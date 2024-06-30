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

package enlighten.commissioning.apis

import io.kotlintest.shouldBe
import io.kotlintest.specs.ShouldSpec

import enlighten.commissioning.apis.ActivationsApi
import enlighten.commissioning.models.Activation
import enlighten.commissioning.models.DeleteActivationResponse
import enlighten.commissioning.models.GetActivationOpsProductionModeResponse
import enlighten.commissioning.models.GetPartnerActivationsResponse
import enlighten.commissioning.models.GrantActivationUserAccessResponse
import enlighten.commissioning.models.RevokeActivationUserAccessResponse
import enlighten.commissioning.models.ServerError
import enlighten.commissioning.models.SetActivationOpsProductionModeRequest
import enlighten.commissioning.models.SetActivationOpsProductionModeResponse
import enlighten.commissioning.models.SystemExpandEnum
import enlighten.commissioning.models.SystemParams
import enlighten.commissioning.models.SystemStageEnum
import enlighten.commissioning.models.TooManyRequestsError
import enlighten.commissioning.models.UnprocessableEntityError

class ActivationsApiTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of ActivationsApi
        //val apiInstance = ActivationsApi()

        // to test createPartnerActivation
        should("test createPartnerActivation") {
            // uncomment below to test createPartnerActivation
            //val params : SystemParams =  // SystemParams | 
            //val result : Activation = apiInstance.createPartnerActivation(params)
            //result shouldBe ("TODO")
        }

        // to test deleteActivation
        should("test deleteActivation") {
            // uncomment below to test deleteActivation
            //val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system).
            //val result : DeleteActivationResponse = apiInstance.deleteActivation(activationId)
            //result shouldBe ("TODO")
        }

        // to test getActivationOpsProductionMode
        should("test getActivationOpsProductionMode") {
            // uncomment below to test getActivationOpsProductionMode
            //val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
            //val result : GetActivationOpsProductionModeResponse = apiInstance.getActivationOpsProductionMode(activationId)
            //result shouldBe ("TODO")
        }

        // to test getPartnerActivation
        should("test getPartnerActivation") {
            // uncomment below to test getPartnerActivation
            //val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
            //val expand : SystemExpandEnum =  // SystemExpandEnum | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.
            //val result : Activation = apiInstance.getPartnerActivation(activationId, expand)
            //result shouldBe ("TODO")
        }

        // to test getPartnerActivations
        should("test getPartnerActivations") {
            // uncomment below to test getPartnerActivations
            //val next : kotlin.String = next_example // kotlin.String | If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.
            //val limit : kotlin.Int = 56 // kotlin.Int | There is a limit to the number of activations which can be returned at one time.
            //val stage : SystemStageEnum =  // SystemStageEnum | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value.
            //val reference : kotlin.String = reference_example // kotlin.String | Filter activations by company reference.
            //val installerId : kotlin.Int = 56 // kotlin.Int | Filter activations by installer ID.
            //val systemName : kotlin.String = systemName_example // kotlin.String | Filter activations by system name.
            //val address : kotlin.String = address_example // kotlin.String | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.
            //val region : kotlin.String = region_example // kotlin.String | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.
            //val search : kotlin.String = search_example // kotlin.String | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.
            //val result : GetPartnerActivationsResponse = apiInstance.getPartnerActivations(next, limit, stage, reference, installerId, systemName, address, region, search)
            //result shouldBe ("TODO")
        }

        // to test grantActivationUserAccess
        should("test grantActivationUserAccess") {
            // uncomment below to test grantActivationUserAccess
            //val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system).
            //val userId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the user which you want to grant access.
            //val result : GrantActivationUserAccessResponse = apiInstance.grantActivationUserAccess(activationId, userId)
            //result shouldBe ("TODO")
        }

        // to test revokeActivationUserAccess
        should("test revokeActivationUserAccess") {
            // uncomment below to test revokeActivationUserAccess
            //val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system).
            //val userId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the user which you want to revoke the access.
            //val result : RevokeActivationUserAccessResponse = apiInstance.revokeActivationUserAccess(activationId, userId)
            //result shouldBe ("TODO")
        }

        // to test setActivationOpsProductionMode
        should("test setActivationOpsProductionMode") {
            // uncomment below to test setActivationOpsProductionMode
            //val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
            //val params : SetActivationOpsProductionModeRequest =  // SetActivationOpsProductionModeRequest | 
            //val result : SetActivationOpsProductionModeResponse = apiInstance.setActivationOpsProductionMode(activationId, params)
            //result shouldBe ("TODO")
        }

        // to test updatePartnerActivation
        should("test updatePartnerActivation") {
            // uncomment below to test updatePartnerActivation
            //val activationId : kotlin.Int = 56 // kotlin.Int | Enlighten ID of the activation(system). System-generated.
            //val params : SystemParams =  // SystemParams | 
            //val result : Activation = apiInstance.updatePartnerActivation(activationId, params)
            //result shouldBe ("TODO")
        }

    }
}