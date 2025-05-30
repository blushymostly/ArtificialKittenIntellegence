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

