class UserChar
{
    frameCounter = 0;

    position = {
        x: 50,
        y: 0,
        orientation : 0
    };
    
    images = {
        stuartRight : new SpriteImage('assets/images/morte com a lanterna/stuart1.svg'),
        stuartLeft: new SpriteImage('assets/images/morte com a lanterna/stuart1-flipped.png'),
    };

    getImageOrientation = () => this.position.orientation === 0 ? 'stuartLeft' : 'stuartRight';

    drawChar(canvas, keys){
        canvas.drawImage(
            this.images[this.getImageOrientation()].element, 
            canvas.element.width / 2, 
            canvas.element.height / 2, 
            78, 
            95
        );
        
        if(keys.a) this.atack(canvas);
    }

    displayControlHelpText(canvas, keys){
        if(this.frameCounter <= 50){
            canvas.drawText('Utilize ←↑→↓ para se mover', 'yellow', 1.5);
        }else if(this.frameCounter <= 100){
            canvas.drawText('Utilize A para atacar', 'yellow', 1.5);
        }
        this.frameCounter++;
    }

    atack(canvas, keys){
        const long  = 40;
        const midX = canvas.element.width / 2;
        const midY = canvas.element.height / 2;
        
        let orientation = -100;
        if(this.position.orientation === 1){
            orientation = 0;
        }

        canvas.drawPixel(midX + 30 + long + orientation, midY + 60, 'red');
        canvas.drawPixel(midX + 40 + long + orientation, midY + 60, 'red');
        canvas.drawPixel(midX + 50 + long + orientation, midY + 60, 'red');
        canvas.drawPixel(midX + 60 + long + orientation, midY + 60, 'red');
    }

    
    applyKeyboardModifiers(canvas, keys, map){
        if(keys.left) {
            this.position.x+=20;
            this.position.orientation = 0;
        }
        
        if(keys.right) {
            this.position.x-=20;
            this.position.orientation = 1;
        }

        if(keys.up) this.position.y+=20;
        if(keys.down) this.position.y-=20;
    }
}