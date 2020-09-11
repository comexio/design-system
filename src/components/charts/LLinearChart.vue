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
            :data="item"
            :index="index"
            :color="colors[index]"
            :last-item="isLastItem(index)"
            :is-expandable="isExpandable"
            :translation-line="translationLine"
            @expand="expandList"
          />
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
        value: 'Valor',
        records: 'Registros',
        seeMore: 'Ver Mais'
      })
    }
  },
  methods: {
    isLastItem (index) {
      return index === this.maxQuantity
    },
    expandList () {
      this.$emit('expandList', this.type)
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1500px) {
  .LLinearChart__list__item {
    padding: 10px 20px;
  }
}
</style>
