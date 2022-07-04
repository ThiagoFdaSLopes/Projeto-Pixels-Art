//-------------------- CRIANDO OS PIXELS 5x5 ------------------------
for (let index = 1; index <= 25; index += 1) {
    const board = document.getElementById('pixel-board');
    const divs = document.createElement('div');
    divs.classList.add('pixel');
    divs.style.backgroundColor = '#fff';
    board.appendChild(divs);
    board.style.width = '220px';
    board.style.height = '220px';
}
//--------------------------------------------------------------------

//-----------CRIANDO AS CLASSES SELECTED E NO SELECTED----------------
function addSelected(event){
    event.target.classList.add('selected');
}

let cores = document.getElementsByClassName('color');

function tiraSelect(){
    for(let i = 0; i < cores.length; i +=1 ){
        cores[i].classList.remove('selected');
    }
}

for(let i = 0; i < cores.length; i += 1){
    cores[i].addEventListener('click', tiraSelect);
    cores[i].addEventListener('click', addSelected);
}

//Colocando a cor do pixel nos pixels
function coresDosPixels(event) {
    if(event.target.classList.contains('pixel')){
        const pegaADiv = document.querySelector('.selected');
        const pegaACor = window.getComputedStyle(pegaADiv).getPropertyValue('background-Color');
        event.target.style.backgroundColor = pegaACor;
    }
}
document.addEventListener('click', coresDosPixels);

//------------------------CRIANDO O BOTAO PARA LIMPAR OS PIXELS----------------
let inputBotao = document.querySelector('#clear-board');

inputBotao.addEventListener('click', function(){
    const palletCollor = document.querySelectorAll('.pixel');
    palletCollor.forEach((teste) => {
      teste.style.backgroundColor = 'white';
    });
})

//----------------CRIANDO MECANICA DE GERAR TAMANHO ALEATORIO------------------------
function createBoardUser(){
    const board = document.getElementById('pixel-board');
    const input = document.getElementById('board-size');

    board.innerText = '';
    if(input.value === ''){
        alert('Board inválido!');
    }
    else if(input.value < 5){
        alert('Valor invalido');
        input.value = 5;
        boardUser();
    }
    else if(input.value > 50){
        input.value = 50;
        boardUser();
    }
    else {
        boardUser();
    }

}


function clickButton() {
    const button = document.getElementById('generate-board');
    button.addEventListener('click', createBoardUser);
}
clickButton();


//-------------TAMANHO DO BOARD----------------------------
function boardUser() {
    const board = document.getElementById('pixel-board');
    const input = document.getElementById('board-size');
    let inputValue = input.value;
    board.style.height = inputValue * 44 + 'px';
    board.style.width = inputValue * 44 + 'px';
    const matriz = inputValue ** 2;
    for (let index = 0; index < matriz; index += 1) {
      const divs = document.createElement('div');
      divs.classList.add('pixel');
      divs.style.backgroundColor = '#fff';
      board.appendChild(divs);
    }
}