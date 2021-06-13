const SPRITES = {}

SPRITES.cube = new SpellSprite({
    colors: ['blue', 'grey', 'green'],
    frames: [
        [2, 0],
        [0, 1],
    ],
    pixelSize: 40
})

SPRITES.l = new SpellSprite({
    colors: ['transparent', 'blue'],
    frames: [
        [1, 0],
        [1, 0],
        [1, 1],
    ],
    pixelSize: 40
})