# coding: utf-8

"""
    The Enphase Commissioning API

    Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.  # noqa: E501

    The version of the OpenAPI document: 4.0
    Generated by: https://openapi-generator.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from commissioning import schemas  # noqa: F401


class GetPartnerActivationsResponse(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        
        class properties:
            
            
            class systems(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    
                    class items(
                        schemas.DictSchema
                    ):
                    
                    
                        class MetaOapg:
                            
                            class properties:
                                system_id = schemas.IntSchema
                                system_name = schemas.StrSchema
                            
                                @staticmethod
                                def system_type() -> typing.Type['SystemTypeEnum']:
                                    return SystemTypeEnum
                                status = schemas.StrSchema
                                timezone = schemas.StrSchema
                                stage = schemas.IntSchema
                            
                                @staticmethod
                                def internet_connection() -> typing.Type['SystemInternetConnectionEnum']:
                                    return SystemInternetConnectionEnum
                                lease = schemas.BoolSchema
                                operational = schemas.BoolSchema
                                owner = schemas.StrSchema
                                owner_id = schemas.IntSchema
                                host = schemas.StrSchema
                                host_id = schemas.IntSchema
                                installer_name = schemas.StrSchema
                                installer_id = schemas.IntSchema
                                maintainer_name = schemas.StrSchema
                                maintainer_id = schemas.IntSchema
                                
                                
                                class authorized_subcontractors(
                                    schemas.ListSchema
                                ):
                                
                                
                                    class MetaOapg:
                                        
                                        
                                        class items(
                                            schemas.DictSchema
                                        ):
                                        
                                        
                                            class MetaOapg:
                                                
                                                class properties:
                                                    authorized_subcontractor_id = schemas.IntSchema
                                                    authorized_subcontractor_name = schemas.StrSchema
                                                    status = schemas.StrSchema
                                                    __annotations__ = {
                                                        "authorized_subcontractor_id": authorized_subcontractor_id,
                                                        "authorized_subcontractor_name": authorized_subcontractor_name,
                                                        "status": status,
                                                    }
                                            
                                            @typing.overload
                                            def __getitem__(self, name: typing_extensions.Literal["authorized_subcontractor_id"]) -> MetaOapg.properties.authorized_subcontractor_id: ...
                                            
                                            @typing.overload
                                            def __getitem__(self, name: typing_extensions.Literal["authorized_subcontractor_name"]) -> MetaOapg.properties.authorized_subcontractor_name: ...
                                            
                                            @typing.overload
                                            def __getitem__(self, name: typing_extensions.Literal["status"]) -> MetaOapg.properties.status: ...
                                            
                                            @typing.overload
                                            def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
                                            
                                            def __getitem__(self, name: typing.Union[typing_extensions.Literal["authorized_subcontractor_id", "authorized_subcontractor_name", "status", ], str]):
                                                # dict_instance[name] accessor
                                                return super().__getitem__(name)
                                            
                                            
                                            @typing.overload
                                            def get_item_oapg(self, name: typing_extensions.Literal["authorized_subcontractor_id"]) -> typing.Union[MetaOapg.properties.authorized_subcontractor_id, schemas.Unset]: ...
                                            
                                            @typing.overload
                                            def get_item_oapg(self, name: typing_extensions.Literal["authorized_subcontractor_name"]) -> typing.Union[MetaOapg.properties.authorized_subcontractor_name, schemas.Unset]: ...
                                            
                                            @typing.overload
                                            def get_item_oapg(self, name: typing_extensions.Literal["status"]) -> typing.Union[MetaOapg.properties.status, schemas.Unset]: ...
                                            
                                            @typing.overload
                                            def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
                                            
                                            def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["authorized_subcontractor_id", "authorized_subcontractor_name", "status", ], str]):
                                                return super().get_item_oapg(name)
                                            
                                        
                                            def __new__(
                                                cls,
                                                *_args: typing.Union[dict, frozendict.frozendict, ],
                                                authorized_subcontractor_id: typing.Union[MetaOapg.properties.authorized_subcontractor_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                                                authorized_subcontractor_name: typing.Union[MetaOapg.properties.authorized_subcontractor_name, str, schemas.Unset] = schemas.unset,
                                                status: typing.Union[MetaOapg.properties.status, str, schemas.Unset] = schemas.unset,
                                                _configuration: typing.Optional[schemas.Configuration] = None,
                                                **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                                            ) -> 'items':
                                                return super().__new__(
                                                    cls,
                                                    *_args,
                                                    authorized_subcontractor_id=authorized_subcontractor_id,
                                                    authorized_subcontractor_name=authorized_subcontractor_name,
                                                    status=status,
                                                    _configuration=_configuration,
                                                    **kwargs,
                                                )
                                
                                    def __new__(
                                        cls,
                                        _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]], typing.List[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]]],
                                        _configuration: typing.Optional[schemas.Configuration] = None,
                                    ) -> 'authorized_subcontractors':
                                        return super().__new__(
                                            cls,
                                            _arg,
                                            _configuration=_configuration,
                                        )
                                
                                    def __getitem__(self, i: int) -> MetaOapg.items:
                                        return super().__getitem__(i)
                                uri = schemas.StrSchema
                                updated_at = schemas.Int64Schema
                                reference = schemas.StrSchema
                                
                                
                                class other_references(
                                    schemas.ListSchema
                                ):
                                
                                
                                    class MetaOapg:
                                        items = schemas.StrSchema
                                
                                    def __new__(
                                        cls,
                                        _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, str, ]], typing.List[typing.Union[MetaOapg.items, str, ]]],
                                        _configuration: typing.Optional[schemas.Configuration] = None,
                                    ) -> 'other_references':
                                        return super().__new__(
                                            cls,
                                            _arg,
                                            _configuration=_configuration,
                                        )
                                
                                    def __getitem__(self, i: int) -> MetaOapg.items:
                                        return super().__getitem__(i)
                            
                                @staticmethod
                                def address() -> typing.Type['Address']:
                                    return Address
                                __annotations__ = {
                                    "system_id": system_id,
                                    "system_name": system_name,
                                    "system_type": system_type,
                                    "status": status,
                                    "timezone": timezone,
                                    "stage": stage,
                                    "internet_connection": internet_connection,
                                    "lease": lease,
                                    "operational": operational,
                                    "owner": owner,
                                    "owner_id": owner_id,
                                    "host": host,
                                    "host_id": host_id,
                                    "installer_name": installer_name,
                                    "installer_id": installer_id,
                                    "maintainer_name": maintainer_name,
                                    "maintainer_id": maintainer_id,
                                    "authorized_subcontractors": authorized_subcontractors,
                                    "uri": uri,
                                    "updated_at": updated_at,
                                    "reference": reference,
                                    "other_references": other_references,
                                    "address": address,
                                }
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["system_id"]) -> MetaOapg.properties.system_id: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["system_name"]) -> MetaOapg.properties.system_name: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["system_type"]) -> 'SystemTypeEnum': ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["status"]) -> MetaOapg.properties.status: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["timezone"]) -> MetaOapg.properties.timezone: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["stage"]) -> MetaOapg.properties.stage: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["internet_connection"]) -> 'SystemInternetConnectionEnum': ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["lease"]) -> MetaOapg.properties.lease: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["operational"]) -> MetaOapg.properties.operational: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["owner"]) -> MetaOapg.properties.owner: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["owner_id"]) -> MetaOapg.properties.owner_id: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["host"]) -> MetaOapg.properties.host: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["host_id"]) -> MetaOapg.properties.host_id: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["installer_name"]) -> MetaOapg.properties.installer_name: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["installer_id"]) -> MetaOapg.properties.installer_id: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["maintainer_name"]) -> MetaOapg.properties.maintainer_name: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["maintainer_id"]) -> MetaOapg.properties.maintainer_id: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["authorized_subcontractors"]) -> MetaOapg.properties.authorized_subcontractors: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["uri"]) -> MetaOapg.properties.uri: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["updated_at"]) -> MetaOapg.properties.updated_at: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["reference"]) -> MetaOapg.properties.reference: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["other_references"]) -> MetaOapg.properties.other_references: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["address"]) -> 'Address': ...
                        
                        @typing.overload
                        def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
                        
                        def __getitem__(self, name: typing.Union[typing_extensions.Literal["system_id", "system_name", "system_type", "status", "timezone", "stage", "internet_connection", "lease", "operational", "owner", "owner_id", "host", "host_id", "installer_name", "installer_id", "maintainer_name", "maintainer_id", "authorized_subcontractors", "uri", "updated_at", "reference", "other_references", "address", ], str]):
                            # dict_instance[name] accessor
                            return super().__getitem__(name)
                        
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["system_id"]) -> typing.Union[MetaOapg.properties.system_id, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["system_name"]) -> typing.Union[MetaOapg.properties.system_name, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["system_type"]) -> typing.Union['SystemTypeEnum', schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["status"]) -> typing.Union[MetaOapg.properties.status, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["timezone"]) -> typing.Union[MetaOapg.properties.timezone, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["stage"]) -> typing.Union[MetaOapg.properties.stage, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["internet_connection"]) -> typing.Union['SystemInternetConnectionEnum', schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["lease"]) -> typing.Union[MetaOapg.properties.lease, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["operational"]) -> typing.Union[MetaOapg.properties.operational, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["owner"]) -> typing.Union[MetaOapg.properties.owner, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["owner_id"]) -> typing.Union[MetaOapg.properties.owner_id, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["host"]) -> typing.Union[MetaOapg.properties.host, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["host_id"]) -> typing.Union[MetaOapg.properties.host_id, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["installer_name"]) -> typing.Union[MetaOapg.properties.installer_name, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["installer_id"]) -> typing.Union[MetaOapg.properties.installer_id, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["maintainer_name"]) -> typing.Union[MetaOapg.properties.maintainer_name, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["maintainer_id"]) -> typing.Union[MetaOapg.properties.maintainer_id, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["authorized_subcontractors"]) -> typing.Union[MetaOapg.properties.authorized_subcontractors, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["uri"]) -> typing.Union[MetaOapg.properties.uri, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["updated_at"]) -> typing.Union[MetaOapg.properties.updated_at, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["reference"]) -> typing.Union[MetaOapg.properties.reference, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["other_references"]) -> typing.Union[MetaOapg.properties.other_references, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["address"]) -> typing.Union['Address', schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
                        
                        def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["system_id", "system_name", "system_type", "status", "timezone", "stage", "internet_connection", "lease", "operational", "owner", "owner_id", "host", "host_id", "installer_name", "installer_id", "maintainer_name", "maintainer_id", "authorized_subcontractors", "uri", "updated_at", "reference", "other_references", "address", ], str]):
                            return super().get_item_oapg(name)
                        
                    
                        def __new__(
                            cls,
                            *_args: typing.Union[dict, frozendict.frozendict, ],
                            system_id: typing.Union[MetaOapg.properties.system_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            system_name: typing.Union[MetaOapg.properties.system_name, str, schemas.Unset] = schemas.unset,
                            system_type: typing.Union['SystemTypeEnum', schemas.Unset] = schemas.unset,
                            status: typing.Union[MetaOapg.properties.status, str, schemas.Unset] = schemas.unset,
                            timezone: typing.Union[MetaOapg.properties.timezone, str, schemas.Unset] = schemas.unset,
                            stage: typing.Union[MetaOapg.properties.stage, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            internet_connection: typing.Union['SystemInternetConnectionEnum', schemas.Unset] = schemas.unset,
                            lease: typing.Union[MetaOapg.properties.lease, bool, schemas.Unset] = schemas.unset,
                            operational: typing.Union[MetaOapg.properties.operational, bool, schemas.Unset] = schemas.unset,
                            owner: typing.Union[MetaOapg.properties.owner, str, schemas.Unset] = schemas.unset,
                            owner_id: typing.Union[MetaOapg.properties.owner_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            host: typing.Union[MetaOapg.properties.host, str, schemas.Unset] = schemas.unset,
                            host_id: typing.Union[MetaOapg.properties.host_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            installer_name: typing.Union[MetaOapg.properties.installer_name, str, schemas.Unset] = schemas.unset,
                            installer_id: typing.Union[MetaOapg.properties.installer_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            maintainer_name: typing.Union[MetaOapg.properties.maintainer_name, str, schemas.Unset] = schemas.unset,
                            maintainer_id: typing.Union[MetaOapg.properties.maintainer_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            authorized_subcontractors: typing.Union[MetaOapg.properties.authorized_subcontractors, list, tuple, schemas.Unset] = schemas.unset,
                            uri: typing.Union[MetaOapg.properties.uri, str, schemas.Unset] = schemas.unset,
                            updated_at: typing.Union[MetaOapg.properties.updated_at, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            reference: typing.Union[MetaOapg.properties.reference, str, schemas.Unset] = schemas.unset,
                            other_references: typing.Union[MetaOapg.properties.other_references, list, tuple, schemas.Unset] = schemas.unset,
                            address: typing.Union['Address', schemas.Unset] = schemas.unset,
                            _configuration: typing.Optional[schemas.Configuration] = None,
                            **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                        ) -> 'items':
                            return super().__new__(
                                cls,
                                *_args,
                                system_id=system_id,
                                system_name=system_name,
                                system_type=system_type,
                                status=status,
                                timezone=timezone,
                                stage=stage,
                                internet_connection=internet_connection,
                                lease=lease,
                                operational=operational,
                                owner=owner,
                                owner_id=owner_id,
                                host=host,
                                host_id=host_id,
                                installer_name=installer_name,
                                installer_id=installer_id,
                                maintainer_name=maintainer_name,
                                maintainer_id=maintainer_id,
                                authorized_subcontractors=authorized_subcontractors,
                                uri=uri,
                                updated_at=updated_at,
                                reference=reference,
                                other_references=other_references,
                                address=address,
                                _configuration=_configuration,
                                **kwargs,
                            )
            
                def __new__(
                    cls,
                    _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]], typing.List[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]]],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'systems':
                    return super().__new__(
                        cls,
                        _arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> MetaOapg.items:
                    return super().__getitem__(i)
            next = schemas.StrSchema
            __annotations__ = {
                "systems": systems,
                "next": next,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["systems"]) -> MetaOapg.properties.systems: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["next"]) -> MetaOapg.properties.next: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["systems", "next", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["systems"]) -> typing.Union[MetaOapg.properties.systems, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["next"]) -> typing.Union[MetaOapg.properties.next, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["systems", "next", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *_args: typing.Union[dict, frozendict.frozendict, ],
        systems: typing.Union[MetaOapg.properties.systems, list, tuple, schemas.Unset] = schemas.unset,
        next: typing.Union[MetaOapg.properties.next, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'GetPartnerActivationsResponse':
        return super().__new__(
            cls,
            *_args,
            systems=systems,
            next=next,
            _configuration=_configuration,
            **kwargs,
        )

from commissioning.model.address import Address
from commissioning.model.system_internet_connection_enum import SystemInternetConnectionEnum
from commissioning.model.system_type_enum import SystemTypeEnum
