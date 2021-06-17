const canvas = new SpellCanvas('game')

const colors = ['blue', 'red', 'green']
const color = canvas.getRandomInt(0, colors.length - 1)

canvas.setBackgroundColor('#000');

canvas.drawPixel(100, 10, 'blue', 100)
canvas.drawPixel(100, 30, 'blue', 100)
canvas.drawPixel(100, 90, 'blue', 100)
canvas.drawPixel(100, 110, 'blue', 100)
