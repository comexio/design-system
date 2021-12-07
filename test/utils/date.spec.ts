import { formatYearMonthDay, getDateBasedOnLimit } from '~/utils/date.util'

describe('Date utils - formatYearMonthDay', () => {
  it('formatYearMonthDay without value', () => {
    expect(formatYearMonthDay()).toEqual('')
  })

  it('formatYearMonthDay with default format', () => {
    const date = '2020-12-08 - 2020-12-18'
    const dateFormatted = '08/12/2020 - 18/12/2020'

    expect(formatYearMonthDay(date)).toEqual(dateFormatted)
  })

  it('formatYearMonthDay passing format param', () => {
    const date = '2020-12-08 - 2020-12-18'

    expect(formatYearMonthDay(date, 'YYYY-MM-DD')).toEqual(date)
  })

  it('formatYearMonthDay only one date with default format', () => {
    const date = '2020-12-08'
    const dateFormatted = '08/12/2020'

    expect(formatYearMonthDay(date)).toEqual(dateFormatted)
  })

  it('formatYearMonthDay only one date passing format param', () => {
    const date = '2020-12-08'

    expect(formatYearMonthDay(date, 'YYYY-MM-DD')).toEqual(date)
  })
})

describe('Date utils - getDateBasedOnLimit', () => {
  it('getDateBasedOnLimit passing correct order', () => {
    const limit = { min: '2020-10-01', max: '2021-01-25' }
    const dateCorrectOrder = ['2020-10-01', '2020-10-25']

    expect(getDateBasedOnLimit(limit.min, limit.max, dateCorrectOrder)).toEqual(dateCorrectOrder)
  })

  it('getDateBasedOnLimit passing wrong order', () => {
    const limit = { min: '2020-10-01', max: '2021-01-25' }
    const dateWrongOrder = ['2020-10-25', '2020-10-01']
    const dateCorrectOrder = ['2020-10-01', '2020-10-25']

    expect(getDateBasedOnLimit(limit.min, limit.max, dateWrongOrder)).toEqual(dateCorrectOrder)
  })

  it('getDateBasedOnLimit passing correct order out of min limit', () => {
    const limit = { min: '2020-10-01', max: '2021-01-25' }
    const dateOutOfLimit = ['2020-09-01', '2021-01-10']
    const dateCorrect = ['2020-10-01', '2021-01-10']

    expect(getDateBasedOnLimit(limit.min, limit.max, dateOutOfLimit)).toEqual(dateCorrect)
  })

  it('getDateBasedOnLimit passing correct order out of max limit', () => {
    const limit = { min: '2020-10-01', max: '2021-01-25' }
    const dateOutOfLimit = ['2020-10-01', '2021-01-26']
    const dateCorrect = ['2020-10-01', '2021-01-25']

    expect(getDateBasedOnLimit(limit.min, limit.max, dateOutOfLimit)).toEqual(dateCorrect)
  })

  it('getDateBasedOnLimit passing wrong order out of min limit', () => {
    const limit = { min: '2020-10-01', max: '2021-01-25' }
    const dateOutOfLimit = ['2021-01-10', '2020-09-01']
    const dateCorrect = ['2020-10-01', '2021-01-10']

    expect(getDateBasedOnLimit(limit.min, limit.max, dateOutOfLimit)).toEqual(dateCorrect)
  })

  it('getDateBasedOnLimit passing wrong order out of max limit', () => {
    const limit = { min: '2020-10-01', max: '2021-01-25' }
    const dateOutOfLimit = ['2021-01-26', '2020-10-01']
    const dateCorrect = ['2020-10-01', '2021-01-25']

    expect(getDateBasedOnLimit(limit.min, limit.max, dateOutOfLimit)).toEqual(dateCorrect)
  })
})
