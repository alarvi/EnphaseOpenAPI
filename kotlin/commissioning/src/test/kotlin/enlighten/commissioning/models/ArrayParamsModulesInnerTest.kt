/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package enlighten.commissioning.models

import io.kotlintest.shouldBe
import io.kotlintest.specs.ShouldSpec

import enlighten.commissioning.models.ArrayParamsModulesInner

class ArrayParamsModulesInnerTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of ArrayParamsModulesInner
        //val modelInstance = ArrayParamsModulesInner()

        // to test the property `left` - Left axis position of module w.r.t Array. Increase the value to move the module to the right, and decrease to move it to the left.
        should("test left") {
            // uncomment below to test the property
            //modelInstance.left shouldBe ("TODO")
        }

        // to test the property `top` - Top axis position of module w.r.t Array. Increase the value to move the module up, and decrease to move it down.
        should("test top") {
            // uncomment below to test the property
            //modelInstance.top shouldBe ("TODO")
        }

        // to test the property `angle` - Angle of the module. Rotate the module clockwise by the given value w.r.t array angle. For example to rotate the array clockwise by 90 degrees pass 90.
        should("test angle") {
            // uncomment below to test the property
            //modelInstance.angle shouldBe ("TODO")
        }

        // to test the property `serialNum` - Inverter serial number mapped with this module.
        should("test serialNum") {
            // uncomment below to test the property
            //modelInstance.serialNum shouldBe ("TODO")
        }

        // to test the property `id` - ID of the module. ID cannot be changed. It is only used to identify the array that needs to be updated.
        should("test id") {
            // uncomment below to test the property
            //modelInstance.id shouldBe ("TODO")
        }

    }
}