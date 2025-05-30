/**
 * Recipe removals that don't belong in other files.
 * 
 * If you seek to both hide an item/fluid and remove it from all recipes and tags, then look into
 * KubeKS/startup_scripts/nukeLists/item.js and KubeJs/startup_scripts/nukeLists/fluid.js
 */

ServerEvents.recipes(event => {
    // Ad Astra
    event.remove({ id: "ad_astra:steel_ingots"})
    



    // Railcraft
    event.remove({ id: "railcraft:steel_ingot"})
    event.remove({id: "railcraft:copper_plate"})
})