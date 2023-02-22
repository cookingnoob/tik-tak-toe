
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
            checkWinner ()
        })
    });
    //necesito que se active despues no de inmediato
    //celdas que declaran victoria inmediata 2, 5, 8
    // no funciona en primer columna, segunda, tercera
    function checkWinner (){
        if (gameBoard[0].value = gameBoard[1].value = gameBoard[2].value){
        console.log(`${gameBoard[0].value} wins primer fila`)
        } else if (gameBoard[3].value = gameBoard[4].value = gameBoard[5].value){
            console.log(`${gameBoard[3].value} wins segunda fila`)
        }else if (gameBoard[6].value = gameBoard[7].value = gameBoard[8].value){
            console.log(`${gameBoard[6].value} wins tercer fila`)

        }else if (gameBoard[0].value = gameBoard[3].value = gameBoard[6].value){
            console.log(`${gameBoard[0].value} wins primer columna`)
        }else if (gameBoard[1].value = gameBoard[4].value = gameBoard[7].value){
            console.log(`${gameBoard[1].value} wins segunda columna`)
        }else if (gameBoard[2].value = gameBoard[5].value = gameBoard[8].value){
            console.log(`${gameBoard[2].value} wins tercer columna`)
        }
        
        else if (gameBoard[0].value = gameBoard[4].value = gameBoard[8].value){
            console.log(`${gameBoard[3].value} wins primer diagonal`)
        }else if (gameBoard[6].value = gameBoard[4].value = gameBoard[2].value){
            console.log(`${gameBoard[2].value} wins segunda diagonal`)
        }
    }
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
