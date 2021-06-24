class SpellCanvas {
    element
    context
    visualChange = false
    debugger
    mathHelper

    constructor(canvasId, _debugger) {
        let element = document.getElementById(canvasId)

        this.debugger = _debugger
        this.element = element
        this.context = element.getContext('2d')
        this.mathHelper = new SpellMathHelper()
        this.fixDpi()
    }

    /**
     * Canvas size info
     */
    sizes = {
        horizontal: {
            percentual: (percentual) =>  percentual / 100 * this.element.width,
            center: (relativeElementW) => relativeElementW ? (this.element.width / 2) - (relativeElementW / 2) : this.element.width / 2
        },
        vertical: {
            percentual: (percentual) =>  percentual / 100 * this.element.height,
            center: (relativeElementH) => relativeElementH ? (this.element.height / 2) - (relativeElementH / 2) : this.element.height / 2
        }
    }

    /**
     * return a random number bettwen a range
     * 
     * @param {Int} max 
     * @param {Int} min 
     * @returns 
     */
    getRandomInt = (max, min) => this.mathHelper.getRandomInt(max, min)

    /**
     * Clear the entire canvas
     */
    clear() {
        this.context.clearRect(0, 0, this.element.width, this.element.height)
    }

    /**
     * fix canvas blur
     */
    fixDpi() {
        const dpi = window.devicePixelRatio

        const styleHeight = +getComputedStyle(this.element).getPropertyValue("height").slice(0, -2)
        const styleWidth = +getComputedStyle(this.element).getPropertyValue("width").slice(0, -2)

        this.element.setAttribute('height', styleHeight * dpi)
        this.element.setAttribute('width', styleWidth * dpi)
    }

    /**
     * Draw a pixel in a position with configurable size
     * 
     * @param {Int} x 
     * @param {Int} y 
     * @param {"#000"} color 
     * @param {Int} pixelW
     * @param {Int} pixelH
     */
    drawPixel(x, y, color, pixelW = 10, pixelH = 10) {
        this.context.fillStyle = color
        this.context.fillRect(x, y, pixelW, pixelH)
        this.context.fillRect(x, y, pixelW, pixelH)
        return this
    }

    /**
     * render a pixel sprite simple scanning 
     * 
     * @param {Sprite} spriteClass 
     */
    drawPixelSprite(spriteClass) {
        let x = spriteClass.position.x
        let y = spriteClass.position.y
        
        const colors = spriteClass.colors
        const sprite = spriteClass.bitmap
        const originalX = x
        
        sprite.forEach(row => {
            row.forEach((pixel, i) => {
                this.drawPixel(x, y, colors[pixel], spriteClass.pixelSize, spriteClass.pixelSize)
                x += spriteClass.pixelSize
                if (i === row.length - 1) x = originalX
            })
            y += spriteClass.pixelSize
        })
        return this
    }

    /**
     * Draw image with position and size 
     * 
     * @param {*} imageClass 
     * @param {*} x 
     * @param {*} y 
     * @param {*} sizeX 
     * @param {*} sizeY 
     * @param {*} flipped 
     */
    drawImage(imageClass, x, y, sizeX, sizeY, flipped) {
        if (typeof flipped !== 'undefined' ? false : flipped) 
            this.context.scale(-1, 1)
        this.context.drawImage(imageClass.element, x, y, sizeX, sizeY)
        return this
    }

    /**
     * Set a background color
     * @param {*} color 
     */
    setBackgroundColor = (color) => {
        this.context.fillStyle = color
        this.context.fillRect(0, 0, this.element.width, this.element.height)
        return this
    }

    /**
     * Draw a text in a given position with some color
     * @param {*} text 
     * @param {*} color 
     * @param {*} size 
     * @param {*} x 
     * @param {*} y 
     */
    drawText(text, color, size, x, y) {
        this.context.font = size + "em 'Press Start 2P'" //Grenze Gotisch
        this.context.textAlign = "center"
        this.context.fillStyle = color
        this.context.fillText(text, x, y)
        return this
    }
}