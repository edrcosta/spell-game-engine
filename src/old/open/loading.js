//Loading screen for the open
class OpenLoadingScreen {
    images = {
        teste: new SpriteImage('assets/images/morte com a lanterna/stuart1.svg'),
        cenario: new SpriteImage('assets/images/cenario/cenario1.svg'),
        cenario: new SpriteImage('assets/images/title.svg'),
        loading: new SpriteImage('assets/images/carregando10.png'),
    };

    position = {
        x: 50,
        y: 0
    }
    sprite = [
        [0]
    ]
    allImagesLoaded = false;

    constructor() {
        Level.preload(this.images).then(() => {
            this.allImagesLoaded = true;
        });
    }

    frame(canvas) {

        const x = (canvas.element.width / 2) - 180
        const y = canvas.element.height / 2

        if (this.sprite[0].length <= 37) this.sprite[0].push(0)

        canvas.drawImage(this.images.loading.element, x, y, 400, 30);
        canvas.drawPixelSprite(x + 10, y + 10, this.sprite, ['#fff'])

        if (this.allImagesLoaded) return true;
    }
}