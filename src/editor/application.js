const canvas = new SpellCanvas('game')

let positions = {
    x: 0,
    y: 0
}

document.onmousemove = (e) => {    
    const rect = canvas.element.getBoundingClientRect();
    positions.x = e.clientX - rect.left - 5;
    positions.y = e.clientY- rect.top - 5;
}

document.onclick = () => {
    canvas.drawPixel(positions.x, positions.y, 'red', 10)
}
