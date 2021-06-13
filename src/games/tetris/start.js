// Instanciate the engine
const tetrisGame = new SpellGame(20, 0);

// create a new keyboard watcher 
tetrisGame.setKeyboardKeys([ 'up', 'down', 'left', 'right', 'a' ])

// load level classes
tetrisGame.loadLevels([ StartLevel ]);

// start the game at the first level 
tetrisGame.start(0);