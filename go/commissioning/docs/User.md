# User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** | Whether the user is allowed to log in to Enlighten. | [optional] 
**UserRoles** | Pointer to [**[]UserRoleEnum**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. | [optional] 
**Email** | Pointer to **string** | Email address of the user. | [optional] 
**EnlightenEmails** | Pointer to **bool** | Whether the user receives automated emails from Enlighten. | [optional] 
**EnlightenView** | Pointer to **string** | Which view of Enlighten the user has. | [optional] 
**FirstName** | Pointer to **string** | User&#39;s first name. | [optional] 
**LastName** | Pointer to **string** | User&#39;s last name. | [optional] 
**Phone** | Pointer to **string** | Telephone number of the user. | [optional] 
**Uri** | Pointer to **string** | URI to the show() method for the user. System-generated. | [optional] 
**UserId** | Pointer to **int32** | Enlighten ID of the user. System-generated. | [optional] 
**UpdatedAt** | Pointer to **int64** | Last updated date and time in Epoch format. | [optional] 
**Company** | Pointer to [**Company**](Company.md) |  | [optional] 

## Methods

### NewUser

`func NewUser() *User`

NewUser instantiates a new User object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserWithDefaults

`func NewUserWithDefaults() *User`

NewUserWithDefaults instantiates a new User object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *User) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *User) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *User) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *User) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetUserRoles

`func (o *User) GetUserRoles() []UserRoleEnum`

GetUserRoles returns the UserRoles field if non-nil, zero value otherwise.

### GetUserRolesOk

`func (o *User) GetUserRolesOk() (*[]UserRoleEnum, bool)`

GetUserRolesOk returns a tuple with the UserRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserRoles

`func (o *User) SetUserRoles(v []UserRoleEnum)`

SetUserRoles sets UserRoles field to given value.

### HasUserRoles

`func (o *User) HasUserRoles() bool`

HasUserRoles returns a boolean if a field has been set.

### GetEmail

`func (o *User) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *User) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *User) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *User) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetEnlightenEmails

`func (o *User) GetEnlightenEmails() bool`

GetEnlightenEmails returns the EnlightenEmails field if non-nil, zero value otherwise.

### GetEnlightenEmailsOk

`func (o *User) GetEnlightenEmailsOk() (*bool, bool)`

GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenEmails

`func (o *User) SetEnlightenEmails(v bool)`

SetEnlightenEmails sets EnlightenEmails field to given value.

### HasEnlightenEmails

`func (o *User) HasEnlightenEmails() bool`

HasEnlightenEmails returns a boolean if a field has been set.

### GetEnlightenView

`func (o *User) GetEnlightenView() string`

GetEnlightenView returns the EnlightenView field if non-nil, zero value otherwise.

### GetEnlightenViewOk

`func (o *User) GetEnlightenViewOk() (*string, bool)`

GetEnlightenViewOk returns a tuple with the EnlightenView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenView

`func (o *User) SetEnlightenView(v string)`

SetEnlightenView sets EnlightenView field to given value.

### HasEnlightenView

`func (o *User) HasEnlightenView() bool`

HasEnlightenView returns a boolean if a field has been set.

### GetFirstName

`func (o *User) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *User) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *User) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *User) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *User) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *User) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *User) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *User) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetPhone

`func (o *User) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *User) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *User) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *User) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetUri

`func (o *User) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *User) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *User) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *User) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetUserId

`func (o *User) GetUserId() int32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *User) GetUserIdOk() (*int32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *User) SetUserId(v int32)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *User) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *User) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *User) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *User) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *User) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetCompany

`func (o *User) GetCompany() Company`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *User) GetCompanyOk() (*Company, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *User) SetCompany(v Company)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *User) HasCompany() bool`

HasCompany returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

