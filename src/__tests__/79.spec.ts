import exist from '../79'

describe('stack easy', () => {
  it('NO.1', () => {
    const board =
    [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ]
    expect(exist(board, 'ABCCED')).toBe(true)
    // expect(exist(board, 'SEE')).toBe(true)
    // expect(exist(board, 'ABCB')).toBe(false)
  })
  it('NO.2', () => {
    const board = [
      ["A","B","C","E"],
      ["S","F","C","S"],
      ["A","D","E","E"]
    ]
    expect(exist(board, 'ABCB')).toBe(false)
  })
})
