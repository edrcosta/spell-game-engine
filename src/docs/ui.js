// map DOM elements    
const domElements = {
    select: document.getElementById('select-game'),
    start: document.getElementById('start-game'),
    reset: document.getElementById('reset-btn')
}

/**
 * Get game id from url or select element
 */
const getGameId = {
    url : () =>  window.location.hash.replace('#', ''),
    select: () => domElements.select.value
}

/**
 * return a game by id 
 * @param {string} id 
 * @returns 
 */
const getGameById = (id) => !gameList[id] ? false : gameList[id]

/**
 * return an html option element string
 * @param {string} key 
 * @returns 
 */
const createOptionWithKey = (key) => ((domElements.select.innerHTML+= `<option value="${key}">${key}</option>` ))

/**
 * Render the game select element
 * @param {array} assets 
 * @returns 
 */
const renderGameSelect = (assets) => ((Object.keys(assets).forEach(createOptionWithKey)))

/**
 * Insert a new script tag into body
 * @param {string} file 
 */
const loadAsset = (file) => {
    const tag = document.createElement('script')
    tag.setAttribute('src', file)
    document.body.appendChild(tag)
}

/**
 * Load all assets for a given game by id 
 * @param {string} id 
 * @param {*} gameList 
 */
const loadAssets = (id, gameList) => {
    if(gameList[id]){
        for (let i = 0; i < gameList[id].length; i++) loadAsset(gameList[id][i])
    }else{
        GameDebugger.log('Not found')
    }
}

/**
 * Reset game onclick event handdler 
 */
btnResetClickEvent = () => window.location.reload('')

/**
 * Start Game onclick event handdler
 */
btnStartClickEvent = () => {
    getGameId.url() !== '' ? loadAssets(getGameId.url(), gameList) : loadAssets(getGameId.select(), gameList)
    domElements.start.style.display = 'none'
    domElements.reset.style.display = ''
}

/**
 * Set the ui event handdlers and renders the UI
 * @param {*} gameList 
 */
const startUi = (gameList) => {     
    domElements.start.onclick = btnStartClickEvent
    domElements.reset.onclick = btnResetClickEvent
    renderGameSelect(gameList)
}

// Startup :) 
(() => {
    startUi(gameList)
    getGameId.url() !== '' ? loadAssets(getGameId.url(), gameList) : false
})()