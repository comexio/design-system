<template>
  <div>
    Filters
    <labeled-chip
      :item="item"
    />
  </div>
</template>

<script>
import { LabeledChip } from '@/../../src'
export default {
  components: {
    LabeledChip
  },
  data () {
    return {
      item: {
        text: 'Últimos 3 meses',
        number: '56',
        filter: {
          id: 'period'
        }
      }
    }
  }
}
</script>
