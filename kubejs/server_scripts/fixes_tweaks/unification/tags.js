/**
 * unify chipped since they dont do that anymore
 * @private
 * @param {TagEvent.Item & TagEvent.Block} event
 */
const unifyChisel = (event) => {
    // regex here means
    // `^` = beginning, `$` = end, `.+` = anything that isnt whitespace, any length

    const IRON_BLOCKLIKES = /^chipped:(?!.+_raw_).+_iron_block$/;
    const GOLD_BLOCKLIKES = /^chipped:(?!.+_raw_).+_gold_block$/;
    // event.add('forge:glass/colorless', /^chipped:.+_glass$/) // most of the glass here only have fancy trims, but they are all not dyed
    event.add("forge:cobblestone/normal", /^chipped:.+(?!_mossy)_cobblestone(_bricks)?$/)
    event.add("forge:cobblestone/mossy", /^chipped:.+_mossy_cobblestone(_bricks)?$/)
    event.add("forge:cobblestone", /^chipped:.+_cobblestone(_bricks)?$/)
    event.add("forge:storage_blocks/glowstone", /^chipped:.+_glowstone$/)
    event.add("forge:storage_blocks/redstone", /^chipped:.+_redstone_block$/)
    event.add("forge:storage_blocks/iron", IRON_BLOCKLIKES)
    event.add("forge:storage_blocks/gold", GOLD_BLOCKLIKES)
    event.add("forge:storage_blocks/diamond", /^chipped:.+_diamond_block$/);
    event.add("forge:storage_blocks/emerald", /^chipped:.+_emerald_block$/);
    event.add("forge:storage_blocks/lapis", /^chipped:.+_lapis_block$/);

    event.add("minecraft:planks", /^chipped:.+_planks$/)

    event.add("forge:glass", /^chipped:.+_glass(_pillar)?$/)
    event.add("forge:storage_blocks", [IRON_BLOCKLIKES, GOLD_BLOCKLIKES, /^chipped:.+_diamond_block$/, /^chipped:.+_emerald_block$/, /^chipped:.+_glowstone$/, /^chipped:.+_lapis_block$/, /^chipped:.+_redstone_block$/])
    event.add("minecraft:piglin_loved", GOLD_BLOCKLIKES)
}

ServerEvents.tags("item", event => {
    event.add("ae2:all_fluix", "gtceu:fluix_gem")
    event.add("ae2:all_certus_quartz", "gtceu:charged_certus_quartz_gem")
    event.add("forge:gems/certus_quartz", "gtceu:charged_certus_quartz_gem")
    event.add("forge:singularities/ultimate", "kubejs:mote_of_omnium")
    event.add("forge:singularities/ultimate", "extendedcrafting:ultimate_singularity")
    event.add("forge:ingots/electrum_flux", "redstone_arsenal:flux_ingot")
    event.add("forge:dusts/electrum_flux", "redstone_arsenal:flux_dust")
    event.add("forge:nuggets/electrum_flux", "redstone_arsenal:flux_nugget")
    event.add("forge:gears/electrum_flux", "redstone_arsenal:flux_gear")
    event.add("forge:dusts/quartz", "gtceu:nether_quartz_dust")

    // can't replace tags in recipes so we just add the tag to the item instead
    event.add("forge:ingots/redstone_alloy", "gtceu:red_alloy_ingot")
    event.add("forge:ingots/copper_alloy", "gtceu:electrical_steel_ingot")
    event.add("forge:storage_blocks/coal_coke", "#forge:storage_blocks/coke")
    event.add("forge:coal_coke", "#forge:gems/coke")

    const decorremap = [["etrium", "diamond"], ["desh", "bronze"], ["ostrum", "lead"], ["calorite", "red_alloy"]]
    decorremap.forEach(([mat, remat]) => {
        event.add(`ad_astra:${mat}_plates`, `gtceu:${remat}_plate`)
        event.add(`ad_astra:${mat}_ingots`, `gtceu:${remat}_ingot`)
        event.add(`ad_astra:${mat}_blocks`, `gtceu:${remat}_block`)
    })

    event.remove("forge:gears/wood", "enderio:wood_gear")
    event.remove("forge:gears/stone", "enderio:stone_gear")
    event.remove("forge:gears/iron", "enderio:iron_gear")
    event.remove("forge:gears/dark_steel", "enderio:dark_bimetal_gear")

    // enderio!!!!
    event.add("forge:heads", "enderio:enderman_head")

    // Sawdust
    event.add("forge:sawdust", "#forge:dusts/wood")

    // For stonecutting Marble
    event.add("kitpaws:marble", /^(gtceu:(marble|polished_marble|marble_bricks|cracked_marble_bricks|chiseled_marble|marble_tile|marble_small_tile|marble_windmill_a|marble_windmill_b|small_marble_bricks|square_marble_bricks))$/)

    // AE2 P2P Attunements
    event.add("mae2:p2p_attunements/pattern_p2p_tunnel", "expatternprovider:pattern_modifier");
    event.add("mae2:p2p_attunements/pattern_p2p_tunnel", "expatternprovider:ex_pattern_provider");
    event.add("mae2:p2p_attunements/pattern_p2p_tunnel", "expatternprovider:ex_pattern_provider_part");

    unifyChisel(event);
})