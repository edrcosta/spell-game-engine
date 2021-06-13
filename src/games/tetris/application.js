class StartLevel extends SpellLevel {
    allPeaces = ['cube']
    currentPeace = ''
    dropSpeed = 4

    frame({ isFirstFrame }) {
        if(isFirstFrame) this.currentPeace = this.getRandomPeace()
        this.currentPeace.incrementY(this.dropSpeed)
        this.canvas.drawPixelSprite(this.currentPeace)
    }

    getRandomPeace = () => {
        return SPRITES[
            this.math.getRandomElement(this.allPeaces)
        ];
    }
}