<template>
  <div class="LGridChart">
    <div class="LGridChart__line">
      <div
        v-for="(header, key) in headers"
        :key="key"
        class="LGridChart__line__item LGridChart__line__item--header justify-center d-flex align-center"
      >
        <v-icon class="LGridChart__line__icon mr-2">
          {{ header.icon }} 
        </v-icon>
        {{ header.label }}
      </div>
    </div>
    <div
      v-for="(row, key) in rows"
      :key="key"
      class="LGridChart__line"
    >
      <div class="LGridChart__line__item LGridChart__line__item--name d-flex align-center justify-start">
        {{ row.label }}
      </div>
      <div
        v-for="(item, itemKey) in row.items"
        :key="itemKey"
        class="LGridChart__line__item LGridChart__line__item--value d-flex align-center justify-center"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LGridChart',
  props: {
    rows: {
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
.LGridChart__line {
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 1rem;
  line-height: 13px;
  letter-spacing: 0em;
  border-bottom: 1px solid $frenchLilac;

  &__icon {
    color:$martinique; 
  }

  &__item {
    border-right: 1px solid $martinique;
    width: 100%;
    height: 27px;
  }

  &__item--header {
    text-transform: uppercase;
    font-weight: 700;
  }

  &__item--name {
    height: 57px;
    font-weight: 700;
  }

  &__item--value {
    height: 57px;
  }
}
</style>
