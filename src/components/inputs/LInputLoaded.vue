<template>
  <v-combobox
    v-model="selectedOptions"
    v-bind="$attrs"
    :items="items"
    :menu-props="{ offsetY: true, maxHeight: 200, closeOnContentClick: true }"
    :loading="loading"
    :placeholder="placeholder"
    attach
    solo
    dense
    hide-details
    hide-selected
    class="rm-radius-left rm-radius-right LInputLoaded main-expo__select main-expo__autocomplete"
    :search-input.sync="searchInput"
    @change="changeFilter"
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
      type: [String, Array],
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
      default: () => ([])
    },
    removeTypedFilters: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      selectedOptions: null,
      loading: true,
      searchInput: null
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
    items() {
      this.loading = false
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
    },
    changeFilter (filters) {
      if (this.removeTypedFilters && Array.isArray(filters)) {
        this.filterItems(filters)
      }
      this.searchInput = null
    },
    filterItems (filters) {
      const filteredOptions = filters.filter(item => {
        if (item && item.text) {
          return item
        }
      })

      this.selectedOptions = filteredOptions
    }
  }
}
</script>

<style lang="scss" scoped>
.LInputLoaded {
  ::v-deep {
    @extend .commonInput;
    @extend .commonCombobox;
  }
}
::v-deep .v-text-field {
  padding-top: 0;
}
</style>
