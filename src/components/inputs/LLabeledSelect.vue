<template>
  <div class="l-labeled-select">
    <v-select
      dense
      outlined
      height="35px"
      v-bind="$attrs"
      :rules="validityRules"
      class="l-labeled-select--input"
      :background-color="disabled ? '#f8f8f8': ''"
      :disabled="disabled"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'LabeledSelect',
  inheritAttrs: false,
  props: {
    validity: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array,
      default: null
    },
    disabled:{
      type: Boolean,
      default: false
    }
  },
  computed: {
    showValidity () {
      return this.validity && this.rules
    },
    validityRules () {
      if (!this.showValidity) {
        return
      }

      return this.rules
    }
  }
}
</script>

<style lang="scss" scoped>
.l-labeled-select {
    width: 100%;
}
</style>
