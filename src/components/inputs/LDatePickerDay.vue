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
              {{ formattedDate }}
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
        v-model="datePeriod"
        landscape
        no-title
        multiple
        range
        :show-current="false"
        :allowed-dates="isDateAllowed"
        :locale="i18nLocale"
        type="date"
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
          class="datepicker__calendar__period full-height d-flex flex-column justify-space-around px-2 py-4"
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
import { WEEK_PERIODS_KEYS, WEEK_PERIODS_VALUES_TO_KEYS, weekPeriodsByQuantity } from 'appRoot/enum/date.enum.ts'
import { extractYearMonth, weekDiff, formatYearMonthDay } from 'appRoot/util/date.util.ts'

export default {
  name: 'DatePicker',
  props: {
    value: {
      type: [String, Array],
      default: () => []
    },
    limit: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      datePeriod: []
    }
  },
  computed: {
    formattedDate () {
      return formatYearMonthDay(this.datePeriod.join(' - '))
    },
    periodChip: {
      get () {
        const [startDate, endDate] = this.datePeriod
        const limitMax = this.dateLimit.max
        const momentLimitMax = moment('2020-06-30' || limitMax)
        const momentStartDate = moment(startDate)
        const momentEndDate = moment(endDate)
        const result = momentEndDate.diff(momentStartDate, 'weeks')
        const maxResult = momentLimitMax.diff(momentEndDate, 'days')

        if (maxResult) {
          return
        }

        return WEEK_PERIODS_VALUES_TO_KEYS[result]
      },
      set (periodKey) {
        const monthlyChange = periodKey === WEEK_PERIODS_KEYS.LAST_MONTH
        const currentDate = new Date(this.dateFilterLimits('max') + ' 12:00')
        const currentYear = currentDate.getFullYear()
        const weeksDiff = periodKey.split('_')
        const subtractedDate = monthlyChange
          ? new Date(currentYear, currentDate.getMonth())
          : new Date(currentYear, currentDate.getMonth(), currentDate.getDate() - (parseInt(weeksDiff[1] * 7)))

        const magicPeriodMinimumDate = new Date(this.dateFilterLimits('min') + ' 00:00')

        subtractedDate.setMonth(
          new Date(magicPeriodMinimumDate.getFullYear(), magicPeriodMinimumDate.getMonth()).getTime() >
          new Date(subtractedDate.getFullYear(), subtractedDate.getMonth()).getTime()
            ? magicPeriodMinimumDate.getMonth()
            : subtractedDate.getMonth())

        this.datePeriod = [
          `${subtractedDate.getFullYear()}-${('00' + (subtractedDate.getMonth() + 1)).substr(-2)}-${subtractedDate.getDate().toString().padStart(2, '0')}`,
          `${currentDate.getFullYear()}-${('00' + (currentDate.getMonth() + 1)).substr(-2)}-${currentDate.getDate().toString().padStart(2, '0')}`
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
      const weeks = weekDiff(new Date(min), new Date(max))
      const periods = weekPeriodsByQuantity(weeks)

      return Object.keys(periods).length
        ? periods : null
    },
    i18nLocale () {
      return this.$i18n.locale
    }
  },
  watch: {
    datePeriod (datePeriod) {
      this.$emit('input', datePeriod)
    },
    value: {
      immediate: true,
      handler (value) {
        if (typeof value === 'string') {
          this.periodChip = value
        } else if (Array.isArray(value)) {
          const startDate = value[0]
          if (value.length === 2 && new Date(value[0]).getTime() > new Date(value[1]).getTime()) {
            value[0] = value[1]
            value[1] = startDate
          }
          this.datePeriod = value
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
  font-size: 0.9rem;
}
</style>
