
const Gameboard = (() => {
    let gameBoard = [];
    
    //Renders board
    const board = document.createElement('div');
    board.classList.add('board')
    document.body.appendChild(board);

    //cell factory
    const Cell = (identifier) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        board.appendChild(cellElement);
        return{cellElement, identifier, value : ``}
    }
    //creates cells with dynamic naming
    let cellsLoop = {}
    for (let i = 0; i < 9; i++){
        cellsLoop[`cell${i}`] =  Cell(i);
        gameBoard.push(cellsLoop[`cell${i}`]);
    }
    
    //select a cell to add the player checker as text content
    const cells = document.querySelectorAll('.cell');
    const clickCell = cells.forEach(cell => addText(cell));
    function addText(cell){
         cell.addEventListener('click', function(){
             if(cell.textContent != ''){
                 return
             } else { 
             cell.textContent = playerValue; 
             }
         })
     }
    //add the value of the checker to the value of the cell object value : X
    gameBoard.forEach(cell => {
        cell.cellElement.addEventListener('click', function(){
            cell.value = playerValue;
            console.log(gameBoard[0].value + gameBoard[1].value + gameBoard[2].value);
            
        })
    });
    
    return{}

})();



const displayController = (() => { 
    //va a tomar los valores de la casilla para las reglas del juego
    
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
