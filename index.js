function createPlayer(name, symbol){
    const playerName = name;
    const playerSymbol = symbol;

    return {playerName, playerSymbol};
}

const displayController = function(){
    const chooseSide = () => console.log("Hello World!")
    return {chooseSide}
}

console.log(displayController.chooseSide);

let player1 = createPlayer('Kevin', 'X')
console.log({
    playerName: player1.playerName,
    playerSymbol: player1.playerSymbol
})

let player2 = createPlayer('Jenna', 'O');
console.log(player2.playerSymbol);
