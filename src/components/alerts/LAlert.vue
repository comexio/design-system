<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="3000"
    absolute
    left
  >
    {{ msg }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
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
