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


class GetSystemMicroDeviceTelemetryResponse(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        
        class properties:
            system_id = schemas.IntSchema
            serial_number = schemas.StrSchema
        
            @staticmethod
            def granularity() -> typing.Type['TelemetryGranularityEnum']:
                return TelemetryGranularityEnum
            total_devices = schemas.IntSchema
            start_at = schemas.Int64Schema
            end_at = schemas.Int64Schema
            items = schemas.StrSchema
            
            
            class intervals(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    
                    class items(
                        schemas.DictSchema
                    ):
                    
                    
                        class MetaOapg:
                            
                            class properties:
                                end_at = schemas.Int64Schema
                                powr = schemas.IntSchema
                                enwh = schemas.IntSchema
                                __annotations__ = {
                                    "end_at": end_at,
                                    "powr": powr,
                                    "enwh": enwh,
                                }
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["end_at"]) -> MetaOapg.properties.end_at: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["powr"]) -> MetaOapg.properties.powr: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["enwh"]) -> MetaOapg.properties.enwh: ...
                        
                        @typing.overload
                        def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
                        
                        def __getitem__(self, name: typing.Union[typing_extensions.Literal["end_at", "powr", "enwh", ], str]):
                            # dict_instance[name] accessor
                            return super().__getitem__(name)
                        
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["end_at"]) -> typing.Union[MetaOapg.properties.end_at, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["powr"]) -> typing.Union[MetaOapg.properties.powr, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["enwh"]) -> typing.Union[MetaOapg.properties.enwh, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
                        
                        def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["end_at", "powr", "enwh", ], str]):
                            return super().get_item_oapg(name)
                        
                    
                        def __new__(
                            cls,
                            *_args: typing.Union[dict, frozendict.frozendict, ],
                            end_at: typing.Union[MetaOapg.properties.end_at, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            powr: typing.Union[MetaOapg.properties.powr, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            enwh: typing.Union[MetaOapg.properties.enwh, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            _configuration: typing.Optional[schemas.Configuration] = None,
                            **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                        ) -> 'items':
                            return super().__new__(
                                cls,
                                *_args,
                                end_at=end_at,
                                powr=powr,
                                enwh=enwh,
                                _configuration=_configuration,
                                **kwargs,
                            )
            
                def __new__(
                    cls,
                    _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]], typing.List[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]]],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'intervals':
                    return super().__new__(
                        cls,
                        _arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> MetaOapg.items:
                    return super().__getitem__(i)
            __annotations__ = {
                "system_id": system_id,
                "serial_number": serial_number,
                "granularity": granularity,
                "total_devices": total_devices,
                "start_at": start_at,
                "end_at": end_at,
                "items": items,
                "intervals": intervals,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["system_id"]) -> MetaOapg.properties.system_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["serial_number"]) -> MetaOapg.properties.serial_number: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["granularity"]) -> 'TelemetryGranularityEnum': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["total_devices"]) -> MetaOapg.properties.total_devices: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["start_at"]) -> MetaOapg.properties.start_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["end_at"]) -> MetaOapg.properties.end_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["items"]) -> MetaOapg.properties.items: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["intervals"]) -> MetaOapg.properties.intervals: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["system_id", "serial_number", "granularity", "total_devices", "start_at", "end_at", "items", "intervals", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["system_id"]) -> typing.Union[MetaOapg.properties.system_id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["serial_number"]) -> typing.Union[MetaOapg.properties.serial_number, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["granularity"]) -> typing.Union['TelemetryGranularityEnum', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["total_devices"]) -> typing.Union[MetaOapg.properties.total_devices, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["start_at"]) -> typing.Union[MetaOapg.properties.start_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["end_at"]) -> typing.Union[MetaOapg.properties.end_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["items"]) -> typing.Union[MetaOapg.properties.items, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["intervals"]) -> typing.Union[MetaOapg.properties.intervals, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["system_id", "serial_number", "granularity", "total_devices", "start_at", "end_at", "items", "intervals", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *_args: typing.Union[dict, frozendict.frozendict, ],
        system_id: typing.Union[MetaOapg.properties.system_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        serial_number: typing.Union[MetaOapg.properties.serial_number, str, schemas.Unset] = schemas.unset,
        granularity: typing.Union['TelemetryGranularityEnum', schemas.Unset] = schemas.unset,
        total_devices: typing.Union[MetaOapg.properties.total_devices, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        start_at: typing.Union[MetaOapg.properties.start_at, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        end_at: typing.Union[MetaOapg.properties.end_at, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        items: typing.Union[MetaOapg.properties.items, str, schemas.Unset] = schemas.unset,
        intervals: typing.Union[MetaOapg.properties.intervals, list, tuple, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'GetSystemMicroDeviceTelemetryResponse':
        return super().__new__(
            cls,
            *_args,
            system_id=system_id,
            serial_number=serial_number,
            granularity=granularity,
            total_devices=total_devices,
            start_at=start_at,
            end_at=end_at,
            items=items,
            intervals=intervals,
            _configuration=_configuration,
            **kwargs,
        )

from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
