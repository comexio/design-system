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
  props: {
    large: Boolean,
    small: Boolean
  },
  computed: {
    inputClass () {
      const { large, small, $attrs } = this

      return {
        'LTextField--disabled': $attrs.disabled,
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
@import '../../assets/scss/inputs';
</style>
