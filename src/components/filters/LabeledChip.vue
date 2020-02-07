<template>
  <v-chip
    close
    class="custom__chip"
    color="#E2DAF8"
    close-icon="mdi-close"
    @click:close="removeFilter(item.filter)"
  >
    {{ item.text }}
    <span
      v-if="item.number"
      class="v-btn custom__chip__number"
    >
      {{ item.number }}
    </span>
  </v-chip>    
</template>

<script>
export default {
  name: 'Chip',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  methods: {
    removeFilter (filter) {
      this.$emit('remove-filter', filter)
    }
  } 
}
</script>

<style lang="scss" scoped>
.custom__chip {
  .custom__chip__number {
    padding: 2px 4px;
    margin-left: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    color: #2E264D !important;
    .v-btn__content {
      font-size: 14px;
    }
  }
  .v-chip__close {
    font-size: 14px;
    color: #2E264D !important;
  }
}
</style>
