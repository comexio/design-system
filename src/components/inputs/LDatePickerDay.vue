<template>
  <div
    class="datepicker LDatePickerDay"
    :class="datePickerClass"
    :style="{ '--borderColor': borderColor }"
  >
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
            <l-text-field
              v-if="allowTypingDate"
              v-model="typedDate"
              v-mask="`${dateFormat.mask} - ${dateFormat.mask}`"
              hide-details
              height="25px"
              class="LDatePickerDay__textField"
              @keydown="triggerInput"
            />
            <small
              v-else
              class="pl-1 formatted-months"
            >
              {{ formattedMonths }}
            </small>
          </v-col>
          <v-spacer />
          <v-icon
            v-if="dropdownIcon"
            :color="itemsColor"
            size="20px"
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
          :locale="locale"
          type="date"
          :color="itemsColor"
          :event-color="itemsColor"
          width="200px"
          class="d-flex flex-row-reverse datepicker__calendar"
          :style="{ '--itemsColor': itemsColor }"
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
          :locale="locale"
          type="date"
          :color="itemsColor"
          :event-color="itemsColor"
          width="200px"
          :style="{ '--itemsColor': itemsColor }"
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
import Vue from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isEmpty from 'ramda/src/isEmpty'
import equals from 'ramda/src/equals'
import { MONTH_PERIODS_VALUES_TO_KEYS, monthPeriodsByQuantity } from '~/enum/date.enum.ts'
import { DATEPICKER_REFS, DATEPICKER_CALENDAR_TYPES } from '~/enum/datepicker.enum'
import { extractYearMonth, yearMonthDiff, monthDiff, formatYearMonthDay, sortDateISO, getDateBasedOnLimit } from '~/utils/date.util.ts'
import LTextField from '~/src/components/inputs/LTextField.vue'
import VueMask from 'v-mask'
Vue.use(VueMask)
dayjs.extend(customParseFormat)

