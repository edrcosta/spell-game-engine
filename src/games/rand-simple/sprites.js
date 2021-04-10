/**
 * Just generate a random number 
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}

/**
 * 
 * @returns {[[number]]}
 */
const generateTree = () => {
    return [
        Array(getRandomInt(2, 4)).fill(1),
        Array(getRandomInt(10, 4)).fill(1),
    ]
}

const SPRITES = {}

SPRITES.teste = new Sprite({
    colors: ['transparent', 'green'],
    frames: generateTree(),
    position: { x: 100, y: 200 }
})


SPRITES.teste2 = new Sprite({
    colors: ['transparent', 'blue'],
    frames: [
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    position: { x: 100, y: 200 }
})
