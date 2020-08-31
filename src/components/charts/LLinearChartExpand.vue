<template>
  <div
    class="expandedList d-flex flex-column flex-grow-1 pa-4"
  >
    <div class="expandedList__header d-flex justify-space-between pb-3">
      <span
        class="expandedList__header__action"
        @click="expandList"
      >
        {{ $t('searchx.toRecall') }}
      </span>
      <!-- <div>
        <v-text-field
          v-model="input"
          outlined
          hide-details
          height="20px"
          min-height="20px"
          placeholder="Pesquisar"
          @keydown.enter="search"
        />
      </div> -->
    </div>
    <v-simple-table
      ref="expandedList__table"
      dense
      height="152px"
      class="expandedList__table"
    >
      <template
        v-slot:default
      >
        <thead>
          <tr>
            <th class="expandedList__table__title text-left">
              {{ $t('searchx.cardExpanded.position') }}:
            </th>
            <th class="expandedList__table__title text-left">
              {{ $t('searchx.cardExpanded.companies') }}:
            </th>
            <th class="expandedList__table__title text-left">
              {{ $t('searchx.cardExpanded.value') }}:
            </th>
            <th class="expandedList__table__title text-left">
              {{ $t('searchx.cardExpanded.quantity') }}:
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data"
            :key="index"
            class="expandedList__table__line"
          >
            <td>{{ index + 5 }}</td>
            <td>{{ item.label }}</td>
            <td class="expandedList__table__line__value">
              {{ item.value }} USD
            </td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- <div
      v-if="loadingExpand"
      class="d-flex justify-center expandedList__loading pt-2"
    >
      <loading-items
        size="20px"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      input: null,
      bottom: false
    }
  },
  watch: {
    'bottom' (bottom) {
      if (bottom) {
        console.log('search')
        this.$emit('search')
      }
    }
  },
  mounted () {
    const referenceTable = this.$refs.expandedList__table
    if (!referenceTable) {
      return
    }

    const elementTable = referenceTable.$el.querySelector('.v-data-table__wrapper')

    elementTable.addEventListener('scroll', () => {
      this.bottom = this.achievedScrollPoint(elementTable)
    })
  },
  methods: {
    expandList () {
      this.$emit('expand')
    },
    search () {
      const { input } = this
      if (!input) {
        return
      }

      this.$emit('search', this.input)
    },
    achievedScrollPoint (ref) {
      const scrollTop = ref.scrollTop
      const visible = ref.clientHeight
      const pageHeight = ref.scrollHeight
      const bottomOfPage = scrollTop + visible + 25 >= pageHeight
      return bottomOfPage
    }
  }
}
</script>

<style lang="scss" scoped>
.expandedList {
  background: $magnolia;
  flex-basis: 50%;
  flex-grow: 1;
  .expandedList__header {
    ::v-deep {
      .v-input {
        font-size: 0.8rem;
      }
      .v-input__slot {
        min-height: 20px;
      }
    }
  }

  .expandedList__header__action {
    @extend .globalLink;
  }

  .expandedList__table__title {
    font-size: 0.8rem;
    font-weight: normal;
    border-bottom: none !important;
  }

  .expandedList__table__line {
    td {
      font-size: 0.8rem;
      color: $martinique;
      border-bottom: none !important;
    }
    &:nth-child(odd) {
      background: $magnolia;
    }
  }

  .expandedList__table__line--active {
    box-shadow: inset 3px 0px 0px $wisteria;
    td {
      color: $purpleHaze;
      font-weight: bold;
    }
  }

  .expandedList__table__line__value {
    white-space: nowrap;
  }

  .expandedList__loading {
    height: 0px;
  }
}
</style>
