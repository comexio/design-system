<template>
  <div class="LTextField">
    <v-text-field
      :height="inputHeight"
      v-bind="$attrs"
      class="LTextField__input"
      :class="inputClass"
      :background-color="inputBackgroundColor"
      v-on="$listeners"
    >
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
    </v-text-field>
  </div>
</template>

<script>
import { getInputHeight } from '~/utils/size.util'

export default {
  name: 'LTextField',
  inheritAttrs: false,
  props: {
    large: Boolean,
    small: Boolean
  },
  computed: {
    inputBackgroundColor () {
      if (this.$attrs.disabled) {
        return '#F1EFEF'
      }

      return ''
    },
    inputClass () {
      const { large, small } = this

      return {
        'LTextField--large': large,
        'LTextField--small': small
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
::v-deep {
  .v-input__control {
    min-height: 25px !important;
  }
  .v-input__slot {
    min-height: 25px !important;
  }
  .v-text-field--outlined {
    border-radius: 5px;
    
    fieldset {
      border-width: 1px;
    }
  }
  .v-label {
    top: 8px !important;
    color: $doveGray !important;
  }
  .v-icon {
    height: 20px;
  }
  .LTextField--large {
    .v-label {
      top: 10px !important;
    }
    .v-icon {
      height: 24px;
    }
  }
  .LTextField--small {
    .v-label {
      top: 2px !important;
    }
    .v-label--active {
      top: 8px !important;
    }
    .v-icon {
      height: 10px;
    }
  }
}
</style>
