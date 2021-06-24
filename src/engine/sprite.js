class SpellSprite {
    bitmap;
    colors;
    position = { x: 0, y: 0 }

    constructor({ bitmap, colors, pixelSize }){
        this.bitmap = bitmap;
        this.colors = colors;
        this.pixelSize = pixelSize ? pixelSize : 10
        this.colission = new SpellColission(this)
    }

    /**
     * Position setters
     */
    setX = (x) => this.position.x = x
    setY = (y) => this.position.y = y

    /**
     * Position incremental setters "+="
     */
    incrementX = (x) => this.position.x += x
    incrementY = (y) => this.position.y += y

    /**
     * Edit the sprite array
     * 
     * @param {Array[]} sprite 
     * @returns 
     */
    change = (sprite) => this.bitmap = sprite
}