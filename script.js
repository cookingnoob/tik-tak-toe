//crear objeto cell - tieneun indicador numerico (creado por el loop) y una variable sin definir
//usar el loop para crear 9 casillas
//manda los objetos a un array
//acepta un valor que es dado por el player y va a la variable sin definir
//renderea en pantalla ese valor
//el jugador inicia y despues va la computadora (o un humano)
//la computadora hace un loop sobre el array para escoger un numero randon
//X va primero y luego va O
//saca el valor de las casillas
//exportar el valor de las casillas para que un externo defina el resultado del match

const Gameboard = (() => {
    //renders board
    let gameBoard = []
    const board = createElementWithClass ('div', 'board');
    document.body.appendChild(board);

    //creates enough cells for a 3x3 board (9 cells)
    for (let i = 0; i <=8; i++){
        let cell = createElementWithClass ('div', 'cell');
        board.append(cell);
        gameBoard.push(cell)
    }
    
    //
    const cells = document.querySelectorAll('.cell');
    const click = cells.forEach(cell => chooseCell(cell));

    function chooseCell(cell){
        cell.addEventListener('click', function(){
            if(cell.textContent != ''){
                return
            } else { 
            cell.textContent = playerX.sayName()
            }
        })
    }
    //ya crea un elemento con clase para el DOM
    //falta que agregue elementos de objeto como un indicador y un valor sin definir
    function createElementWithClass(elementType, className){
        let element = document.createElement(elementType);
        element.classList.add(className);
        return element;
    }

    return{
        click 
    }

})();

//va a tomar los valores de la casilla para las reglas del juego

const displayController = (() => { 
})();


//son dos botones
//cada uno tiene un valor diferente
//se elige que valor vas a exportar al tablero picando su respectivo boton
//

const Player = (name) => {
    //creates buttons
    const choosePlayer = document.createElement('div');
    choosePlayer.classList.add('playerBtn');
    choosePlayer.textContent = name;

    const playerSelection = document.querySelector('.playerSelection');
    playerSelection.appendChild(choosePlayer);

//exporta el valor del jugador
    const sayName = () => ` ${name}`
  
  
  return{
    sayName
    
  }

}
const playerX = Player('X')
playerX.sayName()

const playerO = Player('O')
playerO.sayName()





        // const board = document.querySelector('.board');
    