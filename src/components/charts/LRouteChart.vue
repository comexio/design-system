<template>
  <div class="LRouteChart">
    <l-route-chart-header
      v-if="header"
      :data="header"
    />
    <l-route-chart-line
      v-for="(item , key) in lines"
      :key="key"
      :data="item"
      :class="{ 'LRouteChart__line__even' : key % 2 }"
      class="pt-2"
    />
  </div>
</template>

<script>
import LRouteChartHeader from './LRouteChartHeader'
import LRouteChartLine from './LRouteChartLine'

export default {
  name: 'LRouteChart',
  components: {
    LRouteChartHeader,
    LRouteChartLine
  },
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    header: {
      type: Array,
      default: null
    },
    lines: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
.LRouteChart {
  padding: 10px 15px;
  color: $martinique;

  ::v-deep .LRouteChart__line__even {
    .LRouteChart__line__item {
      background: $titan;
    }
  }
}
</style>
