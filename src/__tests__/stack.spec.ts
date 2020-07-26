import { BaseCalc } from '../stack'

describe('stack calc expression', () => {
  it('add 1+1=2', () => {
    expect(BaseCalc('1+1')).toBe(2)
  })
  it('subtraction 2-1=1', () => {
    expect(BaseCalc('2-1')).toBe(1)
  })
  it('multiplication 2*3=6', () => {
    expect(BaseCalc('2*3')).toBe(6)
  })
  it('multiplication 2*0=0', () => {
    expect(BaseCalc('2*0')).toBe(0)
  })
  it('multiplication 0*100=0', () => {
    expect(BaseCalc('0*100')).toBe(0)
  })
  it('division 100/2=50', () => {
    expect(BaseCalc('100/2')).toBe(50)
  })
  it('division 100/0= error', () => {
    expect(()=>{
      BaseCalc('100/0')
    }).toThrow('被除数不能为0！')
  })
})
