function createTiles(row) {
    let tiles = [];
    const container = document.querySelector('.container-tile');
    container.innerHTML = '';
    for (let i = 0; i < row ** 2; i++) {
        let tile = document.createElement('span');
        tile.classList.add('tile');
        let size = 480 / row;
        tile.style.cssText = `width:${size}px;height:${size}px;outline:.5px solid black;`;
        tile.addEventListener('mouseover', (e) => {
            e.target.classList.add('colored');
        });
        container.appendChild(tile);
        tiles.push(tile);
    }
    return tiles;
}

let resButtons = document.querySelectorAll('.sidebar.right button');
resButtons.forEach((b) => {
    b.addEventListener('click', (e) => {
        createTiles(parseInt(e.target.textContent))
    } 
)});

tiles = createTiles(16); /* Load on init */

