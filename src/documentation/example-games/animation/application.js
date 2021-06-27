/**
 * Simplest way of rendering an animation
 */
// const canvas = new SpellCanvas('game')

let i = 0
// setInterval(() => {
   
// }, 20);
 
const animation = new SpellGame(10)

animation.start(({canvas}) => {
    console.log('what?')
    canvas
    .setBackgroundColor('#000') // Clear screen
    .drawPixel(100, 10 + i, '#1f959b', 10)
    .drawPixel(100, 20 + i, '#1f959b', 20)
    .drawPixel(100, 30 + i, '#1f959b', 30)
    .drawPixel(100, 40 + i, '#1f959b', 40)
    .drawPixel(100, 50 + i, '#1f959b', 40)
    .drawPixel(100, 60 + i, '#1f959b', 30)
    .drawPixel(100, 70 + i, '#1f959b', 20)
    .drawPixel(100, 80 + i, '#1f959b', 10)
i++
})