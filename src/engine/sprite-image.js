class SpriteImage {
    src;
    element;

    constructor(src){
        this.src = src;
        this.createElement(src);
    }
    
    createElement(){
        return new Promise((resolve)=> {
            this.element = new Image();
            this.element.src = this.src;
            this.element.addEventListener('load', resolve, false);
        })
    }
}