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

function restartGame(){
    let button = document.querySelector('#restart')
    
    button.addEventListener('click', () => {
        clearSquares();

    })
}

function clearSquares() {
    let squares = document.querySelectorAll('[data-cell]');
    squares.forEach((square) => {
        square.textContent = "";
    })
}

function checkWinner(){
    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6]  // Diagonal from top-right to bottom-left
      ];
}

function checkDraw(){

}

function handleClick(symbol){
    let currSymbol = symbol;
    let squares = document.querySelectorAll('[data-cell]');

    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (currSymbol === 'X'){
                updateSquare(square,currSymbol);
                currSymbol = switchTurns(currSymbol);
            }
            else if (currSymbol === 'O'){
                updateSquare(square, currSymbol);
                currSymbol = switchTurns(currSymbol);
            }
        },{once: true});
    })
}

function intializeGame(){
    let running = true;

    if (running){
        handleClick('X');
        restartGame();
    }
}


intializeGame();