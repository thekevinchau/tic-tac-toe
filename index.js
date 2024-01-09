let options = ["","","","","","","","",""]

function updateSquare(cell,symbol){
    cell.textContent = symbol;
}

function switchTurns(symbol){
    if (symbol === 'X'){
        return 'O';
    }
    else if (symbol === 'O'){
        return 'X';
    }
}

function handleClick(symbol){
    let currSymbol = symbol;
    let squares = document.querySelectorAll('[data-cell]');

    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (square.textContent === ''){
                if (currSymbol === 'X'){
                    updateSquare(square,currSymbol);
                    currSymbol = switchTurns(currSymbol);
                    console.log(square.textContent);
                }
                else if (currSymbol === 'O'){
                    updateSquare(square, currSymbol);
                    currSymbol = switchTurns(currSymbol);
                    console.log(square.textContent);
                }
            }
        });
    })
}

function clearBoard() {
    let squares = document.querySelectorAll('[data-cell]');
        squares.forEach(square => square.textContent = '')
}


function checkDraw(){
    //if check win doesn't return a true value then we can assume it's a draw
}

function intializeGame(){
    let running = true;
    let button = document.querySelector('#restart')

   if(running){
        handleClick('X');
        button.addEventListener('click', () => clearBoard())
        
    }
}


intializeGame();