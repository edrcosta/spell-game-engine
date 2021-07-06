const fps = 20
const startAtLevel = 0
const Tetris = new SpellGame(fps, startAtLevel)

Tetris
    .setKeyboard([ 'up', 'down', 'left', 'right', 'a' ])
    .setLevels([ StartLevel ])
    .setGameCoordSystem('web')
    .start(0)