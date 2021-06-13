class SpellMathHelper {
    /**
     * return a random number bettween a range
     * @param {*} min 
     * @param {*} max 
     * @returns 
     */
    getRandomInt(min, max) {
        min = Math.ceil(min)        
        return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min
    }

    /**
     * get a random item from an array 
     * 
     * @param {*} array 
     * @returns 
     */
    getRandomElement(array){
        return array[this.getRandomInt(0, (array.length - 1))]
    }
}