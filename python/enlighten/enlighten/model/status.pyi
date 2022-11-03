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


class Status(
    schemas.EnumBase,
    schemas.StrSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    The current status of the system.
* `comm` - One or more Envoys on the system are not communicating to Enlighten.
* `power` - There is a production issue on the system.
* `meter` - There is a communication problem between an Envoy and a revenue-grade meter on the system.
* `meter_issue` - One or more meters on the system are reporting unusual measurements.
* `micro` - There is a communication problem between an Envoy and microinverters that it monitors.
* `battery` - There is a communication problem between an Envoy and an AC battery on the system.
* `storage_idle` - An AC battery on the system has not changed its state of charge for more than 72 hours.
* `normal` - The system is operating normally.
    """
    
    @schemas.classproperty
    def COMM(cls):
        return cls("comm")
    
    @schemas.classproperty
    def POWER(cls):
        return cls("power")
    
    @schemas.classproperty
    def METER(cls):
        return cls("meter")
    
    @schemas.classproperty
    def METER_ISSUE(cls):
        return cls("meter_issue")
    
    @schemas.classproperty
    def MICRO(cls):
        return cls("micro")
    
    @schemas.classproperty
    def BATTERY(cls):
        return cls("battery")
    
    @schemas.classproperty
    def STORAGE_IDLE(cls):
        return cls("storage_idle")
    
    @schemas.classproperty
    def NORMAL(cls):
        return cls("normal")
