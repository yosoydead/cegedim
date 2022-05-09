import { createAsciiAlphabet } from '../../../../src/Utils/createAsciiAlphabet'

describe('createAsciiAlphabet', () => {
  it('should return an array starting from 65 until 91 if no argument is provided', () => {
    const a = createAsciiAlphabet()
    expect(a.length).toEqual(26)
    for (let i = 0; i < 26; i++) {
      expect(a[i]).toEqual(65 + i)
    }

    const b = createAsciiAlphabet('fdsfds')
    expect(b.length).toEqual(26)
    for (let i = 0; i < 26; i++) {
      expect(b[i]).toEqual(65 + i)
    }

    const c = createAsciiAlphabet({})
    expect(c.length).toEqual(26)
    for (let i = 0; i < 26; i++) {
      expect(c[i]).toEqual(65 + i)
    }
  })

  it('should return an array starting from 97 until 123 if lowercase argument is provided', () => {
    const arr = createAsciiAlphabet('lowercase')
    expect(arr.length).toEqual(26)
    for (let i = 0; i < 26; i++) {
      expect(arr[i]).toEqual(97 + i)
    }
  })

  it('should return an array starting from 65 until 91 if uppercase argument is provided', () => {
    const arr = createAsciiAlphabet('uppercase')
    expect(arr.length).toEqual(26)
    for (let i = 0; i < 26; i++) {
      expect(arr[i]).toEqual(65 + i)
    }
  })
})
