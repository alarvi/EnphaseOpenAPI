
# User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **kotlin.Boolean** | Whether the user is allowed to log in to Enlighten. |  [optional]
**userRoles** | [**kotlin.collections.List&lt;UserRoleEnum&gt;**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. |  [optional]
**email** | **kotlin.String** | Email address of the user. |  [optional]
**enlightenEmails** | **kotlin.Boolean** | Whether the user receives automated emails from Enlighten. |  [optional]
**enlightenView** | **kotlin.String** | Which view of Enlighten the user has. |  [optional]
**firstName** | **kotlin.String** | User&#39;s first name. |  [optional]
**lastName** | **kotlin.String** | User&#39;s last name. |  [optional]
**phone** | **kotlin.String** | Telephone number of the user. |  [optional]
**uri** | **kotlin.String** | URI to the show() method for the user. System-generated. |  [optional]
**userId** | **kotlin.Int** | Enlighten ID of the user. System-generated. |  [optional]
**updatedAt** | **kotlin.Long** | Last updated date and time in Epoch format. |  [optional]
**company** | [**Company**](Company.md) |  |  [optional]



