class Keyboard {
    keyPress = {};

    resetKeyboard(keys){
        for (let i = 0; i < keys.length; i++) this.keyPress[keys[i]] = false;
    }

    startListemKeyboard = (keys) => {
        if(!this.keyPress) this.resetKeyboard(keys)
        if (typeof window.keypress.Listener === undefined) throw 'You need to import keypress-2.1.5 library';

        let listener = new window.keypress.Listener();

        keys.forEach((key) => {
            listener.counting_combo(key, () => { this.keyPress[key] = true });
        })
    }
}