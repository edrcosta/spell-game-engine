class Menu {
    items = [
        'new',
        'continue',
        'config'
    ]

    item = 0;
    background = new SpriteImage('assets/images/title.svg')

    frame(canvas, keys, isFirstFrame) {

        if (keys.up) this.item--;
        if (keys.down) this.item++;

        if (this.item >= 2) this.item = 2;
        if (this.item < 0) this.item = 0;

        if (keys.enter && this.item === 0) return true;
        canvas.drawImage(this.background.element, 10, 10, 400, 30);

        canvas.drawText('MENU', '#FFF', 2, 100, 100);
        canvas.drawText('Novo Jogo', this.item === 0 ? 'yellow' : 'green', 1, 120, 150);
        canvas.drawText('Continuar', this.item === 1 ? 'grey' : 'green', 1, 120, 200);
        canvas.drawText('Configurações', this.item === 2 ? 'grey' : 'green', 1, 120, 250);
        canvas.drawText('Use ↑↓ e Enter para selecionar', 'Yellow', 1, 300, 500);
    }
}