
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
    };

    //creates cells with dynamic naming
    for (let i = 0; i < 9; i++){
        gameBoard[i] =  Cell(i);
    }
    
    //select a cell to add the player checker as text content
    const cells = document.querySelectorAll('.cell');

    const clickCellElement = () => cells.forEach(cell => addText(cell));

    function addText(cell){
         cell.addEventListener('click', function(){
             if(cell.textContent != ''){
                 return
             } else { 
             cell.textContent = playerValue; 
             }
         })
     };

    //add the value of the checker to the value of the cell object value : X
    gameBoard.forEach(cell => {
        cell.cellElement.addEventListener('click', function(){
            cell.value = playerValue;
            botTurn( )
        })
    });

    const botTurn = () => {
        //que el bot escoja una celda que no esta seleccionada
        // filtra las celdas que ya estan seleccionadas
        // un loop filter
        // separar las casillas que por el valor de value vacio/lleno
        // escoge un numero al asar del 0 a lo largo del array
       

        const randomNumber = Math.floor(Math.random() * 9);
        gameBoard[randomNumber].value = 'O';
        gameBoard[randomNumber].cellElement.textContent = 'O'
    }
    
   const seeArray = () => console.log(gameBoard);

    return{seeArray, clickCellElement}

})();


const displayController = (() => { 
    //va a tomar los valores de la casilla para las reglas del juego
    Gameboard.seeArray();
    Gameboard.clickCellElement('hola');
})();


const Player = (name) => {
    //DOM manipulation 
    const choosePlayer = document.createElement('div');
    choosePlayer.classList.add('playerBtn');
    choosePlayer.textContent = name;
    const playerSelection = document.querySelector('.playerSelection');
    playerSelection.appendChild(choosePlayer);

    //stores the player value in a variable to send to the board
            // playerValue es el boton que picas, botValue es el que sobro
            //se deberia definir en el 
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

