<template>
  <l-card
    v-bind="$attrs"
    class="LResumeChart"
  >
    <v-list class="LBarChart">
      <l-bar-chart-line
        v-for="(item, index) in data"
        :key="index"
        :data="item"
        :index="index"
        :color="color"
        :is-last-item="isLastItem(index)"
        v-bind="$attrs"
      />
    </v-list>
  </l-card>
</template>

<script>
import LCard from '~/src/components/cards/LCard'
import LBarChartLine from '~/src/components/charts/LBarChartLine'

export default {
  name: 'LBarChart',
  components: {
    LCard,
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
    }
  },
  methods: {
    isLastItem (index) {
      return index >= this.maxQuantity && index === this.data.length - 1
    }
  }
}
</script>
