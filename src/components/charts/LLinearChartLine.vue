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
        class="pb-0 pl-0 pr-2"
        v-on="on"
      >
        <l-tooltip
          :disabled="!isLabelTruncated"
          bottom
          nudge-right="100"
          style="maxWidth: 100px"
        >
          <template v-slot:activator="{ on }">
            <span
              class="LLinearChartLine__label font-md"
              :class="{ 'LLinearChartLine__label--clickable': applyCursorPointer && !lastItem }"
              @click="applyCursorPointer && !lastItem && eventClick(data.label)"
              v-on="on"
            >
              {{ label }}
            </span>
          </template>
          <div class="font-md">
            <span>
              {{ data.label }} {{ showQuantity }}
            </span>
          </div>
        </l-tooltip>
        <l-tooltip
          :disabled="!isDescriptionTruncated"
          bottom
          nudge-right="100"
          style="maxWidth: 100px"
        >
          <template v-slot:activator="{ on }">
            <span
              class="LLinearChartLine__description"
              v-on="on"
            >
              {{ description }}
            </span>
          </template>
          <div>
            <span data-testid="description-tooltip">
              {{ data.description }}
            </span>
          </div>
        </l-tooltip>
        <slot name="magnifyItemDetail" />
        <slot
          v-if="!itemsWithoutDetails.includes(data.label)"
          name="sectionAfterValue"
          :value="data.label"
        />
        <span class="LLinearChartLine__quantity font-md">
          {{ showQuantity }}
        </span>
        <span
          v-if="lastItem && !isExpanded && isExpandable"
          class="LLinearChartLine__expand ml-1"
          @click="expand"
        >
          {{ $t(translationLine.seeMore) || $t('ayla.records') }}
        </span>
      </p>
      <div class="LLinearChartLine__result pb-0">
        <div
          v-if="data.resultContent"
          class="d-flex justify-end"
        >
          {{ data.resultContent }}
        </div>
        <v-row
          v-else-if="isTagChart"
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
            v-if="data.value"
            class="py-0 LLinearChartLine__result__value--first"
          >
            <l-tooltip
              :disabled="!showToolTip"
              bottom
            >
              <template v-slot:activator="{ on }">
                <span v-on="on">
                  {{ $t(translationLine.value) || $t('ayla.value') }}: {{ data.value }} {{ valueSymbol }}
                </span>
              </template>
              <span>
                {{ data.toolTipContent }}
              </span>
            </l-tooltip>
          </v-col>
          <span
            v-if="data.total"
            style="marginRight: -4%; marginLeft: -4%"
          >
            {{ showPartition(data) }}
          </span>
          <v-col
            v-if="data.total"
            class="py-0 LLinearChartLine__result__value--second"
          >
            <span>
              {{ $t(translationLine.records) || $t('ayla.records') }}: {{ data.total }}
            </span>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="pt-1">
      <v-progress-linear
        :value="data.percentage"
        :background-color="globalColors.gallery"
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
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LLinearChartLine',
  components: {
    LTag,
    LTooltip
  },
  mixins: [colorsMixin],
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
    descriptionMaxLength: {
      type: Number,
      default: 39
    },
    applyCursorPointer: {
      type: Boolean,
      default: false
    },
    showToolTip: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isLabelTruncated () {
      return this.data?.label?.length > this.labelMaxLength
    },
    isDescriptionTruncated () {
      return this.data?.description?.length > this.descriptionMaxLength
    },
    label () {
      const { label } = this.data

      if (this.lastItem) {
        return this.$t(label)
      }

      return this.isLabelTruncated 
        ? this.getTruncatedText(label, this.labelMaxLength) 
        : label
    },
    description () {
      return this.isDescriptionTruncated 
        ? this.getTruncatedText(this.data.description, this.descriptionMaxLength) 
        : this.data.description
    },
    showQuantity () {
      return this.lastItem && this.data.quantity ? `(${this.data.quantity})` : ''
    }
  },
  methods: {
    getTruncatedText (text, maxLength) {
      return `${text.substring(0, maxLength)}...`
    },
    expand () {
      this.$emit('expand')
    },
    showPartition (item) {
      return item.value !== null ? ' | ' : ' '
    },
    eventClick (value) {
      return this.$emit('eventClick', value)
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

  &__title, &__percent, &__number, &__quantity {
    font-size: 0.923rem;
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
  .LLinearChartLine__label--clickable {
    cursor: pointer;
  }
}
</style>
