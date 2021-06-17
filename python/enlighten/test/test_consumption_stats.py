"""
    The Enlighten Systems API

    The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.  # noqa: E501

    The version of the OpenAPI document: 2.0
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import enlighten
from enlighten.model.consumption_stats_intervals import ConsumptionStatsIntervals
from enlighten.model.meta import Meta
globals()['ConsumptionStatsIntervals'] = ConsumptionStatsIntervals
globals()['Meta'] = Meta
from enlighten.model.consumption_stats import ConsumptionStats


class TestConsumptionStats(unittest.TestCase):
    """ConsumptionStats unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testConsumptionStats(self):
        """Test ConsumptionStats"""
        # FIXME: construct object with mandatory attributes with example values
        # model = ConsumptionStats()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()