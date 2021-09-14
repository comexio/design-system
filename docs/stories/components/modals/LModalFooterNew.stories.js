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
      description: 'Emitted on click cancel button'
    },
    confirm: {
      action: 'confirm',
      description: 'Emitted on click confirm button'
    }
  }
}

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: {
    LModalFooterNew
  },
  template: `<l-modal-footer-new v-bind="$props" @cancel="cancel" @confirm="confirm" />`
})

export const Default = Template.bind({})
Default.args = {
  cancelButtonProps: {
    tertiary: true,
    gray: true,
    placeholder: 'Cancelar'
  },
  confirmButtonProps: {
    primary: true,
    placeholder: 'Confirmar'
  }
}
