
# SystemParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemName** | **kotlin.String** | Name of the system. Limit 255 characters. | 
**systemType** | [**SystemTypeEnum**](SystemTypeEnum.md) |  |  [optional]
**internetConnection** | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  |  [optional]
**lease** | **kotlin.Boolean** | Whether the system is leased. Default false. |  [optional]
**operational** | **kotlin.Boolean** | Whether this system is permitted to operate. Default true. |  [optional]
**ownerId** | **kotlin.Int** | Enlighten ID of the system owner. Owner must be an Enlighten user. Optional. If the user of the API is a self-installer, the owner must be himself. If the user of the API is an installer then use the Search user API to get the owner user ID. If the owner not exist in the enlighten then use Create home owner API to create it newly. |  [optional]
**hostId** | **kotlin.Int** | Enlighten ID of the system host. System host must be an Enlighten user. Optional. If the user of the API is an installer then use the Search user API to get the host user ID. If the host not exist in the enlighten then use Create home owner API to create it newly. |  [optional]
**authorizedSubcontractorId** | **kotlin.Int** | Enlighten ID of the sub-contractor you want to add to the system. Optional. If you are the home owner, you cannot add subcontractors for the site. |  [optional]
**installerId** | **kotlin.Int** | Enlighten ID of the installer of this system. Defaults to current user&#39;s company ID. |  [optional]
**maintainerName** | **kotlin.String** | Name of the maintainer. |  [optional]
**maintainerId** | **kotlin.Int** | The Enlighten ID of the maintainer of this system. Defaults to current user&#39;s company ID. |  [optional]
**authorizedSubcontractors** | [**kotlin.collections.List&lt;GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner&gt;**](GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md) | List of sub-contractors of this system. |  [optional]
**allowPublicAccess** | **kotlin.Boolean** | When true, the system will be eligible to appear in the public systems lists of Enphase and the system&#39;s installer. Default true. |  [optional]
**interconnectDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | When the system was approved to connect to the grid. |  [optional]
**source** | [**SystemSourceEnum**](SystemSourceEnum.md) |  |  [optional]
**arrayType** | [**SystemArrayTypeEnum**](SystemArrayTypeEnum.md) |  |  [optional]
**attachmentType** | [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) |  |  [optional]
**ensembleEnvoy** | **kotlin.String** | Specifies serial number of ensemble envoy in multi envoy system. |  [optional]
**gridProfile** | **kotlin.String** | Grid profile to set on this system&#39;s microinverters. See GridProfiles API for how to retrieve a list of known profiles. |  [optional]
**requestedProfile** | **kotlin.String** |  |  [optional]
**requestedReportFreq** | **kotlin.String** |  |  [optional]
**voltage** | **kotlin.String** | Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists &amp; installer&#39;s country is not inside North America, or if the system&#39;s country is not inside North America, then the voltage value would be null. |  [optional]
**envoySerialNumbers** | **kotlin.collections.List&lt;kotlin.String&gt;** | A list of Envoys installed on this system. |  [optional]
**pvManufacturer** | **kotlin.Int** | Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs. |  [optional]
**pvManufacturerName** | **kotlin.String** | Name of the Custom PV module manufacturer associated with the system. |  [optional]
**pvModel** | **kotlin.Int** | Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs. |  [optional]
**pvModelName** | **kotlin.String** | Name of the Custom PV module model associated with the system. |  [optional]
**pvModulePowerRating** | **kotlin.Float** | Power rating (in W) of the PV module installed on the system. |  [optional]
**pvModuleType** | **kotlin.Int** | Type ID of the PV module installed on the system. 1 -&gt; &#39;Mono-facial&#39;, 2 -&gt; &#39;Bi-facial&#39;, 3 -&gt; &#39;Split cell&#39;, 4 -&gt; &#39;Other&#39;. |  [optional]
**expectedEnvoyCount** | **kotlin.Int** | Total envoys the system is supposed to have. |  [optional]
**expectedPcuCount** | **kotlin.Int** | Total PCUs the system is supposed to have. |  [optional]
**expectedAcbCount** | **kotlin.Int** | Total acbs the system is supposed to have. |  [optional]
**expectedNsrCount** | **kotlin.Int** | Total nsrs the system is supposed to have. |  [optional]
**expectedMeterCount** | **kotlin.Int** | Total meters the system is supposed to have. |  [optional]
**expectedEnchargeCount** | **kotlin.Int** | Total encharges the system is supposed to have. |  [optional]
**expectedEnpowerCount** | **kotlin.Int** | Total enpowers the system is supposed to have. |  [optional]
**reference** | **kotlin.String** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. This value should be alphanumeric. |  [optional]
**encharge** | [**kotlin.collections.List&lt;SystemParamsEnchargeInner&gt;**](SystemParamsEnchargeInner.md) | Encharge detail. |  [optional]
**enpower** | [**kotlin.collections.List&lt;SystemParamsEnpowerInner&gt;**](SystemParamsEnpowerInner.md) | Enpower detail. |  [optional]
**address** | [**SystemParamsAddress**](SystemParamsAddress.md) |  |  [optional]


