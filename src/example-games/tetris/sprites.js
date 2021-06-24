const SPRITES = {}

SPRITES.cube = () => new SpellSprite({
    colors: ['blue', 'grey', 'green'],
    bitmap: [
        [2, 0],
        [0, 1],
    ],
    pixelSize: 40
})

SPRITES.l = () => new SpellSprite({
    colors: ['transparent', 'blue'],
    bitmap: [
        [1, 0],
        [1, 0],
        [1, 1],
    ],
    pixelSize: 40
})