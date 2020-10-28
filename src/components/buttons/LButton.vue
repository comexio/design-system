<template>
  <v-btn
    outlined
    color="primary"
    class="LButton"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon
      v-if="icon"
      left
      size="20px"
    >
      {{ icon }}
    </v-icon>
    {{ text }}
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.LButton {
  font-size: 13px;
  height: 30px !important;
  padding: 0 10px !important;
}
</style>
