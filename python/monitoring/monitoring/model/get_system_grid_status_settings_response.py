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


class GetSystemGridStatusSettingsResponse(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        
        class properties:
            system_id = schemas.IntSchema
            grid_state = schemas.StrSchema
            last_report_date = schemas.DateTimeSchema
            __annotations__ = {
                "system_id": system_id,
                "grid_state": grid_state,
                "last_report_date": last_report_date,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["system_id"]) -> MetaOapg.properties.system_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["grid_state"]) -> MetaOapg.properties.grid_state: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["last_report_date"]) -> MetaOapg.properties.last_report_date: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["system_id", "grid_state", "last_report_date", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["system_id"]) -> typing.Union[MetaOapg.properties.system_id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["grid_state"]) -> typing.Union[MetaOapg.properties.grid_state, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["last_report_date"]) -> typing.Union[MetaOapg.properties.last_report_date, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["system_id", "grid_state", "last_report_date", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *_args: typing.Union[dict, frozendict.frozendict, ],
        system_id: typing.Union[MetaOapg.properties.system_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        grid_state: typing.Union[MetaOapg.properties.grid_state, str, schemas.Unset] = schemas.unset,
        last_report_date: typing.Union[MetaOapg.properties.last_report_date, str, datetime, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'GetSystemGridStatusSettingsResponse':
        return super().__new__(
            cls,
            *_args,
            system_id=system_id,
            grid_state=grid_state,
            last_report_date=last_report_date,
            _configuration=_configuration,
            **kwargs,
        )
