//Player Input
function ready(){
    let readyBtn = document.querySelector('#readyButton')
    let inputPage = document.querySelector('.inputPage')
    let container = document.querySelector('.container');

    readyBtn.addEventListener('click', () => {
        inputPage.style.display = "none";
        container.style.display = "flex";
        console.log('clicked')
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

function handleClick(player){
    let currSymbol = player.symbol;
    let squares = document.querySelectorAll('[data-cell]');
    let status = document.querySelector('.playerTurn')
    status.textContent = `${currSymbol}'s turn`

    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (square.textContent === ''){
                if (currSymbol === 'X'){
                    updateSquare(square,currSymbol);
                    currSymbol = switchTurns(currSymbol);
                    status.textContent = `${currSymbol}'s turn`
                    console.log(square.textContent);
                }
                else if (currSymbol === 'O'){
                    updateSquare(square, currSymbol);
                    currSymbol = switchTurns(currSymbol);
                    status.textContent = `${currSymbol}'s turn`
                    console.log(square.textContent);
                }
            }
        });
    })
}

function clearBoard() {
    let squares = document.querySelectorAll('[data-cell]');
        squares.forEach(square => square.textContent = '')
    
    let status = document.querySelector('.playerTurn')
    status.textContent = `X's turn`
}

function intializeGame(){
    ready();
    let running = true;
    let button = document.querySelector('#restart');
    let person = createPlayer('Kevin', 'X')
    button.addEventListener('click', () => clearBoard())

    if(running){
        handleClick(person);
    }
}


intializeGame();