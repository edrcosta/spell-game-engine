const logo = new SpellSprite({
    bitmap: [
        [1, 1, 1, 0, 2, 2, 2, 0, 1, 1, 1, 0, 2, 0, 0],
        [1, 0, 0, 0, 2, 0, 2, 0, 1, 1, 1, 0, 2, 0, 0],
        [0, 1, 0, 0, 2, 2, 2, 0, 1, 0, 0, 0, 2, 0, 0],
        [1, 1, 1, 0, 2, 0, 0, 0, 1, 1, 1, 0, 2, 2, 2],
    ],
    colors: ['transparent', 'green', 'blue'],
    pixelSize: 30
})

const canvas = new SpellCanvas('game')

canvas.drawPixelSprite(logo)