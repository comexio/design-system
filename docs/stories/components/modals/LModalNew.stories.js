import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LModalNew from '~/src/components/modal/LModalNew.vue'
import LModalHeaderNew from '~/src/components/modal/LModalHeaderNew.vue'
import LModalFooterNew from '~/src/components/modal/LModalFooterNew.vue'


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
    LModalHeaderNew,
    LModalFooterNew
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
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog1
        </v-btn>
      </template>
      <l-modal-header-new /> 
      <div>
        teste conteudo
      </div>
      <l-modal-footer-new /> 
    </l-modal-new>
  `,
})

export const Default = Template.bind({});
Default.args = {
  value: true
}