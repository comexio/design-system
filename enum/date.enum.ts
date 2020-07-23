export const PERIODS_TEXTS = {
  // TODO: aplicar tradução
  last_3_months: 'Últimos 3 meses',
  last_6_months: 'Últimos 6 meses',
  last_9_months: 'Últimos 9 meses',
  last_12_months: 'Últimos 12 meses'
}

export const PERIODS_VALUES_TO_KEYS = {
  // Poderia ter feito um slice nas keys do objeto PERIODS,
  // mas acho que dessa forma fica mais claro e flexível.
  3: 'last_3_months',
  6: 'last_6_months',
  9: 'last_9_months',
  12: 'last_12_months'
}

export const periodsByQuantity = (param = 0) => {
  const filteredPeriods = {}
  Object.entries(PERIODS_VALUES_TO_KEYS).forEach((item) => {
    const key = parseInt(item[0])
    const value = item[1]
    if (key <= param) {
      // @ts-ignore
      filteredPeriods[value] = PERIODS_TEXTS[value]
    }
  })

  return filteredPeriods
}
