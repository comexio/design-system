<template>
  <v-combobox
    v-model="inputValue"
    v-bind="$attrs"
    :hide-details="hideDetails"
    :disabled="disabled"
    :background-color="inputBackgroundColor"
    :height="inputHeight"
    multiple
    chips
    deletable-chips
    outlined
    dense
    small-chips
    append-icon=""
    class="LInputTag"
    :class="classInputTag"
    :style="cssVars"
    v-on="$listeners"
  >
    <template #label>
      <slot name="label" />
    </template>
    <template
      v-if="expand"
      v-slot:append-outer
    >
      <v-btn
        text
        tile
        color="#5C068C"
        class="ml-1"
        :height="inputHeight"
        small
        :disabled="disabled"
        @click="clickAppendOuter"
        v-on="$attrs.iconListeners"
      >
        e+
      </v-btn>
    </template>
  </v-combobox>
</template>

<script>
import { getInputHeight } from '~/utils/size.util'

export default {
  name: 'LInputTag',
  props: {
    value: {
      type: [String, Number, Array],
      default: null
    },
    hideDetails: {
      type: Boolean,
      default: true
    },
    labelPointer: Boolean,
    expand: Boolean,
    disabled: Boolean,
    large: Boolean,
    small: Boolean,
    allowHeightGrow: Boolean
  },
  computed: {
    classInputTag () {
      return {
        'LInputTag--hideDetails': this.hideDetails,
        'LInputTag--labelPointer': this.labelPointer,
        'LInputTag--allowHeightGrow': this.allowHeightGrow
      }
    },
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
    inputHeight () {
      const { large, small, $attrs } = this

      return getInputHeight({large, small, custom: $attrs.height})
    },
    cssVars () {
      return {
        '--inputMinHeight': this.inputHeight + 'px'
      }
    }
  },
  methods: {
    clickAppendOuter () {
      this.$emit('clickAppendOuter')
    }
  }
}
</script>

<style lang="scss" scoped>
.LInputTag--hideDetails {
  ::v-deep {
    @extend .commonCombobox;
  }
}

.LInputTag {
  ::v-deep {
    @extend .commonInput;
  }
}

.LInputTag--labelPointer {
  ::v-deep {
    .v-label {
      pointer-events: unset;
      cursor: pointer;
    }
  }
}

::v-deep .v-input__control {
  min-height: 25px !important;
  border-radius: 5px;

  fieldset {
    border-width: 1px;
  }
}

::v-deep {
  .v-input__slot {
    min-height: 25px !important;
  }
  .v-select__slot {
    padding: 0 12px;
  }
  .v-input__append-outer {
    margin: 0 !important;
  }
  .v-btn {
    box-shadow: inset 0 0 0 1px #5c068c;
    background-color: #faf6ff;
    border-radius: 4px;
  }
}

.LInputTag--allowHeightGrow {
  ::v-deep {
    @extend .commonInput--allowHeightGrow;
  }
}
</style>
