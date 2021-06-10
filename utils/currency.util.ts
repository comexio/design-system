import { TYPES_OF_VALUES_FORMAT } from '~/enum/linearChart.enum'

export function formatDecimalPlaces (value: number, type: string = '', decimalPlacesQuantity: number = 2) {
  if (!value) {
    return
  }

  const newValue = parseFloat(value.toString())
  if (Number.isNaN(newValue)) {
    return value
  }

  if (type === TYPES_OF_VALUES_FORMAT.WEIGHT) {
    const val = newValue.toString().split('.')
    const beforePoint = val[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    if (decimalPlacesQuantity === 0) {
      return beforePoint
    }

    let afterPoint = val.length > 1 && parseInt(val[1]) > 0 ? ',' + val[1] : ''
    afterPoint = afterPoint.substr(0, (decimalPlacesQuantity + 1))
    return beforePoint + afterPoint
  }

  const val = type === TYPES_OF_VALUES_FORMAT.MONEY
    ? (newValue / 1).toFixed(decimalPlacesQuantity).replace('.', ',')
    : newValue.toString().replace('.', '')

  const quantity = decimalPlacesQuantity + 1
  const valueFormatted = val.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  const quantityLimit = valueFormatted.length - quantity

  return valueFormatted.substring(0, quantityLimit) + valueFormatted.substring(quantityLimit).replace('.', '')
}
