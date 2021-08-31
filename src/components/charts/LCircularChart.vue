<template>
  <div class="LCircularChart d-flex align-center">
    <v-row>
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
              v-if="item.value"
              class="LCircularChart__item text-center"
              :class="{ 'useCursorPointer': useCursorPointer && clickableItems.includes(item.label) }"
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
                <slot>
                  <img
                    :src="item.options.img"
                    alt="container"
                    class="LCircularChart__item__image"
                  >
                </slot>
              </v-progress-circular>
              <div class="LCircularChart__title font-md pt-5 pb-3">
                {{ item.label }}
              </div>
              <div class="LCircularChart__percentage">
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
  </div>
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
    showTooltip: Boolean,
    size: {
      type: Number,
      default: 60
    },
    clickableItems: {
      type: Array,
      default: () => ([])
    },
    useCursorPointer: {
      type: Boolean,
      default: false
    }
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
  height: 100%;
  .LCircularChart__title, .LCircularChart__percentage, .LCircularChart__quantity {
    color: $martinique;
  }
  .LCircularChart__quantity__truncated {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .LCircularChart__item__image {
    width: 40px;
  }
}
.useCursorPointer {
  cursor: pointer;
}
</style>
