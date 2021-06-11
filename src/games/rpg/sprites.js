const SPRITES = {}

SPRITES.cube = () => new Sprite({
    colors: ['transparent', 'blue', 'grey', 'green'],
    frames: [
        [3, 1],
        [1, 2],
    ],
    position: { x: 0, y: 0 },
    pixelSize: 40
})


SPRITES.l = () => new Sprite({
    colors: ['transparent', 'blue'],
    frames: [
        [1, 0],
        [1, 0],
        [1, 1],
    ],
    position: { x: 0, y: 0 },
    pixelSize: 40
})
