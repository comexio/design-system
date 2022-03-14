<template>
  <div class="LDropdownCheckbox">
    <v-menu
      v-model="enableMenu"
      offset-y
      right
      :close-on-content-click="false"
      content-class="LDropdownCheckbox__menu"
    >
      <template v-slot:activator="{ on }">
        <l-button-new
          :ripple="false"
          :height="32"
          :uppercase="false"
          text
          class="LButtonSelect pb-2"
          v-on="on"
        >
          {{ placeholder || $t('ayla.selectColumns') }}
          <v-icon>
            mdi-chevron-down
          </v-icon>
        </l-button-new>
      </template>
      <l-checkbox-list
        v-model="inputValue"
        :items="items"
        :selected-items="selectedItems"
        :translation="{ input: checkboxListPlaceholder, select: checkboxListSelectAllText }"
        @updatedItems="updatedItems"
      />
      <div v-if="$scopedSlots.actions">
        <v-divider />
        <div class="LDropdownCheckbox__menu__actions">
          <slot name="actions" />
        </div>
      </div>
    </v-menu>
  </div>
</template>

<script>
import LCheckboxList from '~/src/components/inputs/LCheckboxList'

export default {
  name: 'LDropdownCheckbox',
  components: {
    LCheckboxList
  },
  props: {
    checkboxListPlaceholder: {
      type: String,
      default: ''
    },
    checkboxListSelectAllText: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => ([])
    },
    placeholder: {
      type: String,
      default: ''
    },
    selectedItems: {
      type: Array,
      default: () => ([])
    },
    value: {
      type: [String, Object, Number, Array, Boolean],
      default: null
    },
  },
  data () {
    return {
      enableMenu: false
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
}

.LDropdownCheckbox__menu {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.28);

  &__actions {
    background: white;
  }
}

.LButtonSelect {
  color: $martinique;
  cursor: pointer;
  padding: 0px !important;
  font-size: 1rem !important;
  font-weight: normal !important;
  border-bottom: 1px solid $wisteria;

  ::v-deep {
    .v-icon {
      color: $wisteria;
      top: -1px;
    }

    .v-btn__content {
      min-height: 32px;
    }
  }

  &:hover::before, &:focus::before  {
    opacity: 0;
  }
}
::v-deep {
  .LButton {
    border-radius: 0px !important;
  }

  .v-btn {
    border-radius: 0px !important;
  }
}
</style>
