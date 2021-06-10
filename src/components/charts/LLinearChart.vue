<template>
  <div class="LLinearChart flex-grow-1">
    <div class="">
      <v-list>
        <v-list-item
          v-for="(item, index) in data"
          :key="index"
          class="LLinearChart__list__item"
          dense
        >
          <l-linear-chart-line
            v-slot:sectionAfterValue="slotProps"
            :apply-cursor-pointer="isClickable(item)"
            :data="item"
            :index="index"
            :color="colors[index]"
            :last-item="isLastItem(index)"
            :is-expandable="isExpandable"
            :translation-line="translationLine"
            :items-without-details="itemsWithoutDetails"
            :show-tool-tip="showToolTip"
            :label-max-length="labelMaxLength"
            @expand="expandList"
            @eventClick="eventClick"
          >
            <slot
              name="sectionAfterValue"
              :value="slotProps.value"
            />
          </l-linear-chart-line>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
import LLinearChartLine from '~/src/components/charts/LLinearChartLine'

export default {
  name: 'LLinearChart',
  components: {
    LLinearChartLine
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    scroller: {
      type: Object,
      default: null
    },
    colors: {
      type: Array,
      default: () => []
    },
    isExpanded: {
      type: Boolean,
      default: false
    },
    isExpandable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: null
    },
    loadingExpand: {
      type: Boolean,
      default: false
    },
    generateColor: {
      type: Boolean,
      default: false
    },
    isTagChart: {
      type: Boolean,
      default: false
    },
    maxQuantity: {
      type: Number,
      default: 4
    },
    translationLine: {
      type: Object,
      default: () => ({
        value: null,
        records: null,
        seeMore: null
      })
    },
    itemsWithoutDetails: {
      type: Array,
      default: () => []
    },
    applyCursorPointer: {
      type: Boolean,
      default: false
    },
    showToolTip: {
      type: Boolean,
      default: false
    },
    labelMaxLength: {
      type: Number,
      default: 23
    },
    nonClickableItems: {
      type: Array,
      default: () => []
    }
  },
  creeated() {
    console.log('BRASIL', this.data)
  },
  methods: {
    isLastItem (index) {
      return index === this.maxQuantity
    },
    isClickable(item) {
      const hasNonClickableItems = this.nonClickableItems.find(label => label === item.label)

      if (hasNonClickableItems) {
        return false
      }

      return this.applyCursorPointer
    },
    expandList () {
      this.$emit('expandList', this.type)
    },
    eventClick (value) {
      const hasNonClickableItems = this.nonClickableItems.find(label => label === value)

      if (hasNonClickableItems) {
        return
      }

      this.$emit('eventClick', value)
    }
  }
}
</script>

<style lang="scss" scoped>

.LLinearChart__list__item{
  padding: 3px 10px;
  }
@media screen and (min-width: 1500px) {
  .LLinearChart__list__item {
    min-height: auto;
    padding: 10px 20px;
  }
}
</style>
