const domElements = {
    select: document.getElementById('select-game'),
    start: document.getElementById('start-game'),
    reset: document.getElementById('reset-btn')
}

const getGameId = {
    url : () =>  window.location.hash.replace('#', ''),
    select: () => domElements.select.value
}

const getGameById = (id) => !gameList[id] ? false : gameList[id]

const createOptionWithKey = (key) => ((domElements.select.innerHTML+= `<option value="${key}">${key}</option>` ))

const renderGameSelect = (assets) => ((Object.keys(assets).forEach(createOptionWithKey)))

const loadAsset = (file) => {
    const tag = document.createElement('script')
    tag.setAttribute('src', file)
    document.body.appendChild(tag)
}

const loadAssets = (id, gameList) => {
    if(gameList[id]){
        for (let i = 0; i < gameList[id].length; i++) loadAsset(gameList[id][i])
    }else{
        GameDebugger.log('Not found')
    }
}

const btn = {}

btn.resetClickEvent = () => window.location.reload('')

btn.startClickEvent = () => {
    getGameId.url() !== '' ? loadAssets(getGameId.url(), gameList) : loadAssets(getGameId.select(), gameList)
    domElements.start.style.display = 'none'
    domElements.reset.style.display = ''
}

const startUi = (gameList) => {     
    domElements.start.onclick = btn.startClickEvent
    domElements.reset.onclick = btn.resetClickEvent
    renderGameSelect(gameList)
}

startUi(gameList)
getGameId.url() !== '' ? loadAssets(getGameId.url(), gameList) : false