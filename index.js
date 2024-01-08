function clickHandler(symbol){
    let currSymbol = symbol;
    let squares = document.querySelectorAll('[data-cell]');
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (currSymbol === 'X'){
                square.textContent = currSymbol;
                currSymbol = 'O';
            }
            else{
                square.textContent = currSymbol;
                currSymbol = 'X';
            }
        }
        )})
}

clickHandler('X');