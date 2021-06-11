const tetrisGameExample = (() => {

    let engine = new Game(100, 0);

    let start = new StartLevel();

    engine.setKeyboardKeys([ 'up','mouse', 'down', 'left', 'right', 'a' ])

    engine.loadLevels([ start ]);

    engine.start();
});

const waitDownloadAllJsCode = setInterval(() => {
    try {
        tetrisGameExample()
        clearInterval(waitDownloadAllJsCode)
    } catch (error) {}
}, 100);