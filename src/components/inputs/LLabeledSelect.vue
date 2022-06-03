<template>
  <div class="LLabeledSelect">
    <v-select
      dense
      outlined
      height="35px"
      v-bind="$attrs"
      :rules="validityRules"
      class="LLabeledSelect__input"
      :background-color="disabled ? globalColors.alabaster : ''"
      :disabled="disabled"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LLabeledSelect',
  mixins: [colorsMixin],
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
  },
  mounted () {
    console.warn('LLabeledSelect is deprecated and will be removed in the future')
  }
}
</script>

<style lang="scss" scoped>
.LLabeledSelect {
    width: 100%;
}
</style>
