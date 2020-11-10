let sprites = {}

sprites.player = {
    colors: ['transparent', 'blue'],
    sprite: [
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    pos: { x: 100, y: 200 }
}

sprites.tree = {
    colors: ['green', 'yellow'],
    sprite: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2, 0]
    ],
    pos: { x: 0, y: 0 }
}

sprites.worldMap = {
    colors: ['green', 'red', 'brown'],
    pos: { x: 0, y: 0 },
    sprite: [],
}