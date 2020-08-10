<template>
  <v-dialog
    v-model="dialog"
    max-width="560"
    @click:outside="closeModal"
  >
    <v-card class="modal">
      <slot />
      <v-divider />
      <v-card-actions>
        <v-btn
          v-if="textClear"
          class="float-left"
          text
          @click="clear()"
        >
          <v-icon
            size="1.5rem"
          >
            {{ clearIcon }}
          </v-icon>
          <span>
            {{ textClear || $t('searchx.clearPreferences') }}
          </span>
        </v-btn>
        <v-spacer />
        <v-btn
          color="silver"
          text
          class="modal__button modal__button--cancel font-md"
          @click="closeModal"
        >
          {{ textCancel || $t('searchx.cancel') }}
        </v-btn>
        <v-btn
          v-if="confirmButton"
          color="secondary"
          text
          class="modal__button modal__button--confirm font-md"
          @click="confirm"
        >
          {{ textConfirm || $t('searchx.confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LModal',
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    textCancel: {
      type: String,
      default: null
    },
    textConfirm: {
      type: String,
      default: null
    },
    confirmButton: {
      type: Boolean,
      default: true
    },
    clearButton: {
      type: Boolean,
      default: false
    },
    textClear: {
      type: String,
      default: null
    },
    clearIcon: {
      type: String,
      default: ' mdi-eraser'
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    },
    confirm () {
      this.$emit('confirm')
    },
    clear () {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
.modal {
  .modal__button {
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
</style>
