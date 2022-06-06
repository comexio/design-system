<template>
  <div class="LLabeledInput">
    <v-text-field
      dense
      outlined
      :height="inputHeight"
      v-bind="$attrs"
      :rules="validityRules"
      class="LLabeledInput__input"
      :class="inputClass"
      :background-color="inputBackgroundColor"
      :disabled="disabled"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import { getInputHeight } from '~/utils/size.util'
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LLabeledInput',
  mixins: [colorsMixin],
  inheritAttrs: false,
  props: {
    rules: {
      type: Array,
      default: null
    },
    validity: Boolean,
    disabled: Boolean,
    large: Boolean,
    small: Boolean
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
    },
    inputBackgroundColor () {
      if (this.disabled) {
        return this.globalColors.alabaster
      }

      return ''
    },
    inputClass () {
      const { large, small } = this

      return {
        'LLabeledInput__input--large': large,
        'LLabeledInput__input--small': small
      }
    },
    inputHeight () {
      const { large, small, $attrs } = this

      return getInputHeight({large, small, custom: $attrs.height})
    }
  },
  mounted () {
    console.warn('LLabeledInput is deprecated and will be removed in the future')
  }
}
</script>

<style lang="scss" scoped>

.LLabeledInput {
  width: 100%;
}

::v-deep {
  .v-input__control {
    min-height: 25px !important;
  }
  .v-input__slot {
    min-height: 25px !important;
  }
  .v-text-field--outlined, .v-text-field--solo {
    border-radius: 5px;
    
    fieldset {
      border-width: 1px;
    }
  }
  .v-label {
    top: 8px !important;
  }
  .LLabeledInput__input--large {
    .v-label {
      top: 10px !important;
    }
  }
  .LLabeledInput__input--small {
    .v-label {
      top: 2px !important;
    }
    .v-label--active {
      top: 8px !important;
    }
  }
}
</style>
