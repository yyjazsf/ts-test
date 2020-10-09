/**
 * https://leetcode-cn.com/leetbook/read/google-interview/1hdle/
 */
function repeatedStringMatch(a: string, b: string): number {
  if(b === '') {
    return 0
  }
  if(a.length >= b. length) {
    if(a.indexOf(b) > -1 ) {
      return 1
    }

    if((a+a).indexOf(b) > -1)  {
      return 2
    }
    return -1
  }
  let currIndex = b.indexOf(a)
  if(currIndex === -1) {

    if((a+a).indexOf(b) > -1)  {
      return 2
    }
    return -1
  }
  const len = a.length
  let count = 0
  let subChars = a

  if(currIndex > 0) {
    subChars = b.substring(0, currIndex)
    if(a.indexOf(subChars) === -1) {
      return -1
    }
    count++
    subChars = a
  }

  while(subChars === a && currIndex < b.length) {
    if(currIndex + len < b.length) {
      subChars = b.substring(currIndex, currIndex + len)
      if(a !== subChars) {
        return -1
      }
      currIndex += len
      count++
    } else {
      subChars = b.substring(currIndex)
      if(
        a.indexOf(subChars) !== 0 
        && subChars !== a.substring(a.length - subChars.length)) {
        console.log('aaaaaa')
        return -1
      }
      currIndex = b.length
      count++
    }
  }


  return count
};

export default repeatedStringMatch
