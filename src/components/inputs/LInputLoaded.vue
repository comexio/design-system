<template>
  <div>
    <v-combobox
      v-model="selectedOptions"
      v-bind="$attrs"
      :items="items"
      :menu-props="{ offsetY: true, maxHeight: 200, closeOnContentClick: true }"
      :loading="loading"
      :disabled="loading && !searchOnInput"
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
          {{ searchOnInput ? 'mdi-magnify' : 'mdi-chevron-down' }}
        </v-icon>
      </template>
      <template
        v-if="searchInput && searchInput.length >= searchMinCharacteres && !loading"
        #no-data
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('ayla.noResults') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-combobox>
    <template
      v-if="hasNotEnoughCharacteres"
    >
      <div class="LInputLoaded__search--information">
        {{ $t('ayla.minimumCharacteres', {quantity: searchMinCharacteres}) }}
      </div>
    </template>
  </div>
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
    searchOnInput: {
      type: Boolean,
      default: false
    },
    searchMinCharacteres: {
      type: Number,
      default: 3
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
      loading: false,
      searchInput: null
    }
  },
  computed: {
    hasNotEnoughCharacteres () {
      return this.searchOnInput && !this.items.length
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
    },
    searchInput (input) {
      if (this.searchOnInput && input && input.length >= this.searchMinCharacteres) {
        console.log('Design ', input)
        this.loading = true
        this.getItems(input)
      }
    }
  },
  mounted () {
    if (!this.searchOnInput) {
      this.loading = true
      this.getItems()
    }
  },
  methods: {
    getItems (value) {
      const { field } = this
      this.searchOnInput ? this.$emit('getItems', { field,value }) : this.$emit('getItems', { field }) 
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
.LInputLoaded__search--information{
  text-align: center;
  font-size: 12px;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 5px 5px 11px rgb(194, 194, 194);
  height: 25px;
}
::v-deep .v-text-field {
  padding-top: 0;
}
::v-deep .v-text-field.v-text-field--solo.v-input--dense > .v-input__control{
  min-height: 0;
}
</style>
