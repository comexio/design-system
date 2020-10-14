<template>
  <div class="LCircularChart py-7">
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.label"
      >
        <v-tooltip
          bottom
          :disabled="!showTooltip"
          content-class="customTooltip pa-0"
        >
          <template
            v-if="item.value > 0 || item.percentage !== ''"
            v-slot:activator="{ on }"
          >
            <div
              v-if="item.value"
              class="LCircularChart__item text-center"
              v-on="on"
            >
              <v-progress-circular
                :rotate="-90"
                :size="60"
                :value="item.percentage"
                :width="7"
                :color="item.options.color"
              >
                <slot>
                  <img
                    :src="item.options.img"
                    width="30px"
                    alt="container"
                    class="displayValues__image"
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
            class="font-md"
          >
            <div class="customTooltip__info">
              {{ item.tooltip.label }}
            </div>
          </div>
        </v-tooltip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LCircularChart',
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    showTooltip: Boolean
  }
}
</script>

<style lang="scss" scoped>
.LCircularChart {
  .LCircularChart__title, .LCircularChart__percentage, .LCircularChart__quantity {
    color: $martinique;
  }
  .LCircularChart__quantity__truncated {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
