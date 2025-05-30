// priority: 998
/**
 * This script is used to unify items from different mods.
 * It will replace items from the #c tag with the first mod(defined in modPriority) that has the item.
 */

// priority: 998

const getItemFromTag = tag => {
    const items = Ingredient.of(tag).itemIds;
    if (items.length > 0 && items[0] !== 'minecraft:barrier') {
        const sorted = sortArray(items.toArray());
        return sorted[0];
    }
    return false;
};

const sortArray = array => {
    return array.sort((a, b) => {
        const aStr = `${a}`;
        const bStr = `${b}`;
        const [aMod] = aStr.split(':');
        const [bMod] = bStr.split(':');
        
        const aPriority = modPriority.indexOf(aMod);
        const bPriority = modPriority.indexOf(bMod);
        
        const aScore = aPriority === -1 ? modPriority.length + 1 : aPriority;
        const bScore = bPriority === -1 ? modPriority.length + 1 : bPriority;
        
        if (aScore !== bScore) return aScore - bScore;
        return aStr.localeCompare(bStr);
    });
};

ServerEvents.tags('item', event => {
    const allTags = [];

    // Генерация списка тегов
    for (const [materialType, types] of Object.entries(materials)) {
        switch (materialType) {
            case 'metals':
                for (const metal of metals) {
                    for (const type of types) {
                        allTags.push(`c:${type}/${metal}`);
                        if (type === 'raw_materials') {
                            allTags.push(`c:storage_blocks/raw_${metal}`);
                        }
                    }
                }
                break;
                
            case 'gems':
                for (const gem of gems) {
                    for (const type of types) {
                        allTags.push(`c:${type}/${gem}`);
                    }
                }
                break;
                
            case 'misc':
                for (const miscItem of misc) {
                    for (const type of types) {
                        allTags.push(`c:${type}/${miscItem}`);
                    }
                }
                break;
        }
    }
});