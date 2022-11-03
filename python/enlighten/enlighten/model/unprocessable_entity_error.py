# coding: utf-8

"""
    The Enlighten Systems API

    The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.  # noqa: E501

    The version of the OpenAPI document: 2.0
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

from enlighten import schemas  # noqa: F401


class UnprocessableEntityError(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        
        class properties:
            reason = schemas.StrSchema
            items = schemas.StrSchema
            
            
            class errorMessages(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    items = schemas.StrSchema
            
                def __new__(
                    cls,
                    arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, str, ]], typing.List[typing.Union[MetaOapg.items, str, ]]],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'errorMessages':
                    return super().__new__(
                        cls,
                        arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> MetaOapg.items:
                    return super().__getitem__(i)
            start = schemas.DateSchema
            end = schemas.DateSchema
            start_at = schemas.IntSchema
            end_at = schemas.IntSchema
            first_interval = schemas.IntSchema
            last_interval = schemas.IntSchema
            __annotations__ = {
                "reason": reason,
                "items": items,
                "errorMessages": errorMessages,
                "start": start,
                "end": end,
                "start_at": start_at,
                "end_at": end_at,
                "first_interval": first_interval,
                "last_interval": last_interval,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["reason"]) -> MetaOapg.properties.reason: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["items"]) -> MetaOapg.properties.items: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["errorMessages"]) -> MetaOapg.properties.errorMessages: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["start"]) -> MetaOapg.properties.start: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["end"]) -> MetaOapg.properties.end: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["start_at"]) -> MetaOapg.properties.start_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["end_at"]) -> MetaOapg.properties.end_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["first_interval"]) -> MetaOapg.properties.first_interval: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["last_interval"]) -> MetaOapg.properties.last_interval: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["reason", "items", "errorMessages", "start", "end", "start_at", "end_at", "first_interval", "last_interval", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["reason"]) -> typing.Union[MetaOapg.properties.reason, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["items"]) -> typing.Union[MetaOapg.properties.items, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["errorMessages"]) -> typing.Union[MetaOapg.properties.errorMessages, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["start"]) -> typing.Union[MetaOapg.properties.start, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["end"]) -> typing.Union[MetaOapg.properties.end, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["start_at"]) -> typing.Union[MetaOapg.properties.start_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["end_at"]) -> typing.Union[MetaOapg.properties.end_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["first_interval"]) -> typing.Union[MetaOapg.properties.first_interval, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["last_interval"]) -> typing.Union[MetaOapg.properties.last_interval, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["reason", "items", "errorMessages", "start", "end", "start_at", "end_at", "first_interval", "last_interval", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        reason: typing.Union[MetaOapg.properties.reason, str, schemas.Unset] = schemas.unset,
        items: typing.Union[MetaOapg.properties.items, str, schemas.Unset] = schemas.unset,
        errorMessages: typing.Union[MetaOapg.properties.errorMessages, list, tuple, schemas.Unset] = schemas.unset,
        start: typing.Union[MetaOapg.properties.start, str, date, schemas.Unset] = schemas.unset,
        end: typing.Union[MetaOapg.properties.end, str, date, schemas.Unset] = schemas.unset,
        start_at: typing.Union[MetaOapg.properties.start_at, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        end_at: typing.Union[MetaOapg.properties.end_at, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        first_interval: typing.Union[MetaOapg.properties.first_interval, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        last_interval: typing.Union[MetaOapg.properties.last_interval, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'UnprocessableEntityError':
        return super().__new__(
            cls,
            *args,
            reason=reason,
            items=items,
            errorMessages=errorMessages,
            start=start,
            end=end,
            start_at=start_at,
            end_at=end_at,
            first_interval=first_interval,
            last_interval=last_interval,
            _configuration=_configuration,
            **kwargs,
        )
