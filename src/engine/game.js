class Game {
    clockSpeed = 100;
    levels;
    currentLevel;
    levelNumber = 0;
    canvas;
    keyboard;
    isFirstFrame = true;
    frameCounter = 0;
    frameCounterMultiplier = 0;
    frameCouterLimit = 10;
    frameCounterIterator = 0;

    constructor(clockSpeed, levelNumber) {
        this.clockSpeed = clockSpeed;
        this.levelNumber = levelNumber;
        this.debugger = new GameDebugger();
    }

    setKeyboardKeys = (keys) => this.keys = keys

    loadLevels(levels) {
        this.levels = levels;
        this.debugger.log('ENGINE', `Loading ${levels.length} levels`)
    }

    start() {
        if (!this.keys) throw 'You must run setKeyboardKeys first'

        const levelNumber = this.levelNumber;

        if (typeof this.levels[levelNumber] === 'undefined') throw `Level ${levelNumber} does not exists`;
        if (typeof this.levels[levelNumber].frame === 'undefined') throw `Level ${levelNumber} must have a frame function`;

        this.canvas = new Canvas('game', this.debugger);
        this.keyboard = new Keyboard();
        this.keyboard.startListemKeyboard(this.keys);
        window.requestAnimationFrame(this.gameLoop);
    }

    gameData = {}

    removeGameDaata = (id) => { delete this.gameData[id] }
    setGameData = (id, data) => { this.gameData[id] = data }
    getGameData = (id) => this.gameData[id]

    gameLoop = () => {
        this.canvas.clear();

        this.frameStep = this.frameCounterIterator + (this.frameCouterLimit * this.frameCounterMultiplier)
        if(this.frameCounterIterator > this.frameCouterLimit) {
            this.frameCounterMultiplier++;
            this.frameCounterIterator = 0;
        }

        if (!this.levels[this.levelNumber]) return false;
        
        const levelEnd = this.levels[this.levelNumber].frame(this.canvas, this.keyboard.keyPress, this.isFirstFrame);

        if (levelEnd) this.levelNumber++;

        this.isFirstFrame = false;
        this.keyboard.resetKeyboard(this.keys);

        if(this.canvas.visualChange === true){
            this.debugger.log('ENGINE', `frame: ${this.frameCounter}`, this.canvas.visualChange)
            window.requestAnimationFrame(this.gameLoop);
            this.canvas.canvasRendered()
        }
        this.frameCounter++
    };
}