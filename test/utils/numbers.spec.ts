import {
  numberHasDecimalPoint,
  decimalPointRestrict,
  isValidValueToDecimalPointRestrict,
  isValidDecimalSpaceToDecimalPointRestrict,
  getNumberInString
} from '~/utils/numbers.util'

describe('test numberHasDecimalPoint', () => {
  it('has decimal point', () => {
    expect(numberHasDecimalPoint(10.3)).toBeTruthy()
    expect(numberHasDecimalPoint('10,3')).toBeTruthy()
    expect(numberHasDecimalPoint('1.001,3')).toBeTruthy()
  })

  it("haven't decimal point", () => {
    expect(numberHasDecimalPoint(103)).toBeFalsy()
    expect(numberHasDecimalPoint('103')).toBeFalsy()
    expect(numberHasDecimalPoint('1.013')).toBeFalsy()
  })
})

describe('test decimalPointRestrict', () => {
  it('formatted value', () => {
    expect(decimalPointRestrict(10.34, '1')).toEqual(10.3)
    expect(decimalPointRestrict('10,345', '2')).toEqual('10,34')
    expect(decimalPointRestrict('Value: 10,345', '2')).toEqual('Value: 10,34')
    expect(decimalPointRestrict('Value : 10,345', '2')).toEqual('Value : 10,34')
    expect(decimalPointRestrict('Value :10,345', '2')).toEqual('Value :10,34')
    expect(decimalPointRestrict('10,345', '0')).toEqual('10')
    expect(decimalPointRestrict('1.001,3456', '3')).toEqual('1.001,345')
    expect(decimalPointRestrict('1.001,345', '5')).toEqual('1.001,345')
  })

  it("can't format", () => {
    expect(decimalPointRestrict(103, '1')).toEqual(103)
    expect(decimalPointRestrict('103', '2')).toEqual('103')
    expect(decimalPointRestrict('1.013', '3')).toEqual('1.013')
    expect(decimalPointRestrict('ABC', '4')).toEqual('ABC')
    expect(decimalPointRestrict('test 1.013', '4')).toEqual('test 1.013')
  })
})

describe('test isValidValueToDecimalPointRestrict', () => {
  it('isValidValueToDecimalPointRestrict return true', () => {
    expect(isValidValueToDecimalPointRestrict('10,3')).toBeTruthy()
    expect(isValidValueToDecimalPointRestrict('1.001,3')).toBeTruthy()
    expect(isValidValueToDecimalPointRestrict(190)).toBeTruthy()
  })

  it("isValidValueToDecimalPointRestrict return false", () => {
    expect(isValidValueToDecimalPointRestrict('abc')).toBeFalsy()
    expect(isValidValueToDecimalPointRestrict('')).toBeFalsy()
  })
})

describe('test isValidDecimalSpaceToDecimalPointRestrict', () => {
  it('isValidDecimalSpaceToDecimalPointRestrict return true', () => {
    expect(isValidDecimalSpaceToDecimalPointRestrict('10,3')).toBeTruthy()
    expect(isValidDecimalSpaceToDecimalPointRestrict('abc')).toBeTruthy()
  })

  it("isValidDecimalSpaceToDecimalPointRestrict return false", () => {
    expect(isValidDecimalSpaceToDecimalPointRestrict('undefined')).toBeFalsy()
    expect(isValidDecimalSpaceToDecimalPointRestrict('')).toBeFalsy()
    expect(isValidDecimalSpaceToDecimalPointRestrict(123)).toBeFalsy()
    expect(isValidDecimalSpaceToDecimalPointRestrict(null)).toBeFalsy()
  })
})

describe('test getNumberInString', () => {
  it('getNumberInString return true', () => {
    expect(getNumberInString('test: 10,3')).toEqual('10,3')
    expect(getNumberInString('test :10,3')).toEqual('10,3')
    expect(getNumberInString('12 : abc')).toEqual('12')
    expect(getNumberInString('12.4 : abc')).toEqual('12.4')
    expect(getNumberInString('12.4: abc')).toEqual('12.4')
    expect(getNumberInString('12.4:abc')).toEqual('12.4')
  })

  it("getNumberInString return false", () => {
    expect(getNumberInString('undefined')).toEqual('undefined')
    expect(getNumberInString('abc')).toEqual('abc')
    expect(getNumberInString('12')).toEqual('12')
    expect(getNumberInString('12.3')).toEqual('12.3')
  })
})
