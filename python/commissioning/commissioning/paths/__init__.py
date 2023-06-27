# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from commissioning.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    PARTNER_ACTIVATIONS = "/partner/activations"
    PARTNER_ACTIVATIONS_ID = "/partner/activations/{id}"
    ACTIVATIONS_ID = "/activations/{id}"
    ACTIVATIONS_ACTIVATION_ID_USERS_USER_ID = "/activations/{activation_id}/users/{user_id}"
    ACTIVATIONS_ACTIVATION_ID_OPS_PRODUCTION_MODE = "/activations/{activation_id}/ops/production_mode"
    COMPANIES_COMPANY_ID_USERS = "/companies/{company_id}/users"
    USERS = "/users"
    USERS_SEARCH = "/users/search"
    COMPANIES_COMPANY_ID_USERS_USER_ID = "/companies/{company_id}/users/{user_id}"
    USERS_USER_ID = "/users/{user_id}"
    USERS_SELF = "/users/self"
    COMPANIES_SELF_BRANCHES = "/companies/self/branches"
    ACTIVATIONS_ACTIVATION_ID_ESTIMATE = "/activations/{activation_id}/estimate"
    GRID_PROFILES = "/grid_profiles"
    SYSTEMS_SYSTEM_ID_METERS_SERIAL_NUMBER = "/systems/{system_id}/meters/{serial_number}"
    ACTIVATIONS_ACTIVATION_ID_METERS_SERIAL_NUMBER_METER_CONTROL = "/activations/{activation_id}/meters/{serial_number}/meter_control"
    PV_MANUFACTURERS = "/pv_manufacturers"
    PV_MANUFACTURERS_PV_MANUFACTURER_ID_PV_MODELS = "/pv_manufacturers/{pv_manufacturer_id}/pv_models"
    SYSTEMS_CONFIG_SYSTEM_ID_TARIFF = "/systems/config/{system_id}/tariff"
    SYSTEMS_SYSTEM_ID_ARRAYS = "/systems/{system_id}/arrays"
    SYSTEMS_SYSTEM_ID_ARRAYS_ID = "/systems/{system_id}/arrays/{id}"