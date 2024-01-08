function createPlayer(name, symbol){
    const playerName = name;
    const playerSymbol = symbol;
    let getPlayerName = () => {
        console.log('The player name is ' + playerName + ' and their symbol is: ' + playerSymbol )
    }

    return {playerName, playerSymbol,getPlayerName};
}

function handleClick(symbol) {
    let currSymbol = symbol;
    let squares = document.querySelectorAll('.board-square')
    console.log(squares);

    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', () => {
            if (currSymbol === 'X'){
                squares[i].textContent = currSymbol;
                currSymbol = 'O';
                console.log(currSymbol);
            }
            else if (currSymbol === 'O'){
                squares[i].textContent = currSymbol;
                currSymbol = 'X';
            }
        },
        {once: true}) //ensures that you can only click each square once

    }
}

handleClick('X');