// Instanciate a canvas object 
const canvas = new SpellCanvas('game')

/**
 * use the drawPixel method 
 * @param {Int} x 
 * @param {Int} y 
 * @param {"#000"} color 
 * @param {Int} pixelW
 * @param {Int} pixelH
 */
canvas
    .drawPixel(100, 20, '#1f959b', 20)
    .drawPixel(100, 30, '#1f959b', 30)
    .drawPixel(100, 40, '#e0930f', 40, 20)
    .drawPixel(100, 100, 'green', 10)
    .drawPixel(100, 200, 'red', 20)
    .drawPixel(100, 300, 'grey', 30)
    .drawPixel(100, 400, 'transparent', 40)
