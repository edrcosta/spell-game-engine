class Canvas {
    element;
    context;
    visualChange = false;
    debugger;

    constructor(canvasId, _debugger) {
        let element = document.getElementById(canvasId);

        this.debugger = _debugger;
        this.element = element;
        this.context = element.getContext('2d');
        this.fixDpi();
    }

    dimensions = {
        horizontal: {
            percentual: (percentual) =>  percentual / 100 * this.element.width,
            center: (relativeElementW) => relativeElementW ? (this.element.width / 2) - (relativeElementW / 2) : this.element.width / 2
        },
        vertical: {
            percentual: (percentual) =>  percentual / 100 * this.element.height,
            center: (relativeElementH) => relativeElementH ? (this.element.height / 2) - (relativeElementH / 2) : this.element.height / 2
        }
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

    drawImage(imageClass, x, y, sizeX, sizeY, flipped) {

        flipped = typeof flipped !== 'undefined' ? false : flipped;

        if (flipped) this.context.scale(-1, 1);

        this.context.drawImage(imageClass.element, x, y, sizeX, sizeY);
        this.visualChange = true;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addSpriteIntoSprite(parentSprite, subSprite, x, y) {
        this.visualChange = true;

        return subSprite
    }

    setBackgroundColor = (color) => {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.element.width, this.element.height);
    }

    drawText(text, color, size, x, y) {

        this.context.font = size + "em 'Press Start 2P'"; //Grenze Gotisch;
        this.context.textAlign = "center";
        this.context.fillStyle = color;
        this.context.fillText(text, x, y);
        this.visualChange = true;
    }
}