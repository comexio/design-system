<template>
  <v-icon
    v-bind="$attrs"
    :color="color"
    class="LLoading"
  >
    mdi-cached
  </v-icon>
</template>

<script>
import colors from '~/src/assets/scss/_export.module.scss'

export default {
  name: 'LLoading',
  props: {
    color: {
      type: String,
      default: colors.wisteria
    }
  }
}
</script>

<style lang="scss" scoped>
.LLoading {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  0% {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(-1turn);
  }
}
</style>
