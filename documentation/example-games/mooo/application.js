// instanciate the engine
const canvas = new SpellCanvas('game')
const animation = new SpellGame(10)

// generate a new heart sprite
const getHearth = (size) => {
    return new SpellSprite({
        bitmap: [
            [0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, ],
            [0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, ],
            [0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, ],
            [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, ],
            [0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, ],
            [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, ],
            [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, ],
            [0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, ],
            [0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, ],
            [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, ],
            
        ],
        colors: ['transparent', 'red', '#9e2525', '#fff'],
        pixelSize: size
    })
}

// create sprites
const coracao = getHearth(30)
const coracao_menor = getHearth(10)

// render 20 random hearts with random sizes
const gererateRandomHearts = (canvas) => {
    // Start to render 20 versions of the smaller heart
    for(let i = 0;i < 20; i++){
        // get a random size heart
        const rand = getHearth(canvas.getRandomInt(5, 10))

        // get a random position
        rand.setX(canvas.getRandomInt(0, 600))
        rand.setY(canvas.getRandomInt(0, 600))

        // draw
        canvas.drawPixelSprite(rand)
    }
}

// render a big heart 1 position closset of the center
const showBigHeart = () => {
    // incremente big heart position
    coracao.incrementX(10)
    coracao.incrementY(10)
    // render the big heart
    canvas.drawPixelSprite(coracao)
}

// This run every sincle frame per second... 
const gameLoopCallback = () => {
    canvas.setBackgroundColor('#000') // clear the screen
    
    // check if the big heart get into the center
    if(coracao.position.x <= 120){
        showBigHeart()
    }else{
        gererateRandomHearts(canvas)
    }
}

// set the game loop 
animation
    .setGameLoop(gameLoopCallback)
    .start()