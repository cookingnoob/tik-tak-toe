
const Gameboard = (() => {
    let gameBoard = [];
    
    //renders board
    const board = document.createElement('div');
    board.classList.add('board')
    document.body.appendChild(board);

   
    const Cell = (identifier) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        board.appendChild(cellElement);
        return{cellElement, identifier, value : ``}
    }

    let cellsLoop = {}
    for (let i = 0; i < 9; i++){
        cellsLoop[`cell${i}`] =  Cell(i);
        gameBoard.push(cellsLoop[`cell${i}`]);
    }
   
    gameBoard.forEach(cell => {
        cell.cellElement.addEventListener('click', function(){
            cell.value = playerValue;
            console.log(cell);
            console.log(gameBoard)
        })
    });
    

    //click a cell to pass the palayer value
    const cells = document.querySelectorAll('.cell');
    const clickCell = cells.forEach(cell => chooseCell(cell));

    function chooseCell(cell){
        cell.addEventListener('click', function(){
            if(cell.textContent != ''){
                return
            } else { 
            cell.value = playerValue;
            cell.textContent = playerValue;
            
            }
        })
    }

    return{
        clickCell, 
      
    }

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





        // const board = document.querySelector('.board');
    