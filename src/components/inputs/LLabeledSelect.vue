<template>
  <div class="LLabeledSelect">
    <v-select
      dense
      outlined
      height="35px"
      v-bind="$attrs"
      :rules="validityRules"
      class="LLabeledSelect__input"
      :background-color="disabled ? '#f8f8f8': ''"
      :disabled="disabled"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'LLabeledSelect',
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
.LLabeledSelect {
    width: 100%;
}
</style>
