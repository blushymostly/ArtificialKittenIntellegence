/**
 * Welcome message sent to players on join
 */
PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to ", Text.blue("Artificial Kitten-Intellegence Alpha"), `.`]); // force recast to string
    event.player.tell(["Report pack issues to ", Text
        .blue("the Github").underlined()
        .clickOpenUrl("https://github.com/blushymostly/ArtificialKittenIntellegence")
        .hover("Click to open"), "."
    ]);
})