class StartLevel extends SpellLevel {
    allPeaces = ['cube']
    currentPeace = ''
    dropSpeed = 4

    /**
     * 
     * @params { object } an object with isFirstFrame: boolean and frameCount: integer
     */
    frame({ isFirstFrame }) {
        if(isFirstFrame)
            this.currentPeace = this.getRandPeace()

        // Keyboard events
        if(this.keys.left && this.currentPeace.position.x > 0) 
            this.currentPeace.incrementX(-40)
        if(this.keys.right) 
            this.currentPeace.incrementX(40)
        if(this.keys.down)
            this.currentPeace.incrementY(-4)

        // move peace down
        this.currentPeace.incrementY(this.dropSpeed)
        // draw the current peace
        this.canvas.drawPixelSprite(this.currentPeace)
    }

    /**
     * Get random peace     
     */
    getRandPeace = () => SPRITES[this.math.getRandomElement(this.allPeaces)]
}