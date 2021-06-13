class SpellSpriteImage {
    src;
    element;

    constructor(src){
        this.src = src;
        this.createElement(src);
    }
    
    /**
     * create an valid html dom element
     * 
     * @returns Promise<Image HTML Dom element>
     */
    createElement(){
        return new Promise((resolve)=> {
            this.element = new Image();
            this.element.src = this.src;
            this.element.addEventListener('load', resolve, false);
        })
    }
}