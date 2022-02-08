<template>
  <v-progress-linear
    v-bind="$attrs"
    :height="height"
    :background-color="backgroundColor"
    :class="{ 'LProgressBar--withoutPointer': !showPointer }"
    class="LProgressBar"
    v-on="$listeners"
  >
    <slot />
  </v-progress-linear>
</template>

<script>
import colors from '~/src/assets/scss/_export.module.scss'

export default {
  name: 'LProgressBar',
  props: {
    height: {
      type: String,
      default: '15px'
    },
    backgroundColor: {
      type: String,
      default: colors.gallery
    },
    showPointer: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.LProgressBar {
  cursor: pointer;

  &--withoutPointer {
    cursor: default;
  }
}
</style>
