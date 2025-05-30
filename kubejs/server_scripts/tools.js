

ServerEvents.recipes(event => {
    // Tools
    event.remove({ id: 'railcraft:steel_sword'})
    event.remove({id: 'railcraft:steel_pickaxe'})
    event.remove({ id: 'railcraft:steel_axe'})
    event.remove({ id: 'railcraft:steel_shovel'})
    event.remove({ id: 'railcraft:steel_hoe'})

    // Armor
    event.remove({ id: 'railcraft:steel_helmet'})
    event.remove({ id: 'railcraft:steel_chestplate'})
    event.remove({ id: 'railcraft:steel_leggins'})
    event.remove({ id: 'railcraft:steel_boots'})
})