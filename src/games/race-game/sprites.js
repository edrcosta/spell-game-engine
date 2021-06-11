
const car = new Sprite({
    colors: ['transparent', 'orange'],
    frames: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0],
        [1, 0, 1]
    ],
    pixelSize: 30,
    position: {
        x: 300,
        y: 500
    }
})

let track = [

]

let counter = 0
let leftCount = 0

const getTrack = (math) => {
    counter++
    if(counter % 2 === 0){

        if(leftCount > 2){
            leftCount--
        }else{
            leftCount++
        }
        
        left = Array(leftCount).fill(math.getRandomInt(0, 3))
        track.push(left.concat([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ]))
    }
}

const generateTracks = (math) => {
    if(track.length > 20){
        track.shift()
    }
    getTrack(math)
    
    return new Sprite({
        colors: ['transparent', 'red', 'green', 'green'],
        frames: track,
        position: { x: 0, y: 0 },
        pixelSize: 30
    })   
}