class StartLevel extends Level {
    allPeaces = ['cube']
    stopedPeaces = []
    target = ''
    currentPeace = ''
    dimensions = {
        bottom: 600,
        width: 400,
    }
    bottom = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    bottomIndex = 0

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
    getRandomPeace = (math) => {
        this.bottomIndex = 0
        const spriteInstance = SPRITES[math.getRandomElement(this.allPeaces)]()
        return spriteInstance;
    }

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
        if(keys.right && this.currentPeace.position.x < this.dimensions.width){
            this.bottomIndex++
            this.currentPeace.setX(+40)
        } 
        // left move
        if(keys.left && this.currentPeace.position.x > 0){
            this.currentPeace.setX(-40)
            this.bottomIndex--
        }

        // fast down
        if(keys.down && this.currentPeace.position.y < (this.dimensions.bottom - 10)) this.currentPeace.setY(+15)
    }

    stillFalling(){
        const isFlying = (this.currentPeace.position.y + (this.bottom[this.bottomIndex] * 40)) < this.dimensions.bottom
        
        if(!isFlying){
            console.log('fly', isFlying, this.currentPeace.position.y + this.bottom[this.bottomIndex])
            for(let i = this.bottomIndex; i < (this.bottomIndex + this.currentPeace.frames[0].length);i++){
                this.bottom[i] += this.currentPeace.frames[0].length
            }

            console.log(this.bottomIndex)
            console.log('bottom', this.bottom.join(','))
        }

        return isFlying
    }

    /**
     * Move peace down 
     * @param {*} canvas 
     * @param {*} keys 
     * @param {*} firstFrame 
     * @param {*} math 
     */
    movePeace(canvas, keys, firstFrame, math) {
        // increment position Y to the current peace
        if(this.stillFalling()){
            this.currentPeace.setY(+5)
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
        this.currentPeace = this.getRandomPeace(math)
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