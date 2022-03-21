<template>
  <v-chip
    :color="globalColors.moonRaker"
    close
    class="custom__chip"
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
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LabeledChip',
  mixins: [colorsMixin],
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
@import '../../assets/scss/_variables.scss';

.custom__chip {
  .custom__chip__number {
    padding: 2px 4px;
    margin-left: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    color: $martinique !important;
    .v-btn__content {
      font-size: 14px;
    }
  }
  .v-chip__close {
    font-size: 14px;
    color: $martinique !important;
  }
}
</style>
