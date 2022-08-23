function createTiles(count) {
    let tiles = [];
    const container = document.querySelector('.container-tile');

    for (let i = 0; i < count; i++) {
        let tile = document.createElement('span');
        tile.classList.add('tile');
        tile.style.cssText = `width:30px;height:30px;outline:.5px solid black;`;
        tile.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black';
        });
        container.appendChild(tile);
        tiles.push(tile);
    }
    return tiles;
}

tiles = createTiles(256);
 

