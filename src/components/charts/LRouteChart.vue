<template>
  <l-card
    :title="title"
    :description="description"
    height="auto"
    class="LRouteChart"
  >
    <div class="LRouteChart__content">
      <l-route-chart-header
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
  </l-card>
</template>

<script>
import LCard from '~/src/components/cards/LCard'
import LRouteChartHeader from './LRouteChartHeader'
import LRouteChartLine from './LRouteChartLine'

export default {
  name: 'LRouteChart',
  components: {
    LCard,
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
      default: () => ([])
    },
    lines: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
.LRouteChart__content {
  padding: 10px 15px;
  color: $martinique;

  ::v-deep .LRouteChart__line__even {
    .LRouteChart__line__item {
      background: $titan;
    }
  }
}
</style>
