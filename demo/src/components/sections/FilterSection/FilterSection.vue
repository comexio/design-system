<template>
  <section class="filter-section">
    <h1>
      Filters
    </h1>
    <div class="filter-examples">
      <l-dropdown-check
        heading-text="Cars"
        placeholder="Search something..."
        :items="[{ value: 'a', text: 'First' }, { value: 'b', text: 'Second' }, { value: 'c', text: 'Third' }, { value: 'd', text: 'Fourth' }]"
      />
      <div>a</div>
      <div>a</div>
      <div>a</div>
    </div>
  </section>
</template>

<script>
import { LDropdownCheck } from '@/../../src'
export default {
    components: {
        LDropdownCheck
    }
}
</script>

<style lang="scss" scoped>
.filter-examples {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
}
</style>