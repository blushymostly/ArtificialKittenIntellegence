/**
 * Remove Ore generation from Ad Astra, Occultism and Undergarden
 * Ad Astra is weird and generates it on multiple steps, so it requires the additional events
 * Thanks Ghosti for figuring this one out
 */
WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        //FOR SOME REASON ADASTRA GENERATES ORES AT THIS GENERATION STEP      
        'aether:gravitite_ore',
        'aether:gravitite_ore_buried',
        'aether:ambrosium_ore',
        'aether:zanite_ore',
        'deep_aether:skyjade_ore',
        'undergarden:depthrock_coal_ore',
        'undergarden:shiverstone_coal_ore',
        'undergarden:depthrock_iron_ore',
        'undergarden:shiverstone_iron_ore',
        'undergarden:depthrock_gold_ore',
        'undergarden:depthrock_diamond_ore',
        'undergarden:shiverstone_diamond_ore',
        'undergarden:depthrock_cloggrum_ore',
        'undergarden:shiverstone_cloggrum_ore',
        'undergarden:shiverstone_froststeel_ore',
        'undergarden:depthrock_utherium_ore',
        'undergarden:shiverstone_utherium_ore',
        'undergarden:depthrock_regalium_ore',
        'undergarden:shiverstone_regalium_ore',
        "ad_astra:moon_iron_ore",
        "ad_astra:deepslate_desh_ore",
        "ad_astra:moon_desh_ore",
        "ad_astra:moon_cheese_ore",
        "ad_astra:moon_ice_shard_ore",
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        "ad_astra:mercury_iron_ore",
        "ad_astra:glacio_ice_shard_ore",
        "ad_astra:glacio_coal_ore",
        "ad_astra:glacio_copper_ore",
        "ad_astra:glacio_iron_ore",
        "ad_astra:glacio_lapis_ore",
        "ad_astra:venus_coal_ore",
        "ad_astra:venus_gold_ore",
        "ad_astra:venus_diamond_ore",
        "ad_astra:venus_calorite_ore",
    ])
    
    event.removeFeatureById('raw_generation', [
    //FOR SOME REASON ADASTRA GENERATES ORES AT THIS GENERATION STEP      
    'ad_astra:moon_iron_ore',
    'ad_astra:deepslate_desh_ore',
    'ad_astra:moon_desh_ore',
    'ad_astra:moon_cheese_ore',
    'ad_astra:moon_ice_shard_ore',
    "ad_astra:mars_diamond_ore",
    "ad_astra:mars_ice_shard_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:mars_ostrum_ore",
  ])
})


WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore",
            'occultism:silver_ore_deepslate',
            'occultism:silver_ore',
            'evilcraft:dark_ore',
            'evilcraft:dark_ore_deepslate',
            'undergarden:depthrock_coal_ore',
            'undergarden:shiverstone_coal_ore',
            'undergarden:depthrock_iron_ore',
            'undergarden:shiverstone_iron_ore',
            'undergarden:depthrock_gold_ore',
            'undergarden:depthrock_diamond_ore',
            'undergarden:shiverstone_diamond_ore',
            'undergarden:depthrock_cloggrum_ore',
            'undergarden:shiverstone_cloggrum_ore',
            'undergarden:shiverstone_froststeel_ore',
            'undergarden:depthrock_utherium_ore',
            'undergarden:shiverstone_utherium_ore',
            'undergarden:depthrock_regalium_ore',
            'undergarden:shiverstone_regalium_ore',
        ]
    })
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:moon_iron_ore",
            "ad_astra:deepslate_desh_ore",
            "ad_astra:moon_desh_ore",
            "ad_astra:moon_cheese_ore",
            "ad_astra:moon_ice_shard_ore",
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore"
        ]
    })
})