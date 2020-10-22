<template>
  <div class="LDropdownCheckbox">
    <v-menu
      offset-y
      right
      :close-on-content-click="false"
      content-class="LDropdownCheckbox__menu"
    >
      <template v-slot:activator="{ on }">
        <l-button-select
          v-on="on"
        >
          Selecionar Colunas
          <v-icon>
            mdi-chevron-down
          </v-icon>
        </l-button-select>
      </template>
      <l-checkbox-list
        :items="items"
        :selected-items="selectedItems"
        @updatedItems="updatedItems"
      />
    </v-menu>
  </div>
</template>

<script>
import LButtonSelect from '~/src/components/buttons/LButtonSelect'
import LCheckboxList from '~/src/components/inputs/LCheckboxList'

export default {
  name: 'LDropdownCheckbox',
  components: {
    LButtonSelect,
    LCheckboxList
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    selectedItems: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    updatedItems (items) {
      this.$emit('updatedItems', items)
    }
  }
}
</script>

<style lang="scss" scoped>
.LDropdownCheckbox {
  padding: 0px 16px;
  .LButtonSelect {
    padding: 0px;
  }
}

.LDropdownCheckbox__menu {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.28);
}
</style>
