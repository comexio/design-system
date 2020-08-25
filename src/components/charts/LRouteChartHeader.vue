<template>
  <div class="LRouteChart__header font-md">
    <div
      v-for="(item, key) in data"
      :key="key"
      class="LRouteChart__header__item pt-2 pl-2"
    >
      <span>{{ item }}</span>
      <v-icon
        color="wisteria"
        class="ml-1"
      >
        mdi-arrow-right-bold
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LRouteChartHeader',
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
.LRouteChart__header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 52px;
}

.LRouteChart__header__item {
  font-size: 0.8rem;
  text-transform: uppercase;
  i {
    font-size: 1.2rem;
  }
}
</style>
