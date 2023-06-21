import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LModalHeaderNew from '~/src/components/modal/LModalHeaderNew.vue'

export default {
  title: 'Components/Modals/ModalHeader',
  component: LModalHeaderNew,
  argTypes: {
    title: {
      control: 'text',
      description: 'Renders string passed as title'
    },
    subtitle: {
      control: 'text',
      description: 'Renders string passed as title'
    },
    closeButton: {
      control: 'boolean',
      description: 'Controls renderization of close button'
    },
    close: {
      action: 'close',
      description: 'Emits on click close button'
    }
  }
}

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: {
    LModalHeaderNew
  },
  template: `
    <l-modal-header-new
      v-bind="$props"
      @close="close"
    />`
})

export const Default = Template.bind({})
Default.args = {
  title: 'Titulo',
  subtitle: 'Subtitulo'
}
