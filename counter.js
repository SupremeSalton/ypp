import { flatten } from "lodash"

export function setupCounter(element) {
  console.log(flatten([[[1,2,3,4,5,6,7,8,9,10]]]));
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
