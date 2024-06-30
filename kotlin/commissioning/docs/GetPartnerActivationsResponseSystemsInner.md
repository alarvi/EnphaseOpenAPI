
# GetPartnerActivationsResponseSystemsInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **kotlin.Int** | Enlighten ID of this system. System-generated. |  [optional]
**systemName** | **kotlin.String** | Name of the system. |  [optional]
**systemType** | [**SystemTypeEnum**](SystemTypeEnum.md) |  |  [optional]
**status** | **kotlin.String** | System&#39;s status. |  [optional]
**timezone** | **kotlin.String** | System&#39;s timezone. |  [optional]
**stage** | **kotlin.Int** | What stage of the activation process this activation is in. System-generated. |  [optional]
**internetConnection** | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  |  [optional]
**lease** | **kotlin.Boolean** | Whether the system is leased. Default false. |  [optional]
**operational** | **kotlin.Boolean** | Whether this system is permitted to operate. Default true. |  [optional]
**owner** | **kotlin.String** | Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. |  [optional]
**ownerId** | **kotlin.Int** | Enlighten ID of this system owner. System-generated. |  [optional]
**host** | **kotlin.String** | Name of the system host. |  [optional]
**hostId** | **kotlin.Int** | Enlighten ID of this system host. System-generated. |  [optional]
**installerName** | **kotlin.String** | Name of the installer. |  [optional]
**installerId** | **kotlin.Int** | Enlighten ID of the installer of this system. |  [optional]
**maintainerName** | **kotlin.String** | Name of the maintainer. |  [optional]
**maintainerId** | **kotlin.Int** | Enlighten ID of the maintainer of this system. |  [optional]
**authorizedSubcontractors** | [**kotlin.collections.List&lt;GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner&gt;**](GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner.md) | List of sub-contractors of this system. |  [optional]
**uri** | **kotlin.String** | URI for this activation. |  [optional]
**updatedAt** | **kotlin.Long** | Activation last updated timestamp. |  [optional]
**reference** | **kotlin.String** | Identifier of this system as provided by the calling user&#39;s company. This attribute is not present if the calling user&#39;s company does not have a reference for this system. |  [optional]
**otherReferences** | **kotlin.collections.List&lt;kotlin.String&gt;** | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. |  [optional]
**address** | [**Address**](Address.md) |  |  [optional]



