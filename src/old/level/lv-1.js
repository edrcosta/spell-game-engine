class Level1 {
    images = {
        cenario: new SpriteImage('assets/images/cenario/cenario1.svg'),
    };

    map = {
        colission: [
            [10, 20],
            [10, 20],
            [10, 20],
            [10, 200],
        ]
    }

    userChar;

    constructor() {
        this.userChar = new UserChar();
    }

    frame(canvas, keys) {
        this.drawCenario(canvas, keys);

        const map = this.map;
        this.userChar.applyKeyboardModifiers(canvas, keys, map);
        this.userChar.drawChar(canvas, keys);
        this.userChar.displayControlHelpText(canvas, keys);
    }

    drawCenario(canvas, keys) {
        canvas.drawImage(this.images.cenario.element, this.userChar.position.x, this.userChar.position.y, 2000, 2000);
    }
}