<template>
  <div class="LRouteChart__line">
    <v-tooltip
      bottom
      content-class="LRouteChart__line__tooltip customTooltip pa-0"
    >
      <template v-slot:activator="{ on }">
        <div
          class="LRouteChart__line__item LRouteChart__line__item--number font-bd"
          v-on="on"
        >
          {{ data.number }}
        </div>
      </template>
      <div
        v-if="data.quantity"
        class="customTooltip__info"
      >
        {{ data.quantity.name }} : {{ data.quantity.value }}
      </div>
    </v-tooltip>
    <div
      v-if="data.isLast"
    >
      <div
        class="LRouteChart__line__item LRouteChart__line__item--text"
      >
        {{ data.values }}
      </div>
    </div>
    <div
      v-else
      class="LRouteChart__line__group"
    >
      <div
        v-for="(item, key) in data.values"
        :key="key"
        class="LRouteChart__line__item LRouteChart__line__item--text"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LRouteChartLine',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.LRouteChart__line {
  display: grid;
  grid-template-columns: 68px 1fr;
}

.LRouteChart__line__group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.LRouteChart__line__item {
  background: $magnolia;
  padding: 8px;
}

.LRouteChart__line__item--number {
  text-align: center;
  white-space: nowrap;
}

.LRouteChart__line__item--text {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:first-child {
    box-shadow: inset 2px 0px 0px 0px white;
  }
}

.LRouteChart__line__item--text {
  &:not(:last-child) {
    &::after {
      content: "";
      right: 5px;
      position: absolute;
      top: 4px;
      padding: 12px;
      border-top: 2px solid white;
      border-right: 2px solid white;
      transform: rotate(45deg);
    }
  }
}

.LRouteChart__line__tooltip {
  margin-top: -15px;
  text-transform: uppercase;
}
</style>
