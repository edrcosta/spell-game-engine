const tetrisGame = () => {
    const tetrisGame = new Game(20, 0);

    tetrisGame.setKeyboardKeys([ 'up', 'down', 'left', 'right', 'a' ])
    tetrisGame.loadLevels([ StartLevel ]);
    tetrisGame.start();
}

// This just load the game when all js files is downloaded 
const lazzyLoading = () => {
    try {
        tetrisGame()
        clearInterval(waitDownloadAllJsCode) // remove the interval 
    } catch (error) {
        console.log(error)
    }
}

const waitDownloadAllJsCode = setInterval(lazzyLoading, 100);