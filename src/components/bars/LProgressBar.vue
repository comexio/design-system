<template>
  <v-progress-linear
    v-bind="$attrs"
    :height="height"
    :background-color="backgroundColor"
    class="LProgressBar"
    v-on="$listeners"
  >
    <slot />
  </v-progress-linear>
</template>

<script>
export default {
  name: 'LProgressBar',
  props: {
    height: {
      type: String,
      default: '15px'
    },
    backgroundColor: {
      type: String,
      default: '#F1EFEF'
    }
  }
}
</script>

<style lang="scss" scoped>
.LProgressBar {
  cursor: pointer;
}
</style>
