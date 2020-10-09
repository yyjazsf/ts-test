import repeatedStringMatch from '../../google-interview/1'

describe('stack easy', () => {
  it('no.1', () => {
    expect(repeatedStringMatch("abcd", 'cdabcdab')).toBe(3)
  })
  it('no.2', () => {
    expect(repeatedStringMatch("aa", 'a')).toBe(1)
  })
  it('no.3', () => {
    expect(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab", 'ba')).toBe(2)
  })
  it('no.4', () => {
    expect(repeatedStringMatch("abcd", 'bcdab')).toBe(2)
  })
})
