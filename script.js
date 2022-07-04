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