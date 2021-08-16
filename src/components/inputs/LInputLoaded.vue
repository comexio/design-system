<template>
  <div>
    <v-combobox
      v-model="selectedOptions"
      v-bind="$attrs"
      :items="items"
      :menu-props="{ offsetY: true, maxHeight: 200, closeOnContentClick: searchOnInput }"
      :loading="loading"
      :disabled="isDisabled"
      :placeholder="placeholder"
      :attach="!outlined"
      :solo="!outlined"
      :background-color="inputBackgroundColor"
      flat
      dense
      :hide-details="hideDetails"
      hide-selected
      :outlined="outlined"
      class="LInputLoaded"
      :height="inputHeight"
      :class="classInputLoaded"
      :search-input.sync="searchInput"
      @change="handleInput"
      @focus="isInputSelected = true"
      @blur="isInputSelected = false"
      v-on="$listeners"
    >
      <template #append>
        <v-icon
          v-if="icon"
          color="#9F6CBB"
        >
          {{ searchOnInput ? '' : 'mdi-chevron-down' }}
        </v-icon>
        <v-icon v-else />
      </template>
      <template
        v-if="hasEnoughCharacteres && !loading"
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
      v-if="hasNoItems && isInputSelected && showInformation"
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
import { getInputHeight } from '~/utils/size.util'

export default {
  name: 'LInputLoaded',
  props: {
    field: {
      type: String,
      default: ''
    },
    hideDetails: {
      type: Boolean,
      default: true
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
    showInformation: {
      type: Boolean,
      default: true
    },
    searchMinCharacteres: {
      type: Number,
      default: 3
    },
    value: {
      type: [String, Array, Object],
      default: ''
    },
    disabled: Boolean,
    loading: Boolean,
    searchOnInput: Boolean,
    outlined: Boolean,
    large: Boolean,
    small: Boolean
  },
  data () {
    return {
      isInputSelected: false,
      selectedOptions: null,
      searchInput: null
    }
  },
  computed: {
    isDisabled () {
      return (this.loading && !this.searchOnInput) || this.disabled
    },
    classInputLoaded () {
      return {
        'LInputLoaded--withoutBorder': !this.outlined,
        'LInputLoaded--large': this.large,
        'LInputLoaded--small': this.small
      }
    },
    hasEnoughCharacteres () {
      const {searchInput, searchMinCharacteres} = this
      return searchInput && searchInput.length >= searchMinCharacteres
    },
    hasNoItems () {
      return this.searchOnInput && !this.items.length
    },
    inputBackgroundColor () {
      if (this.isDisabled) {
        return '#F8F8F8'
      }

      return ''
    },
    inputHeight () {
      const { large, small, $attrs } = this

      return getInputHeight({large, small, custom: $attrs.height})
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        if (!equals(this.selectedOptions, val)) {
          this.selectedOptions = val
        }
      }
    },
    selectedOptions (selectedOptions) {
      const options = this.handleOptions(selectedOptions)
      this.$emit('input', options)
    },
    searchInput (input) {
      if (this.searchOnInput && this.hasEnoughCharacteres) {
        this.getItems(input)
      }
    }
  },
  mounted () {
    if (!this.searchOnInput) {
      this.getItems()
    }
  },
  methods: {
    getItems (value) {
      const { searchOnInput, field } = this
      searchOnInput ? this.$emit('getItems', { field,value }) : this.$emit('getItems', { field })
    },
    handleInput (values) {
      if(!this.searchOnInput && is(Array, values)) this.handleSelectedOptions(values)
      this.searchInput = null
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
      }

      if (is(Object, options)) {
        return options
      }
    },
    handleSelectedOptions (options) {
      const addedItems = options.filter(i => i && i.text && i.value)
      this.selectedOptions = addedItems
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
.LInputLoaded__search--information {
  text-align: center;
  font-size: 12px;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 5px 5px 11px rgb(194, 194, 194);
  height: 25px;
}
::v-deep {
  .v-text-field {
    padding-top: 0;
  }
  .v-text-field--outlined, .v-text-field--solo {
    border-radius: 5px;

    fieldset {
      border-width: 1px;
    }
  }
  .LInputLoaded--withoutBorder.v-text-field--outlined, .LInputLoaded--withoutBorder.v-text-field--solo {
    border-radius: unset !important;

    fieldset {
      border-width: unset !important;
    }
  }
  .v-input__control {
    min-height: 25px !important;
  }
  .v-input__slot {
    min-height: 25px !important;
  }
  .v-select__slot {
    padding: 0 12px;
  }
  .v-icon {
    height: 20px;
  }
  .LInputLoaded--large {
    .v-icon {
      height: 26px;
    }
  }
  .LInputLoaded--small {
    .v-icon {
      height: 8px;
    }
  }
}
</style>
