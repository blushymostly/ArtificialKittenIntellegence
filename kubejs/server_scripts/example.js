// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')
ServerEvents.recipes(event => {
event.remove({not: {type: 'industrialupgrade:rolling'}, output: 'forge:plates'});


const modsToRemove = [
    'railcraft',
    'ad_astra',
];

modsToRemove.forEach(mod => {
    event.remove({ mod: mod, output: '#forge:plates'})
    event.remove({ mod: mod, output: '#forge:nuggets/steel'})
    })
});
