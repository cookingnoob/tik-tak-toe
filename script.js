
const Gameboard = (() => {
    let gameBoard = [];
    const seeArray = () => firstCell = gameBoard[0];
    //renders board
    const board = document.createElement('div');
    board.classList.add('board')
    document.body.appendChild(board);

   
    const Cell = (identifier) => {
        //DOM manipulation 
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        board.appendChild(cellElement);
        return{cellElement, identifier}
    }
    let cellsLoop = {}
    for (let i = 0; i < 9; i++){
        cellsLoop[`cell${i}`] =  Cell(i);
        gameBoard.push(cellsLoop[`cell${i}`]);
    }

        console.log(gameBoard)


    //click a cell to pass the palayer value
    const cells = document.querySelectorAll('.cell');
    const clickCell = cells.forEach(cell => chooseCell(cell));

    function chooseCell(cell){
        cell.addEventListener('click', function(){
            if(cell.textContent != ''){
                return
            } else { 
            value = playerValue
            cell.textContent = playerValue
            }
        })
    }

    return{
        clickCell, 
        seeArray
    }

})();
Gameboard.seeArray()


const displayController = (() => { 
    //va a tomar los valores de la casilla para las reglas del juego
    console.log(firstCell)
})();


const Player = (name) => {
    //DOM manipulation 
    const choosePlayer = document.createElement('div');
    choosePlayer.classList.add('playerBtn');
    choosePlayer.textContent = name;
    const playerSelection = document.querySelector('.playerSelection');
    playerSelection.appendChild(choosePlayer);

    //stores the player value in a variable to send to the board
    const click = ()=> choosePlayer.addEventListener('click', value);
    const value = () => playerValue = name;

    return{
    click
    }
}

const playerX = Player('X')
playerX.click()

const playerO = Player('O')
playerO.click()





        // const board = document.querySelector('.board');
    