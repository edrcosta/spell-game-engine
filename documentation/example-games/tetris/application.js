class StartLevel extends SpellLevel {
    // game data
    allPeaces = ['cube']
    currentPeace = ''
    dropSpeed = 10
    bottomHigh = 400
    previousPeaces = []
    
    /**
     * 
     * @params { object } an object with isFirstFrame: boolean and frameCount: integer
     */
    frame({ isFirstFrame, frameCount }) {
        if(isFirstFrame){
            this.currentPeace = this.getRandPeace()
        }

        // Keyboard events
        if(this.keys.left && this.currentPeace.position.x > 0)
            this.currentPeace.incrementX(-40)
        if(this.keys.right)
            this.currentPeace.incrementX(40)
        if(this.keys.down)
            this.currentPeace.incrementY(-4)

        // movement
        if(this.bottomHigh > this.currentPeace.position.y){
            // move peace down
            this.currentPeace.incrementY(this.dropSpeed)
        }else{
            // get to the bottom
            this.previousPeaces.push(this.currentPeace)
            this.currentPeace = this.getRandPeace()
            this.currentPeace.position.y = 0;
        }

        this.currentPeace.colission.check(this.previousPeaces[0])

        // draw the current peace
        this.canvas.drawPixelSprite(this.currentPeace)

        // render previous droped peaces 
        this.previousPeaces.forEach((peace) => {
            this.canvas.drawPixelSprite(peace)
        })
    }

    /**
     * Get random peace     
     */
    getRandPeace = () => SPRITES[this.math.getRandomElement(this.allPeaces)]()
}