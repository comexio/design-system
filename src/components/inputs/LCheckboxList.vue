<template>
  <div class="LCheckboxList">
    <div class="LCheckboxList__header">
      <l-input-solo
        v-model="inputSearch"
        :placeholder="translation.input || $t('ayla.search')"
        append-icon="mdi-magnify"
        height="26px"
        flat
        class="LCheckboxList__input"
      />
    </div>
    <v-divider />
    <div class="LCheckboxList__group">
      <v-checkbox
        v-model="selectAll"
        :label="translation.select || $t('ayla.select')"
        :ripple="false"
        hide-details
        class="LCheckboxList__group__item LCheckboxList__group__item--selectAll"
        @click="toggleSelectAll"
      />
    </div>
    <v-divider />
    <div class="LCheckboxList__group">
      <div
        class="LCheckboxList__group__list"
      >
        <v-checkbox
          v-for="(item, key) in filteredOptions"
          :key="key"
          v-model="selected"
          :label="item.label"
          :value="item.value"
          :ripple="false"
          hide-details
          multiple
          class="LCheckboxList__group__item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import uniq from 'ramda/src/uniq'
import equals from 'ramda/src/equals'
import LInputSolo from './LInputSolo'

export default {
  name: 'LCheckboxList',
  components: {
    LInputSolo
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    selectedItems: {
      type: Array,
      default: () => ([])
    },
    translation: {
      type: Object,
      default: () => ({
        input: null,
        select: null
      })
    }
  },
  data () {
    return {
      inputSearch: null,
      selectAll: false,
      selected: [],
    }
  },
  computed: {
    filteredOptions () {
      return this.items.filter(item => {
        if (!this.inputSearch) {
          return item
        }

        const label = item.label.toUpperCase()
        const input = this.inputSearch.toUpperCase()

        if (label.includes(input)) {
          return item
        }
      })
    }
  },
  watch: {
    selected (val, oldval) {
      this.checkAllItemsSelected()
      if (this.inputSearch) {
        const selected = uniq([...val, ...oldval])
        if (!equals(val, oldval)) {
          this.selected = selected
        }
      }

      if (!equals(val, oldval)) {
          this.$emit('input', this.selected)
      }

      this.$emit('updatedItems', this.selected)
    },
    inputSearch () {
      this.selected = [...this.selected]
    }
  },
  mounted () {
    this.selected = this.selectedItems
  },
  methods: {
    selectAllItems () {
      const names = this.items.map(item => {
        return item.value
      })

      this.selected = names
    },
    deselectAll () {
      this.selected = []
    },
    toggleSelectAll () {
      if (this.selectAll) {
        this.selectAllItems()
        return
      }

      this.deselectAll()
    },
    checkAllItemsSelected () {
      const { selected, items } = this
      this.selectAll = selected.length !== items.length ? false : true
    }
  }
}
</script>

<style lang="scss" scoped>
.LCheckboxList {
  background: white;
  border-radius: 3px;
}

.LCheckboxList__header {
  padding: 8px;
}

.LCheckboxList__input {
  font-size: 0.9rem;
  border: 1px solid $gallery;
  border-radius: 3px;
  ::v-deep .v-input__control {
    min-height: 26px !important;
  }
}

.LCheckboxList__group__list {
  max-height: 155px;
  overflow-x: auto;
  padding: 4px 0px;
  @extend .globalScroller;
}

.LCheckboxList__group__item {
  margin-top: 0px;
  &.v-input--is-label-active {
    ::v-deep .v-input--selection-controls__input .v-icon {
      color: $wisteria !important;
    }
  }
  ::v-deep {
    .v-input--selection-controls__input .v-icon {
      font-size: 18px;
      color: $magnoliaDark;
    }

    .v-label {
      color: $martinique;
      font-size: 1rem;
    }
  }
}
</style>
