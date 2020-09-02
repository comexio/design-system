<template>
  <div
    class="LSimpleTable d-flex flex-column flex-grow-1 pa-4"
  >
    <div class="LSimpleTable__header d-flex justify-space-between pb-3">
      <span
        class="LSimpleTable__header__action"
        @click="expandList"
      >
        Recolher
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
      ref="LSimpleTable__table"
      dense
      height="152px"
      class="LSimpleTable__table"
    >
      <template
        v-slot:default
      >
        <thead>
          <tr>
            <th
              v-for="(item, index) in headers"
              :key="index"
              class="LSimpleTable__table__title text-left"
            >
              {{ item.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data"
            :key="index"
            class="LSimpleTable__table__line"
          >
            <td
              v-for="(value, key) in Object.values(item)"
              :key="key"
            >
              {{ value }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div
      v-if="loading"
      class="d-flex justify-center LSimpleTable__loading pt-2"
    >
      <l-loading
        size="20px"
      />
    </div>
  </div>
</template>

<script>
import LLoading from '~/src/components/loadings/LLoading'

export default {
  name: 'LSimpleTable',
  components: {
    LLoading
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    headers: {
      type: Array,
      default: () => ([])
    },
    loading: Boolean
  },
  data () {
    return {
      input: null,
      bottom: false,
      fakeHeaders: [{ text: 'Protein (g)', value: 'protein' }, { text: 'Iron (%)', value: 'iron' }],
      fakeData: [{
          protein: 4.0,
          iron: '1%',
        },
        {
          protein: 4.3,
          iron: '1%',
        }]
    }
  },
  watch: {
    bottom (bottom) {
      if (bottom) {
        this.$emit('search')
      }
    }
  },
  mounted () {
    const referenceTable = this.$refs.LSimpleTable__table
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
.LSimpleTable {
  background: $magnolia;
  flex-basis: 50%;
  flex-grow: 1;
  height: 100%;
  .LSimpleTable__header {
    ::v-deep {
      .v-input {
        font-size: 0.8rem;
      }
      .v-input__slot {
        min-height: 20px;
      }
    }
  }

  .LSimpleTable__header__action {
    @extend .globalLink;
  }

  .LSimpleTable__table__title {
    font-size: 0.8rem;
    font-weight: normal;
    border-bottom: none !important;
  }

  .LSimpleTable__table__line {
    td {
      font-size: 0.8rem;
      color: $martinique;
      border-bottom: none !important;
    }
    &:nth-child(odd) {
      background: $magnolia;
    }
  }

  .LSimpleTable__table__line--active {
    box-shadow: inset 3px 0px 0px $wisteria;
    td {
      color: $purpleHaze;
      font-weight: bold;
    }
  }

  .LSimpleTable__table__line__value {
    white-space: nowrap;
  }

  .LSimpleTable__loading {
    height: 0px;
  }

  ::v-deep .v-data-table__wrapper {
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(black, 0.1);
    }
  }
}
</style>
