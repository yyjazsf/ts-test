function isValid(s: string): boolean {
  if(!s.length) {
    return true
  }
  if(s.length % 2 !== 0) {
    return false
  }
  const stack = []

  interface generalMap {
    [key: string]: any;
    [index: number]: any;
  }
  const map : generalMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let i = 0, len = s.length; i < len; i++) {
    const v = s[i];
    if(map[v]) {
      stack.unshift(v)
    }
    else {
      const top = stack.shift()
      if(top && map[top] === v) {
        continue
      } else {
        return false
      }
    }
  }

  return !stack.length
};

export default isValid
