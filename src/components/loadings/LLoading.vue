<template>
  <v-icon
    :size="size"
    class="iconRotate"
    color="wisteria"
  >
    mdi-cached
  </v-icon>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: ''
    }
  }
}
</script>
