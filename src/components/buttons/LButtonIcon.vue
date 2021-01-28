<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon :color="iconColor">
      <slot />
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    iconColor: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
