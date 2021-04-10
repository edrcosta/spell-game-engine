const generateRandSprites = (() => {

    let engine = new Game(100, 0);

    let start = new StartLevel();

    engine.setKeyboardKeys([ 'up', 'down', 'left', 'right', 'a' ])

    engine.loadLevels([ start ]);

    engine.start();
});


const downloadCheck = setInterval(() => {
    try {
        generateRandSprites()
        clearInterval(downloadCheck)
    } catch (error) {
        /// ignore download errors..
        // @todo remove this is ver uggly
    }
}, 100);