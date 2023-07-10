let word

function setupWord(initWord, element) {
  word = initWord
  initWord
    .split('')
    .forEach(e => (element.innerHTML += `<div class='letter-box'></div>`))
}

function isLetterInWord(letter) {
  return word.includes(letter) ? true : false
}

function revealLetterInWord(letter) {
  let arr = document.querySelectorAll('.letter-box')
  word.split('').forEach((e, i) => {
    if (e === letter) {
      arr[i].innerHTML = letter
    }
  })
}

export { setupWord, isLetterInWord, revealLetterInWord }
