// Use the color pallet array index to define colors in your bitmap
const cube = new SpellSprite({
    colors: ['blue', 'grey', 'green'],
    frames: [
        [2, 0],
        [0, 1],
    ],
    pixelSize: 40
})

// Render the pixel sprite into a canvas
const canvas = new SpellCanvas('game')

canvas.drawPixelSprite(cube)