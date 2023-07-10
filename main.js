import './style.css'
import { getRandomWord } from './src/randomWord.js'
import { setSharkImage } from './src/sharkImage.js'
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js'
import { setupGuesses } from './src/guess'

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`

const initSharkwords = () => {
  let numWrong = 0
  const handleGuess = (event, letter) => {
    event.target.setAttribute('disabled', true)
    let arr = document.querySelectorAll('.letter-box')
    let bool = true
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter)
    } else {
      numWrong++
      setSharkImage(document.getElementById('shark-img'), numWrong)
    }
    arr.forEach(e => {
      if (e.innerHTML === '') {
        bool = false
      }
    })
    setTimeout(() => {
      if (numWrong > 4 || bool) {
        document.querySelectorAll('button').forEach(e => {
          e.setAttribute('disabled', true)
        })
        bool
          ? (document.getElementById('game-status').innerHTML = 'You Win!')
          : (document.getElementById('game-status').innerHTML = 'You Lose!')
      }
    }, 100)
  }
  const word = getRandomWord()
  setSharkImage(document.getElementById('shark-img'), 0)
  setupWord(word, document.getElementById('word-container'))
  setupGuesses(document.getElementById('letter-buttons'), handleGuess)

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`)
}

initSharkwords()
