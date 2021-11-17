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
          <l-button-new
            class="modal__title__button pa-0"
            color="#D4D4D4"
            height="27px"
            width="29px"
            @click="closeModal"
          >
            <v-icon
              size="20px"
              color="#fff"
              class="mt-1"
            >
              mdi-close
            </v-icon>
          </l-button-new>
        </v-card-title>
        <v-divider />
      </template>
      <slot name="modalContent" />
      <template v-if="modalType.confirmational">
        <v-divider v-if="isDividerVisible" />
        <v-card-actions>
          <l-button-new
            v-if="clearButton"
            class="modal__button--clear float-left"
            text
            small
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
          </l-button-new>
          <v-spacer />
          <l-button-new
            v-if="cancelButton"
            :button-colors="{ color: '#B8B8B8', colorOnHover: '#D4D4D4' }"
            class="modal__button modal__button--cancel font-md"
            @click="closeModal"
          >
            {{ cancelText || $t('ayla.cancel') }}
          </l-button-new>
          <l-button-new
            v-if="confirmButton"
            :disabled="disabledConfirm"
            tertiary
            class="modal__button modal__button--confirm font-md"
            @click="confirm"
          >
            {{ confirmText || $t('ayla.confirm') }}
          </l-button-new>
        </v-card-actions>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
import LButtonNew from '../buttons/LButtonNew.vue'

export default {
  name: 'LModal',
  components: {
    LButtonNew
  },
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
  computed: {
    isDividerVisible () {
      return this.cancelButton || this.confirmButton || this.clearButton
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
    font-weight: bold;
    text-transform: uppercase;
  }
  .modal__title__button {
    position: absolute;
    right: 20px;
    top: 17px;
  }
}

</style>
