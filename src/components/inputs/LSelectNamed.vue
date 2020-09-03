<template>
  <v-select
    v-model="inputValue"
    v-bind="$attrs"
    :items="items"
    class="LSelectNamed__select"
    item-value="value"
    item-text="text"
    :menu-props="{ bottom: true, offsetY: true }"
    auto
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'LSelectNamed',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    items: {
      type: Array,
      default: () => []
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
.LSelectNamed__select {
  font-size: 13px;
  height: 30px !important;
  max-width: 220px !important;
  padding: 0px !important;
  margin-top: -4px !important;

  ::v-deep {
    .v-select__selections::before {
      content: "Mostrando por:\00a0";
      color: $martinique;
    }

    .v-input__icon .v-icon::before {
      content: "\F0140";
      color: $wisteria;
    }

    .v-input__slot::before {
      border-color: $wisteria !important;
    }

    .v-select__selection {
      color: $martinique;
    }
  }
}
</style>
