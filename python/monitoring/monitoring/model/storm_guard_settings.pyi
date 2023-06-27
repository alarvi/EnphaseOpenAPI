# coding: utf-8

"""
    The Enphase Monitoring API

    Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.  # noqa: E501

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

from monitoring import schemas  # noqa: F401


class StormGuardSettings(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        
        class properties:
            system_id = schemas.IntSchema
            storm_guard_status = schemas.StrSchema
            storm_alert = schemas.BoolSchema
            __annotations__ = {
                "system_id": system_id,
                "storm_guard_status": storm_guard_status,
                "storm_alert": storm_alert,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["system_id"]) -> MetaOapg.properties.system_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["storm_guard_status"]) -> MetaOapg.properties.storm_guard_status: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["storm_alert"]) -> MetaOapg.properties.storm_alert: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["system_id", "storm_guard_status", "storm_alert", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["system_id"]) -> typing.Union[MetaOapg.properties.system_id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["storm_guard_status"]) -> typing.Union[MetaOapg.properties.storm_guard_status, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["storm_alert"]) -> typing.Union[MetaOapg.properties.storm_alert, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["system_id", "storm_guard_status", "storm_alert", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *_args: typing.Union[dict, frozendict.frozendict, ],
        system_id: typing.Union[MetaOapg.properties.system_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        storm_guard_status: typing.Union[MetaOapg.properties.storm_guard_status, str, schemas.Unset] = schemas.unset,
        storm_alert: typing.Union[MetaOapg.properties.storm_alert, bool, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'StormGuardSettings':
        return super().__new__(
            cls,
            *_args,
            system_id=system_id,
            storm_guard_status=storm_guard_status,
            storm_alert=storm_alert,
            _configuration=_configuration,
            **kwargs,
        )
