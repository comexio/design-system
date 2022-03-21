<template>
  <v-list class="LBarChart px-4">
    <l-bar-chart-line
      v-for="(item, index) in data"
      :key="index"
      :data="item"
      :index="index"
      :color="color || globalColors.prelude"
      :is-last-item="isLastItem(index)"
      :others-label="othersLabel"
      :min-line-height="minLineHeight"
      :is-clickable="isClickable"
      :line-link="lineLink"
      v-bind="$attrs"
      @toggleLast="toggleLast"
      @titleClick="handleTitleClick"
      @line-click="handleLineClick"
    />
  </v-list>
</template>

<script>
import LBarChartLine from '~/src/components/charts/LBarChartLine'
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LBarChart',
  components: {
    LBarChartLine
  },
  mixins: [colorsMixin],
  props: {
    data: {
      type: Array,
      default: null
    },
    maxQuantity: {
      type: Number,
      default: 9
    },
    color: {
      type: String,
      default: ''
    },
    othersLabel: {
      type: String,
      default: ''
    },
    minLineHeight: {
      type: String,
      default: 'auto'
    },
    isClickable: {
      type: Boolean,
      default: false
    },
    lineLink: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isLastItem (index) {
      return index >= this.maxQuantity
    },
    toggleLast () {
      this.$emit('toggleLast')
    },
    handleTitleClick (value) {
      if (this.isClickable) {
        this.$emit('click', value)
      }
    },
    handleLineClick (value) {
      if (this.lineLink && !this.hasTitle) {
        this.$emit('line-click', value)
      }
    }
  }
}
</script>
