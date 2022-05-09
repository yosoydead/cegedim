export const generateArrayFromRange = (from, to) => {
  if (typeof from !== 'number' && typeof to !== 'number') {
    console.log('one of the arguments is not a number')
    return []
  }
  const result = []
  for (let i = from; i < to; i++) {
    result.push(i)
  }

  return result
}
