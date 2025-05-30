/**
 * Custom recipes for stuff that generates infinite amount of something
 */
ServerEvents.recipes(event => {
    // Infinite Cobble/Water cells
    event.replaceInput({ id: "expatternprovider:water_cell" }, "minecraft:water_bucket", "gtceu:infinite_water_cover")
    event.replaceInput({ id: "expatternprovider:cobblestone_cell" }, "minecraft:water_bucket", "gtceu:infinite_water_cover")
    event.replaceInput({ id: "expatternprovider:water_cell" }, "minecraft:diamond", "gtceu:mythril_plate")
    event.replaceInput({ id: "expatternprovider:cobblestone_cell" }, "minecraft:diamond", "gtceu:mythril_plate")

})