
        // new SpriteImage('src/games/jump/images/coelhinho2.png').createElement(),
        // new SpriteImage('src/games/jump/images/coelhinho3.png').createElement(),
        // 
class StartLevel extends Level {
    teste;

    async frame({ canvas, keys, firstFrame, math }) {
        if(firstFrame){
            this.teste =new SpriteImage('src/games/jump/images/coelhinho4.png')
          await this.teste.createElement()
        }

        canvas.drawImage(this.teste, 10, 10, 10, 10, false)
        // canvas.drawPixelSprite(
        //     SPRITES['cube']()
        // )
    }
}