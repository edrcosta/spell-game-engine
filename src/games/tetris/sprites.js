const SPRITES = {}

SPRITES.cube = () => new Sprite({
    colors: ['transparent', 'blue'],
    frames: [
        [1, 1],
        [1, 1],
    ],
    position: { x: 0, y: 0 },
    pixelSize: 40
})
