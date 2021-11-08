export function numberHasDecimalPoint (value: any): boolean {
  let commaNumber = 0
  if (typeof value === 'string' && parseFloat(value)) {
    commaNumber = (value.match(/,/g) || []).length
  }

  if (typeof value === 'number') {
    commaNumber = value % 1 === 0 ? 0 : 1
  }

  return commaNumber > 0
}

export function isValidValueToDecimalPointRestrict(value: any): boolean {
  if (typeof value === 'string' && value !== '' && parseFloat(value)) {
    return true
  }

  return typeof value === 'number';
}

export function isValidDecimalSpaceToDecimalPointRestrict(decimalSpace: any): boolean {
  return typeof decimalSpace === 'string' && decimalSpace !== 'undefined' && decimalSpace !== '';
}

export function getNumberInString (string: string): string {
  if (string.includes(':')){
    const elements = string.split(':')

    return parseInt(elements[0]) ? elements[0].trim() : elements[1].trim()
  }

  return string
}

export function decimalPointRestrict (value: any, decimalSpace: any): any {
  let numberToReturn
  const valueToFormat = typeof value === "string" ? getNumberInString(value) : value

  if (!isValidValueToDecimalPointRestrict(valueToFormat)
    || !isValidDecimalSpaceToDecimalPointRestrict(decimalSpace)
    || !numberHasDecimalPoint(valueToFormat)) {

    return value
  }

  console.log('---------------------')
  console.log('decimal:' + decimalSpace)
  console.log('valor:' + value)
  console.log('---------------------')

  const decimalSize = parseInt(decimalSpace)

  if (typeof value === 'string') {
    const decimalFormatted = valueToFormat.split(',')
    const int_part = decimalFormatted[0]
    const float_part = decimalFormatted[1]
    numberToReturn = decimalSize === 0
      ? int_part
      : int_part + ',' +
      (float_part.length > decimalSize ? float_part.substring(0, decimalSize) : float_part)
  }

  if (typeof value === 'number') {
    const int_part = Math.trunc(valueToFormat)
    const float_part = Number((valueToFormat - int_part).toFixed(decimalSize));
    numberToReturn = decimalSize === 0 ? int_part : int_part + float_part
  }

  return typeof value === 'string' && value !== valueToFormat
    // @ts-ignore
    ? value.replace(valueToFormat, numberToReturn)
    : numberToReturn
}
