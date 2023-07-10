import { setSharkImage } from './sharkImage'
import { isLetterInWord, revealLetterInWord } from './word'

// create a string with the characters in the alphabet, so we can turn it into an array later
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

//define a function that takes two parameters (element and a callback function)
function setupGuesses(element, handleGuess) {
  // turn the alphabet string into an alphabet array, and then enter a for each loop for that array
  alphabet.split('').forEach(letter => {
    // for each item in the alphabet array, create a button element
    const btn = document.createElement('button')
    // change the innertext to the current item in the loop
    btn.innerText = letter
    // add an eventlistener to call handleGuess when a click event happens
    btn.addEventListener('click', e => handleGuess(e, letter))
    // add the button to the parent element
    element.append(btn)
  })
}

// setupGuesses(document.querySelector('#letter-buttons'), handleGuess)

// export the function so we can import it in the main.js file
export { setupGuesses }
