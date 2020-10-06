<template>
  <div class="LCheckbox">
    <v-checkbox
      v-for="(item, index) in $attrs.options"
      :key="index"
      v-model="inputValue"
      v-bind="$attrs"
      :value="item"
      :label="item"
    />
  </div>
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
.LCheckbox {
  margin-top: 0;
  padding-top: 0;
  ::v-deep {
    .v-label {
      font-size: 1rem;
      color: $martinique;
    }
    .v-icon {
      font-size: 20px;
    }

    .v-input--selection-controls {
      margin-top: 0px;
    }

    .v-input--selection-controls__input {
      margin-right: 2px;
    }
  }
}
</style>
