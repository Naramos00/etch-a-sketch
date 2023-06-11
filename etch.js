
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