class SpellColission {
    sprite
    
    constructor(refObject){
        this.sprite = refObject
    }

    check(spriteB){
        if(!spriteB || !this.sprite) return false
        console.log(spriteB.position)
        console.log(this.sprite.position)
    }
}