/**
 * Hide items, fluids, and recipes in EMI/JEI.
 * "/kjs inventory" and "/kjs hand" are your friends for finding item and fluid IDs.
 *
 * If you seek to both hide an item/fluid and remove it from all recipes and tags, then look into
 * KubeJS/startup_scripts/nukeLists/item.js and KubeJS/startup_scripts/nukeLists/fluid.js
 */

JEIEvents.hideItems(event => {

    // Hide excess permutations of AE2 Facades
    event.hide("ae2:facade")
    event.hide(/ae2:facade/)
    event.add(Item.of('ae2:facade', '{item:"minecraft:stone"}'))

    // Hide excess permutations of EnderIO Clear glass, Fused Quartz
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)

    // Railcraft
    event.hide(["railcraft:saltpeter_ore", "railcraft:deepslate_lead_ore", "railcraft:deepslate_nickel_ore", "railcraft:deepslate_silver_ore", "railcraft:deepslate_tin_ore", "railcraft:deepslate_zinc_ore", "railcraft:lead_ore", "railcraft:silver_ore", "railcraft:tin_ore", "railcraft:zinc_ore"])
    event.hide("railcraft:copper_plate")

    event.hide("occultism:obsidian_dust")
    event.hide("occultism:raw_silver")
    event.hide("occultism:silver_ingot")
    event.hide("occultism:silver_nugget")
    event.hide("occultism:silver_ore")
    event.hide("occultism:silver_ore_deepslate")
    event.hide("occultism:iron_dust")
    event.hide("occultism:gold_dust")
    event.hide("occultism:copper_dust")
    event.hide("occultism:silver_dust")
    event.hide("occultism:debug_foliot_lumberjack")
    event.hide("occultism:debug_foliot_transport_items")
    event.hide("occultism:debug_foliot_cleaner")
    event.hide("occultism:debug_foliot_trader")
    event.hide("occultism:debug_djinni_manage_machine")
    event.hide("occultism:debug_djinni_test")
    event.hide("occultism:lighted_air")
    event.hide("occultism:jei_dummy/none")
    event.hide("occultism:jei_dummy/require_sacrifice")
    event.hide("occultism:jei_dummy/require_item_use")
    

// APOTHEOSIS
	event.hide('apotheosis:potion_charm')

    
});    