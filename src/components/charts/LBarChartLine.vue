<template>
  <v-list-item
    class="LBarChart__list__item"
    dense
  >
    <v-row class="align-center controlRowWidth pb-1 flex-nowrap">
      <v-col
        v-if="hasTitle"
        class="py-0 pr-0 flex-grow-0"
      >
        <div
          class="d-flex align-center"
        >
          <span
            v-if="isLastItem"
            class="LBarChart__title"
            :style="{minWidth: titleWidth}"
          />
          <span
            v-else
            class="LBarChart__title font-md"
            :style="{minWidth: titleWidth}"
          >
            {{ data.title }}
          </span>
        </div>
      </v-col>
      <v-col class="py-0 pl-0">
        <div>
          <v-row>
            <v-col
              cols="3"
              class="py-0 d-flex"
            >
              <v-tooltip
                bottom
                max-width="300px"
                content-class="customTooltip pa-0"
              >
                <template v-slot:activator="{ on }">
                  <v-hover>
                    <span
                      v-if="isLastItem"
                      class="LBarChart__description"
                      v-on="on"
                    >
                      Outros ({{ data.quantity }})
                      <span
                        v-if="toggleLast"
                        class="LBarChart__description__toggle"
                        @click="toggleLastItem"
                      >
                        Ver Mais
                      </span>
                    </span>
                    <span
                      v-else
                      class="LBarChart__description"
                      :class="descriptionClass"
                      v-on="on"
                    >
                      {{ data.description }}
                    </span>
                  </v-hover>
                </template>
                <div
                  v-if="isLastItem"
                  class="customTooltip__info customTooltipChartNcm__info"
                >
                  Outros
                </div>
                <div
                  v-else
                  class="customTooltip__info customTooltipChartNcm__info"
                >
                  {{ data.description }}
                </div>
              </v-tooltip>
            </v-col>
            <v-col
              cols="9"
              class="py-0 pl-0"
            >
              <v-tooltip
                right
                content-class="customTooltip customTooltip--progress pa-0"
              >
                <template v-slot:activator="{ on }">
                  <v-hover
                    v-slot:default="{ hover }"
                    :value="hoverProgressBar"
                  >
                    <v-progress-linear
                      :background-color=" hover ? hoverBarColor() : ''"
                      :color="color"
                      height="15px"
                      class="LBarChart__progress"
                      :style="percentageBarFill(data, index, color)"
                      v-on="on"
                    >
                      <div class="LBarChart__value px-1">
                        {{ data.total }} USD
                      </div>
                    </v-progress-linear>
                  </v-hover>
                </template>
                <div class="font-md">
                  <div
                    v-if="data.total"
                    class="customTooltip__info"
                  >
                    {{ translation.total }}: {{ data.total }} USD
                  </div>
                  <v-divider />
                  <div
                    v-if="data.quantity"
                    class="customTooltip__info"
                  >
                    {{ translation.quantity }}: {{ data.quantity }}
                  </div>
                </div>
              </v-tooltip>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script>
export default {
  name: 'LBarChartLine',
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
    chart: {
      type: String,
      default: null
    },
    translation: {
      type: Object,
      default: () => ({
        total: 'Total',
        quantity: 'Quantidade'
      })
    },
    descriptionClass: {
      type: String,
      default: null
    },
    hoverColor: {
      type: String,
      default: ''
    },
    hasTitle: Boolean,
    titleWidth: {
      type: String,
      default: null
    },
    isLastItem: Boolean,
    toggleLast: Boolean
  },
  data () {
    return {
      modalTypesFormat: {
        money: 'money',
        weight: 'weight'
      },
      hoverProgressBar: false
    }
  },
  methods: {
    percentageBarFill (item, index, color) {
      const styleFill = {
        width: '100%',
        background: 'linear-gradient(to right, ' + color + ', ' + (100 - (index * 10)) + '%, #fff 0%) !important'
      }
      if (item.percentage && item.percentage >= 0) {
        styleFill.background = 'linear-gradient(to right, ' + color + ', ' + item.percentage + '%, #fff 0%) !important'
      }
      return styleFill
    },
    hoverBarColor () {
      return this.hoverColor
    },
    toggleLastItem () {
      this.$emit('toggleLast')
    }
  }
}
</script>

<style lang="scss" scoped>
  .LBarChart__list__item {
    min-height: auto;
    padding-top: 1px;
    padding-bottom: 1px;
  }
  .LBarChart__info {
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .LBarChart__info--right {
    text-align: right;
  }
  .LBarChart__title, .LBarChart__description {
    font-size: 0.7rem;
  }
  .LBarChart__title {
    display: inline-block;
    min-width: 60px;
  }
  .LBarChart__description {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    display: inline-block;
    cursor: pointer;
    max-width: 250px;
  }
  .LBarChart__description__toggle {
    @extend .globalLink;
    font-size: 0.9rem;
    font-family: Rubik;
  }
  .LBarChart__value {
    text-align: right;
    width: 100%;
    font-size: 9px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .LBarChart__progress {
    cursor: pointer;
  }
  .LBarChart__tooltip__info {
    font-size: 6px;
  }
  ::v-deep .v-progress-linear__content {
    z-index: unset;
  }

.controlRowWidth {
  width: 0;
}
</style>