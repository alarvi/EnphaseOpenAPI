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

import enlighten.commissioning.models.Activation
import enlighten.commissioning.models.ActivationEnchargeInner
import enlighten.commissioning.models.ActivationEnpowerInner
import enlighten.commissioning.models.ActivationHost
import enlighten.commissioning.models.ActivationOwner
import enlighten.commissioning.models.Address
import enlighten.commissioning.models.GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner
import enlighten.commissioning.models.SystemArrayTypeEnum
import enlighten.commissioning.models.SystemAttachmentTypeEnum
import enlighten.commissioning.models.SystemInternetConnectionEnum
import enlighten.commissioning.models.SystemProductionModeEnum
import enlighten.commissioning.models.SystemSourceEnum
import enlighten.commissioning.models.SystemTypeEnum

class ActivationTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of Activation
        //val modelInstance = Activation()

        // to test the property `systemId` - Enlighten ID of this system. System-generated.
        should("test systemId") {
            // uncomment below to test the property
            //modelInstance.systemId shouldBe ("TODO")
        }

        // to test the property `systemName` - Name of the system.
        should("test systemName") {
            // uncomment below to test the property
            //modelInstance.systemName shouldBe ("TODO")
        }

        // to test the property `systemType`
        should("test systemType") {
            // uncomment below to test the property
            //modelInstance.systemType shouldBe ("TODO")
        }

        // to test the property `status` - System's status.
        should("test status") {
            // uncomment below to test the property
            //modelInstance.status shouldBe ("TODO")
        }

        // to test the property `timezone` - System's timezone.
        should("test timezone") {
            // uncomment below to test the property
            //modelInstance.timezone shouldBe ("TODO")
        }

        // to test the property `stage` - What stage of the activation process this activation is in. System-generated.
        should("test stage") {
            // uncomment below to test the property
            //modelInstance.stage shouldBe ("TODO")
        }

        // to test the property `internetConnection`
        should("test internetConnection") {
            // uncomment below to test the property
            //modelInstance.internetConnection shouldBe ("TODO")
        }

        // to test the property `lease` - Whether the system is leased. Default false.
        should("test lease") {
            // uncomment below to test the property
            //modelInstance.lease shouldBe ("TODO")
        }

        // to test the property `operational` - Whether this system is permitted to operate. Default true.
        should("test operational") {
            // uncomment below to test the property
            //modelInstance.operational shouldBe ("TODO")
        }

        // to test the property `owner`
        should("test owner") {
            // uncomment below to test the property
            //modelInstance.owner shouldBe ("TODO")
        }

        // to test the property `ownerId` - Enlighten ID of this system owner. System-generated. This field is optional.
        should("test ownerId") {
            // uncomment below to test the property
            //modelInstance.ownerId shouldBe ("TODO")
        }

        // to test the property `host`
        should("test host") {
            // uncomment below to test the property
            //modelInstance.host shouldBe ("TODO")
        }

        // to test the property `hostId` - Enlighten ID of this system host. System-generated. This field is optional.
        should("test hostId") {
            // uncomment below to test the property
            //modelInstance.hostId shouldBe ("TODO")
        }

        // to test the property `installerName` - Name of the installer.
        should("test installerName") {
            // uncomment below to test the property
            //modelInstance.installerName shouldBe ("TODO")
        }

        // to test the property `installerId` - Enlighten ID of the installer of this system. Defaults to current user's company ID.
        should("test installerId") {
            // uncomment below to test the property
            //modelInstance.installerId shouldBe ("TODO")
        }

        // to test the property `maintainerName` - Name of the maintainer.
        should("test maintainerName") {
            // uncomment below to test the property
            //modelInstance.maintainerName shouldBe ("TODO")
        }

        // to test the property `maintainerId` - The Enlighten ID of the maintainer of this system. Defaults to current user's company ID.
        should("test maintainerId") {
            // uncomment below to test the property
            //modelInstance.maintainerId shouldBe ("TODO")
        }

        // to test the property `authorizedSubcontractors` - List of sub-contractors of this system.
        should("test authorizedSubcontractors") {
            // uncomment below to test the property
            //modelInstance.authorizedSubcontractors shouldBe ("TODO")
        }

        // to test the property `uri` - URI for this activation.
        should("test uri") {
            // uncomment below to test the property
            //modelInstance.uri shouldBe ("TODO")
        }

        // to test the property `updatedAt` - Activation last updated timestamp.
        should("test updatedAt") {
            // uncomment below to test the property
            //modelInstance.updatedAt shouldBe ("TODO")
        }

        // to test the property `reference` - Identifier of this system as provided by the calling user's company. This attribute is not present if the calling user's company does not have a reference for this system.
        should("test reference") {
            // uncomment below to test the property
            //modelInstance.reference shouldBe ("TODO")
        }

        // to test the property `otherReferences` - Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system.
        should("test otherReferences") {
            // uncomment below to test the property
            //modelInstance.otherReferences shouldBe ("TODO")
        }

        // to test the property `allowPublicAccess` - When true, the system will be eligible to appear in the public systems lists of Enphase and the system's installer. Default true.
        should("test allowPublicAccess") {
            // uncomment below to test the property
            //modelInstance.allowPublicAccess shouldBe ("TODO")
        }

        // to test the property `interconnectDate` - When the system was approved to connect to the grid.
        should("test interconnectDate") {
            // uncomment below to test the property
            //modelInstance.interconnectDate shouldBe ("TODO")
        }

        // to test the property `installerSupportEmail` - Installer support email.
        should("test installerSupportEmail") {
            // uncomment below to test the property
            //modelInstance.installerSupportEmail shouldBe ("TODO")
        }

        // to test the property `source`
        should("test source") {
            // uncomment below to test the property
            //modelInstance.source shouldBe ("TODO")
        }

        // to test the property `arrayType`
        should("test arrayType") {
            // uncomment below to test the property
            //modelInstance.arrayType shouldBe ("TODO")
        }

        // to test the property `attachmentType`
        should("test attachmentType") {
            // uncomment below to test the property
            //modelInstance.attachmentType shouldBe ("TODO")
        }

        // to test the property `ensembleEnvoy` - Specifies serial number of ensemble envoy in multi envoy system.
        should("test ensembleEnvoy") {
            // uncomment below to test the property
            //modelInstance.ensembleEnvoy shouldBe ("TODO")
        }

        // to test the property `productionMode`
        should("test productionMode") {
            // uncomment below to test the property
            //modelInstance.productionMode shouldBe ("TODO")
        }

        // to test the property `gridProfile` - Grid profile to set on this system's microinverters. See GridProfiles API for how to retrieve a list of known profiles.
        should("test gridProfile") {
            // uncomment below to test the property
            //modelInstance.gridProfile shouldBe ("TODO")
        }

        // to test the property `requestedProfile`
        should("test requestedProfile") {
            // uncomment below to test the property
            //modelInstance.requestedProfile shouldBe ("TODO")
        }

        // to test the property `requestedReportFreq`
        should("test requestedReportFreq") {
            // uncomment below to test the property
            //modelInstance.requestedReportFreq shouldBe ("TODO")
        }

        // to test the property `voltage` - Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists & installer's country is not inside North America, or if the system's country is not inside North America, then the voltage value would be null.
        should("test voltage") {
            // uncomment below to test the property
            //modelInstance.voltage shouldBe ("TODO")
        }

        // to test the property `envoySerialNumbers` - A list of Envoys installed on this system.
        should("test envoySerialNumbers") {
            // uncomment below to test the property
            //modelInstance.envoySerialNumbers shouldBe ("TODO")
        }

        // to test the property `expectedEnvoyCount` - Total envoys the system is supposed to have.
        should("test expectedEnvoyCount") {
            // uncomment below to test the property
            //modelInstance.expectedEnvoyCount shouldBe ("TODO")
        }

        // to test the property `expectedPcuCount` - Total PCUs the system is supposed to have.
        should("test expectedPcuCount") {
            // uncomment below to test the property
            //modelInstance.expectedPcuCount shouldBe ("TODO")
        }

        // to test the property `expectedNsrCount` - Total nsrs the system is supposed to have.
        should("test expectedNsrCount") {
            // uncomment below to test the property
            //modelInstance.expectedNsrCount shouldBe ("TODO")
        }

        // to test the property `expectedMeterCount` - Total meters the system is supposed to have.
        should("test expectedMeterCount") {
            // uncomment below to test the property
            //modelInstance.expectedMeterCount shouldBe ("TODO")
        }

        // to test the property `expectedEnchargeCount` - Total encharges the system is supposed to have.
        should("test expectedEnchargeCount") {
            // uncomment below to test the property
            //modelInstance.expectedEnchargeCount shouldBe ("TODO")
        }

        // to test the property `expectedEnpowerCount` - Total enpowers the system is supposed to have.
        should("test expectedEnpowerCount") {
            // uncomment below to test the property
            //modelInstance.expectedEnpowerCount shouldBe ("TODO")
        }

        // to test the property `pvManufacturer` - Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs.
        should("test pvManufacturer") {
            // uncomment below to test the property
            //modelInstance.pvManufacturer shouldBe ("TODO")
        }

        // to test the property `pvManufacturerName` - Name of the Custom PV module manufacturer associated with the system.
        should("test pvManufacturerName") {
            // uncomment below to test the property
            //modelInstance.pvManufacturerName shouldBe ("TODO")
        }

        // to test the property `pvModel` - Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs.
        should("test pvModel") {
            // uncomment below to test the property
            //modelInstance.pvModel shouldBe ("TODO")
        }

        // to test the property `pvModelName` - Name of the Custom PV module model associated with the system.
        should("test pvModelName") {
            // uncomment below to test the property
            //modelInstance.pvModelName shouldBe ("TODO")
        }

        // to test the property `pvModulePowerRating` - Power rating (in W) of the PV module installed on the system.
        should("test pvModulePowerRating") {
            // uncomment below to test the property
            //modelInstance.pvModulePowerRating shouldBe ("TODO")
        }

        // to test the property `pvModuleType` - Type ID of the PV module installed on the system. 1 -> 'Mono-facial', 2 -> 'Bi-facial', 3 -> 'Split cell', 4 -> 'Other'.
        should("test pvModuleType") {
            // uncomment below to test the property
            //modelInstance.pvModuleType shouldBe ("TODO")
        }

        // to test the property `encharge` - Encharge detail.
        should("test encharge") {
            // uncomment below to test the property
            //modelInstance.encharge shouldBe ("TODO")
        }

        // to test the property `enpower` - Enpower detail.
        should("test enpower") {
            // uncomment below to test the property
            //modelInstance.enpower shouldBe ("TODO")
        }

        // to test the property `address`
        should("test address") {
            // uncomment below to test the property
            //modelInstance.address shouldBe ("TODO")
        }

    }
}
