const Gameboard = (() => {
    let board = document.querySelector('.board');
    const click = board.addEventListener('click',prueba);
    function prueba(){
        console.log('hola')
    }
    return {
        click
    }
})();

    

// esto permite que puedas seleccionar un cuadro
const displayController = (() => { 
    let board = document.querySelector('.board');
    let cells = document.querySelectorAll('.cell');
            //¿¿Como compartir las variables dentro de la funcion?
    cells.forEach(cell => cell.addEventListener('click', function chooseCell(){
        if(cell.textContent != ''){
            return
        }else { 
        cell.textContent = 'O'
        }
    }))    
})();

//jugador
