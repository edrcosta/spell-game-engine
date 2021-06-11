class StartLevel extends Level {
    /**
     * Render every frame 
     * @param {Canvas} canvas 
     * @param {keyboardPressedMap} keys 
     * @param {boolean} firstFrame 
     * @param {MathHelper} math 
     */
    frame({ canvas, keys, firstFrame, math }) {
        console.log(keys)
        canvas.drawPixelSprite(SPRITES.cube())
    }
}