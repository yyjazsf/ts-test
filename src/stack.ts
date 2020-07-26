/**
 * 使用栈实现基础的表达式计算
 * 普通算法，非后缀表达式
 * TODO 超过范围的情况
 * TODO 复杂表达式 加上(、)
 * @param expression 表达式（暂时只有+-* /）
 */
export function BaseCalc(expression: string): number | Error | undefined {
  const numStack: number[] = []
  const symbolStack: string[] = []

  let index = 0
  const expressionParseArr = expression.match(/(\d+)|([^\d])/g) || []
  const len = expressionParseArr.length

  while(index < len) {
    let v = expressionParseArr[index++]
    if(/\d/.test(v)) {
      numStack.unshift(window.parseFloat(v))
      continue;
    }
    if(numStack.length === 1 && '*/'.indexOf(v) > -1) {
      symbolStack.unshift(v)
      v = expressionParseArr[index++]
      numStack.unshift(window.parseFloat(v))
      calc(numStack, symbolStack)
      continue
    }

    // 操作符优先级于栈顶操作符
    if(symbolStack.length && prioritySymbol[v] <= prioritySymbol[symbolStack[0]]) {
      calc(numStack, symbolStack)
    }
    symbolStack.unshift(v)
   
  }
  while(symbolStack.length) {
    calc(numStack, symbolStack)
  }

  if(numStack.length) {
    return numStack.shift()
  }
}

function calc(numStack: number[], symbolStack:string[]) {
  const currentSymbol = symbolStack.shift()
  const rightVal = numStack.shift()
  const leftVal = numStack.shift()

  if(currentSymbol === '/' && rightVal === 0) {
    throw new Error('被除数不能为0！')
  }
  // 偷懒写法
  numStack.unshift(eval(`${leftVal}${currentSymbol}${rightVal}`))
}

interface SymbolMap {
  [key: string]: any;
  [index: number]: any;
}
const prioritySymbol: SymbolMap = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  //
  '(': 10,
  ')': 10
}

BaseCalc('1+1')
