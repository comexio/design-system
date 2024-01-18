<template>
  <v-checkbox
    v-model="inputValue"
    v-bind="$attrs"
    :value="itemValue"
    class="LCheckbox"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'LCheckboxNew',
  inheritAttrs: false,
  props: {
    value: {
      type: null,
      default: null
    },
    itemValue: {
      type: null,
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
.LCheckbox {
  ::v-deep {
    .v-label {
      color: $martinique;
    }
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
