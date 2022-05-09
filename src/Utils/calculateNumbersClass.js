export const calculateHundredsClass = (array, numClass) => {
  const result = {}

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const elementClass = Math.floor(element / 100)

    if (result[elementClass]) {
      console.log('exista clasa', elementClass)
      result[elementClass].push(element)
    } else {
      console.log('nu exista clasa', elementClass)
      result[elementClass] = [element]
    }
  }

  return result
}
