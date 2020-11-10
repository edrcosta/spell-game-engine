class DeathWelcome
{
    images;
    frameCounter = 0;
    position = {
        x: 50,
        y: 0
    }

    constructor(){
        this.images = {
            deathopen : new SpriteImage('assets/images/death-open.png'),
            cara : new SpriteImage('assets/images/cara.png'),
        }
    }

    messages = [
        '<Pressione enter para seguir>',
        'Morte: Olá, você morreu',
        'E agora será meu estagiário',
        'Oi? Eu? morri?...',
        'Isso ai meu filho...',
        'mas como? oi?',
        'acontece que tenho pouco tempo para falar com vc',
        'eu preciso coletar muitas almas perdidas aqui no pós vida',
        'então eu terceirizo a coleta de almas',
        'você parece ter sido bom na terra então me ajuda com isso'
    ];

    messageCurrent = 0;
    
    frame(canvas, keys, isFirstFrame){  
        
        const messages = this.messages;

        if(typeof messages[this.messageCurrent] !== 'undefined'){
            const message = messages[this.messageCurrent];
            canvas.drawText(message, 'yellow', 1.5, canvas.element.width/2, canvas.element.height - 100);
        }

        if(this.messageCurrent <= 2) canvas.drawImage(this.images.deathopen.element, 0, 0, 588, 342);
        if(this.messageCurrent === 3) canvas.drawImage(this.images.cara.element, 0, 0, 182, 174);
        if(this.messageCurrent === 4) canvas.drawImage(this.images.deathopen.element, 0, 0, 588, 342);
        if(this.messageCurrent === 5) canvas.drawImage(this.images.cara.element, 0, 0, 182, 174);
        if(this.messageCurrent > 5) canvas.drawImage(this.images.deathopen.element, 0, 0, 588, 342);
        
        if(keys.enter){
            this.messageCurrent++;

            if(this.messageCurrent > messages.length){
                return true;
            }
        }
    }
}