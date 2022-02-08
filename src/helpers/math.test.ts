import {plus, minus, multiply, divide} from './math'

describe('testing math helpers functions', () => {
  
  //it should - isto deve acontecer
  it('should add correctly', () => {
    let result = plus(5, 8)

    expect(result).toBe(13)
    expect(result).toBeGreaterThan(12)
    expect(result).toBeLessThan(14)
  })

  it('should reduce correctly', () => {
    let result = minus(4, 3)
    let result2 = minus(3, 4)

    expect(result).toBe(1)
    expect(result2).toBe(-1)
  })

  it('should multiply correctly', () => {
    let result = multiply(3, 5)

    expect(result).toBe(15)
  })

  it('should divide correctly', () => {
    let result = divide(14, 7)

    expect(result).toBe(2)
  })
})

export {}