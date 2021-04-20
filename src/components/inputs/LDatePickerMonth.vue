<template>
  <div class="datepicker">
    <v-menu
      offset-y
      :close-on-content-click="false"
    >
      <template #activator="{ on }">
        <v-row
          class="pointer mx-0 activator"
          v-on="on"
        >
          <v-col
            cols="1"
            class="mr-2"
          >
            <v-icon
              color="blurred"
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
            color="blurred"
            size="15px"
          >
            mdi-chevron-down
          </v-icon>
        </v-row>
      </template>
      <v-date-picker
        v-model="monthsPeriod"
        landscape
        no-title
        multiple
        range
        :show-current="false"
        :allowed-dates="isDateAllowed"
        :locale="i18nLocale"
        type="month"
        color="blurred"
        event-color="blurred"
        width="200px"
        class="d-flex flex-row-reverse datepicker__calendar"
        :max="dateFilterLimits('max')"
        :min="dateFilterLimits('min')"
      >
        <div
          v-if="periodsEnum"
          column
          active-class="primary--text"
          class="datepicker__calendar__period full-height d-flex flex-column justify-space-around pa-2"
        >
          <v-chip
            v-for="(period, index) of periodsEnum"
            :key="index"
            label
            class="justify-center"
            :class="{ 'datepicker__calendar__period__chip--active' : periodChip === index }"
            @click="periodChip = index"
          >
            <span
              class="select-period"
            >
              {{ period }}
            </span>
          </v-chip>
        </div>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
import moment from 'moment'
import { MONTH_PERIODS_VALUES_TO_KEYS, monthPeriodsByQuantity } from '~/enum/date.enum.ts'
import { extractYearMonth, yearMonthDiff, monthDiff, formatYearMonth } from '~/utils/date.util.ts'

export default {
  name: 'LDatePickerMonth',
  props: {
    value: {
      type: [String, Array],
      default: () => []
    },
    limit: {
      type: Object,
      default: null
    },
    monthsList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      monthsPeriod: []
    }
  },
  computed: {
    formattedMonths () {
      return formatYearMonth(this.monthsPeriod.join(' - '), this.monthsList, true)
    },
    periodChip: {
      get () {
        const [startYearMonthStr, endYearMonthStr] = this.monthsPeriod
        const momentLimitMax = moment(this.dateLimit.max).format('YYYY-MM')

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
        const subtractedDateTime = new Date(subtractedDate.getFullYear(), subtractedDate.getMonth()).getTime()
        const magicPeriodMinimumDateTime = new Date(magicPeriodMinimumDate.getFullYear(), magicPeriodMinimumDate.getMonth()).getTime()
        const isSubtractedDateLessThanActualDate = magicPeriodMinimumDateTime > subtractedDateTime

        subtractedDate.setMonth(isSubtractedDateLessThanActualDate
            ? magicPeriodMinimumDate.getMonth()
            : subtractedDate.getMonth()
        )

        subtractedDate.setFullYear(isSubtractedDateLessThanActualDate
            ? magicPeriodMinimumDate.getFullYear()
            : subtractedDate.getFullYear()
        )

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
      return this.$i18n.locale
    }
  },
  watch: {
    monthsPeriod (monthsPeriod) {
      this.$emit('input', monthsPeriod)
    },
    value: {
      immediate: true,
      handler (value) {
        if (typeof value === 'string') {
          this.periodChip = value
        } else if (Array.isArray(value)) {
          const startDate = value[0]
          if (value.length === 2 && parseInt(value[0].replace('-', '')) > parseInt(value[1].replace('-', ''))) {
            value[0] = value[1]
            value[1] = startDate
          }
          this.monthsPeriod = value
        }
      }
    }
  },
  methods: {
    isDateAllowed (date) {
      const { year, month } = extractYearMonth(date)
      return new Date().getTime() > new Date(year, month - 1).getTime()
    },
    dateFilterLimits (type) {
      const { min, max } = this.dateLimit
      if (type === 'max') {
        return max
      }

      const date = new Date()
      const y = date.getFullYear()
      const m = date.getMonth()
      const lastDay = new Date(y, m, 0)

      return type === 'min' ? min : lastDay.getFullYear() + '-' + lastDay.getMonth() + '-' + lastDay.getDate()
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
      width: 18px;
      height: 18px;
      border-radius: 5px;

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
</style>
