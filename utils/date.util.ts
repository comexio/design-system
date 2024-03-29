import dayjs from 'dayjs'

interface YearMonth {
  year: number
  month: number
}

export function extractYearMonth (yearMonth: string, separator = '-'): YearMonth {
  const [year, month] = yearMonth.split(separator)
  return { year: +year, month: +month }
}

export function getCurrentYearMonthStr () {
  const now = new Date()
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
  return `${now.getFullYear()}-${currentMonth}`
}

export function monthDiff (dateFrom: Date, dateTo: Date) {
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

export function weekDiff (dateFrom: Date, dateTo: Date) {
  const start = dayjs(dateFrom)
  const end = dayjs(dateTo)
  const result = end.diff(start, 'week')

  return result
}

export function yearMonthDiff (yearMonthFrom: YearMonth, yearMonthTo: YearMonth) {
  const dateFrom = new Date(yearMonthFrom.year, yearMonthFrom.month)
  const dateTo = new Date(yearMonthTo.year, yearMonthTo.month)
  return monthDiff(dateFrom, dateTo)
}

export function formatPeriodToDatepicker (values: Object) {
  const slaveObject = {}
  Object.keys(values).forEach((key) => {
    let number = null
    // @ts-ignore
    const value = values[key]
    const year = value.toString().substr(0, 4)
    const month = value.toString().substr(4, 6)
    const maxDayOfMonth = new Date(parseInt(year), parseInt(month), 0)
    if (key === 'min') {
      number = '01'
    }
    if (key === 'max') {
      number = maxDayOfMonth
    }
    // @ts-ignore
    slaveObject[key] = year + '-' + month + '-' + number
  })
  return slaveObject
}

export function formatYearMonth (yearMonth: string, monthsList: Array<string>, shortYear: boolean = false) {
  // @ts-ignore
  // eslint-disable-next-line
  const dateMonths = (monthsList as unknown as string[])
  const dates = yearMonth.toString().split(' - ')
  let formattedDates = ''
  dates.forEach(dateIsYearMonthComplete => {
    if (!dateIsYearMonthComplete) {
      return dateIsYearMonthComplete
    }

    let year = ''
    let month = ''
    if (dateIsYearMonthComplete.length === 6) {
      year = dateIsYearMonthComplete.substr(0, 4)
      month = dateIsYearMonthComplete.substr(4, 2)
    } else {
      [year, month] = dateIsYearMonthComplete.split('-')
    }

    const translateMonth = !monthsList
      ? month
      : dateMonths[parseInt(month) - 1].substr(0, 3)
    const separator = formattedDates === '' ? '' : ' - '
    formattedDates += separator + translateMonth + '/' + (shortYear ? year.substr(2, 2) : year)
  })
  return formattedDates.trim()
}

export function sortDateISO (dates: Array<string>) {
  return [...dates].sort((date1, date2) => {
    const date1Timestamp = dayjs(date1).valueOf()
    const date2Timestamp = dayjs(date2).valueOf()
    if (date1Timestamp > date2Timestamp) {
      return 1
    }

    if (date1Timestamp < date2Timestamp) {
      return -1
    }

    return 0
  })
}

export function formatYearMonthDay (dateString: string, format: string = 'DD/MM/YYYY'): string {
  if (!dateString) {
    return ''
  }

  const datesArray = dateString.toString().split(' - ')

  return datesArray.map(date => dayjs(date).format(format)).join(' - ')
}

export function getDateBasedOnLimit (min: string, max: string, dateArray: Array<string>): Array<string> {
  const sortedDate = sortDateISO(dateArray)
  if (dayjs(sortedDate[1]).isAfter(max)) {
    sortedDate[1] = max
  }

  if (dayjs(sortedDate[0]).isBefore(min)) {
    sortedDate[0] = min
  }

  return sortedDate
}
