import { calculateHundredsClass } from '../../../../src/Utils/calculateNumbersClass'

describe('calculateHundredsClass', () => {
  it('should return an object with key number and value array of numbers based on array elements', () => {
    const arr = [100, 150, 222, 289, 350, 777, 789, 999]
    const result = calculateHundredsClass(arr)
    const keys = Object.keys(result)

    expect(result).not.toBe({})
    expect(keys.length).toEqual(5)
    expect(keys.includes('2')).toBe(true)
    expect(keys.includes('5')).toBe(false)
    expect(result['2'].length).toEqual(2)
  })
})
