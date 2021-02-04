<template>
  <div class="datepicker">
    <v-menu
      v-model="menu"
      offset-y
      :close-on-content-click="false"
    >
      <template #activator="{ on }">
        <v-row
          class="pointer mx-0 activator"
          v-on="on"
          @click="openMenu"
        >
          <v-col
            cols="1"
            class="mr-2"
          >
            <v-icon
              :color="itemsColor"
              size="20px"
            >
              mdi-calendar-month
            </v-icon>
          </v-col>
          <v-col
            cols="8"
            class="datepicker__input text-center"
          >
            <small class="pl-1 formatted-months">
              {{ formattedMonths }}
            </small>
          </v-col>
          <v-spacer />
          <v-icon
            :color="itemsColor"
            size="15px"
          >
            mdi-chevron-down
          </v-icon>
        </v-row>
      </template>
      <div
        ref="datepickersContainer"
        class="d-flex datepickers__container"
      >
        <v-date-picker
          ref="firstDatepicker"
          v-model="monthsPeriod"
          landscape
          no-title
          multiple
          range
          :show-current="false"
          :locale="i18nLocale"
          type="date"
          :color="itemsColor"
          :event-color="itemsColor"
          width="200px"
          class="d-flex flex-row-reverse datepicker__calendar"
          :max="dateFilterLimits('max')"
          :min="dateFilterLimits('min')"
          @update:picker-date="(e) => changeTableDatepicker(e, datepickerRefsEnum.FIRST)"
          @mouseenter:date="hoverDate"
          @mouseleave:date="leaveHoverDate"
        />
        <v-date-picker
          ref="secondDatepicker"
          v-model="monthsPeriod"
          landscape
          no-title
          multiple
          range
          :show-current="false"
          :locale="i18nLocale"
          type="date"
          :color="itemsColor"
          :event-color="itemsColor"
          width="200px"
          class="d-flex flex-row-reverse datepicker__calendar"
          :max="dateFilterLimits('max')"
          :min="dateFilterLimits('min')"
          @update:picker-date="(e) => changeTableDatepicker(e, datepickerRefsEnum.SECOND)"
          @mouseenter:date="hoverDate"
          @mouseleave:date="leaveHoverDate"
        />
      </div>
    </v-menu>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isEmpty from 'ramda/src/isEmpty'
import { MONTH_PERIODS_VALUES_TO_KEYS, monthPeriodsByQuantity } from '~/enum/date.enum.ts'
import { DATEPICKER_REFS, DATEPICKER_CALENDAR_TYPES } from '~/enum/datepicker.enum'
import { extractYearMonth, yearMonthDiff, monthDiff, formatYearMonthDay, sortDateISO } from '~/utils/date.util.ts'

