/**
 * Rework for ore smelting recipes
 */

ServerEvents.recipes(event => {
    // Remvoe overlapping ore blocks to ingot/dust recipes
    event.remove({ id: "minecraft:copper_ingot_from_smelting_copper_ore" })
    event.remove({ id: "minecraft:gold_ingot_from_smelting_deepslate_gold_ore" })
    event.remove({ id: "minecraft:iron_ingot_from_smelting_deepslate_iron_ore" })
    event.remove({ id: "minecraft:coal_from_smelting_coal_ore" })
    event.remove({ id: "minecraft:diamond_from_smelting_deepslate_diamond_ore" })
    event.remove({ id: "minecraft:emerald_from_smelting_deepslate_emerald_ore" })
    event.remove({ id: "minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore" })
    event.remove({ id: 'railcraft:bronze_ingot_crafted_with_ingots'})
    event.remove({ id: 'railcraft:invar_ingot_crafted_with_ingots'})
    event.remove({ id: 'railcraft:brass_ingot_crafted_with_ingots'})


// Remove overlapping raw ore to ingot recipes
    
    // event.remove({ id: "" })
});