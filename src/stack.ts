/**
 * 使用栈实现基础的表达式计算
 * TODO 超过范围的情况
 * TODO 复杂表达式 加上(、)
 * @param expression 表达式（暂时只有+-* /）
 */
export function BaseCalc(expression: string): number | Error | undefined {
  const numStack: number[] = []
  const symbolStack: string[] = []

  let currentSymbol = null
  let leftVal = null
  let rightVal = null

  let index = 0
  const expressionParseArr = expression.match(/(\d+)|([^\d])/g) || []
  const len = expressionParseArr.length

  while(index < len) {
    const v = expressionParseArr[index]
    index++
    if(/\d/.test(v)) {
      numStack.unshift(window.parseFloat(v))
      continue;
    }
    if(numStack.length < 2 || (symbolStack[0] && ArithmeticSymbol[symbolStack[0]] > ArithmeticSymbol[v])) {
      symbolStack.unshift(v)
    } else {
      currentSymbol = symbolStack.pop()
      rightVal = numStack.pop()
      leftVal = numStack.pop()
      // 偷懒写法
      numStack.unshift(eval(`${leftVal}${currentSymbol}${rightVal}`))
    }
  }
  if(symbolStack.length) {
    currentSymbol = symbolStack.pop()
    leftVal = numStack.pop()
    rightVal = numStack.pop()
    if(currentSymbol === '/' && rightVal === 0) {
      throw new Error('被除数不能为0！')
    }
    // 偷懒写法 eval
    numStack.unshift(eval(`${leftVal}${currentSymbol}${rightVal}`))
  }

  if(numStack.length) {
    return numStack.pop()
  }
}

interface SymbolMap {
  [key: string]: any;
  [index: number]: any;
}
const ArithmeticSymbol: SymbolMap = {
  '+': 1,
  '-': 2,
  '*': 3,
  '/': 4,
  //
  '(': 10,
  ')': 10
}

BaseCalc('1+1')
