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


class SystemSortByEnum(
    schemas.EnumBase,
    schemas.StrSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Returns list of systems sorted by <sort_by> field. To get ASC order sorted list, user sort_by = <key>. To get DESC order sorted list, use sort_by = (-)<key>. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID.
    """


    class MetaOapg:
        enum_value_to_name = {
            "id": "ID",
            "name": "NAME",
            "last_report_date": "LAST_REPORT_DATE",
            "-id": "ID",
            "-name": "NAME",
            "-last_report_date": "LAST_REPORT_DATE",
        }
    
    @schemas.classproperty
    def ID(cls):
        return cls("id")
    
    @schemas.classproperty
    def NAME(cls):
        return cls("name")
    
    @schemas.classproperty
    def LAST_REPORT_DATE(cls):
        return cls("last_report_date")
    
    @schemas.classproperty
    def ID(cls):
        return cls("-id")
    
    @schemas.classproperty
    def NAME(cls):
        return cls("-name")
    
    @schemas.classproperty
    def LAST_REPORT_DATE(cls):
        return cls("-last_report_date")