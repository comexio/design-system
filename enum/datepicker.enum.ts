import { LOCALES } from '~/enum/locale.enum'

export const DATEPICKER_REFS = {
  FIRST: 'firstDatepicker',
  SECOND: 'secondDatepicker'
}

export const DATEPICKER_CALENDAR_TYPES = {
  DATE: 'DATE'
}

export const DATEPICKER_DAY_MASK = {
  [LOCALES.PT]: '##/##/####',
  [LOCALES.EN]: '##/##/####'
}

export const DATEPICKER_DAY_FORMAT = {
  [LOCALES.PT]: 'DD/MM/YYYY',
  [LOCALES.EN]: 'MM/DD/YYYY'
}
