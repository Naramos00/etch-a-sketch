
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
let rainbowBtnOn = false;





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
    if(rainbowBtnOn == true){
        e.target.style.background = `${generateRandom()}`;
    }
    else{
        e.target.style.background = 'black';
    }
}

function clear(){
    const allColumns = document.querySelectorAll('.column');
    allColumns.forEach((e) => e.style.background = 'transparent');
}
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

const eraseBtn = document.getElementById('erase');
eraseBtn.onclick = toggleErase;
let eraseBtnOn = false;

function toggleErase(){
    if(!eraseBtnOn){
        eraseBtnOn = true;
        hoverEl.forEach((e) => e.addEventListener('mouseover', eraseOn));
        eraseBtn.classList.add("eraseon");
    }
    else{
        eraseBtnOn = false;
        hoverEl.forEach((e) => e.removeEventListener('mouseover', eraseOn));
        eraseBtn.classList.remove('eraseon');


    }
}

function eraseOn(e){
    e.target.style.background = 'transparent';
}

function generateRandom(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0); 
    
    return `#${randColor.toUpperCase()}`
}

const rainbowBtn = document.getElementById('rainbow');
rainbowBtn.onclick = toggleRainbow;

function toggleRainbow(){
    console.log(rainbowBtnOn);
    if(!rainbowBtnOn){
        rainbowBtnOn = true;
        hoverEl.forEach((e) => e.addEventListener('click', RainbowOn))
    }
    else{
        rainbowBtnOn = false;
        hoverEl.forEach((e) => e.removeEventListener('click', RainbowOn));
    }
}

function RainbowOn(e){
    e.target.style.background = `${generateRandom()}`;
}

