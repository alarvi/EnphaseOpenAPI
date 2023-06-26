# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from commissioning.paths.pv_manufacturers import Api

from commissioning.paths import PathValues

path = PathValues.PV_MANUFACTURERS