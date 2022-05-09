import { generateArrayFromRange } from './generateArrayFromRange'

export const createAsciiAlphabet = (casing) => {
  if (typeof casing === 'string' && (casing === 'lowercase' || casing === 'uppercase')) {
    if (casing === 'lowercase') {
      return generateArrayFromRange(97, 123)
    } else {
      return generateArrayFromRange(65, 91)
    }
  } else {
    return generateArrayFromRange(65, 91)
  }
}
