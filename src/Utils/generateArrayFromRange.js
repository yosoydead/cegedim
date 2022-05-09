export const generateArrayFromRange = (from, to) => {
  if (typeof from !== 'number' && typeof to !== 'number') {
    console.log('argument(s) invalid')
    return []
  }
  const result = []
  for (let i = from; i < to; i++) {
    result.push(i)
  }

  return result
}
