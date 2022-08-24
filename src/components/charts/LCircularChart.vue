<template>
  <v-container
    class="LCircularChart pa-0"
    fill-height
  >
    <v-row no-gutters>
      <v-col
        v-for="item in items"
        :key="item.label"
      >
        <l-tooltip
          bottom
          :disabled="!showTooltip"
        >
          <template
            v-if="item.value > 0 || item.percentage !== ''"
            v-slot:activator="{ on }"
          >
            <div
              class="LCircularChart__item text-center"
              :class="{ 'LCircularChart__item--clickable': useCursorPointer && clickableItems.includes(item.label) }"
              v-on="on"
              @click="eventClick(item.label)"
            >
              <v-progress-circular
                :rotate="-90"
                :size="size"
                :value="item.percentage"
                :width="6"
                :color="item.options.color"
              >
                <v-icon
                  v-if="item.options.icon"
                  :color="item.options.color"
                  class="LCircularChart__item__icon"
                >
                  {{ item.options.icon }}
                </v-icon>
                <img
                  v-else
                  :src="item.options.img"
                  alt="container"
                  class="LCircularChart__item__image"
                >
              </v-progress-circular>
              <div class="LCircularChart__title font-md my-5">
                {{ translateLabels ? $t(item.label) : item.label }}
              </div>
              <div class="LCircularChart__percentage font-md">
                {{ item.percentage }}%
              </div>
              <div class="LCircularChart__quantity LCircularChart__quantity__truncated">
                {{ item.value }}
              </div>
            </div>
          </template>
          <div
            v-if="item.tooltip"
          >
            <span>
              {{ item.tooltip.label }}
            </span>
          </div>
        </l-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LTooltip from '~/src/components/tooltip/LTooltip'

export default {
  name: 'LCircularChart',
  components: {
    LTooltip
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    clickableItems: {
      type: Array,
      default: () => ([])
    },
    size: {
      type: Number,
      default: 60
    },
    showTooltip: Boolean,
    translateLabels: Boolean,
    useCursorPointer: Boolean
  },
  methods: {
    eventClick (label) {
      if (this.clickableItems.includes(label)) {
        this.$emit('eventClick', label);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LCircularChart {
  &__title, &__percentage, &__quantity {
    color: $martinique;
  }

  &__title {
    font-size: 1.077rem;
    text-transform: uppercase;
    line-height: 17px;
  }

  &__percentage {
    font-size: .923rem;
    line-height: 15px;
  }

  &__quantity__truncated {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__item {
    &--clickable {
      cursor: pointer;
    }

    &__image, &__icon {
      user-select: none;
    }

    &__image {
      width: 40px;
    }
  }
}
</style>
