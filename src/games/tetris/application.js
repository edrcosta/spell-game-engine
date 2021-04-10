teste = SPRITES.teste
class StartLevel extends Level {

    allPeaces = ['cube']
    stopedPeaces = []
    target = ''
    currentPeace = ''
    bottomTop = 200
    frame(canvas, keys, firstFrame, math) {
        
        if(firstFrame){            
            this.currentPeace = SPRITES[math.getRandomElement(this.allPeaces)]()
        }
        
        if(keys.right && this.currentPeace.position.x < 600) this.currentPeace.position.x+= 20
        if(keys.left && this.currentPeace.position.x > 0) this.currentPeace.position.x-= 20
        if(keys.down && this.currentPeace.position.y < this.bottomTop) this.currentPeace.position.y+=10
        
        if(this.currentPeace.position.y < this.bottomTop){
            this.currentPeace.position.y += 1
        }else{
            this.keyReachBottom(canvas, keys, firstFrame, math)
        }

        this.render(canvas, keys, firstFrame, math)
    }

    keyReachBottom = (canvas, keys, firstFrame, math) => {
        this.stopedPeaces.push(this.currentPeace)
        const clone = SPRITES[math.getRandomElement(this.allPeaces)]()
        this.currentPeace = clone
        this.currentPeace.position.x = 0
        this.currentPeace.position.y = 0
    }

    render(canvas, keys, firstFrame, math){
        this.stopedPeaces.forEach((render) => {
            canvas.drawPixelSprite(render)
        })

        canvas.drawPixelSprite(this.currentPeace)
    }
}