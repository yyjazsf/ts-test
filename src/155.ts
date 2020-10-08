/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

interface INode {
  value: number,
  min: number
}

class MinStack {
  private stack: INode[] = []

  push(x: number): void {
    const min = this.stack.length ? 
      (this.stack[0].min < x ? this.stack[0].min : x)
      : x

    this.stack.unshift({
      value: x,
      min
    })
  }

  pop(): void {
    this.stack.shift()
  }

  top(): number {
    return this.stack[0].value
  }

  getMin(): number {
    return this.stack[0].min
  }
}


// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],         [-2],  [0],   [-3],  [],      [],   [],   []]

export default MinStack
