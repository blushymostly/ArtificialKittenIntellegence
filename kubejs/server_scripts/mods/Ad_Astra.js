ServerEvents.recipes(event => {
    //Replace all Steel plates & rods
    event.replaceInput({ id: /^ad_astra:.*/ }, 'ad_astra:steel_rod', 'gtceu:steel_rod')
    event.replaceInput({ id: /^ad_astra:.*/ }, 'ad_astra:steel_plate', 'gtceu:steel_plate')

    const quarkTechArmor = [
        "gtceu:quarktech_helmet",
        "gtceu:quarktech_chestplate",
        "gtceu:advanced_quarktech_chestplate",
        "gtceu:quarktech_leggings",
        "gtceu:quarktech_boots"
    ]
})