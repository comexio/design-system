<template>
  <div class="LSelect">
    <v-select
      :height="inputHeight"
      v-bind="$attrs"
      class="LSelect__input"
      :class="inputClass"
      :style="inputStyleVariables"
      v-on="$listeners"
    >
      <template #append>
        <v-icon v-if="!dropdownIcon" />
      </template>
      
      <template
        v-for="(index, name) in $scopedSlots"
        v-slot:[name]="scope"
      >
        <slot
          :name="name"
          v-bind="scope"
        />
      </template>

      <template
        v-for="(index, name) in $slots"
        v-slot:[name]
      >
        <slot :name="name" />
      </template>
    </v-select>
  </div>
</template>

<script>
import { getInputHeight } from '~/utils/size.util'

export default {
  name: 'LSelect',
  inheritAttrs: false,
  props: {
    allowHeightGrow: Boolean,
    dropdownIcon: {
      type: Boolean,
      default: true
    },
    large: Boolean,
    small: Boolean
  },
  computed: {
    inputClass () {
      const { allowHeightGrow, dropdownIcon, large, small, $attrs } = this

      return {
        'LSelect--allowHeightGrow': allowHeightGrow,
        'LSelect--dropdownIcon': dropdownIcon,
        'LSelect--disabled': $attrs.disabled,
        'LSelect--large': large,
        'LSelect--small': small
      }
    },
    inputHeight () {
      const { large, small, $attrs } = this

      return getInputHeight({large, small, custom: $attrs.height})
    },
    inputStyleVariables () {
      const { inputHeight } = this

      return {
        '--minHeight': `${inputHeight}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/inputs';

::v-deep { 
  .v-input__slot::before {
    border-color: $wisteria !important;
  }
  .v-input__slot::after {
    transform: scaleX(0) !important;
  }
  .v-select .v-select__selection--comma {
  color: $martinique !important;
  }
}
</style>
