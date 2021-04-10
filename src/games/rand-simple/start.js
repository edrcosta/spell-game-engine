const generateRandSprites = (() => {

    let engine = new Game(100, 0);

    let start = new StartLevel();

    engine.setKeyboardKeys([ 'up', 'down', 'left', 'rigth', 'a' ])

    engine.loadLevels([ start ]);

    engine.start();
});

generateRandSprites()