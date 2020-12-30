<template>
  <v-container class="LLinearChartLine pa-0">
    <div class="d-flex justify-space-between col-12 ma-0 pa-0">
      <v-tooltip
        bottom
        content-class="customTooltip pa-0"
      >
        <template v-slot:activator="{ on }">
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
            {{ data.label }}
            <v-btn
              v-if="showDetailsIcon && data.label.toUpperCase() !== 'OUTROS'"
              class="mx-2"
              text
              icon
              color="wisteria"
              height="26px"
              min-width="26px"
              @click.stop="showDetails(data.label)"
            >
              <v-icon size="15px">
                mdi-magnify
              </v-icon>
            </v-btn>
            {{ showQuantity }}
            <span
              v-if="lastItem && !isExpanded && isExpandable"
              class="LLinearChartLine__expand ml-1"
              @click="expand"
            >
              {{ translationLine.seeMore }}
            </span>
          </p>
        </template>
        <div class="customTooltip__info">
          {{ data.label }} {{ showQuantity }}
        </div>
      </v-tooltip>
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
          class="flex-nowrap"
        >
          <v-col
            v-if="data.value !== null"
            class="pl-2 py-0 pr-0 LLinearChartLine__result__value--first"
          >
            <span>
              {{ translationLine.value }}: {{ data.value }} {{ valueSymbol }}
            </span>
          </v-col>

          <v-col
            v-if="data.total !== null"
            class="py-0 pl-3 LLinearChartLine__result__value--second"
          >
            <span>
              {{ showPartition(data) }}{{ translationLine.records }}: {{ data.total }}
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

export default {
  name: 'LLinearChartLine',
  components: {
    LTag
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
        value: 'Valor',
        records: 'Registros',
        seeMore: 'Ver Mais'
      })
    },
    valueSymbol: {
      type: String,
      default: null
    },
    showDetailsIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
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
    showDetails (value) {
      this.$emit('showDetails', value)
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
    text-overflow: ellipsis;
    width: 0;
    flex-basis: 100%;
  }

  &__title, &__percent, &__number {
    font-size: 0.9rem;
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
    font-size: 0.8rem;
    color: $silver;
    white-space: nowrap;
    min-width: 250px;
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
}
</style>
