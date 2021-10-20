/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 */


/* Dichiarazione delle statistiche per la difficoltà facile */
const easyBtn = document.getElementById('easy')

/* Dichiarazione delle statistiche per la difficoltà media */
const mediumBtn = document.getElementById('medium')
const mediumContain = document.getElementById('containerMedium')

/* Dichiarazione delle statistiche per la difficoltà difficile */
const hardBtn = document.getElementById('hard')
const hardContain = document.getElementById('containerHard')


easyBtn.addEventListener('click', function () {
  const easyContain = document.getElementById('containerEasy')

  for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    easyContain.append(square);
    console.log(square);
  }
})