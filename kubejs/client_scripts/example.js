// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event => {
    // Скрытие всех ненужных пластин в EMI
    METALS.forEach(metal => {
        MODS_TO_REPLACE.forEach(mod => {
            const plateId = `${mod}:${metal}_plate`;
            if (Item.exists(plateId)) {
                event.hide(plateId);
            }
        });
    });
});