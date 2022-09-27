const grid = document.querySelector('#grid');

const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');

const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');
let activePlayer = 'player1'

const restart = document.querySelector('#btn-restart')

// change the active player
let changeActivePlayer = () => {
  if (activePlayer === 'player1') {
    activePlayer = 'player2'
    player1.classList.remove('active-player')
    player2.classList.add('active-player')
  } else {
    activePlayer = 'player1'
    player2.classList.remove('active-player')
    player1.classList.add('active-player')
  }
}

// function to reset the game
let resetGame = () => {
  // reset table
  table = ['inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive'];
  // set player 1 active
  activePlayer = 'player1'
  player2.classList.remove('active-player')
  player1.classList.add('active-player')
  // reset styles from cells
  cell1.classList.remove('cross')
  cell1.classList.remove('circle')
  cell2.classList.remove('cross')
  cell2.classList.remove('circle')
  cell3.classList.remove('cross')
  cell3.classList.remove('circle')
  cell4.classList.remove('cross')
  cell4.classList.remove('circle')
  cell5.classList.remove('cross')
  cell5.classList.remove('circle')
  cell6.classList.remove('cross')
  cell6.classList.remove('circle')
  cell7.classList.remove('cross')
  cell7.classList.remove('circle')
  cell8.classList.remove('cross')
  cell8.classList.remove('circle')
  cell9.classList.remove('cross')
  cell9.classList.remove('circle')
  // message to console
  console.log('game restarted')
}

restart.addEventListener('click', () => {
  resetGame()
})

// Table of choices
let table = ['inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive']

grid.addEventListener('click', (e) => {
  let cell = e.target.id;
  console.log(cell);
  let tablePos = parseInt(cell.substring(4,5)) - 1
  console.log(tablePos)
  
  if (table[tablePos] === 'inactive') {
    if (activePlayer === 'player1') {
      console.log(activePlayer)
      table[tablePos] = 'cross'
      switch (cell) {
        case 'cell1':
          cell1.classList.add('cross');
          break;
        case 'cell2':
          cell2.classList.add('cross');
          break;
        case 'cell3':
          cell3.classList.add('cross');
          break;
        case 'cell4':
          cell4.classList.add('cross');
          break;
        case 'cell5':
          cell5.classList.add('cross');
          break;
        case 'cell6':
          cell6.classList.add('cross');
          break;
        case 'cell7':
          cell7.classList.add('cross');
          break;
        case 'cell8':
          cell8.classList.add('cross');
          break;
        case 'cell9':
          cell9.classList.add('cross');
          break;
      }
      console.log(table)
      changeActivePlayer()
    } else {
      console.log(activePlayer)
      table[tablePos] = 'circle'
      switch (cell) {
        case 'cell1':
          cell1.classList.add('circle');
          break;
        case 'cell2':
          cell2.classList.add('circle');
          break;
        case 'cell3':
          cell3.classList.add('circle');
          break;
        case 'cell4':
          cell4.classList.add('circle');
          break;
        case 'cell5':
          cell5.classList.add('circle');
          break;
        case 'cell6':
          cell6.classList.add('circle');
          break;
        case 'cell7':
          cell7.classList.add('circle');
          break;
        case 'cell8':
          cell8.classList.add('circle');
          break;
        case 'cell9':
          cell9.classList.add('circle');
          break;
      }
      console.log(table)
      changeActivePlayer()
    }
  } else {
    console.log('cannot select this cell')
  }
})