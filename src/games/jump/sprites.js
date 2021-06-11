const SPRITES = {}

SPRITES.cube = () => new Sprite({
    colors: ['transparent', 'blue', 'transparent', 'green'],
    frames: [
        [2, 1, 2],
        [1, 1, 1],
        [1, 2, 1],
    ],
    position: { x: 0, y: 0 },
    pixelSize: 40
})