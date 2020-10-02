<template>
  <v-combobox
    v-model="inputValue"
    v-bind="$attrs"
    multiple
    chips
    deletable-chips
    outlined
    dense
    small-chips
    hide-details
    class="LInputTag"
    v-on="$listeners"
  >
    <slot />
    <!-- <template
      v-if="bound.expand"
      v-slot:append-outer
    >
      <v-btn
        text
        tile
        color="primary"
        v-on="iconListeners"
      >
        e+
      </v-btn>
    </template> -->
  </v-combobox>
</template>

<script>
export default {
  name: 'LInputTag',
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LInputTag {
  ::v-deep {
    @extend .commonInput;
    @extend .commonCombobox;
  }
}
</style>
