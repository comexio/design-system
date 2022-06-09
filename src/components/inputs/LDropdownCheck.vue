<template>
  <div class="l-dropdown-check">
    <v-menu
      :close-on-content-click="false"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          append-icon="mdi-arrow-down"
          color="primary"
          outlined
          class="l-dropdown-check--activator"
          v-on="on"
        >
          {{ headingText }}
        </v-btn>
      </template>
      <v-list class="l-dropdown-list">
        <v-list-item>
          <l-labeled-input
            v-model="searchText"
            :placeholder="placeholder"
            hide-details
            class="l-search-text"
          />
        </v-list-item>
        <v-list-item>
          <v-checkbox
            v-model="selectAll"
            hide-details
            label="All"
          />
        </v-list-item>
        <v-list-item
          v-for="item in filteredItems"
          :key="item.value"
        >
          <v-checkbox
            v-model="innerModel"
            hide-details
            :value="item.value"
            :label="item.text"
          />
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import LLabeledInput from './LLabeledInput'

export default {
    components: {
        LLabeledInput
    },
    props: {
        value: {
            type: Array,
            default: () => []
        },
        headingText: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            innerModel: [],
            searchText: ''
        }
    },
    computed: {
        selectAll: {
            set (val) {
                this.innerModel = val ? this.items.map(item => item.value) : []
            },
            get () {
                const { items, innerModel } = this
                return items.every(({ value }) => innerModel.some(modelItem => value === modelItem))
            }
        },
        filteredItems () {
            return this.items.filter(({ text }) => {
                return text.toUpperCase().includes(this.searchText.toUpperCase())
            })
        }
    },
    watch: {
        value (val) {
            this.innerModel = val
        },
        innerModel (val) {
            this.$emit('input', val)
        }
    },
    mounted () {
      console.warn('LDropdownCheck is deprecated and will be removed in the future')
    },
}
</script>

<style lang="scss" scoped>
.l-dropdown-check {
    &--activator {
        min-height: 20px;
        padding: 5px;
        border-radius: 5px;
    }
}
</style>
