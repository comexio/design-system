<template>
  <v-container class="LLinearChartLine pa-0">
    <div class="d-flex justify-space-between col-12 ma-0 pa-0">
      <p
        v-if="isTagChart"
        class="LLinearChartLine__title font-md pb-0 pl-0 pr-2"
        v-on="on"
      >
        <l-tag
          label
          :text="data.label"
        />
      </p>
      <p
        v-else
        class="LLinearChartLine__title font-md pb-0 pl-0 pr-2"
        v-on="on"
      >
        <l-tooltip
          :disabled="!isTruncated"
          bottom
          nudge-right="100"
          style="maxWidth: 100px"
        >
          <template v-slot:activator="{ on }">
            <span
              v-if="applyCursorPointer && !lastItem"
              class="LLinearChartLine__cursor_pointer"
              @click="eventClick(data.label)"
              v-on="on"
            >
              {{ dataLabel }}
            </span>
            <span
              v-else
              class="LLinearChartLine__label"
              v-on="on"
            >
              {{ dataLabel }}
            </span>
          </template>
          <div>
            <span>
              {{ data.label }} {{ showQuantity }}
            </span>
          </div>
        </l-tooltip>
        <span
          v-if="!lastItem && index < magnifyItemsQuantity"
        >
          <v-btn
            class="mx-2"
            text
            icon
            color="wisteria"
            height="14px"
            min-width="20px"
            @click="linearChartItemDetail"
          >
            <v-icon
              size="14px"
            >
              mdi-magnify
            </v-icon>
          </v-btn>
        </span>
        <slot
          v-if="!itemsWithoutDetails.includes(data.label)"
          name="sectionAfterValue"
          :value="data.label"
        />
        {{ showQuantity }}
        <span
          v-if="lastItem && !isExpanded && isExpandable"
          class="LLinearChartLine__expand ml-1"
          @click="expand"
        >
          {{ translationLine.seeMore || $t('ayla.records') }}
        </span>
      </p>
      <div class="LLinearChartLine__result pb-0">
        <v-row
          v-if="isTagChart"
        >
          <v-col
            cols="12"
            class="pl-2 py-0 pr-0 text-right"
          >
            <span class="LLinearChartLine__title font-md">
              {{ data.total }} {{ valueSymbol }}
            </span>
          </v-col>
        </v-row>
        <v-row
          v-else
          class="flex-nowrap justify-end"
        >
          <v-col
            v-if="data.value !== null"
            class="py-0 LLinearChartLine__result__value--first"
          >
            <v-tooltip
              bottom
            >
              <template v-slot:activator="{ on }">
                <span v-on="on">
                  {{ translationLine.value || $t('ayla.value') }}: {{ data.value }} {{ valueSymbol }}
                </span>
              </template>
              <span
                v-if="showToolTip"
              >
                {{ data.toolTipContent }}
              </span>
            </v-tooltip>
          </v-col>
          <span
            v-if="data.total !== null"
            style="marginRight: -4%; marginLeft: -4%"
          >
            {{ showPartition(data) }}
          </span>
          <v-col
            v-if="data.total !== null"
            class="py-0 LLinearChartLine__result__value--second"
          >
            <span>
              {{ translationLine.records || $t('ayla.records') }}: {{ data.total }}
            </span>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="pt-1">
      <v-progress-linear
        :value="data.percentage"
        background-color="#F1EFEF"
        :color="color"
        rounded
        height="7px"
      />
    </div>
  </v-container>
</template>

<script>
import LTag from '~/src/components/tags/LTag'
import LTooltip from '~/src/components/tooltip/LTooltip'

export default {
  name: 'LLinearChartLine',
  components: {
    LTag,
    LTooltip
  },
  props: {
    data: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    lastItem: {
      type: Boolean,
      default: false
    },
    isExpanded: {
      type: Boolean,
      default: false
    },
    isExpandable: {
      type: Boolean,
      default: false
    },
    isTagChart: {
      type: Boolean,
      default: false
    },
    translationLine: {
      type: Object,
      default: () => ({
        value: null,
        records: null,
        seeMore: null
      })
    },
    valueSymbol: {
      type: String,
      default: null
    },
    itemsWithoutDetails: {
      type: Array,
      default: () => []
    },
    labelMaxLength: {
      type: Number,
      default: 23
    },
    applyCursorPointer: {
      type: Boolean,
      default: false
    },
    showToolTip: {
      type: Boolean,
      default: false
    },
    magnifyItemsQuantity: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isTruncated () {
      return this.data.label.length > this.labelMaxLength
    },
    dataLabel () {
       return this.isTruncated ? `${this.data.label.substring(0, this.labelMaxLength)}...` : this.data.label
    },
    showQuantity () {
      return this.lastItem ? `(${this.data.quantity})` : ''
    }
  },
  methods: {
    expand () {
      this.$emit('expand')
    },
    showPartition (item) {
      return item.value !== null ? ' | ' : ' '
    },
    eventClick (value) {
      return this.$emit('eventClick', value)
    },
    linearChartItemDetail (item) {
      return this.$emit('linearChartItemDetail', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.LLinearChartLine {
  .LLinearChartLine__title {
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    width: 0;
    flex-basis: 100%;
  }

  &__title, &__percent, &__number {
    font-size: 0.9rem;
    line-height: 0.9rem;
    margin-bottom: 0px;
  }
  &__title, &__percent {
    color: $martinique;
  }
  &__percent, &__number {
    line-height: 9px;
  }
  &__number {
    color: $silver;
  }
  & .LLinearChartLine__result {
    font-size: 0.9rem;
    line-height: 0.9rem;
    color: $doveGray;
    white-space: nowrap;
    min-width: 250px;
    padding-left: 2%;
  }
  .LLinearChartLine__result__value--first{
    flex-grow: 0;
  }
  .LLinearChartLine__result__value--second{
    flex-grow: 0;
  }
  .LLinearChartLine__expand {
    @extend .globalLink;
    font-size: 0.9rem;
    font-family: Rubik;
  }
  .tagChartLinearChartLine {
    color: $martinique;
    font-size: 0.9rem;
  }
  .LLinearChartLine__cursor_pointer {
    cursor: pointer;
  }
}
</style>
