class StartLevel extends Level {
    allPeaces = ['cube']
    stopedPeaces = []
    target = ''
    currentPeace = ''
    bottom = 200

    /**
     * Render every frame 
     * @param {Canvas} canvas 
     * @param {keyboardPressedMap} keys 
     * @param {boolean} firstFrame 
     * @param {MathHelper} math 
     */
    frame(canvas, keys, firstFrame, math) {
        if(firstFrame) {
            this.currentPeace = this.getRandomPeace(math)
        }
        this.applyPressedKeys(keys)        
        this.movePeace(canvas, keys, firstFrame, math)
        this.render(canvas, keys, firstFrame, math)
    }

    /**
     * return a randon tetris peace
     * @returns 
     */
    getRandomPeace = (math) => SPRITES[math.getRandomElement(this.allPeaces)]()

    rotateCurrentFramez(arr){
        let first = arr.shift();
        arr.push(first);
        return arr;
    }

    /**
     * Apply changes into peace when users press a key
     * @param {*} keys 
     */
    applyPressedKeys(keys){
        // rotate
        if(keys.a) this.currentPeace.rotateSprite()
        // right move
        if(keys.right && this.currentPeace.position.x < 600) this.currentPeace.setX(+40)
        // left move
        if(keys.left && this.currentPeace.position.x > 0) this.currentPeace.setX(-40)
        // fast down
        if(keys.down && this.currentPeace.position.y < this.bottom) this.currentPeace.setY(+10)
    }

    /**
     * Move peace down 
     * @param {*} canvas 
     * @param {*} keys 
     * @param {*} firstFrame 
     * @param {*} math 
     */
    movePeace(canvas, keys, firstFrame, math) {
        // check if get the bottom and fix possible sum erros 
        if(this.currentPeace.position.y > this.bottom) this.currentPeace.setY(this.bottom)

        // increment position Y to the current peace
        if(this.currentPeace.position.y < this.bottom){
            this.currentPeace.setY(+1)
        }else{
            this.keyReachBottom(canvas, keys, firstFrame, math)
        }
    }

    /**
     * trigged when peace get to the bottom of the screen 
     * @param {*} canvas 
     * @param {*} keys 
     * @param {*} firstFrame 
     * @param {*} math 
     */
    keyReachBottom = (canvas, keys, firstFrame, math) => {
        this.stopedPeaces.push(this.currentPeace)

        const clone = this.getRandomPeace(math)

        this.currentPeace = clone
        this.currentPeace.setX(0)
        this.currentPeace.setY(0)
    }

    /**
     * Render each frame 
     * @param {*} canvas 
     * @param {*} keys 
     * @param {*} firstFrame 
     * @param {*} math 
     */
    render(canvas, keys, firstFrame, math){
        this.stopedPeaces.forEach((render) => {
            canvas.drawPixelSprite(render)
        })
        canvas.drawPixelSprite(this.currentPeace)
    }
}