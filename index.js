function createPlayer(name, symbol){
    const playerName = name;
    const playerSymbol = symbol;
    let getPlayerName = () => {
        console.log('The player name is ' + playerName + ' and their symbol is: ' + playerSymbol )
    }

    return {playerName, playerSymbol,getPlayerName};
}


function handleClick(symbol){
    const squares = document.querySelectorAll('.board-square');
    squares.forEach((square) => {
        if (symbol === 'X'){
            square.addEventListener('click', () => {
                square.textContent = 'X';
            }
            )
        }
        else {
            square.addEventListener('click', ()=> {
                square.textContent = 'O';
            })
        }
    })
}


handleClick('O');