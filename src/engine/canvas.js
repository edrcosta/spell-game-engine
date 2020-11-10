class Canvas {
    element;
    context;
    visualChange = false;

    constructor(canvasId) {
        let element = document.getElementById(canvasId);

        this.element = element;
        this.context = element.getContext('2d');
        this.fixDpi();
    }
    canvasRendered = () => this.visualChange = false

    clear() {
        this.context.clearRect(0, 0, this.element.width, this.element.height)
        this.visualChange = true;
    }

    fixDpi() {
        const dpi = window.devicePixelRatio;

        const styleHeight = +getComputedStyle(this.element).getPropertyValue("height").slice(0, -2);
        const styleWidth = +getComputedStyle(this.element).getPropertyValue("width").slice(0, -2);

        this.element.setAttribute('height', styleHeight * dpi);
        this.element.setAttribute('width', styleWidth * dpi);
    }

    drawPixel(x, y, color) {
        this.context.fillStyle = color;

        this.context.fillRect(x, y, 10, 10);
        this.context.fillRect(x, y, 10, 10);
        this.visualChange = true;
    }

    drawPixelSprite(x, y, sprite, colors) {
        const originalX = x;
        sprite.forEach(row => {
            row.forEach((pixel, i) => {
                this.drawPixel(x, y, colors[pixel])
                x += 10
                if (i === row.length - 1) x = originalX
            })
            y += 10
        });
        this.visualChange = true;
    }

    drawImage(imageElement, x, y, sizeX, sizeY, flipped) {

        flipped = typeof flipped !== 'undefined' ? false : flipped;

        if (flipped) this.context.scale(-1, 1);

        this.context.drawImage(imageElement, x, y, sizeX, sizeY);
        this.visualChange = true;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addSpriteIntoSprite(parentSprite, subSprite, x, y) {
        console.log(parentSprite)
        console.log(subSprite)
        this.visualChange = true;

        return subSprite
    }

    drawText(text, color, size, x, y) {

        if (x) x = this.element.width / 2;
        if (y) y = this.element.height / 2;
        if (size) size = 5;

        this.context.font = size + "em arial"; //Grenze Gotisch;
        this.context.textAlign = "center";
        this.context.fillStyle = color;
        this.context.fillText(text, x, y);
        this.visualChange = true;
    }
}