/**
 * Hide items, fluids, and recipes in EMI/JEI.
 * "/kjs inventory" and "/kjs hand" are your friends for finding item and fluid IDs.
 *
 * If you seek to both hide an item/fluid and remove it from all recipes and tags, then look into
 * KubeJS/startup_scripts/nukeLists/item.js and KubeJS/startup_scripts/nukeLists/fluid.js
 */
const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')


JEIEvents.hideItems(event => {
    //Enderio cleanup
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)
    event.hide(/enderio:powdered_.*/)
    event.hide(/enderio:.*_ingot/)
    event.hide(/enderio:.*_nugget/)
    event.hide(/enderio:.*_block/)
    event.hide('enderio:broken_spawner')

    //Hides useless items
    event.hide(/hammerlib:.*/)

    // Iron Furnace
    event.hide('ironfurnaces:million_furnace') // rainbow furnace
    event.hide(['ironfurnaces:item_spooky', 'ironfurnaces:item_xmas']) // cosmetic items
    // TODO renable this again. why in the fuck did we disable this?
    // No upgrade consumables to go from diamond to obsidian or iron to silver without re-enabling more furnaces
    event.hide(['ironfurnaces:upgrade_iron', 'ironfurnaces:upgrade_gold', 'ironfurnaces:upgrade_diamond', 'ironfurnaces:upgrade_emerald', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2'])
    event.hide(['ironfurnaces:crystal_furnace', 'ironfurnaces:emerald_furnace', 'ironfurnaces:item_linker', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_coal', 'ironfurnaces:allthemodium_furnace', 'ironfurnaces:vibranium_furnace', 'ironfurnaces:unobtainium_furnace', 'ironfurnaces:upgrade_allthemodium', 'ironfurnaces:upgrade_vibranium', 'ironfurnaces:upgrade_unobtainium', 'ironfurnaces:item_heater', 'ironfurnaces:augment_blasting', 'ironfurnaces:augment_smoking', 'ironfurnaces:heater', 'ironfurnaces:augment_generator'])

    //Jetpacks
    event.hide([Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:dark_soularium"}').strongNBT(), Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:fluxed"}').strongNBT(), 'ironjetpacks:capacitor', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}').strongNBT()])
    event.hide(['ironjetpacks:basic_coil', 'ironjetpacks:advanced_coil', 'ironjetpacks:elite_coil', 'ironjetpacks:ultimate_coil'])
    event.hide(/ironjetpacks:thruster/)

    // Ad Astra
    event.hide(['ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe', 'ad_astra:photovoltaic_etrium_cell', 'ad_astra:photovoltaic_vesnium_cell', 'ad_astra:engine_frame', 'ad_astra:fan', 'ad_astra:etrionic_capacitor', 'ad_astra:etrionic_core', 'ad_astra:energizer', 'ad_astra:steel_cable', 'ad_astra:desh_cable', 'ad_astra:cable_duct', 'ad_astra:fluid_pipe_duct', 'ad_astra:coal_generator', 'ad_astra:compressor', 'ad_astra:etrionic_blast_furnace', 'ad_astra:fuel_refinery', 'ad_astra:solar_panel', 'ad_astra:water_pump', 'ad_astra:energizer', 'ad_astra:cryo_freezer'])
    event.hide(/ad_astra:.*_bucket/)
    event.hide(/ad_astra:.*_ingot/)
    event.hide(/ad_astra:.*_plate$/)
    event.hide(/ad_astra:.*_nugget/)
    event.hide(/ad_astra:.*_rod/)
    event.hide(/ad_astra:.*_ore/)
    event.hide(/ad_astra:raw_.*/)

    // Hide excess permutations of AE2 Facades
    event.hide("ae2:facade")
    event.hide(/ae2:facade/)

    // Hide excess permutations of EnderIO Clear glass, Fused Quartz
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)

    // Chisels&Bits
    event.hide('chiselsandbits:block_bit')

    // Simple Compacting Drawers (TEMPORARY UNTIL BUG FIXED)
    if (doCompacting) {
        event.hide("functionalstorage:simple_compacting_drawer")
        event.hide("functionalstorage:framed_simple_compacting_drawer")
    }

    // Hide GT ores to prevent clutter
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        event.hide([
            `gtceu:granite_${id.name}_ore`,
            `gtceu:diorite_${id.name}_ore`,
            `gtceu:andesite_${id.name}_ore`,
            `gtceu:red_granite_${id.name}_ore`,
            `gtceu:marble_${id.name}_ore`,
            `gtceu:deepslate_${id.name}_ore`,
            `gtceu:tuff_${id.name}_ore`,
            `gtceu:sand_${id.name}_ore`,
            `gtceu:red_sand_${id.name}_ore`,
            `gtceu:gravel_${id.name}_ore`,
            `gtceu:basalt_${id.name}_ore`,
            `gtceu:blackstone_${id.name}_ore`,
            `gtceu:moon_${id.name}_ore`,
            `gtceu:venus_${id.name}_ore`,
            `gtceu:mercury_${id.name}_ore`,
            `gtceu:mars_${id.name}_ore`,
            `gtceu:glacio_${id.name}_ore`
        ])
    })
})

JEIEvents.addItems(event => {
    // Add example AE2 facade after failing to hide all other facade permutations
    event.add(Item.of("ae2:facade", { item: "gtceu:infinity_block" }))

    // Iron Jetpacks' Cells are hard to selectively remove due to NBT shenanigans
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:hardened"}))
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:reinforced"}))
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:resonant"}))

})

JEIEvents.hideFluids(event => {
    // Hide Ad Astra fluids
    Fluid.getTypes().filter(id=>id.includes("ad_astra")).forEach(id => event.hide(id))

    // Hide Soph Core fluids
    event.hide("sophisticatedcore:xp_still")
})

JEIEvents.removeCategories(event => {
    event.remove('enderio:alloy_smelting')
    event.remove('twilightforest:uncrafting')
    event.remove('ad_astra:alloying')
})