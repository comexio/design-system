export const MONTH_PERIODS_TEXT = {
  // TODO: aplicar tradução
  last_3_months: 'Últimos 3 meses',
  last_6_months: 'Últimos 6 meses',
  last_9_months: 'Últimos 9 meses',
  last_12_months: 'Últimos 12 meses'
}

export const MONTH_PERIODS_VALUES_TO_KEYS = {
  // Poderia ter feito um slice nas keys do objeto PERIODS,
  // mas acho que dessa forma fica mais claro e flexível.
  3: 'last_3_months',
  6: 'last_6_months',
  9: 'last_9_months',
  12: 'last_12_months'
}

export const monthPeriodsByQuantity = (param = 0) => {
  const filteredPeriods = {}
  Object.entries(MONTH_PERIODS_VALUES_TO_KEYS).forEach((item) => {
    const key = parseInt(item[0])
    const value = item[1]
    if (key <= param) {
      // @ts-ignore
      filteredPeriods[value] = MONTH_PERIODS_TEXT[value]
    }
  })

  return filteredPeriods
}


export const WEEK_PERIODS_TEXT = {
  // TODO: aplicar tradução
  last_1_week: 'Última semana',
  last_2_week: 'Últimas 2 semanas',
  last_3_week: 'Últimas 3 semanas',
  last_month: 'Último mês'
}

export const WEEK_PERIODS_KEYS = {
  // TODO: aplicar tradução
  LAST_1_WEEK: 'last_1_week',
  LAST_2_WEEK: 'last_2_week',
  LAST_3_WEEK: 'last_3_week',
  LAST_MONTH: 'last_month'
}

export const WEEK_PERIODS_VALUES_TO_KEYS = {
  // Poderia ter feito um slice nas keys do objeto PERIODS,
  // mas acho que dessa forma fica mais claro e flexível.
  1: 'last_1_week',
  2: 'last_2_week',
  3: 'last_3_week',
  4: 'last_month'
}

export const weekPeriodsByQuantity = (param = 0) => {
  const filteredPeriods = {}
  Object.entries(WEEK_PERIODS_VALUES_TO_KEYS).forEach((item) => {
    const key = parseInt(item[0])
    const value = item[1]
    if (key <= param) {
      // @ts-ignore
      filteredPeriods[value] = WEEK_PERIODS_TEXT[value]
    }
  })

  return filteredPeriods
}
