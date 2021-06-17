/**
 * This is a simple way of doing animations that does not require keyboard 
 */
 const canvas = new SpellCanvas('game')

 let i = 0
 setInterval(() => {
     canvas.setBackgroundColor('#000') // Clear screen
 
     canvas.drawPixel(100, 10 + i, '#1f959b', 10)
     canvas.drawPixel(100, 20 + i, '#1f959b', 20)
     canvas.drawPixel(100, 30 + i, '#1f959b', 30)
     canvas.drawPixel(100, 40 + i, '#1f959b', 40)
     canvas.drawPixel(100, 50 + i, '#1f959b', 40)
     canvas.drawPixel(100, 60 + i, '#1f959b', 30)
     canvas.drawPixel(100, 70 + i, '#1f959b', 20)
     canvas.drawPixel(100, 80 + i, '#1f959b', 10)
     i++
 }, 20);
 