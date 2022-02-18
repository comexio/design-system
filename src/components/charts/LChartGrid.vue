<template>
  <div class="chartGrid">
    <div class="chartGrid__line">
      <div
        v-for="(value, key) in headers"
        :key="key"
        class="chartGrid__line__item"
      >
        <v-icon color="#2E264D">
          {{ value.icon }} mr-2
        </v-icon>
        {{ value.label }}
      </div>
    </div>
    <div
      v-for="(value, key) in data"
      :key="key"
      class="chartGrid__line"
    >
      <div class="chartGrid__line__item chartGrid__line__item--name">
        {{ value.label }}
      </div>
      <div
        v-for="(subValue, newKey) in value.values"
        :key="newKey"
        class="chartGrid__line__item chartGrid__line__item--value"
      >
        {{ subValue }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LChartGrid',
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    headers: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
.chartGrid__line {
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-family: Rubik;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 13px;
  height: 57px;
  letter-spacing: 0em;
  border-bottom: 1px solid #e1dfea;

  &__item {
    border-right: 1px solid #2e264d;
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__item--name {
    justify-content: start;
    height: 57px;
  }

  &__item--value {
    justify-content: center;
    height: 57px;
  }
}
</style>
