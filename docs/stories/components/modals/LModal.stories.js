import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LModal from '~/src/components/modal/LModal.vue';

export default {
  title: 'Deprecated/Modals/Modal',
  component: LModal,
  argTypes: {
      modalType: {control: 'object', description: 'Indicates the modalType: confirmational (with action buttons) / informational (with closable button)'},
      dialog: {control: 'boolean', description: 'Indicates the state of the modal (open/close)'},
      disabledConfirm: {control: 'boolean', description: 'Indicates if confirm button is disabled or not'},
      confirmButton: {control: 'boolean', description: 'Indicates if confirm button will be rendered or not'},
      clearButton: {control: 'boolean', description: 'Indicates if clear button will be rendered or not'},
      clearIcon: {control: 'text', description: 'Clear icon value (mdi)'},
      closeOnOutsideClick: {control: 'boolean', description: 'Indicates if outside click will close modal'},
      confirmText: {control: 'text', description: 'Confirm button text'},
      cancelText: {control: 'text', description: 'Cancel button text'},
      clearText: {control: 'text', description: 'Clear button text'},
      loading: {control: 'boolean', description: 'Indicates if modal is loading or not'},
      maxWidth: {control: 'text', description: 'Max width allowed to the modal'},
      overlayColor: {control: 'color', description: 'Modal overlay color'},
      close: {action: 'close', description: 'Emitted when modal is closed'},
      confirm: {action: 'confirm', description: 'Emitted when confirm button is pressed'},
      clear: {action: 'clear', description: 'Emitted when clear button is pressed'},
      modalTitle: {description: 'Modal title slot, only avaliable when the type is informational'},
      modalContent: {description: 'Modal content slot, which receives modal children elements'},
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LModal },
  template: `
    <l-modal 
        v-bind="$props" 
        @close="close" 
        @confirm="confirm" 
        @clear="clear" 
    >
        <template #modalTitle>
            <div style="textAlign: center">
                Modal title here!
            </div>
        </template>
        <template #modalContent>
            <div v-for="x in 5" style="textAlign: center;">
                Modal Content here!
            </div>
        </template>
    </l-modal>
  `
});

export const Confirmational = Template.bind({});
Confirmational.args = {
  dialog: true,
  modalType: {confirmational: true},
  confirmText: 'Confirm',
  cancelText: 'Cancel'
};

export const WithClearButton = Template.bind({});
WithClearButton.args = {
  dialog: true,
  modalType: {confirmational: true},
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  clearText: 'Clear',
  clearButton: true
};

export const Informational = Template.bind({});
Informational.args = {
  dialog: true,
  modalType: {informational: true},
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  clearText: 'Clear',
  clearButton: true
};

export const Loading = Template.bind({});
Loading.args = {
  dialog: true,
  modalType: {confirmational: true},
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  loading: true
};