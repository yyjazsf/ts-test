function exist(board: string[][], word: string): boolean {
  if(board.length === 0) return false
  if(word.length === 0) return true

  const row = board.length;
  // 动态获取列，保存每一行的列数
  const cols:Array<number> = []; //
  for (let i = 0; i < row; i++) {
    if (cols[i] === undefined) {
      cols[i] = board[i].length;
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols[i]; j++) {
      const rt = find(i, j, 0);
      if(rt) return true;
    }
  }

  function find(i: number, j: number, cur: number = 0): boolean {
    if(i<0 || i >= row) return false;
    if(j<0 || j >= cols[i]) return false;
    let letter = board[i][j]

    if(letter !== word[cur]) return false
    if(cur === word.length - 1) return true

    board[i][j] = ''
    cur++
    const rt = find(i+1, j, cur)
              || find(i, j+1, cur)
              || find(i-1, j, cur)
              || find(i, j-1, cur)

    board[i][j] = letter
    return rt;
  }
  return false;
}


export default exist;
