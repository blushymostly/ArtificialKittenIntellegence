// priority: 900
/*
The itemNukeList is used to list all IDs and regexes matching IDs of items that should be removed from the game, or "nuked".
While this makes it far more difficult to access the items and effectively obliterates them in most cases,
it doesn't remove them entirely and does not guarantee that they are unobtainable, unusable, or hidden in EMI/JEI.

Examples of such cases are:
- Items that may drop from a loot table (not unobtainable)
- Items that provide right-click functionality (not unusable)
- ExtendedCrafting Singularities, which have a special recipe page which cannot be hidden by normal means (not hidden in EMI/JEI)

If you seek to hide an item but not remove it, use KubeJS/client_scripts/JEI.js.
If you seek to remove a recipe but not hide any items, use the relevant file in KubeJS/server_scripts.
*/

global.itemNukeList = [
    // Ad Astra
    "ad_astra:calble_duct",
    "ad_astra:coal_generator",
    "ad_astra:compressor",
    "ad_astra:cryo_freezer",
    "ad_astra:desh_cable",
    "ad_astra:desh_fluid_pipe",
    "ad_astra:energizer",
    "ad_astra:engine_frame",
    "ad_astra:etrionic_blast_furnance",
    "ad_astra:etrionic_capacitor",
    "ad_astra:etrionic_core",
    "ad_astra:fan",
    "ad_astra:fluid_pipe_duct",
    "ad_astra:fuel_refinery",
    "ad_astra:ostrum_fluid_pipe",
    "ad_astra:photovoltaic_etrium_cell",
    "ad_astra:photovoltaic_vesnium_cell",
    "ad_astra:solar_panel",
    "ad_astra:steel_cable",
    "ad_astra:water_pump",
    /^ad_astra:.*_bucket$/,

    // Chisels & Bits
    "chiselsandbits:block_bit",

    // Railcraft
    "railcraft:copper_plate",
    "railcraft:steel_nugget",

    
]