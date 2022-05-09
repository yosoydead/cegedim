import { generateArrayFromRange } from '../../../../src/Utils/generateArrayFromRange'

describe('generateArrayFromRange', () => {
  it('should generate an array from 10 to 20 non-inclusive', () => {
    const arr = generateArrayFromRange(10, 20)
    expect(arr.length).toEqual(10)
    expect(arr[0]).toEqual(10)
    expect(arr[9]).toEqual(19)
  })

  it('should generate range from -10 to 0 non-inclusive', () => {
    const arr = generateArrayFromRange(-10, 0)
    expect(arr.length).not.toEqual(0)
    expect(arr.length).toEqual(10)
    expect(arr[0]).toEqual(-10)
    expect(arr[9]).toEqual(-1)
  })

  it('it should return an empty array if one of the arguments or both are of invalid type', () => {
    const a = generateArrayFromRange()
    expect(a.length).toEqual(0)

    const b = generateArrayFromRange(10, null)
    expect(b.length).toEqual(0)

    const c = generateArrayFromRange([], undefined)
    expect(c.length).toEqual(0)

    const d = generateArrayFromRange('bogdan', 10)
    expect(d.length).toEqual(0)
  })

  it('should handle invalid range (start bigger than end)', () => {
    const arr = generateArrayFromRange(11, -8)
    expect(arr.length).toEqual(0)

    const arrr = generateArrayFromRange(-11, -100)
    expect(arrr.length).toEqual(0)
  })
})
