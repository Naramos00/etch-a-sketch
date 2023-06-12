
function createGrid(userInput){
    for(let row = 0; row < userInput; row++){
        let rowNum = document.createElement('div');
        rowNum.classList.add(`row${row}`);
        rowNum.classList.add('allRows');
        rowNum.style.width = '960px';
        let dimensions = 960/userInput;
        rowNum.style.height = `${dimensions}px`;
        document.getElementById('grid-container').append(rowNum);
        for(let column = 0; column < userInput; column++){
            let columns = document.createElement('div');
            columns.classList.add('column');
            columns.style.width = `${dimensions}px`
            document.querySelector(`.row${row}`).append(columns);
        }
    }
}

let grid = Number(prompt('How many units per side?'));

createGrid(grid);
const hoverEl = document.querySelectorAll('.column');
const containerClick = document.getElementById('grid-container');
const body = document.querySelector('body');
let count = 0;



containerClick.onclick = singleBlock();
body.ondblclick = dblClick;
//need an explanation for why dblClick() fires dblclick event, but dblClick with out () doesnt

function singleBlock(){

    hoverEl.forEach((e) => e.addEventListener('mousedown', () => {
        e.style.background = 'black';
    }));
}

function dblClick(){
    count += 1;
    if(count % 2 != 0){
        console.log(count);
        toggleSmooth();
    }
    else{
        console.log(count);
        toggleSmoothOff();
    }
}

function toggleSmooth(){
    hoverEl.forEach((e) => e.addEventListener('mouseover', handleSmooth));
}

function toggleSmoothOff(){
    hoverEl.forEach((e) => e.removeEventListener('mouseover', handleSmooth));
}

function handleSmooth(e){
    e.target.style.background = 'black';
}

