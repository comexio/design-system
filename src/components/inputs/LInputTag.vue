<template>
  <v-combobox
    v-model="inputValue"
    v-bind="$attrs"
    :hide-details="hideDetails"
    multiple
    chips
    deletable-chips
    outlined
    dense
    small-chips
    class="LInputTag"
    :class="classInputTag"
    v-on="$listeners"
  >
    <template
      v-if="expand"
      v-slot:append-outer
    >
      <v-btn
        text
        tile
        color="primary"
        @click="clickAppendOuter"
        v-on="$attrs.iconListeners"
      >
        e+
      </v-btn>
    </template>
  </v-combobox>
</template>

<script>
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
    expand: Boolean
  },
  computed: {
    classInputTag () {
      return {
        'hide-details': !this.hideDetails
      }
    },
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
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
.LInputTag.hide-details {
  ::v-deep {
    @extend .commonCombobox;
  }
}
.LInputTag {
  ::v-deep {
    @extend .commonInput;
  }
}
</style>
