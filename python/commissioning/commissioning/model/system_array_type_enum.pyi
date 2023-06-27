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


class SystemArrayTypeEnum(
    schemas.EnumBase,
    schemas.StrSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Type of array installed. All other values will be ignored. To unset array_type, pass null.
    """
    
    @schemas.classproperty
    def FIXED_OPEN_RACK(cls):
        return cls("fixed_open_rack")
    
    @schemas.classproperty
    def FIXED_ROOF_MOUNT(cls):
        return cls("fixed_roof_mount")
    
    @schemas.classproperty
    def SINGLE_AXIS_TRACKING(cls):
        return cls("single_axis_tracking")
    
    @schemas.classproperty
    def SINGLE_AXIS_BACKTRACKING(cls):
        return cls("single_axis_backtracking")
    
    @schemas.classproperty
    def DUAL_AXIS_TRACKING(cls):
        return cls("dual_axis_tracking")