export default {
  name: 'LDatePickerDay',
  components: {
    LTextField
  },
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
    rangeYears: {
      type: Number,
      default: null
    },
    itemsColor: {
      type: String,
      default: '#9F6CBB'
    },
    closeOnSelect: Boolean,
    datepickerStatus: {
      type: Boolean,
      default: null
    },
    dropdownIcon: {
      type: Boolean,
      default: true
    },
    locale: {
      type: String,
      default: 'pt'
    },
    borderColor: {
      type: String,
      default: '#5C068C'
    },
    bordered: Boolean,
    allowTypingDate: Boolean
  },
  data () {
    return {
      monthsPeriod: [],
      menu: null,
      firstBlocked: false,
      secondBlocked: false,
      rangeLimit: { min: null, max: null },
      temporaryDate: null,
      datepickerRefsEnum: DATEPICKER_REFS,
      typedDate: null
    }
  },
  computed: {
    dateFormat () {
      const maskFormat = {
        'pt': '##/##/####',
        'en': '####-##-##'
      }

      const dateFormat = {
        'pt': 'DD/MM/YYYY',
        'en': 'YYYY-MM-DD'
      }

      return  {
        mask: maskFormat[this.locale] || maskFormat.pt,
        format: dateFormat[this.locale] || dateFormat.pt,
      }
    },
    formattedMonths () {
      if (!this.monthsPeriod) {
        return
      }

      const { format } = this.dateFormat

      const { temporaryDate } = this
      if (temporaryDate && isEmpty(this.monthsPeriod)) {
        return formatYearMonthDay([temporaryDate])
      }

      if (temporaryDate && this.monthsPeriod.length === 1 ) {
        const orderedDates = sortDateISO([temporaryDate, ...this.monthsPeriod])
        return formatYearMonthDay(orderedDates.join(' - '), format)
      }

      if (temporaryDate && this.monthsPeriod.length === 2 ) {
        const dates = formatYearMonthDay(this.monthsPeriod.join(' - '), format).split(' - ')
        const datesArray = dates.map(date => dayjs(date.replace(' ', ''), format).format('YYYY-MM-DD'))
        const orderedDates = sortDateISO(datesArray)
        const formatToScreen = dayjs(temporaryDate).valueOf() < dayjs(orderedDates[0]).valueOf()
          ? [temporaryDate, orderedDates[1]]
          : [orderedDates[0], temporaryDate]

        return formatYearMonthDay(formatToScreen.join(' - '), format)
      }

      return formatYearMonthDay(this.monthsPeriod.join(' - '), format)
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
    datePickerClass () {
      return { 
        'LDatePickerDay--bordered': this.bordered,
        'LDatePickerDay--dropdownIcon': this.dropdownIcon
      }
    }
  },
  watch: {
    monthsPeriod (monthsPeriod, old) {
      if (monthsPeriod && !equals(monthsPeriod, old) && monthsPeriod.length === 2) {
        const limitDays = this.rangeDays && dayjs(monthsPeriod[1]).diff(monthsPeriod[0], 'day') > this.rangeDays
        const limitYears = this.rangeYears && dayjs(monthsPeriod[1]).diff(monthsPeriod[0], 'year', true) > this.rangeYears

        if (limitDays || limitYears) {
          monthsPeriod = old
          this.setAndReturnDateBasedOnLimit(old)
        }
      }

      this.validateRange(monthsPeriod)

      if (Array.isArray(monthsPeriod)) {
        const startDate = monthsPeriod[0]
        if (monthsPeriod.length === 2) {
          if (monthsPeriod[0] === monthsPeriod[1]) {
            monthsPeriod.pop()

            return
          }

          if (parseInt(monthsPeriod[0].replace('-', '')) > parseInt(monthsPeriod[1].replace('-', ''))) {
            monthsPeriod[0] = monthsPeriod[1]
            monthsPeriod[1] = startDate
          }

          if (this.closeOnSelect) {
            this.menu = false
          }

          if (equals(sortDateISO(monthsPeriod), this.monthsPeriod)) {
            this.$emit('input', monthsPeriod)

            return
          }

          this.monthsPeriod = sortDateISO(monthsPeriod)
        }
      }

      this.$emit('input', monthsPeriod)
    },
    datepickerStatus (datepickerStatus) {
      if (!datepickerStatus) {
        this.menu = false
        this.$emit('closed')
      }
    },
    value: {
      immediate: true,
      handler (value) {
        if (typeof value === 'string') {
          this.periodChip = value

          return
        }

        this.monthsPeriod = value
      }
    },
    formattedMonths: {
      immediate: true,
      handler (val) {
        if (equals(val, this.typedDate)) {
          return
        }

        this.typedDate = val
      }
    }
  },
  methods: {
    triggerInput (e) {
      setTimeout(() => {
        this.changedInputValue(e.target.value)
      }, 1)
    },
    changedInputValue (val) {
      if (val.split(' - ')[1]?.length !== 10 || val.split(' - ')[0]?.length !== 10) {
        return
      }

      dayjs.extend(customParseFormat)
      const formattedDate = val.split(' - ').map(date => dayjs(date, this.dateFormat.format).format('YYYY-MM-DD'))
      this.monthsPeriod = formattedDate

      const dateBasedOnLimit = this.setAndReturnDateBasedOnLimit(formattedDate)

      this.setTableDate(dateBasedOnLimit[1], 'secondDatepicker')
    },
    setAndReturnDateBasedOnLimit (formattedDate) {
      const dateBasedOnLimit = getDateBasedOnLimit(this.dateLimit.min, this.dateLimit.max, formattedDate)
      this.monthsPeriod = dateBasedOnLimit
      this.typedDate = dateBasedOnLimit.map(date => dayjs(date).format(this.dateFormat.format)).join(' - ')

      return dateBasedOnLimit
    },
    openMenu () {
      setTimeout(() => {
        this.$watch(
          () => this.$refs.firstDatepicker?.activePicker, (value) => { this.blockDatepickerSiblingHeader(DATEPICKER_REFS.FIRST, value) }
        )
        this.$watch(
          () => this.$refs.secondDatepicker?.activePicker, (value) => { this.blockDatepickerSiblingHeader(DATEPICKER_REFS.SECOND, value) }
        )
      }, 0)
      this.$emit('opened')
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
    setTableDate (val, ref) {
      const dateFormatted = dayjs(val).format('YYYY-MM')
      const table = this.$refs[ref]
      if (!table) {
        return
      }

      table.tableDate = dateFormatted
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
      if (period && period.length === 1) {
        const currentDate = period[0]
        const ranges = {
          day: this.rangeDays,
          year: this.rangeYears
        }
        for (const range in ranges) {
          if (ranges[range]) {
            this.rangeLimit = this.getDateLimitRange(currentDate, ranges[range], range)

            return
          }
        }
      }

      this.rangeLimit.min = null
      this.rangeLimit.max = null
    },
    getDateLimitRange(currentDate, quantity, unit) {
      const minCalculatedRangeProp = dayjs(currentDate).subtract(quantity, unit)
      const maxCalculatedRangeProp = dayjs(currentDate).add(quantity, unit)
      const minCalculatedRangePropFormatted = minCalculatedRangeProp.format('YYYY-MM-DD')
      const maxCalculatedRangePropFormatted = maxCalculatedRangeProp.format('YYYY-MM-DD')

      if (this.limit) {
        return {
          min: minCalculatedRangeProp.isBefore(dayjs(this.limit.min)) ? this.limit.min : minCalculatedRangePropFormatted,
          max: maxCalculatedRangeProp.isAfter(dayjs(this.limit.max)) ? this.limit.max : maxCalculatedRangePropFormatted
        }
      }

      return {
        min: minCalculatedRangePropFormatted,
        max: maxCalculatedRangePropFormatted
      }
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
    color: var(--itemsColor);
  }
}

.LDatePickerDay__textField {
  ::v-deep {
    .LTextField__input {
      padding-top: 0px;
      margin-top: 0px;
    }

    .v-input__slot::before {
      border: none;
    }

    .v-input__slot::after {
      border: none;
    }

    input {
      font-size: 0.8rem;
      text-align: center;
    }
  }
}

.LDatePickerDay--bordered {
  cursor: pointer;
  position: relative;
  border: 1px solid $silver;
  border-radius: 5px;
  transition: border-color ease .2s;
  &:hover {
    border-color: var(--borderColor);
  }
  &.focused {
    border-color: var(--borderColor);
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
      color: var(--itemsColor);
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
      background: var(--itemsColor);
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
