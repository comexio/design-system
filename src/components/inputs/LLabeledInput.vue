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
export default {
  name: 'LLabeledInput',
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
        return '#F8F8F8'
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

      if (large) {
        return '40'
      }

      if (small) {
        return '25'
      }

      if ($attrs.height) {
        return $attrs.height
      }

      return '35'
    }
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
