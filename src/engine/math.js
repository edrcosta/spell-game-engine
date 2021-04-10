class MathHelper {
    /**
     * @param {*} min 
     * @param {*} max 
     * @returns 
     */
    getRandomInt(min, max) {
        min = Math.ceil(min)        
        return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min
    }

    getRandomElement(array){
        return array[this.getRandomInt(0, (array.length - 1))]
    }
}