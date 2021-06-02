<template>
  <v-dialog
    v-model="dialog"
    :max-width="maxWidth"
    :overlay-color="overlayColor"
    :persistent="true"
    @click:outside="handleClickOutside"
  >
    <v-card
      class="modal"
      :loading="loading"
      :disabled="loading"
    >
      <template v-if="modalType.informational">
        <v-card-title>
          <slot name="modalTitle" />
          <v-btn
            class="modal__title__button pa-0"
            color="lightGrey"
            height="25px"
            min-height="27px"
            min-width="29px"
            @click="closeModal"
          >
            <v-icon
              size="20px"
              color="#fff"
              class="mt-1"
            >
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
      </template>
      <slot name="modalContent" />
      <template v-if="modalType.confirmational">
        <v-divider />
        <v-card-actions>
          <v-btn
            v-if="clearButton"
            class="modal__button--clear float-left"
            text
            @click="clear()"
          >
            <v-icon
              size="1.5rem"
            >
              {{ clearIcon }}
            </v-icon>
            <span>
              {{ clearText || $t('ayla.clear') }}
            </span>
          </v-btn>
          <v-spacer />
          <v-btn
            v-if="cancelButton"
            color="silver"
            text
            class="modal__button modal__button--cancel font-md"
            @click="closeModal"
          >
            {{ cancelText || $t('ayla.cancel') }}
          </v-btn>
          <v-btn
            v-if="confirmButton"
            :disabled="disabledConfirm"
            color="secondary"
            text
            class="modal__button modal__button--confirm font-md"
            @click="confirm"
          >
            {{ confirmText || $t('ayla.confirm') }}
          </v-btn>
        </v-card-actions>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LModal',
  props: {
    modalType: {
      type: Object,
      default: () => {
        return {confirmational: true}
      }
    },
    dialog: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: null
    },
    cancelText: {
      type: String,
      default: null
    },
    disabledConfirm: {
      type: Boolean,
      default: false
    },
    confirmButton: {
      type: Boolean,
      default: true
    },
    clearButton: {
      type: Boolean,
      default: false
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: true
    },
    cancelButton: {
      type: Boolean,
      default: true
    },
    clearText: {
      type: String,
      default: null
    },
    clearIcon: {
      type: String,
      default: 'mdi-eraser'
    },
    loading: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: Number,
      default: 560
    },
    overlayColor: {
      type: String,
      default: undefined
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
    },
    handleClickOutside () {
      if (this.closeOnOutsideClick){
        this.closeModal()
      }
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
  .modal__title__button {
    position: absolute;
    right: 20px;
    top: 17px;
  }
}

</style>
