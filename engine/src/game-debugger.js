/**
 * DEBUG TYPE LIST 
 * 
 * - none 
 * - ENGINE
 * - PIXEL
 * - ALL
 */
class SpellGameDebugger {
    static errorCount = 0

    static log = (data) => {
      if (typeof data !== 'string') data = JSON.stringify(data)

      document.getElementById('debug-panel').innerHTML += `<p class='debugger-line'>${GameDebugger.errorCount++}::${data}</p>`
      document.getElementById('debug-panel').scrollTop  = 99999999
    }
}