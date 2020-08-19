<template>
  <div class="LRouteChart__line">
    <div class="LRouteChart__line__item LRouteChart__line__item--percent font-bd">
      {{ data.number }}
    </div>
    <div
      v-for="(item, key) in data.values"
      :key="key"
      class="LRouteChart__line__item LRouteChart__line__item--text"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
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
  grid-template-columns: 52px repeat(3, 1fr);
}

.LRouteChart__line__item {
  background: $magnolia;
  padding: 8px;
}

.LRouteChart__line__item--percent {
  text-align: center;
}

.LRouteChart__line__item--text {
  &:nth-child(-n+2) {
    box-shadow: inset 2px 0px 0px 0px white;
  }
  position: relative;
}

.LRouteChart__line__item {
  &:not(:nth-child(-n+2)) {
    &::before {
      content: "";
      left: -30px;
      position: absolute;
      top: 4px;
      padding: 12px;
      border-top: 2px solid white;
      border-right: 2px solid white;
      transform: rotate(45deg);
    }
  }
}

</style>
