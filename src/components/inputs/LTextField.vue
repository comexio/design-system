<template>
  <div class="LTextField">
    <v-text-field
      :height="inputHeight"
      v-bind="$attrs"
      :append-icon="appendIcon"
      class="LTextField__input"
      :class="inputClass"
      :aria-label="$attrs.label"
      :style="inputStyle"
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
    small: Boolean,
    appendIcon: {
      type: String,
      default: null
    }
  },
  computed: {
    inputClass () {
      const { large, small, appendIcon, $attrs } = this

      return {
        'LTextField--disabled': $attrs.disabled,
        'LTextField--large': large,
        'LTextField--small': small,
        'LTextField--appendColor': $attrs.color && appendIcon
      }
    },
    inputHeight () {
      const { large, small, $attrs } = this

      return getInputHeight({large, small, custom: $attrs.height})
    },
    inputStyle () {
      const { color } = this.$attrs

      return {
        '--color': color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/inputs';
</style>
