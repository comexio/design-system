<template>
  <v-list class="LBarChart">
    <l-bar-chart-line
      v-for="(item, index) in data"
      :key="index"
      :data="item"
      :index="index"
      :color="color"
      :is-last-item="isLastItem(index)"
      :others-label="othersLabel"
      :min-line-height="minLineHeight"
      :is-clickable="isClickable"
      v-bind="$attrs"
      @toggleLast="toggleLast"
      @titleClick="handleTitleClick"
    />
  </v-list>
</template>

<script>
import LBarChartLine from '~/src/components/charts/LBarChartLine'

export default {
  name: 'LBarChart',
  components: {
    LBarChartLine
  },
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
      default: () => '#D4C5EB'
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
      this.$emit('click', value)
    }
  }
}
</script>
