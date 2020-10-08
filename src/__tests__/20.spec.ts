import isValid from '../20'

describe('stack easy', () => {
  it('()', () => {
    expect(isValid('()')).toBe(true)
  })
  it('({})', () => {
    expect(isValid('({})')).toBe(true)
  })
  it('({[]})', () => {
    expect(isValid('({[]})')).toBe(true)
  })
  it('((()))', () => {
    expect(isValid('((()))')).toBe(true)
  })

  it('((', () => {
    expect(isValid('((')).toBe(false)
  })
  it('(()', () => {
    expect(isValid('(()')).toBe(false)
  })
})
