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
    @change="handleRuleOnlyNumbers"
  >
    <template #label>
      <slot name="label" />
    </template>
    <template
      v-if="expand"
      v-slot:append-outer
    >
      <v-btn
        :disabled="disabled"
        :color="globalColors.purpleHaze"
        :height="inputHeight"
        text
        tile
        small
        class="ml-1"
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
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LInputTag',
  mixins: [colorsMixin],
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
    allowHeightGrow: Boolean,
    onlyNumbers: Boolean
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
        return this.globalColors.alabaster
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
    handleRuleOnlyNumbers (values) {
      if (this.onlyNumbers) {
        this.inputValue = values.filter(value => !isNaN(value))
      }
    },
    clickAppendOuter () {
      this.$emit('clickAppendOuter')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

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
  .v-input__append-outer {
    margin: 0 !important;
  }
  .v-btn {
    box-shadow: inset 0 0 0 1px $purpleHaze;
    background-color: $magnolia;
    border-radius: 4px;
  }
}

.LInputTag--allowHeightGrow {
  ::v-deep {
    @extend .commonInput--allowHeightGrow;
  }
}
</style>
