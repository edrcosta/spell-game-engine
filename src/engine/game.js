class Game {
    // Game     
    levels
    currentLevel
    
    // Libraries 
    canvas
    keyboard
    math

    // Level control variables
    levelNumber = 0
    frameCount = 0
    isFirstFrame = true

    // Clock control variabless
    framesPersecond = 40
    frameInterval = 0
    lastGameLoopTimeStamp = false


    constructor(framesPersecond, levelNumber) {
        this.framesPersecond = framesPersecond
        this.frameInterval = 1000 / this.framesPersecond
        this.levelNumber = levelNumber
        this.debugger = new GameDebugger()
        this.math = new MathHelper()
    }

    /**
     * define game keys to be captured and send to frame method
     * 
     * @param {Array<string>} keys 
     */
    setKeyboardKeys = (keys) => this.keys = keys

    /**
     * Define a array of levels to be called 
     * 
     * @param {Array<class>} levels 
     */
    loadLevels = (levels) => this.levels = levels.map((levelClass) => new levelClass())
    
    /**
     * Start the game rendering
     */
    start() {
        if (!this.keys) throw 'You must run setKeyboardKeys first'

        const levelNumber = this.levelNumber

        if (typeof this.levels[levelNumber] === 'undefined') throw `Level ${levelNumber} does not exists`
        if (typeof this.levels[levelNumber].frame === 'undefined') throw `Level ${levelNumber} must have a frame function`

        this.canvas = new Canvas('game', this.debugger)
        this.keyboard = new Keyboard()

        this.keyboard.startListemKeyboard(this.keys)
        window.requestAnimationFrame(this.gameLoop)
    }

    /**
     * Keep requestAnimationFrame into the frame rate defined by the Game developer
     * 
     * @note canvas dont has a frame rate system build in 
     */    
    frameRateCheck(){
        if (!this.lastGameLoopTimeStamp) this.lastGameLoopTimeStamp = new Date()

        const now = new Date()

        if (now.getTime() - this.lastGameLoopTimeStamp.getTime() > this.frameInterval) {
            this.lastGameLoopTimeStamp = new Date()
            return true
        }
        return false
    }

    /**
     * Game loop method 
     * 
     * !called in the frameRate specify by the user 
     * 
     * @note using requestAnimationFrame instead of setInterval, not block the event loop 
     */
    gameLoop = () => {
        if (!this.frameRateCheck()){
            return window.requestAnimationFrame(this.gameLoop)
        }

        if (!this.levels[this.levelNumber]) return false
        
        this.canvas.clear()
        
        // add libraries into the level 
        this.levels[this.levelNumber].engineToolInjection(
            this.canvas, 
            this.keyboard.keyPress, 
            this.math,
            this.isFirstFrame
        )
        
        const isLevelEnd = this.levels[this.levelNumber].frame({
            isFirstFrame: this.isFirstFrame, 
            frameCount: this.frameCount
        })

        if (isLevelEnd) this.levelNumber++

        this.isFirstFrame = false
        this.keyboard.resetKeyboard(this.keys)    
        window.requestAnimationFrame(this.gameLoop)
        this.frameCount++
    }
}