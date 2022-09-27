const cell1 = document.querySelector('#cell-1');
const cell2 = document.querySelector('#cell-2');
const cell3 = document.querySelector('#cell-3');
const cell4 = document.querySelector('#cell-4');
const cell5 = document.querySelector('#cell-5');
const cell6 = document.querySelector('#cell-6');
const cell7 = document.querySelector('#cell-7');
const cell8 = document.querySelector('#cell-8');
const cell9 = document.querySelector('#cell-9');

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

cell1.addEventListener('click', () => {
  if (table[0] === 'inactive') {
    if (activePlayer === 'player1') {
      console.log(activePlayer)
      table[0] = 'cross'
      cell1.classList.add('cross')
      console.log(table)
      changeActivePlayer()
    } else {
      console.log(activePlayer)
      table[0] = 'circle'
      cell1.classList.add('circle')
      console.log(table)
      changeActivePlayer()
    }
  } else {
    console.log('cannot select this cell')
  }
})


cell2.addEventListener('click', () => {
  if (table[1] === 'inactive') {
    if (activePlayer === 'player1') {
      console.log(activePlayer)
      table[1] = 'cross'
      cell2.classList.add('cross')
      console.log(table)
      changeActivePlayer()
    } else {
      console.log(activePlayer)
      table[1] = 'circle'
      cell2.classList.add('circle')
      console.log(table)
      changeActivePlayer()
    }
  } else {
    console.log('cannot select this cell')
  }
})