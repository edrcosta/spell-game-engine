class StartLevel extends Level {
    
    frame(canvas, keys, firstFrame, math) {        

        canvas.setBackgroundColor('blue')
        canvas.drawPixelSprite(generateTracks(math))

        canvas.drawPixelSprite(car)
        
        if(keys.left) car.setX(-30)
        if(keys.right) car.setX(+30)
    }
}