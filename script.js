//un objeto que tiene el tablero
//Crear array para guardar el tablero, no tengo idea de que se refiere con esto
//es crear una fabrica para la parrilla del tablero
//va a tener un valor del numero de casilla, para definir las reglas de ganar/perder/empate
//va a tener un valor que sera definido cuando el jugador haga click

const Gameboard = (() => {
    let gameboard = []
    const board = createElementWithClass ('div', 'board');
    const one = createElementWithClass ('div', 'cell');
    const two = createElementWithClass ('div', 'cell');
    const three = createElementWithClass ('div', 'cell');
    const four = createElementWithClass ('div', 'cell');
    const five = createElementWithClass ('div', 'cell');
    const six = createElementWithClass ('div', 'cell');
    const seven = createElementWithClass ('div', 'cell');
    const eight = createElementWithClass ('div', 'cell');
    const nine = createElementWithClass ('div', 'cell');
    document.body.appendChild(board);
    board.append(one, two, three, four, five, six, seven, eight, nine)

    function createElementWithClass(elementType, className){
            let element = document.createElement(elementType);
            element.classList.add(className);
            gameboard.push(element);
            return element;
        }

    return{
        // click
        
    }

})();

//va a tomar los valores de la casilla para las reglas del juego

const displayController = (() => { 
})();


//son dos botones
//se elige picando uno 
const Player = (name) => {
    //creates buttons
    const choosePlayer = document.createElement('div');
    choosePlayer.classList.add('playerBtn');
    choosePlayer.textContent = name;
    


    const playerSelection = document.querySelector('.playerSelection');
    playerSelection.appendChild(choosePlayer);


    const sayName = () => `my name is ${name}`
    
  
  return{
    sayName
  }
   
}
const playerX = Player('X')
playerX.sayName()

const playerO = Player('O')






        // const board = document.querySelector('.board');
    // const cells = document.querySelectorAll('.cell');
    // const click = cells.forEach(cell => chooseCell(cell));

    // function chooseCell(cell){
    //     cell.addEventListener('click', function(){
    //         if(cell.textContent != ''){
    //             return
    //         }else { 
    //         cell.textContent = 'O'
    //         }
    //     })
    // }