class SpriteImage
{
    src;
    element;
    loaded = false;

    constructor(src){
        this.src = src;
        this.createElement(src);
    }
    
    createElement(){
        this.element = new Image();
        this.element.src = this.src;
        this.element.addEventListener('load', this.whenImageIsLoaded, false);
    }

    whenImageIsLoaded = () => { this.loaded = true }
}