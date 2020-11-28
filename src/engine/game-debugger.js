/**
 * DEBUG TYPE LIST 
 * 
 * - none 
 * - ENGINE
 * - PIXEL
 * - ALL
 */

let DEBUG_TYPE = 'none'

class GameDebugger
{
    log = (type, data) => {
        if(!DEBUG_TYPE) return false
        const debugType = DEBUG_TYPE.toLocaleLowerCase()
        if(type.toLocaleLowerCase() === debugType || debugType === 'all'){
            console.log({ type, data })
        }
    }
}