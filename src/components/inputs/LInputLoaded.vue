<template>
  <div>
    <v-combobox
      v-model="selectedOptions"
      v-bind="$attrs"
      :items="items"
      :menu-props="{ offsetY: true, maxHeight: 200, closeOnContentClick: searchOnInput }"
      :loading="loading"
      :disabled="loading && !searchOnInput"
      :placeholder="placeholder"
      attach
      solo
      dense
      hide-details
      hide-selected
      class="rm-radius-left rm-radius-right LInputLoaded"
      :search-input.sync="searchInput"
      @change="changeFilter"
    >
      <template #append>
        <v-icon
          v-if="icon"
          color="wisteria"
        >
          {{ searchOnInput ? 'mdi-magnify' : 'mdi-chevron-down' }}
        </v-icon>
        <v-icon v-else />
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


import is from 'ramda/src/is'
import equals from 'ramda/src/equals'

export default {
  name: 'LInputLoaded',
  props: {
    field: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: () => ([])
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
    value: {
      type: [String, Array, Object],
      default: ''
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
        if (!equals(this.selectedOptions, val)) {
          this.selectedOptions = val
        }      
      }
    },
    items() {
      this.loading = false
    },
    selectedOptions (selectedOptions) {
      const options = this.handleOptions(selectedOptions)
      this.$emit('input', options)
    },
    searchInput (input) {
      if (this.searchOnInput && input && input.length >= this.searchMinCharacteres) {
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
      if (!this.searchOnInput && Array.isArray(filters)) {
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
    },
    handleOptions (options) {
      let newOptions
      
      if (typeof options === 'string') {
        newOptions = { text: options, value: options }
        if (!equals(newOptions, options)) {
         return newOptions
        }
        return
      }

      if (is(Array, options)) {
        newOptions = options.map((item) => {
          return is(Object, item) ? item : { text: item, value: item }
        })
      return newOptions
      } else if (is(Object, options)) {
        return options
      }
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
</style>
