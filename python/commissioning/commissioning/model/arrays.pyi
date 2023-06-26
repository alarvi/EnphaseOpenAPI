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


class Arrays(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        
        class properties:
            system_id = schemas.IntSchema
            created_at = schemas.Int64Schema
            updated_at = schemas.Int64Schema
            angle = schemas.IntSchema
            
            
            class arrays(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['Array']:
                        return Array
            
                def __new__(
                    cls,
                    _arg: typing.Union[typing.Tuple['Array'], typing.List['Array']],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'arrays':
                    return super().__new__(
                        cls,
                        _arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> 'Array':
                    return super().__getitem__(i)
            
            
            class inventory(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    items = schemas.StrSchema
            
                def __new__(
                    cls,
                    _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, str, ]], typing.List[typing.Union[MetaOapg.items, str, ]]],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'inventory':
                    return super().__new__(
                        cls,
                        _arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> MetaOapg.items:
                    return super().__getitem__(i)
            
            
            class inventory_details(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    
                    class items(
                        schemas.DictSchema
                    ):
                    
                    
                        class MetaOapg:
                            
                            class properties:
                                type = schemas.StrSchema
                                count = schemas.IntSchema
                                serialNum = schemas.StrSchema
                                __annotations__ = {
                                    "type": type,
                                    "count": count,
                                    "serialNum": serialNum,
                                }
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["type"]) -> MetaOapg.properties.type: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["count"]) -> MetaOapg.properties.count: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["serialNum"]) -> MetaOapg.properties.serialNum: ...
                        
                        @typing.overload
                        def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
                        
                        def __getitem__(self, name: typing.Union[typing_extensions.Literal["type", "count", "serialNum", ], str]):
                            # dict_instance[name] accessor
                            return super().__getitem__(name)
                        
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["type"]) -> typing.Union[MetaOapg.properties.type, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["count"]) -> typing.Union[MetaOapg.properties.count, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["serialNum"]) -> typing.Union[MetaOapg.properties.serialNum, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
                        
                        def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["type", "count", "serialNum", ], str]):
                            return super().get_item_oapg(name)
                        
                    
                        def __new__(
                            cls,
                            *_args: typing.Union[dict, frozendict.frozendict, ],
                            type: typing.Union[MetaOapg.properties.type, str, schemas.Unset] = schemas.unset,
                            count: typing.Union[MetaOapg.properties.count, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            serialNum: typing.Union[MetaOapg.properties.serialNum, str, schemas.Unset] = schemas.unset,
                            _configuration: typing.Optional[schemas.Configuration] = None,
                            **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                        ) -> 'items':
                            return super().__new__(
                                cls,
                                *_args,
                                type=type,
                                count=count,
                                serialNum=serialNum,
                                _configuration=_configuration,
                                **kwargs,
                            )
            
                def __new__(
                    cls,
                    _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]], typing.List[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]]],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'inventory_details':
                    return super().__new__(
                        cls,
                        _arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> MetaOapg.items:
                    return super().__getitem__(i)
            
            
            class layers(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    
                    class items(
                        schemas.DictSchema
                    ):
                    
                    
                        class MetaOapg:
                            
                            class properties:
                                file = schemas.StrSchema
                                scale = schemas.IntSchema
                                angle = schemas.IntSchema
                                opacity = schemas.IntSchema
                                width = schemas.IntSchema
                                height = schemas.IntSchema
                                left = schemas.IntSchema
                                top = schemas.IntSchema
                                __annotations__ = {
                                    "file": file,
                                    "scale": scale,
                                    "angle": angle,
                                    "opacity": opacity,
                                    "width": width,
                                    "height": height,
                                    "left": left,
                                    "top": top,
                                }
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["file"]) -> MetaOapg.properties.file: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["scale"]) -> MetaOapg.properties.scale: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["angle"]) -> MetaOapg.properties.angle: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["opacity"]) -> MetaOapg.properties.opacity: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["width"]) -> MetaOapg.properties.width: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["height"]) -> MetaOapg.properties.height: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["left"]) -> MetaOapg.properties.left: ...
                        
                        @typing.overload
                        def __getitem__(self, name: typing_extensions.Literal["top"]) -> MetaOapg.properties.top: ...
                        
                        @typing.overload
                        def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
                        
                        def __getitem__(self, name: typing.Union[typing_extensions.Literal["file", "scale", "angle", "opacity", "width", "height", "left", "top", ], str]):
                            # dict_instance[name] accessor
                            return super().__getitem__(name)
                        
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["file"]) -> typing.Union[MetaOapg.properties.file, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["scale"]) -> typing.Union[MetaOapg.properties.scale, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["angle"]) -> typing.Union[MetaOapg.properties.angle, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["opacity"]) -> typing.Union[MetaOapg.properties.opacity, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["width"]) -> typing.Union[MetaOapg.properties.width, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["height"]) -> typing.Union[MetaOapg.properties.height, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["left"]) -> typing.Union[MetaOapg.properties.left, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: typing_extensions.Literal["top"]) -> typing.Union[MetaOapg.properties.top, schemas.Unset]: ...
                        
                        @typing.overload
                        def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
                        
                        def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["file", "scale", "angle", "opacity", "width", "height", "left", "top", ], str]):
                            return super().get_item_oapg(name)
                        
                    
                        def __new__(
                            cls,
                            *_args: typing.Union[dict, frozendict.frozendict, ],
                            file: typing.Union[MetaOapg.properties.file, str, schemas.Unset] = schemas.unset,
                            scale: typing.Union[MetaOapg.properties.scale, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            angle: typing.Union[MetaOapg.properties.angle, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            opacity: typing.Union[MetaOapg.properties.opacity, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            width: typing.Union[MetaOapg.properties.width, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            height: typing.Union[MetaOapg.properties.height, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            left: typing.Union[MetaOapg.properties.left, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            top: typing.Union[MetaOapg.properties.top, decimal.Decimal, int, schemas.Unset] = schemas.unset,
                            _configuration: typing.Optional[schemas.Configuration] = None,
                            **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                        ) -> 'items':
                            return super().__new__(
                                cls,
                                *_args,
                                file=file,
                                scale=scale,
                                angle=angle,
                                opacity=opacity,
                                width=width,
                                height=height,
                                left=left,
                                top=top,
                                _configuration=_configuration,
                                **kwargs,
                            )
            
                def __new__(
                    cls,
                    _arg: typing.Union[typing.Tuple[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]], typing.List[typing.Union[MetaOapg.items, dict, frozendict.frozendict, ]]],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'layers':
                    return super().__new__(
                        cls,
                        _arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> MetaOapg.items:
                    return super().__getitem__(i)
            __annotations__ = {
                "system_id": system_id,
                "created_at": created_at,
                "updated_at": updated_at,
                "angle": angle,
                "arrays": arrays,
                "inventory": inventory,
                "inventory_details": inventory_details,
                "layers": layers,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["system_id"]) -> MetaOapg.properties.system_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["created_at"]) -> MetaOapg.properties.created_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["updated_at"]) -> MetaOapg.properties.updated_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["angle"]) -> MetaOapg.properties.angle: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["arrays"]) -> MetaOapg.properties.arrays: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["inventory"]) -> MetaOapg.properties.inventory: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["inventory_details"]) -> MetaOapg.properties.inventory_details: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["layers"]) -> MetaOapg.properties.layers: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["system_id", "created_at", "updated_at", "angle", "arrays", "inventory", "inventory_details", "layers", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["system_id"]) -> typing.Union[MetaOapg.properties.system_id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["created_at"]) -> typing.Union[MetaOapg.properties.created_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["updated_at"]) -> typing.Union[MetaOapg.properties.updated_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["angle"]) -> typing.Union[MetaOapg.properties.angle, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["arrays"]) -> typing.Union[MetaOapg.properties.arrays, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["inventory"]) -> typing.Union[MetaOapg.properties.inventory, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["inventory_details"]) -> typing.Union[MetaOapg.properties.inventory_details, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["layers"]) -> typing.Union[MetaOapg.properties.layers, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["system_id", "created_at", "updated_at", "angle", "arrays", "inventory", "inventory_details", "layers", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *_args: typing.Union[dict, frozendict.frozendict, ],
        system_id: typing.Union[MetaOapg.properties.system_id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        created_at: typing.Union[MetaOapg.properties.created_at, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        updated_at: typing.Union[MetaOapg.properties.updated_at, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        angle: typing.Union[MetaOapg.properties.angle, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        arrays: typing.Union[MetaOapg.properties.arrays, list, tuple, schemas.Unset] = schemas.unset,
        inventory: typing.Union[MetaOapg.properties.inventory, list, tuple, schemas.Unset] = schemas.unset,
        inventory_details: typing.Union[MetaOapg.properties.inventory_details, list, tuple, schemas.Unset] = schemas.unset,
        layers: typing.Union[MetaOapg.properties.layers, list, tuple, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'Arrays':
        return super().__new__(
            cls,
            *_args,
            system_id=system_id,
            created_at=created_at,
            updated_at=updated_at,
            angle=angle,
            arrays=arrays,
            inventory=inventory,
            inventory_details=inventory_details,
            layers=layers,
            _configuration=_configuration,
            **kwargs,
        )

from commissioning.model.array import Array
