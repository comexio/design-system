import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LModalNew from '~/src/components/modal/LModalNew.vue'
import LModalHeaderNew from '~/src/components/modal/LModalHeaderNew.vue'


export default {
  title: 'Components/Modals/Modal',
  component: LModalNew
}

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: {
    LModalNew,
    LModalHeaderNew
  },
  data () {
    return {
      dialog: false
    }
  },
  template: `
    <l-modal-new
      v-bind="$props"
    >
      <l-modal-header-new /> 
      <div>
        teste conteudo
      </div>
    </l-modal-new>
  `,
})

export const Default = Template.bind({});
Default.args = {
  value: true
}