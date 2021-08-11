<template>
  <v-text-field
    v-model="inputValue"
    class="LInputSolo pt-0 inputSolo rm-radius-left"
    :class="inputClass"
    :height="inputHeight"
    :background-color="inputBackgroundColor"
    :disabled="disabled"
    hide-details
    solo
    flat
    dense
    :outlined="outlined"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon
      v-if="appendIcon"
      slot="append"
      size="10px"
      color="#9F6CBB"
    >
      {{ appendIcon }}
    </v-icon>
  </v-text-field>
</template>

<script>
import { getInputHeight } from '~/utils/size.util'

export default {
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    appendIcon: {
      type: String,
      default: null
    },
    outlined: Boolean,
    disabled: Boolean,
    large: Boolean,
    small: Boolean
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    inputBackgroundColor () {
      if (this.disabled) {
        return '#F8F8F8'
      }

      return ''
    },
    inputClass () {
      return {
        'LInputSolo--withoutBorder': !this.outlined
      }
    },
    inputHeight () {
      const { large, small, $attrs } = this

      return getInputHeight({large, small, custom: $attrs.height})
    }
  }
}
</script>

<style lang="scss" scoped>
.LInputSolo {
  ::v-deep {
    @extend .commonInput;
  }
}

::v-deep {
  .v-input__control {
    min-height: 25px !important;
    border-radius: 5px;

    fieldset {
      border-width: 1px;
    }
  }
  .v-input__slot {
    min-height: 25px !important;
  }
}

.LInputSolo--withoutBorder {
  ::v-deep .v-input__control {
    border-radius: unset;

    fieldset {
      border-width: unset;
    }
  }
}
</style>
