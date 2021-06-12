class Level {
    canvas
    keyboard
    math
    /**
     * Inject into a level class the current game state and tools available 
     * 
     * @param {*} canvas 
     * @param {*} keyboard 
     * @param {*} math 
     * @param {*} isFirstFrame 
     */
    engineToolInjection(canvas, keyboard, math, isFirstFrame){
        if(isFirstFrame){
            this.canvas = canvas
            this.math = math
        }
        
        this.keys = keyboard
    }
}