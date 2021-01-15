<template>
  <v-data-table
    :key="anIncreasingNumber"
    v-sortable-table="{ onEnd: sortTheHeadersAndUpdateTheKey }"
    dense
    :headers="headers"
    :items="items"
    :options.sync="options"
    :items-per-page="itemsPerPage"
    v-bind="$attrs"
    fixed-header
    hide-default-footer
    class="elevation-1 LTable"
  >
    <template
      v-if="truncateItems"
      v-slot:body
    >
      <tbody>
        <tr
          v-for="(item, itemkey) in filteredItem"
          :key="itemkey"
        >
          <td
            v-for="[key, value] of item"
            :key="key"
            class="text-start"
          >
            <div v-if="isDownloadUrl(key, value)">
              <a
                v-if="value.url"
                :href="value.url"
                target="_blank"
                class="LTable__download"
                :class="value.class"
              >
                {{ value.text }}
                <v-icon
                  size="14px"
                >
                  {{ value.icon }}
                </v-icon>
              </a>
              <span
                v-else
                :class="value.class"
              >
                {{ value.text }}
              </span>
            </div>
            <v-tooltip
              v-else-if="showTooltip(value)"
              bottom
              max-width="500px"
              content-class="customTooltip pa-0"
            >
              <template v-slot:activator="{ on }">
                <span
                  v-on="on"
                >
                  {{ truncateValue(value) }}
                </span>
              </template>
              <div class="customTooltip__info">
                {{ value }}
              </div>
            </v-tooltip>
            <template v-else>
              {{ value }}
            </template>
            <slot
              v-if="keysThatHasDetails.includes(key)"
              name="sectionAfterValue"
              :value="value"
            />
          </td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script>
import { GENERAL } from '~/enum/table.enum'
import Sortable from "sortablejs"
import { watchClass } from '~/utils/watchClass.util'

export default {
  name: 'LTable',
  props: {
    headers: {
      type: Array,
      default: () => ([])
    },
    items: {
      type: Array,
      default: () => ([])
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    truncateItems: Boolean,
    truncateSize: {
      type: Number,
      default: 80
    },
    triggerResetOptions: Boolean,
    keysThatHasDetails: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      anIncreasingNumber: -1,
      options: {},
      customScroll: {
        bottom: false
      }
    }
  },
  computed: {
    filteredItem () {
      const headersKeys = this.headers.map(header => header.value)

      return this.items.map(item => {
        const objectMap = new Map()
        headersKeys.forEach(key => {
          if (headersKeys.includes(key)) {
            objectMap.set(key, item[key])
          }
        })

        return objectMap
      })
    }
  },
  watch: {
    options: {
      deep: true,
      handler () {
        const { multiSort, sortBy, sortDesc } = this.options
        if (!multiSort) {
          const sort = sortDesc.length ? sortDesc[0] : null
          const sortColumn = sortBy.length ? sortBy[0] : null
          const sortOrder = (sort) => {
            if (sort === true) return 'DESC'
            if (sort === false) return 'ASC'
            return null
          }

          this.$emit('ordination', { sortOrder: sortOrder(sort), sortColumn })
        }
      }
    },
    triggerResetOptions: {
      deep: true,
      handler (val) {
        if(val === true) {
          this.resetOptions()
        }
      }
    }
  },
  mounted () {
    const table = document.querySelector('.v-data-table__wrapper')
    if (table) {
      table.addEventListener('scroll', () => {
        this.customScroll.bottom = this.achievedScrollPoint(table)
        this.$emit('updateScroll', this.customScroll)
      })
    }
  },
  methods: {
    achievedScrollPoint (table) {
      const scrollResult = table.scrollHeight - table.scrollTop
      const height = table.clientHeight
      return scrollResult === height
    },
    showTooltip (value) {
      return this.truncateItems && value && value.length > this.truncateSize
    },
    truncateValue (value) {
      return value.slice(0, this.truncateSize) + '...'
    },
    isDownloadUrl (key, value) {
      if (value && value.url) {
        return true
      }

      return key === GENERAL.DOWNLOAD_URL
    },
    resetOptions () {
      this.options.sortBy = []
      this.options.sortDesc = []
    },
    saveColumnOrder(headers){
      const headersValue = headers.map(header => header.value)
      this.$emit('userColumns', headersValue )
      this.$emit('ordination', { sortOrder: '', sortColumn: '' })
    },
    sortTheHeadersAndUpdateTheKey(evt) {
      const headersTmp = this.headers;
      const oldIndex = evt.oldIndex;
      const newIndex = evt.newIndex;
      if (newIndex >= headersTmp.length) {
        let k = newIndex - headersTmp.length + 1;
        while (k--) {
          headersTmp.push(undefined);
        }
      }
      headersTmp.splice(newIndex, 0, headersTmp.splice(oldIndex, 1)[0]);
      this.table = headersTmp;
      this.saveColumnOrder(headersTmp)
      this.anIncreasingNumber += 1;
    }
  },
   directives: {
    'sortable-table': {
      inserted: (el, binding) => {
        el.querySelectorAll('th').forEach((draggableEl) => {
          // Need a class watcher because sorting v-data-table rows asc/desc removes the sortHandle class
          watchClass(draggableEl, 'sortHandle');
          draggableEl.classList.add('sortHandle');
        });
        Sortable.create(el.querySelector('tr'), binding.value ? { ...binding.value, handle: '.sortHandle' } : {});
      },
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.v-data-table {
  width: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.04) !important;

  ::v-deep .v-data-table-header {
    .sortable {
      white-space: nowrap;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .sortable span {
      font-size: 0.9rem;
      text-transform: uppercase;
      color: $silver;
    }

    .sortable:not(.active) {
      .v-data-table-header__icon {
        color: $moonRaker;
        &::before {
          content: "\F04E2";
        }
      }
    }

    .sortable.active {
      .v-data-table-header__icon {
        color: $wisteria !important;
        font-size: 14px !important;
        &::before {
          content: "\F0737";
        }
      }
    }

    .v-data-table-header__icon {
      width: 18px;
      height: 18px;
      opacity: 1;
    }

  }

  ::v-deep .v-data-table__wrapper {
    tbody {
      tr td:not(.v-data-table__mobile-row) {
        border-bottom: none;
      }

      tr:nth-child(even) {
        background: $whisper;
      }

      tr:not(:last-child) > td:not(.v-data-table__mobile-row) {
        border-bottom: thin solid $gallery !important;
      }

      .text-start {
        white-space: nowrap;
        font-size: 0.9rem;
        color: $martinique;
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
  }

  ::v-deep .v-data-table__wrapper {
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 0 4px #dbdbdb;
      background-color: transparent;
      border-radius: 5px;
    }
  }
}

.v-data-table.v-data-table--fixed-header {
  ::v-deep thead th {
    box-shadow: inset 0 -1px 0 $gallery;
  }
}

.LTable__download {
  box-shadow: inset 0px 0px 0px 1px $westSide;
  padding: 6px 10px;
  border-radius: 5px;
  color: $westSide;
  text-decoration: none;
  .v-icon {
    color: $westSide;
  }
}
</style>
