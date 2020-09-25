<template>
  <v-data-table
    dense
    :headers="headers"
    :items="items"
    :options.sync="options"
    v-bind="$attrs"
    hide-default-footer
    class="elevation-1"
  />
</template>

<script>
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
    }
  },
  data () {
    return {
      options: {},
      customScroll: {
        bottom: false
      }
    }
  },
  watch: {
    options: {
      deep: true,
      handler () {
        const { multiSort, sortBy, sortDesc } = this.options
        if (!multiSort) {
          const sortType = sortDesc.length ? sortDesc[0] : null
          const sortColumn = sortBy.length ? sortBy[0] : null
          this.$emit('ordination', { sortType, sortColumn })
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
    }
  }
}
</script>

<style lang="scss" scoped>
.v-data-table {
  width: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.04) !important;

  ::v-deep .v-data-table-header {
    .sortable {
      white-space: nowrap;
      padding-top: 30px;
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

</style>
