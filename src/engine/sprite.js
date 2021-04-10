class Sprite{
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

    move({x, y }, keepMoving, speed){
        if (typeof keepMoving !== 'undefined' && keepMoving === true){
            this.position.x += x / speed * x
            this.position.y += y / speed * y
        }else{
            this.position.x = x
            this.position.y = y
        }
    }
}