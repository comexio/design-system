<template>
  <div class="LCombobox">
    <v-combobox
      :height="inputHeight"
      v-bind="$attrs"
      class="LCombobox__input"
      :class="inputClass"
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
    </v-combobox>
  </div>
</template>

<script>
import { getInputHeight } from '~/utils/size.util'

export default {
  name: 'LCombobox',
  props: {
    dropdownIcon: Boolean,
    large: Boolean,
    small: Boolean
  },
  computed: {
    inputClass () {
      const { dropdownIcon, large, small, $attrs } = this

      return {
        'LCombobox--dropdownIcon': dropdownIcon,
        'LCombobox--disabled': $attrs.disabled,
        'LCombobox--large': large,
        'LCombobox--small': small
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

// TODO: Validar se no futuro isso vai continuar sendo utilizado, se será renomeado ou movido
.LCombobox ::v-deep { 
  @extend .commonCombobox
}
</style>
