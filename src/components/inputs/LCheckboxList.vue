<template>
  <div class="LCheckboxList">
    <div class="LCheckboxList__header">
      <l-input-solo
        v-model="inputSearch"
        :placeholder="translation.input"
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
        :label="translation.select"
        :ripple="false"
        hide-details
        class="LCheckboxList__group__item LCheckboxList__group__item--selectAll"
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
    translation: {
      type: Object,
      default: () => ({
        input: 'Buscar',
        select: 'Selecionar'
      })
    }
  },
  data () {
    return {
      inputSearch: null,
      selectAll: false,
      selected: []
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
    selectAll (val) {
      if (val) {
        this.selectAllItems()
      }
    },
    selected () {
      this.checkAllItemsSelected()
      this.$emit('updatedItems', this.selected)
    }
  },
  methods: {
    selectAllItems () {
      const names = this.items.map(item => {
        return item.value
      })

      this.selected = names
    },
    checkAllItemsSelected () {
      if (this.selected.length !== this.items.length) {
        this.selectAll = false
      }
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