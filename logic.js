let tiles = [];

function createTiles(row) {
    const container = document.querySelector('.container-tile');
    container.innerHTML = '';
    for (let i = 0; i < row ** 2; i++) {
        let tile = document.createElement('span');
        tile.classList.add('tile');
        let size = 480 / row;
        tile.style.cssText = `width:${size}px;height:${size}px;outline:.5px solid black;`;
        tile = addDrawListener(tile, 'black');
        container.appendChild(tile);
        tiles.push(tile);
    }
}

function addDrawListener(tile, color) {
    tile.addEventListener('mouseover', (e) => {
        e.target.style.background = color;
    });
    return tile;
}

function clearTiles() {
    const childCount = document.querySelectorAll('.container-tile *').length;
    console.log(childCount);
    createTiles(Math.sqrt(childCount));
}

let resButtons = document.querySelectorAll('.sidebar.right button');
resButtons.forEach((b) => {
    b.addEventListener('click', (e) => {
        createTiles(parseInt(e.target.textContent))
    } 
)});

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearTiles);

let eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', () => {
    tiles.forEach((t) => addDrawListener(t, 'rgb(151,181,157)'))
});

let blackButton = document.querySelector('#black');
blackButton.addEventListener('click', () => {
    tiles.forEach((t) => addDrawListener(t, 'black'))
});

let trippyButton = document.querySelector('#trippy');
trippyButton.addEventListener('click', () => {
    tiles.forEach((t) => {
        let color = Math.floor(Math.random()*16777215).toString(16);
        addDrawListener(t, `#${color}`);
    } 
)});

createTiles(16); /* Load on init */

