class SpellGame {
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

    coordSystem = 'web'

    singleLevelCallback = false

    constructor(framesPersecond) {
        this.framesPersecond = framesPersecond
        this.frameInterval = 1000 / this.framesPersecond
        this.math = new SpellMathHelper()
    }

    /**
     * define game keys to be captured and send to frame method
     * 
     * @param {Array<string>} keys 
     */
     setKeyboard = (keys) => {
        this.keys = keys
        return this
     }
    
    /**
     * If you wanto use a web like coords top rigth conner being the 0 you set to 'web' 
     * if you wanto to use as an tipical cartesian system where the bottom rigth conner is the 0 use 'fixed'
     * 
     * @param {web or fixed} type 
     * @returns 
     */
    setGameCoordSystem(type){
        this.coordSystem = type
        return this
    }

    /**
     * Define a array of levels to be called 
     * 
     * @param {Array<class>} levels 
     */
    setLevels = (levels) => {
        this.levels = levels.map((levelClass) => new levelClass())
        return this
    }
    
    /**
     * Start the game rendering
     */
    start(level) {
        this.levelNumber = level

        if(!this.singleLevelCallback && !this.isFirstFrame){
            if (typeof this.levels[this.levelNumber] === 'undefined') 
                throw new Error(`Level ${this.levelNumber} does not exists`)

            if (typeof this.levels[this.levelNumber].frame === 'undefined') 
                throw new Error(`Level ${this.levelNumber} must have a frame function`)
        }
        
        if (this.keys) 
            this.keyboard.startListemKeyboard(this.keys)
    
        this.canvas = new SpellCanvas('game', this.debugger)
        this.keyboard = new SpellKeyboard()
    
        window.requestAnimationFrame(this.gameLoop)
    }

    /**
     * Keep requestAnimationFrame into the frame rate defined by the Game developer
     * 
     * @note canvas dont has a frame rate system build in 
     */    
    _frameRateCheck(){
        if (!this.lastGameLoopTimeStamp) this.lastGameLoopTimeStamp = new Date()

        const now = new Date()

        if (now.getTime() - this.lastGameLoopTimeStamp.getTime() > this.frameInterval) {
            this.lastGameLoopTimeStamp = new Date()
            return true
        }
        return false
    }

    /**
     * Execute the current level selected
     */
    _executeLevel(){
        this.canvas.clear()
        
        // inject libraries into the level class 
        this.levels[this.levelNumber].engineToolInjection(
            this.canvas, 
            this.keyboard.keyPress, 
            this.math,
            this.isFirstFrame
        )
       
        // call frame generator method from custom game
        const isLevelEnd = this.levels[this.levelNumber].frame({
            isFirstFrame: this.isFirstFrame, 
            frameCount: this.frameCount
        })

        if (isLevelEnd) this.levelNumber++
    }

    /**
     * Update game frame information status
     */
    _updateStatusRegisters(){
        this.isFirstFrame = false
        this.keyboard.resetKeyboard(this.keys)
        this.frameCount++
    }

    /**
     * Game loop method 
     * 
     * !called in the frameRate specify by the user 
     * 
     * @note using requestAnimationFrame instead of setInterval, not block the event loop 
     */
    gameLoop = (singleLevelCallback) => {
        if(!this.singleLevelCallback && typeof singleLevelCallback === 'function'){
            this.singleLevelCallback = singleLevelCallback
        }

        if (!this._frameRateCheck()){
            return window.requestAnimationFrame(this.gameLoop) // to next loop
        }

        if (!this.singleLevelCallback && (!this.levels || !this.levels[this.levelNumber]))
            return false

        if(typeof this.singleLevelCallback === 'function'){
            this.singleLevelCallback({
                canvas: this.canvas, 
                keyboard: this.keyboard.keyPress, 
                math: this.math,
                isFirstFrame: this.isFirstFrame,
                frameCount: this.frameCount
            })
        }else{
            this._executeLevel()
        }

        this._updateStatusRegisters()
        window.requestAnimationFrame(this.gameLoop) // to next loop
    }
}