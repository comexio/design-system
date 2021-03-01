<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="3000"
    absolute
    left
    :color="backgroundColor"
    v-bind="$attrs"
  >
    <span :style="getColorText"> {{ msg }}</span>
    <slot />
  </v-snackbar>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#333333'
    },
    colorText: {
      type: String,
      default: '#fff'
    },
    msg: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      snackbar: false
    }
  },
  computed: {
    getColorText () {
      return this.colorText ? `color: ${this.colorText}` : ''
    },
  },
  mounted () {
    this.$nextTick(() => {
      this.snackbar = true
    })
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-snack__content {
  font-size: 0.9rem;
  text-align: center;
  justify-content: center;
  min-height: 40px;
}

@media only screen and (min-width: 600px) {
  ::v-deep .v-snack__wrapper {
    min-width: 260px;
  }
}
</style>
