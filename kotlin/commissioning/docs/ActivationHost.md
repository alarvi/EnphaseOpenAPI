
# ActivationHost

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **kotlin.String** |  |  [optional]
**lastName** | **kotlin.String** |  |  [optional]
**email** | **kotlin.String** |  |  [optional]
**phone** | **kotlin.String** |  |  [optional]
**active** | **kotlin.Boolean** | Whether the user is allowed to log in to Enlighten. Values true, false. Default true. |  [optional]
**userId** | **kotlin.Int** |  |  [optional]
**userRoles** | [**kotlin.collections.List&lt;UserRoleEnum&gt;**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. |  [optional]
**enlightenEmails** | **kotlin.Boolean** |  |  [optional]
**enlightenView** | **kotlin.String** |  |  [optional]
**uri** | **kotlin.String** |  |  [optional]
**updatedAt** | **kotlin.Long** |  |  [optional]
**company** | [**ActivationHostCompany**](ActivationHostCompany.md) |  |  [optional]



