<template>
  <v-text-field
    v-model="inputValue"
    class="pt-0 inputSolo rm-radius-left"
    hide-details
    solo
    dense
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
