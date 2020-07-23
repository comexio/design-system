<template>
  <v-select
    v-model="inputValue"
    v-bind="$attrs"
    :menu-props="{ offsetY: true }"
    solo
    dense
    hide-details
    class="rm-radius-left rm-radius-right selectSolo"
  >
    <template #append>
      <v-icon color="wisteria">
        mdi-chevron-down
      </v-icon>
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Object, Number, Array, Boolean],
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
