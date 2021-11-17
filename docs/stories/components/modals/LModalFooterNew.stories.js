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

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
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

export const Default = Template.bind({})
Default.args = {
  cancelButtonProps: {
    text: true,
    buttonColors: {
      color: '#B8B8B8',
      colorOnHover: '#D4D4D4'
    },
    placeholder: 'Cancelar'
  },
  confirmButtonProps: {
    primary: true,
    placeholder: 'Confirmar'
  }
}
