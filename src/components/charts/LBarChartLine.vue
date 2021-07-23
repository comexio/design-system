<template>
  <v-list-item
    class="LBarChart__list__item pr-0"
    :min-height="minLineHeight"
    dense
    @click="handleLineClick(data)"
  >
    <v-row class="align-center controlRowWidth pb-1 flex-nowrap">
      <v-col
        v-if="hasTitle"
        class="py-0 pr-0 pl-0 flex-grow-0"
      >
        <div
          class="d-flex align-center"
        >
          <span
            v-if="isLastItem"
            class="LBarChart__title font-md mr-1"
            :style="{minWidth: titleWidth}"
          >
            {{ othersLabel }}
          </span>
          <span
            v-else
            class="LBarChart__title font-md mr-1"
            :class="{'LBarChart__title--clickable': isClickable}"
            :style="{minWidth: titleWidth}"
            @click="titleClick(data.title)"
          >
            {{ data.title }}
          </span>
        </div>
      </v-col>
      <v-col class="py-0 pl-0">
        <div>
          <v-row>
            <v-col
              cols="4"
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
                      {{ !toggleLast ? othersLabel : '' }}
                      <span
                        v-if="toggleLast"
                        class="LBarChart__description__toggle"
                        @click="toggleLastItem"
                      >
                        {{ $t('ayla.seeMore') }}
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
                  {{ $t('ayla.others') }}
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
              cols="8"
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
                    <l-progress-bar
                      :background-color=" hover ? hoverBarColor() : ''"
                      :color="color"
                      class="LBarChart__progress"
                      height="18px"
                      :style="percentageBarFill(data, index, color)"
                      v-on="on"
                    >
                      <div class="LBarChart__value px-1">
                        {{ data.total }} USD
                      </div>
                    </l-progress-bar>

                    <!-- <v-progress-linear
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
                    </v-progress-linear> -->
                  </v-hover>
                </template>
                <div class="font-md">
                  <div
                    v-if="data.total"
                    class="customTooltip__info"
                  >
                    {{ translation.total || $t('ayla.total') }}: {{ data.total }} USD
                  </div>
                  <v-divider />
                  <div
                    v-if="data.quantity"
                    class="customTooltip__info"
                  >
                    {{ translation.quantity || $t('ayla.quantity') }}: {{ data.quantity }}
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
import LProgressBar from '~/src/components/bars/LProgressBar'

export default {
  name: 'LBarChartLine',
  components: {
    LProgressBar
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
    chart: {
      type: String,
      default: null
    },
    translation: {
      type: Object,
      default: () => ({
        total: null,
        quantity: null
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
    toggleLast: Boolean,
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
    },
    titleClick (value) {
      if (this.isClickable) {
        this.$emit('titleClick', value)
      }
    },
    handleLineClick (value) {
      if (this.lineLink) {
        this.$emit('line-click', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
  font-size: 0.9rem;
  color: $martinique;
}
.LBarChart__title--clickable {
  cursor: pointer;
}
.LBarChart__title {
  display: inline-block;
  min-width: 70px;
}
.LBarChart__description {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  max-width: 250px;
  text-align: right;
}
.LBarChart__description__toggle {
  @extend .globalLink;
  font-size: 0.9rem;
  font-family: Rubik;
}
.LBarChart__value {
  text-align: right;
  width: 100%;
  font-size: 0.9rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.LBarChart__tooltip__info {
  font-size: 6px;
}
::v-deep .v-progress-linear__content {
  z-index: unset;
}

.LBarChart__progress {
  color: $martinique;
}

.controlRowWidth {
  width: 0;
}
</style>
