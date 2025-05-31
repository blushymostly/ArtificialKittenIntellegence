/**
 * Custom recipes for Ad Astra
 */
ServerEvents.recipes(event => {
    // Replace all Steel plates & rods
    event.replaceInput({ id: /^ad_astra:.*/ }, "ad_astra:steel_rod", "gtceu:steel_rod")
    event.replaceInput({ id: /^ad_astra:.*/ }, "ad_astra:steel_plate", "gtceu:steel_plate")
})

ServerEvents.tags("fluid", event => {
    // Fuel
    event.add("ad_astra:fuel", "gtceu:rocket_fuel")
    event.add("ad_astra:fuel", "gtceu:jean_gasoline")
    event.add("ad_astra:efficient_fuel", "gtceu:jean_gasoline")
})