teste = SPRITES.teste
class StartLevel extends Level {

    frame(canvas, keys, firstFrame) {
        canvas.drawPixelSprite(SPRITES.teste)
        // canvas.drawPixelSprite(SPRITES.teste2)
        
        // SPRITES.teste.move({ x: 10, y: 10 }, true, 80)
        // SPRITES.teste2.move({ x: 10, y: 0 }, true, 100)
    }
}