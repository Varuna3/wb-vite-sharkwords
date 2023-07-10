import sample from 'lodash.sample'

const words = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
]

export function getRandomWord() {
  return sample(words)
}

// console.log(getRandomWord())
