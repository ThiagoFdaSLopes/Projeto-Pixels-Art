//-------------------- CRIANDO OS PIXELS 5x5 ------------------------

for (let index = 1; index <= 25; index += 1) {
    const board = document.getElementById('pixel-board');
    const divs = document.createElement('div');
    divs.classList.add('pixel');
    divs.style.backgroundColor = 'White';
    board.appendChild(divs);
    board.style.width = '220px';
    board.style.height = '220px';
}