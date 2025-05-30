const METALS = [
    'iron', 'gold', 'copper', 'tin', 'silver', 'lead', 'nickel',
    'zinc', 'aluminum', 'uranium', 'bronze', 'steel', 'electrum',
    'invar', 'iridium', 'platinum', 'titanium', 'osmium', 'cobalt'
];

const MODS_TO_REPLACE = [
    'ad_astra', 'railcraft'
];

ServerEvents.recipes(event => {
    METALS.forEach(metal => {
        const industrialPlate = `industrialupgrade:${metal}_plate`;
                if (!Item.exists(industrialPlate)) return;
        MODS_TO_REPLACE.forEach(mod => {
            const plateId = `${mod}:${metal}_plate`;
            if (Item.exists(plateId)) {
                event.remove({ output: plateId });
            }
        });
        MODS_TO_REPLACE.forEach(mod => {
            const plateId = `${mod}:${metal}_plate`;
            if (Item.exists(plateId)) {
                event.replaceInput({}, plateId, industrialPlate);
                event.replaceOutput({}, plateId, industrialPlate);
            }
        });
        event.replaceInput({}, `#forge:plates/${metal}`, industrialPlate);
    });
});

ServerEvents.tags('item', event => {
    METALS.forEach(metal => {
        const industrialPlate = `industrialupgrade:${metal}_plate`;
        if (!Item.exists(industrialPlate)) return;
        MODS_TO_REPLACE.forEach(mod => {
            const plateId = `${mod}:${metal}_plate`;
            if (Item.exists(plateId)) {
                event.remove(`forge:plates/${metal}`, plateId);
            }
        });
        
        event.add(`forge:plates/${metal}`, industrialPlate);
    });
});