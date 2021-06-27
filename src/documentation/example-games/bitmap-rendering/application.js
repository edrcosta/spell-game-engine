// Instance of new sprite
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

// setup your canvas element by id
const canvas = new SpellCanvas('game')

// Draw the pixel sprite
canvas.drawPixelSprite(logo)