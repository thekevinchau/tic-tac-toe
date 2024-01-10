//Player Input
function ready(){
    let readyBtn = document.querySelector('#readyButton')
    let inputPage = document.querySelector('.inputPage')
    let container = document.querySelector('.container');

    //loads the TicTacToe board into the screen upon clicking ready
    readyBtn.addEventListener('click', () => {
        inputPage.style.display = "none";
        container.style.display = "flex";
    })
}

//Game Logic
function createPlayer(player, symbol){
    return {player, symbol};
}

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

function handleClick(){
    let currSymbol = 'X';
    let squares = document.querySelectorAll('[data-cell]');
    let status = document.querySelector('.playerTurn')
    status.textContent = `${currSymbol}'s turn`

    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (square.textContent === ''){
                if (currSymbol === 'X'){
                    updateSquare(square,currSymbol);
                    checkWinner();
                    currSymbol = switchTurns(currSymbol);
                    status.textContent = `${currSymbol}'s turn`
                }
                else if (currSymbol === 'O'){
                    updateSquare(square, currSymbol);
                    checkWinner();
                    currSymbol = switchTurns(currSymbol);
                    status.textContent = `${currSymbol}'s turn`
                }
            }
        });
    })
}

function checkWinner(){
    let squares = document.querySelectorAll('[data-cell]');
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];



      //for each combination in the winningCombinations
    for (const combination of winningCombinations){
        const [a,b,c] = combination //we destructure each nested array into variables A, B, and C so that we can compare each tile to the particular array

        //first iteration: square[0] = square[1] = square[2]
        //second: square[3] = square[4] = square[5];
        //Since the square array and winningCombinations are zero-indexed, we want to compare if the square at [a,b,c] are all the same. If that is so, then we have a winner.
        if (squares[a].textContent !== '' && squares[b].textContent !== '' && squares[c].textContent !== ''){ //making sure that the squares are not empty so that it doesn't always return a winner
            if (squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent && squares[b].textContent === squares[c].textContent){
                //X === X && X === X && X === X
                console.log('WE have a winner');
        }
        }
    }
}


//Board Handlers

function clearBoard() {
    let squares = document.querySelectorAll('[data-cell]');
        squares.forEach(square => square.textContent = '')
    
    let status = document.querySelector('.playerTurn')
    status.textContent = `X's turn`
}

function intializeGame(){
    const player1 = createPlayer("Kevin", 'X');
    handleClick(player1);
    checkWinner();
}

function displayController(){
    ready(); //loads the initial page
    let button = document.querySelector('#restart');
    button.addEventListener('click', () => clearBoard())
}



displayController();
intializeGame();