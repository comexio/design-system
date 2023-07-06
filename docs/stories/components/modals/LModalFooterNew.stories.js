import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LModalFooterNew from '~/src/components/modal/LModalFooterNew.vue'

export default {
  title: 'Components/Modals/ModalFooter',
  component: LModalFooterNew,
  argTypes: {
    cancelButtonProps: {
      control: 'object',
      description: 'Bind props to cancelButton'
    },
    confirmButtonProps: {
      control: 'object',
      description: 'Bind props to cancelButton'
    },
    cancel: {
      action: 'cancel',
      description: 'Emits on click cancel button'
    },
    confirm: {
      action: 'confirm',
      description: 'Emits on click confirm button'
    }
  }
}

const defaultProps = {
  cancelButtonProps: {
    text: true,
    buttonColors: {
      color: '#BFC0CC',
      colorOnHover: '#E0E1EB'
    },
    placeholder: 'Cancel'
  },
  confirmButtonProps: {
    primary: true,
    placeholder: 'Confirm'
  }
}
const initObjects = initializeObjects()

const Template = (_args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: {
    LModalFooterNew
  },
  template: `
    <l-modal-footer-new
      v-bind="$props"
      @cancel="cancel"
      @confirm="confirm"
    />`
})

const TemplateWithSlot = (_args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: {
    LModalFooterNew
  },
  template: `
    <l-modal-footer-new
      v-bind="$props"
      @cancel="cancel"
      @confirm="confirm"
    >
      <div> Slot content</div>
    </l-modal-footer-new>`
})

const TemplateWithPreppedButtonsSlot = (_args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: {
    LModalFooterNew
  },
  template: `
    <l-modal-footer-new
      v-bind="$props"
      @cancel="cancel"
      @confirm="confirm"
    >
      <template #prepped-buttons>
        Foo prepped buttons slot
      </template>
    </l-modal-footer-new>
    `
})

export const Default = Template.bind({})
Default.args = defaultProps

export const FooterWithSlot = TemplateWithSlot.bind({})
FooterWithSlot.args = defaultProps

export const FooterWithPreppedButtonsSlot = TemplateWithPreppedButtonsSlot.bind({})
FooterWithPreppedButtonsSlot.args = defaultProps
