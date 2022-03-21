<template>
  <div class="LLabeledTextarea">
    <v-textarea
      dense
      outlined
      v-bind="$attrs"
      :rules="validityRules"
      class="LLabeledTextarea__input"
      :background-color="disabled ? globalColors.alabaster : ''"
      :disabled="disabled"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LLabeledTextArea',
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
  }
}
</script>

<style lang="scss" scoped>
.LLabeledTextarea {
    width: 100%;
}
</style>
