<template>
  <div>
    <div class="text-center">
      <h1 class="strong">
        {{ totalValue }}
      </h1>
      <h5>
        {{ title }}
      </h5>
    </div>

    <div class="d-flex full-height">
      <l-linear-chart
        v-bind="$attrs"
        :data="data"
        :colors="generatedColors"
        :is-expandable="isExpandable"
        :is-expanded="isExpanded"
        :charts-indicator="chartsIndicator"
        :translation-line="translatedObject"
        :apply-cursor-pointer="false"
      />
    </div>
  </div>
</template>

<script>
import { generateHexColorByString } from '~/utils/color.util'
import LLinearChart from '~/src/components/charts/LLinearChart'
import { CHARTS_INDICATOR } from '~/enum/linearChart.enum'

export default {
  name: 'LLinearChartTotalValue',
  components: {
    LLinearChart,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    totalValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      notInformed: {},
      totalOthers: 0,
      colors: ['#7d8aff', '#ffa57d', '#ff7da9', '#51a59a', '#7851a5'],
      isExpanded: false,
      isExpandable: false,
      generateColor: true,
      isTagChart: true,
      chartsIndicator: CHARTS_INDICATOR.FOB,
    }
  },
  computed: {
    generatedColors() {
      return this.data.map((item, index) => {
        const color = this.colors ? this.colors[index] : null

        return this.colorize(color, item.label)
      })
    },
    translatedObject() {
      const translate = {
        value: this.$t('ayla.value'),
        records: this.$t('ayla.records'),
        seeMore: this.$t('ayla.seeMore'),
      }
      if (this.chartsIndicator === CHARTS_INDICATOR.WEIGHT) {
        translate.records = this.$t('ayla.weight')
      }
      
      return translate
    },
  },
  methods: {
    colorize(color, text) {
      return this.generateColor ? generateHexColorByString(text) : color
    }
  },
}
</script>

<style lang="scss" scoped>
.LLinearChart {
  flex-basis: 50%;
}

.modalAutomaticFilter {
  color: white;
}

::v-deep {
  .LLinearChartLine {
    & .LLinearChartLine__result {
      font-size: 0.8rem;
      color: $silver;
      white-space: nowrap;
    }
  }
  .v-card__text {
    padding-bottom: 0 !important;
  }
  .v-image__image--cover {
    background-size: 65% !important;
  }
}
</style>
    