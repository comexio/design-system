<template>
  <v-checkbox
    v-model="inputValue"
    class="LCheckboxNew"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'LCheckboxNew',
  props: {
    value: {
      type: Boolean,
      default: null
    },
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
.LCheckboxNew {
  ::v-deep {
    .v-icon {
      color: $silver;
      font-size: 20px;

      &.mdi-checkbox-marked {
        color: $purpleHaze;
      }
    }
  }
}
</style>
