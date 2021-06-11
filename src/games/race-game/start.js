const tetrisGameExample = (() => {

    let engine = new Game(10, 0);

    let start = new StartLevel();

    engine.setKeyboardKeys([ 'up', 'down', 'left', 'right', 'a' ])
    engine.loadLevels([ start ]);
    engine.start();
});

const waitDownloadAllJsCode = setInterval(() => {
    try {
        tetrisGameExample()
        clearInterval(waitDownloadAllJsCode)
    } catch (error) {}
}, 100);