export default {
  name: 'LDatePickerDay',
  props: {
    value: {
      type: [String, Array],
      default: () => []
    },
    limit: {
      type: Object,
      default: null
    },
    rangeDays: {
      type: Number,
      default: null
    },
    itemsColor: {
      type: String,
      default: '#9f6cbb'
    },
    closeOnSelect: Boolean
  },
  data () {
    return {
      monthsPeriod: [],
      menu: null,
      firstBlocked: false,
      secondBlocked: false,
      rangeLimit: { min: null, max: null },
      temporaryDate: null,
      datepickerRefsEnum: DATEPICKER_REFS
    }
  },
  computed: {
    formattedMonths () {
      const { temporaryDate } = this
      if (temporaryDate && isEmpty(this.monthsPeriod)) {
        return formatYearMonthDay([temporaryDate])
      }

      if (temporaryDate && this.monthsPeriod.length === 1 ) {
        const orderedDates = sortDateISO([temporaryDate, ...this.monthsPeriod])
        return formatYearMonthDay(orderedDates.join(' - '))
      }

      if (temporaryDate && this.monthsPeriod.length === 2 ) {
        const value = formatYearMonthDay(this.monthsPeriod.join(' - ')).split('-')
        dayjs.extend(customParseFormat)
        const arrayFinal = value.map(date => dayjs(date.replace(' ', ''), 'DD/MM/YYYY').format('YYYY-MM-DD'))
        const orderedDates = sortDateISO(arrayFinal)

        const formatToScreen = dayjs(temporaryDate).valueOf() < dayjs(orderedDates[0]).valueOf()
          ? [temporaryDate, orderedDates[1]]
          : [orderedDates[0], temporaryDate]

        return formatYearMonthDay(formatToScreen.join(' - '))
      }

      return formatYearMonthDay(this.monthsPeriod.join(' - '))
    },
    periodChip: {
      get () {
        const [startYearMonthStr, endYearMonthStr] = this.monthsPeriod
        const momentLimitMax = dayjs(this.dateLimit.max).format('YYYY-MM')

        if (!endYearMonthStr || endYearMonthStr !== momentLimitMax) {
          return
        }

        const startYearMonth = extractYearMonth(startYearMonthStr)
        const endYearMonth = extractYearMonth(endYearMonthStr)

        const monthsDiff = -yearMonthDiff(endYearMonth, startYearMonth) + 1
        return MONTH_PERIODS_VALUES_TO_KEYS[monthsDiff]
      },
      set (periodKey) {
        const currentDate = new Date(this.dateFilterLimits('max'))
        const currentYear = currentDate.getFullYear()
        const monthsDiff = periodKey.split('_')
        const subtractedDate = new Date(currentYear, currentDate.getMonth() - (parseInt(monthsDiff[1]) - 1))
        const magicPeriodMinimumDate = new Date(this.dateFilterLimits('min') + ' 00:00')

        subtractedDate.setMonth(
          new Date(magicPeriodMinimumDate.getFullYear(), magicPeriodMinimumDate.getMonth()).getTime() >
          new Date(subtractedDate.getFullYear(), subtractedDate.getMonth()).getTime()
            ? magicPeriodMinimumDate.getMonth()
            : subtractedDate.getMonth())

        this.monthsPeriod = [
          `${subtractedDate.getFullYear()}-${('00' + (subtractedDate.getMonth() + 1)).substr(-2)}`,
          `${currentDate.getFullYear()}-${('00' + (currentDate.getMonth() + 1)).substr(-2)}`
        ]
      }
    },
    dateLimit () {
      return this.limit || {
        min: null,
        max: null
      }
    },
    periodsEnum () {
      const { min, max } = this.dateLimit
      const months = monthDiff(new Date(min), new Date(max))
      const periods = monthPeriodsByQuantity(months)

      return Object.keys(periods).length
        ? periods : null
    },
    i18nLocale () {
      const { $i18n } = this
      if ($i18n) {
        return $i18n.locale
      }

      return null
    }
  },
  watch: {
    monthsPeriod (monthsPeriod) {
      this.validateRange(monthsPeriod)
      this.$emit('input', monthsPeriod)
    },
    menu (datepickerStatus) {
      this.$emit('datepickerChanged', datepickerStatus)
    },
    value: {
      immediate: true,
      handler (value) {
        if (typeof value === 'string') {
          this.periodChip = value

          return
        }

        if (Array.isArray(value)) {
          const startDate = value[0]
          if (value.length === 2) {
            if (value[0] === value[1]) {
              value.pop()

              return
            }

            if (parseInt(value[0].replace('-', '')) > parseInt(value[1].replace('-', ''))) {
              value[0] = value[1]
              value[1] = startDate
            }
            this.monthsPeriod = value

            if (this.closeOnSelect) {
              this.menu = false
            }
          }
        }
      }
    }
  },
  methods: {
    openMenu () {
      setTimeout(() => {
        this.$watch(
          () => this.$refs.firstDatepicker.activePicker, (value) => { this.blockDatepickerSiblingHeader(DATEPICKER_REFS.FIRST, value) }
        )
        this.$watch(
          () => this.$refs.secondDatepicker.activePicker, (value) => { this.blockDatepickerSiblingHeader(DATEPICKER_REFS.SECOND, value) }
        )
      }, 0)
    },
    isDateAllowed (date) {
      const { year, month } = extractYearMonth(date)
      const { dateLimit } = this
      if (!dateLimit || !dateLimit.min || !dateLimit.max) {
        return true
      }

      return new Date().getTime() > new Date(year, month - 1).getTime()
    },
    dateFilterLimits (type) {
      const { min, max } = this.dateLimit
      const rangeMin = this.rangeLimit.min
      const rangeMax = this.rangeLimit.max
      if (type === 'max') {
        return rangeMax || max
      }

      const date = new Date()
      const y = date.getFullYear()
      const m = date.getMonth()
      const lastDay = new Date(y, m, 0)

      return type === 'min' ? rangeMin || min : lastDay.getFullYear() + '-' + lastDay.getMonth() + '-' + lastDay.getDate()
    },
    currentTableFirstDatepicker () {
      const { firstDatepicker } = this.$refs
      if (firstDatepicker) {
        return firstDatepicker.tableDate
      }

      return null
    },
    currentTableSecondDatepicker () {
      const { secondDatepicker } = this.$refs
      if (secondDatepicker) {
        return secondDatepicker.tableDate
      }

      return null
    },
    changeTableDatepicker (val, ref) {
      const date = dayjs(val)
      const month = date.month()
      const year = date.year()

      const secondDatepickerDate = this.currentTableSecondDatepicker()

      if (ref === DATEPICKER_REFS.FIRST) {
        if (this.secondBlocked) {
          this.secondBlocked = false

          return
        }
        if (secondDatepickerDate) {
          let dateSecond = dayjs(secondDatepickerDate)
          dateSecond = dateSecond.year(year)
          dateSecond = dateSecond.month(month + 1)
          this.$refs.secondDatepicker.tableDate = dateSecond.format('YYYY-MM')

          this.firstBlocked = true
        }
        return
      }

      const firstDatepickerDate = this.currentTableFirstDatepicker()

      if (ref === DATEPICKER_REFS.SECOND) {
        if (this.firstBlocked) {
          this.firstBlocked = false

          return
        }
        if (firstDatepickerDate) {
          let dateFirst = dayjs(firstDatepickerDate)
          dateFirst = dateFirst.year(year)
          dateFirst = dateFirst.month(month - 1)
          this.$refs.firstDatepicker.tableDate = dateFirst.format('YYYY-MM')

          this.secondBlocked = true
        }
      }
    },
    validateRange (period) {
      if (this.rangeDays && period && period.length === 1) {
        const currentDate = period[0]
        const minDateByRange = dayjs(currentDate).subtract(this.rangeDays, 'day')
        const maxDateByRange = dayjs(currentDate).add(this.rangeDays, 'day')

        this.rangeLimit.min = minDateByRange.format('YYYY-MM-DD')
        this.rangeLimit.max = maxDateByRange.format('YYYY-MM-DD')

        return
      }

      this.rangeLimit.min = null
      this.rangeLimit.max = null
    },
    hoverDate(date) {
      this.temporaryDate = date
    },
    leaveHoverDate () {
      this.temporaryDate = null
    },
    blockDatepickerSiblingHeader (currentDatepicker, value) {
      const disableHeaderButton = (datepicker) => {
        const headerButton = datepicker.$el.querySelector('.v-date-picker-header__value button')
        if (value !== DATEPICKER_CALENDAR_TYPES.DATE) {
          headerButton.disabled = true

          return
        }

        headerButton.disabled = false
      }

      if (currentDatepicker === DATEPICKER_REFS.FIRST) {
        const { secondDatepicker } = this.$refs
        disableHeaderButton(secondDatepicker)
      }

      if (currentDatepicker === DATEPICKER_REFS.SECOND) {
        const { firstDatepicker } = this.$refs
        disableHeaderButton(firstDatepicker)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.col {
  padding: 0;
}
.activator {
  min-height: 38px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
}

.datepicker {
  min-width: 160px;
  width: 100%;
  background-color: #fff;
}

.datapicker__input {
  ::v-deep input {
    cursor: pointer;
  }
  ::v-deep .v-input__icon--prepend-inner .v-icon {
    color: $wisteria;
  }
}

.datepicker__calendar {
  ::v-deep {
    .v-date-picker-table table {
      border-spacing: 1px;
    }

  }
  ::v-deep .v-date-picker-header {
    padding: 4px 8px;
    .v-btn {
      color: $wisteria;
    }
  }

  ::v-deep .v-date-picker-table--month {
    height: auto;
    td {
      height: 40px;
    }
    .v-btn {
      border: thin solid $gallery;
      min-width: 50px;
      height: 30px;
    }
  }

  ::v-deep .v-date-picker-table--date {
    height: auto;
    padding-bottom: 8px;
    .v-btn {
      border: thin solid $gallery;
      width: 24px;
      height: 24px;
      border-radius: 2px;

      .v-btn__content {
        font-size: .8rem;
      }
    }
  }

  .datepicker__calendar__period {
    .v-chip {
      background: none;
      border: thin solid $gallery;
      height: 20px;
    }

    .datepicker__calendar__period__chip--active {
      background: $wisteria;
      color: #fff;
    }
  }
}

::v-deep .v-picker__actions {
  border-right: 1px solid $gallery;
  padding: 0px;
}

.select-period {
  font-size: 13px;
}

.datepickers__container {
  ::v-deep .datepicker__calendar:first-child {
    .v-date-picker-header {
      .v-btn:last-child {
        display: none;
      }
    }
  }

  ::v-deep .datepicker__calendar:last-child {
    .v-date-picker-header {
      .v-btn:first-child {
        display: none;
      }
    }
  }

  ::v-deep .v-btn.datepicker__calendar__selectedDay {
    background-color: $moonRaker !important;
    border-color: $moonRaker !important;
    color: $martinique;
  }
}
</style>
