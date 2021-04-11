teste = SPRITES.teste
class StartLevel extends Level {
    allPeaces = ['cube', 'l']
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
        // get a new random peace  
        if(firstFrame) this.currentPeace = this.getRandomPeace(math)
        this.applyPressedKeys(keys)        
        this.movePeace(canvas, keys, firstFrame, math)
        this.render(canvas, keys, firstFrame, math)
    }

    /**
     * return a randon tetris peace
     * @returns 
     */
    getRandomPeace = (math) => SPRITES[math.getRandomElement(this.allPeaces)]()

    /**
     * Apply changes into peace when users press a key
     * @param {*} keys 
     */
    applyPressedKeys(keys){
        function rotateLeft(arr){
            let first = arr.shift();
            arr.push(first);
            return arr;
        }

        // rotate
        if(keys.a) this.currentPeace.frames = rotateLeft(this.currentPeace.frames)
        // right move
        if(keys.right && this.currentPeace.position.x < 600) this.currentPeace.position.x+= 40
        // left move
        if(keys.left && this.currentPeace.position.x > 0) this.currentPeace.position.x-= 40
        // fast down
        if(keys.down && this.currentPeace.position.y < this.bottom) this.currentPeace.position.y+=10
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
        if(this.currentPeace.position.y > this.bottom) this.currentPeace.position.y = this.bottom

        // increment position Y to the current peace
        if(this.currentPeace.position.y < this.bottom){
            this.currentPeace.position.y += 1
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
        this.currentPeace.position.x = 0
        this.currentPeace.position.y = 0
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