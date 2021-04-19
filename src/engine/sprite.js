class Sprite {
    frames;
    colors;

    position = {
        x: 0,
        y: 0
    }

    constructor({ frames, colors, position, pixelSize }){
        this.frames = frames;
        this.colors = colors;
        this.position = position
        this.pixelSize = pixelSize ? pixelSize : 10
    }

    setX = (x) => this.position.x += x
    setY = (y) => this.position.y += y

    rotateSprite(){
        
        let result = this.frames.map((row) => {
            return row.reverse()
        })
        
        result = result.reverse()
        

        console.log('modified', result)
        console.log('ORIGINAL', this.frames)
    }
}