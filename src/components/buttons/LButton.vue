<template>
  <v-btn
    outlined
    color="primary"
    class="LButton"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon
      v-if="iconValue"
      left
      size="20px"
    >
      {{ iconValue }}
    </v-icon>
    {{ label }}
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    iconValue: {
      type: String,
      default: null
    },
    label: {
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
