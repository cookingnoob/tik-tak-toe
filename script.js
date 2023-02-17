//un objeto que tiene el tablero
//Crear array para guardar el tablero, no tengo idea de que se refiere con esto
// ¿¿sera crear los elementos con tecnicas de dom y guardarlos como objetos?
const Gameboard = (() => {

    const board = document.querySelector('.board');
    const cells = document.querySelectorAll('.cell');
    const click = cells.forEach(cell => chooseCell(cell));

    function chooseCell(cell){
        cell.addEventListener('click', function(){
            if(cell.textContent != ''){
                return
            }else { 
            cell.textContent = 'O'
            }
        })
    }

    return{
        click
    }

})();

const displayController = (() => { 
})();

const Player = (checker) => {
    const chooseChecker = document.getElementsByClassName('.chooseChecker');
    const playerX = createElementWithClass('div', 'playerX');
    const playerO = createElementWithClass('div', 'playerO')

    function createElementWithClass(elementType, className){
        let element = document.createElement(elementType);
        element.classList.add(className);
        return element;
    }
}

//jugador
        //tiene un X o O 
        //cada click pasa ese elemento a la casilla
        //no puede haber dos iguales