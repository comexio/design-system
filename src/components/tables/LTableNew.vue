<template>
  <div>
    <v-data-table
      v-model="inputValue"
      class="elevation-1 LTableNew"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template
        v-for="(index, name) in $scopedSlots"
        v-slot:[name]="data"
      >
        <slot
          :name="name"
          v-bind="data"
        />
      </template>
      <template
        v-slot:no-data
      >
        <slot
          name="no-data"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'LTableNew',
  props: {
    value: {
      type: Array,
      default: () => ([])
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
  }
}
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
      -webkit-box-shadow: inset 0 0 0 4px $Alto;
      background-color: transparent;
      border-radius: 5px;
    }
  }

  ::v-deep .v-data-table__checkbox {
    .v-icon {
      color: $silver;
      font-size: 20px;
      &.mdi-checkbox-marked {
        color: $purpleHaze;
      }
    }
  }
}

.v-data-table.v-data-table--fixed-header {
  ::v-deep thead th {
    box-shadow: inset 0 -1px 0 $gallery;
  }
}
</style>
