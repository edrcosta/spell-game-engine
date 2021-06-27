class DocUI
{
    static elements = {
        'gameSelect': document.getElementById('select-game'),
        'reset': document.getElementById('reset-btn'),
        'start': document.getElementById('start-btn'),
        'doc': document.getElementById('about')
    }

    /**
     * Renders the select game element with an game list
     */
    static renderSelect(gameList){
        Object.keys(gameList).forEach((gameId) => {
            DocUI.elements.gameSelect.innerHTML += `<option value="${gameId}">${gameList[gameId].name}</option>`
        })
    }

    /**
     * Append to the DOM the javascritp files designated to a game
     */
    static loadAssets(gameAssets){
        gameAssets.forEach((asset) => {
            let script = document.createElement('script')
            script.src = asset
            document.head.appendChild(script)
        })
    }

    /**
     *  load the specific html file to the documentation
     */
    static loadGameDoc(file){
        fetch(window.location.href + '/' + file).then(async (filedata) => {
            DocUI.elements.doc.innerHTML =await filedata.text()
        })
    }

    /**
     * Get the select Value and check if has a game to load if has load the game
     */
    static loadGame(){
        if(DocUI.elements.gameSelect.value.trim().length > 0){
            DocUI.loadAssets(gameList[DocUI.elements.gameSelect.value].list)
            DocUI.loadGameDoc(gameList[DocUI.elements.gameSelect.value].doc)
            DocUI.elements.reset.style.display = ''
            DocUI.elements.start.style.display = 'none'
            DocUI.elements.gameSelect.style.display = 'none'
        }
    }

    /**
     * Reload the page and remove hashes
     */
    static resetGame(){
        window.location.hash = '' 
        window.location.reload( )
    }

    /**
     * set all event click into elements
     */
    static setEventClicks(){
        document.getElementById('start-btn').onclick = DocUI.loadGame
        document.getElementById('reset-btn').onclick = DocUI.resetGame
    }

    static checkReload(gameList){
        if(window.location.hash.trim().length > 0){
            const gameId = window.location.hash.replace('#', '')

            if(gameList[gameId]){
                console.log(gameList[gameId])
            }
        }
    }
}

DocUI.renderSelect(gameList)
DocUI.setEventClicks(gameList)
DocUI.checkReload()
