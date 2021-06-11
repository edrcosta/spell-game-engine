const gamePreload = () => new Promise((resolve, reject) => {
    const files = [
        new SpriteImage('src/games/jump/images/casinha1.png').createElement(),
        new SpriteImage('src/games/jump/images/casinha2.png').createElement(),
        new SpriteImage('src/games/jump/images/casinha3.png').createElement(),
        new SpriteImage('src/games/jump/images/cenario chão1.png').createElement(),
        new SpriteImage('src/games/jump/images/coelhinho1.png').createElement(),
        new SpriteImage('src/games/jump/images/coelhinho2.png').createElement(),
        new SpriteImage('src/games/jump/images/coelhinho3.png').createElement(),
        new SpriteImage('src/games/jump/images/coelhinho4.png').createElement(),
        new SpriteImage('src/games/jump/images/muro.png').createElement(),
        new SpriteImage('src/games/jump/images/NUVEN1.png').createElement(),
        new SpriteImage('src/games/jump/images/NUVES45.png').createElement(),
        new SpriteImage('src/games/jump/images/OBSTACULO.png').createElement(),
        new SpriteImage('src/games/jump/images/PLACAR.png').createElement(),
        new SpriteImage('src/games/jump/images/PONT1.png').createElement(),
        new SpriteImage('src/games/jump/images/TITULO.png').createElement(),
        new SpriteImage('src/games/jump/images/TOUCH TO PLAY.png').createElement(),
    ];

    Promise.all(files).then(() => {
        resolve()
    })
})

const initializeGame = () => {
    let engine = new Game(100, 0);

    let start = new StartLevel();

    engine.setKeyboardKeys([ 'up', 'down', 'left', 'right', 'a' ])

    engine.loadLevels([ start ]);

    engine.start();
}

const jumpGameInitializer = (() => {
    gamePreload().then(initializeGame)
});

const waitDownloadAllJsCode = setInterval(() => {
    try {
        jumpGameInitializer()
        clearInterval(waitDownloadAllJsCode)
    } catch (error) {}
}, 100);