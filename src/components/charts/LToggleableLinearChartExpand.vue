<template>
  <div
    class="LLinearChartExpand d-flex flex-column flex-grow-1 pa-4"
  >
    <div class="LLinearChartExpand__header d-flex justify-space-between pb-3">
      <span
        class="LLinearChartExpand__header__action"
        @click="expandList"
      >
        {{ retractText || $t('ayla.retract') }}
      </span>
    </div>
    <v-simple-table
      ref="LLinearChartExpand__table"
      fixed-header
      dense
      :height="tableHeight"
      class="LLinearChartExpand__table"
    >
      <template
        v-slot:default
      >
        <thead>
          <tr>
            <th
              v-for="(item, index) in headers"
              :key="index"
              class="LLinearChartExpand__table__title text-left"
            >
              {{ item }}:
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data"
            :key="index"
            class="LLinearChartExpand__table__line"
          >
            <td>
              <span class="mr-4">{{ index + 5 }} </span>
              <v-switch
                :value="false"
                hide-details
                inset
                small
                @change="value => emitSwitchEvent(value, item.label)"
              />
            </td>
            <td>
              <template v-if="isClickable(item)">
                <span
                  class="LLinearChartLine__label--clickable"
                  @click="eventClick(item.label)"
                >
                  {{ item.label }}
                </span>
              </template>
              <template v-else>
                {{ item.label }}
              </template>
              <slot
                name="sectionAfterValue"
                :value="item.label"
              />
            </td>
            <td class="LLinearChartExpand__table__line__value">
              <l-tooltip
                bottom
                nudge-right="25"
              >
                <template v-slot:activator="{ on }">
                  <span v-on="on">{{ item.value }}</span>
                </template>
                <div>
                  <span
                    v-if="showToolTip"
                  >
                    {{ item.toolTipContent }}
                  </span>
                </div>
              </l-tooltip>
            </td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div
      v-if="loading"
      class="d-flex justify-center LLinearChartExpand__loading pt-2"
    >
      <l-loading
        size="20px"
      />
    </div>
  </div>
</template>

<script>
import LLoading from '~/src/components/loadings/LLoading'
import LTooltip from '~/src/components/tooltip/LTooltip'

export default {
  name: 'LToggleableLinearChartExpand',
  emits: ['lineToggled'],
  components: {
    LLoading,
    LTooltip
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    headers: {
      type: Array,
      default: () => ([])
    },
    loading: Boolean,
    applyCursorPointer: {
      type: Boolean,
      default: false
    },
    tableHeight: {
      type: String,
      default: '195'
    },
    showToolTip: {
      type: Boolean,
      default: false
    },
    nonClickableItems: {
      type: Array,
      default: () => []
    },
    retractText: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      input: null,
      bottom: false,
      state: false,
    }
  },
  watch: {
    bottom (bottom) {
      if (bottom) {
        this.$emit('search')
      }
    }
  },
  mounted () {
    const referenceTable = this.$refs.LLinearChartExpand__table
    if (!referenceTable) {
      return
    }

    const elementTable = referenceTable.$el.querySelector('.v-data-table__wrapper')

    elementTable.addEventListener('scroll', () => {
      this.bottom = this.achievedScrollPoint(elementTable)
    })
  },
  methods: {
    emitSwitchEvent(state, label) {
      this.$emit('lineToggled', {
        state,
        label
      })
    },
    expandList () {
      this.$emit('expand')
    },
    search () {
      const { input } = this
      if (!input) {
        return
      }

      this.$emit('search', this.input)
    },
    achievedScrollPoint (ref) {
      const scrollTop = ref.scrollTop
      const visible = ref.clientHeight
      const pageHeight = ref.scrollHeight
      const bottomOfPage = scrollTop + visible + 25 >= pageHeight

      return bottomOfPage
    },
    eventClick (value) {
      return this.$emit('eventClick', value)
    },
    isClickable(item) {
      const hasNonClickableItems = this.nonClickableItems.find(label => label === item.label)

      if (hasNonClickableItems) {
        return false
      }

      return this.applyCursorPointer
    }
  }
}
</script>

<style lang="scss" scoped>
.LLinearChartExpand {
  background: $magnolia;
  flex-basis: 50%;
  flex-grow: 1;
  .LLinearChartExpand__header {
    ::v-deep {
      .v-input {
        font-size: 0.8rem;
      }
      .v-input__slot {
        min-height: 20px;
      }
    }
  }

  .LLinearChartExpand__header__action {
    @extend .globalLink;
  }

  .LLinearChartExpand__table__title {
    z-index: 1;
    font-size: 0.8rem;
    font-weight: normal;
    border-bottom: none !important;
  }

  .LLinearChartExpand__table__line {
    td {
      font-size: 0.8rem;
      color: $martinique;
      border-bottom: none !important;
    }
    &:nth-child(odd) {
      background: $magnolia;
    }
  }

  .LLinearChartExpand__table__line--active {
    box-shadow: inset 3px 0px 0px $wisteria;
    td {
      color: $purpleHaze;
      font-weight: bold;
    }
  }

  .LLinearChartExpand__table__line__value {
    white-space: nowrap;
  }

  .LLinearChartExpand__loading {
    height: 0px;
  }
  .LLinearChartLine__label--clickable {
    cursor: pointer;
  }
}
</style>
