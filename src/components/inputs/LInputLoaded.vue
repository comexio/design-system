<template>
  <v-combobox
    v-model="selectedOptions"
    v-bind="$attrs"
    :items="items"
    :menu-props="{ offsetY: true, maxHeight: 200, closeOnContentClick: true }"
    :loading="loading"
    :placeholder="placeholder"
    solo
    dense
    hide-details
    hide-selected
    class="rm-radius-left rm-radius-right main-expo__select main-expo__autocomplete"
  >
    <template #append>
      <v-icon color="wisteria">
        mdi-chevron-down
      </v-icon>
    </template>
  </v-combobox>
</template>

<script>

export default {
  name: 'LInputLoaded',
  props: {
    value: {
      type: String,
      default: ''
    },
    field: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      selectedOptions: null,
      loading: false,
    }
  },
  watch: {
    field () {
      this.getItems()
      this.selectedOptions = null
    },
    value: {
      immediate: true,
      handler (val) {
        this.selectedOptions = val
      }
    },
    selectedOptions (selectedOptions) {
      this.$emit('input', selectedOptions)
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    getItems () {
      const { field } = this
      this.$emit('getItems', { field })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-text-field {
  padding-top: 0;
}
</style>
