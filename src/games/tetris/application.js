class StartLevel extends Level {
    allPeaces = ['cube']
    currentPeace = ''
    dropSpeed = 4

    frame({ isFirstFrame }) {
        if(isFirstFrame) {
            this.currentPeace = this.getRandomPeace()
        }

        this.currentPeace.incrementY(this.dropSpeed)
        this.canvas.drawPixelSprite(this.currentPeace)
    }

    getRandomPeace = () => {    
        const randomPeaceId = this.math.getRandomElement(this.allPeaces)
        const spriteInstance = SPRITES[randomPeaceId]()
        return spriteInstance;
    }
}