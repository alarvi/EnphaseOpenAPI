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


class TariffSeasons(
    schemas.ListSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    ToU seasons.
    """


    class MetaOapg:
        
        
        class items(
            schemas.DictSchema
        ):
        
        
            class MetaOapg:
                
                class properties:
                    id = schemas.StrSchema
                    start = schemas.StrSchema
                    
                    
                    class days(
                        schemas.ListSchema
                    ):
                    
                    
                        class MetaOapg:
                            
                            
                            class items(
                                schemas.DictSchema
                            ):
                            
                            
                                class MetaOapg:
                                    
                                    class properties:
                                        id = schemas.StrSchema
                                        days = schemas.StrSchema
                                        must_charge_start = schemas.IntSchema
                                        must_charge_duration = schemas.IntSchema
                                        
                                        
                                        class periods(
                                            schemas.ListSchema
                                        ):
                                        
                                        
                                            class MetaOapg:
                                                
                                                
                                                class items(
                                                    schemas.DictSchema
                                                ):
                                                
                                                
                                                    class MetaOapg:
                                                        
                                                        class properties:
                                                            id = schemas.StrSchema
                                                            start = schemas.StrSchema
                                                            rate = schemas.StrSchema
                                                            
                                                            
                                                            class error(
                                                                schemas.DictSchema
                                                            ):
                                                            
                                                            
                                                                class MetaOapg:
                                                                    additional_properties = schemas.AnyTypeSchema
                                                                
                                                                def __getitem__(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
                                                                    # dict_instance[name] accessor
                                                                    return super().__getitem__(name)
                                                                
                                                                def get_item_oapg(self, name: typing.Union[str, ]) -> MetaOapg.additional_properties:
                                                                    return super().get_item_oapg(name)
                                                            
                                                                def __new__(
                                                                    cls,
                                                                    *_args: typing.Union[dict, frozendict.frozendict, ],
                                                                    _configuration: typing.Optional[schemas.Configuration] = None,
                                                                    **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
                                                                ) -> 'error':
                                                                    return super().__new__(
                                                                        cls,
                                                                        *_args,
                                                                        _configuration=_configuration,
                                                                        **kwargs,
                                                                    )
                                                            __annotations__ = {
                                                                "id": id,
                                                                "start": start,
                                                                "rate": rate,
                                                                "error": error,
                                                            }
                                                    
                                                    @typing.overload
                                                    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
                                                    
                                                    @typing.overload
                                                    def __getitem__(self, name: typing_extensions.Literal["start"]) -> MetaOapg.properties.start: ...
                                                    
                                                    @typing.overload
                                                    def __getitem__(self, name: typing_extensions.Literal["rate"]) -> MetaOapg.properties.rate: ...
                                                    
                                                    @typing.overload
                                                    def __getitem__(self, name: typing_extensions.Literal["error"]) -> MetaOapg.properties.error: ...
                                                    
                                                    @typing.overload
                                                    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
                                                    
                                                    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "start", "rate", "error", ], str]):
                                                        # dict_instance[name] accessor
                                                        return super().__getitem__(name)
                                                    
                                                    
                                                    @typing.overload
                                                    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> typing.Union[MetaOapg.properties.id, schemas.Unset]: ...
                                                    
                                                    @typing.overload
                                                    def get_item_oapg(self, name: typing_extensions.Literal["start"]) -> typing.Union[MetaOapg.properties.start, schemas.Unset]: ...
                                                    
                                                    @typing.overload
                                                    def get_item_oapg(self, name: typing_extensions.Literal["rate"]) -> typing.Union[MetaOapg.properties.rate, schemas.Unset]: ...
                                                    
                                                    @typing.overload
                                                    def get_item_oapg(self, name: typing_extensions.Literal["error"]) -> typing.Union[MetaOapg.properties.error, schemas.Unset]: ...
                                                    
                                                    @typing.overload
                                                    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
                                                    
                                                    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "start", "rate", "error", ], str]):
                                                        return super().get_item_oapg(name)
                                                    
                                                
                                                    def __new__(
                                                        cls,
                                                        *_args: typing.Union[dict, frozendict.frozendict, ],
                                                        id: typing.Union[MetaOapg.properties.id, str, schemas.Unset] = schemas.unset,
                                                        start: typing.Union[MetaOapg.properties.start, str, schemas.Unset] = schemas.unset,
                                                        rate: typing.Union[MetaOapg.properties.rate, str, schemas.Unset] = schemas.unset,
                                                        error: typing.Union[MetaOapg.properties.error, dict, frozendict.frozendict, schemas.Unset] = schemas.unset,
                                                        _configuration: typing.Optional[schemas.Configuration] = None,
                                                        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                                                    ) -> 'items':
                                                        return super().__new__(
                                                            cls,
                                                            *_args,
                                                            id=id,
                                                            start=start,
                                                            rate=rate,
                                                            error=error,
                                                            _configuration=_configuration,
                                                            **kwargs,
                                                        )
                                        
                                            def __new__(
                                                cls,
                                                _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]], typing.List[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]]],
                                                _configuration: typing.Optional[schemas.Configuration] = None,
                                            ) -> 'periods':
                                                return super().__new__(
                                                    cls,
                                                    _arg,
                                                    _configuration=_configuration,
                                                )
                                        
                                            def __getitem__(self, i: int) -> MetaOapg.items:
                                                return super().__getitem__(i)
                                        __annotations__ = {
                                            "id": id,
                                            "days": days,
                                            "must_charge_start": must_charge_start,
                                            "must_charge_duration": must_charge_duration,
                                            "periods": periods,
                                        }
                                
                                @typing.overload
                                def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
                                
                                @typing.overload
                                def __getitem__(self, name: typing_extensions.Literal["days"]) -> MetaOapg.properties.days: ...
                                
                                @typing.overload
                                def __getitem__(self, name: typing_extensions.Literal["must_charge_start"]) -> MetaOapg.properties.must_charge_start: ...
                                
                                @typing.overload
                                def __getitem__(self, name: typing_extensions.Literal["must_charge_duration"]) -> MetaOapg.properties.must_charge_duration: ...
                                
                                @typing.overload
                                def __getitem__(self, name: typing_extensions.Literal["periods"]) -> MetaOapg.properties.periods: ...
                                
                                @typing.overload
                                def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
                                
                                def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "days", "must_charge_start", "must_charge_duration", "periods", ], str]):
                                    # dict_instance[name] accessor
                                    return super().__getitem__(name)
                                
                                
                                @typing.overload
                                def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> typing.Union[MetaOapg.properties.id, schemas.Unset]: ...
                                
                                @typing.overload
                                def get_item_oapg(self, name: typing_extensions.Literal["days"]) -> typing.Union[MetaOapg.properties.days, schemas.Unset]: ...
                                
                                @typing.overload
                                def get_item_oapg(self, name: typing_extensions.Literal["must_charge_start"]) -> typing.Union[MetaOapg.properties.must_charge_start, schemas.Unset]: ...
                                
                                @typing.overload
                                def get_item_oapg(self, name: typing_extensions.Literal["must_charge_duration"]) -> typing.Union[MetaOapg.properties.must_charge_duration, schemas.Unset]: ...
                                
                                @typing.overload
                                def get_item_oapg(self, name: typing_extensions.Literal["periods"]) -> typing.Union[MetaOapg.properties.periods, schemas.Unset]: ...
                                
                                @typing.overload
                                def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
                                
                                def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "days", "must_charge_start", "must_charge_duration", "periods", ], str]):
                                    return super().get_item_oapg(name)
                                
                            
                                def __new__(
                                    cls,
                                    *_args: typing.Union[dict, frozendict.frozendict, ],
                                    id: typing.Union[MetaOapg.properties.id, str, schemas.Unset] = schemas.unset,
                                    days: typing.Union[MetaOapg.properties.days, str, schemas.Unset] = schemas.unset,
                                    must_charge_start: typing.Union[MetaOapg.properties.must_charge_start, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                                    must_charge_duration: typing.Union[MetaOapg.properties.must_charge_duration, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                                    periods: typing.Union[MetaOapg.properties.periods, list, tuple, schemas.Unset] = schemas.unset,
                                    _configuration: typing.Optional[schemas.Configuration] = None,
                                    **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                                ) -> 'items':
                                    return super().__new__(
                                        cls,
                                        *_args,
                                        id=id,
                                        days=days,
                                        must_charge_start=must_charge_start,
                                        must_charge_duration=must_charge_duration,
                                        periods=periods,
                                        _configuration=_configuration,
                                        **kwargs,
                                    )
                    
                        def __new__(
                            cls,
                            _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]], typing.List[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]]],
                            _configuration: typing.Optional[schemas.Configuration] = None,
                        ) -> 'days':
                            return super().__new__(
                                cls,
                                _arg,
                                _configuration=_configuration,
                            )
                    
                        def __getitem__(self, i: int) -> MetaOapg.items:
                            return super().__getitem__(i)
                    enable_charge_from_grid = schemas.BoolSchema
                    enable_discharge_to_grid = schemas.BoolSchema
                    __annotations__ = {
                        "id": id,
                        "start": start,
                        "days": days,
                        "enable_charge_from_grid": enable_charge_from_grid,
                        "enable_discharge_to_grid": enable_discharge_to_grid,
                    }
            
            @typing.overload
            def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
            
            @typing.overload
            def __getitem__(self, name: typing_extensions.Literal["start"]) -> MetaOapg.properties.start: ...
            
            @typing.overload
            def __getitem__(self, name: typing_extensions.Literal["days"]) -> MetaOapg.properties.days: ...
            
            @typing.overload
            def __getitem__(self, name: typing_extensions.Literal["enable_charge_from_grid"]) -> MetaOapg.properties.enable_charge_from_grid: ...
            
            @typing.overload
            def __getitem__(self, name: typing_extensions.Literal["enable_discharge_to_grid"]) -> MetaOapg.properties.enable_discharge_to_grid: ...
            
            @typing.overload
            def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
            
            def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "start", "days", "enable_charge_from_grid", "enable_discharge_to_grid", ], str]):
                # dict_instance[name] accessor
                return super().__getitem__(name)
            
            
            @typing.overload
            def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> typing.Union[MetaOapg.properties.id, schemas.Unset]: ...
            
            @typing.overload
            def get_item_oapg(self, name: typing_extensions.Literal["start"]) -> typing.Union[MetaOapg.properties.start, schemas.Unset]: ...
            
            @typing.overload
            def get_item_oapg(self, name: typing_extensions.Literal["days"]) -> typing.Union[MetaOapg.properties.days, schemas.Unset]: ...
            
            @typing.overload
            def get_item_oapg(self, name: typing_extensions.Literal["enable_charge_from_grid"]) -> typing.Union[MetaOapg.properties.enable_charge_from_grid, schemas.Unset]: ...
            
            @typing.overload
            def get_item_oapg(self, name: typing_extensions.Literal["enable_discharge_to_grid"]) -> typing.Union[MetaOapg.properties.enable_discharge_to_grid, schemas.Unset]: ...
            
            @typing.overload
            def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
            
            def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "start", "days", "enable_charge_from_grid", "enable_discharge_to_grid", ], str]):
                return super().get_item_oapg(name)
            
        
            def __new__(
                cls,
                *_args: typing.Union[dict, frozendict.frozendict, ],
                id: typing.Union[MetaOapg.properties.id, str, schemas.Unset] = schemas.unset,
                start: typing.Union[MetaOapg.properties.start, str, schemas.Unset] = schemas.unset,
                days: typing.Union[MetaOapg.properties.days, list, tuple, schemas.Unset] = schemas.unset,
                enable_charge_from_grid: typing.Union[MetaOapg.properties.enable_charge_from_grid, bool, schemas.Unset] = schemas.unset,
                enable_discharge_to_grid: typing.Union[MetaOapg.properties.enable_discharge_to_grid, bool, schemas.Unset] = schemas.unset,
                _configuration: typing.Optional[schemas.Configuration] = None,
                **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
            ) -> 'items':
                return super().__new__(
                    cls,
                    *_args,
                    id=id,
                    start=start,
                    days=days,
                    enable_charge_from_grid=enable_charge_from_grid,
                    enable_discharge_to_grid=enable_discharge_to_grid,
                    _configuration=_configuration,
                    **kwargs,
                )

    def __new__(
        cls,
        _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]], typing.List[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]]],
        _configuration: typing.Optional[schemas.Configuration] = None,
    ) -> 'TariffSeasons':
        return super().__new__(
            cls,
            _arg,
            _configuration=_configuration,
        )

    def __getitem__(self, i: int) -> MetaOapg.items:
        return super().__getitem__(i)