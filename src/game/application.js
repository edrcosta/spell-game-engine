class StartLevel {
    frame(canvas, keys, isFirstFrame) {

        if (isFirstFrame) {
            sprites.worldMap.sprite = canvas.addSpriteIntoSprite(sprites.worldMap.sprite, sprites.tree.sprite, 10, 20)
        }

        canvas.drawPixelSprite(
            sprites.worldMap.pos.x,
            sprites.worldMap.pos.y,
            sprites.worldMap.sprite,
            sprites.worldMap.colors
        )
        canvas.drawPixelSprite(
            sprites.player.pos.x,
            sprites.player.pos.y,
            sprites.player.sprite,
            sprites.player.colors
        )

        if (keys.up) sprites.player.pos.y -= 10
        if (keys.down) sprites.player.pos.y += 10
    }
}