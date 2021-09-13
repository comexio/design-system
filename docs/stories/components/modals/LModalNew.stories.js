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
      <l-modal-header-new close-button /> 
      <div class="pa-10">
        teste conteudo
      </div>
      <l-modal-footer-new
        :cancelButtonProps="{tertiary: true, gray: true, placeholder: 'Cancelar', height: '18px'}"
        :confirmButtonProps="{tertiary: true, placeholder: 'Confirmar', height: '18px'}"
      /> 
    </l-modal-new>
  `,
})

const TemplateWithoutHeader = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: {
    LModalNew,
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
      <div class="pa-10">
        teste conteudo
      </div>
      <l-modal-footer-new
        :cancelButtonProps="{tertiary: true, gray: true, placeholder: 'Cancelar', height: '18px'}"
        :confirmButtonProps="{tertiary: true, placeholder: 'Confirmar', height: '18px'}"
      /> 
    </l-modal-new>
  `,
})

const TemplateWithoutFooter = (args, { argTypes }) => ({
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
      <l-modal-header-new close-button /> 
      <div class="pa-10">
        teste conteudo
      </div>
    </l-modal-new>
  `,
})

const TemplateWithoutCloseButton = (args, { argTypes }) => ({
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
      <l-modal-header-new :close-button="false" />
      <div class="pa-10">
        teste conteudo
      </div>
    </l-modal-new>
  `,
})

const TemplateCustomContent = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: {
    LModalNew
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
      <div class="pa-10">
        custom content
      </div>
    </l-modal-new>
  `,
})

export const Default = Template.bind({});
Default.args = {}

export const WithoutHeader = TemplateWithoutHeader.bind({});
WithoutHeader.args = {}

export const WithoutFooter = TemplateWithoutFooter.bind({});
WithoutFooter.args = {}

export const WithoutCloseButton = TemplateWithoutCloseButton.bind({});
WithoutCloseButton.args = {}

export const CustomContent = TemplateCustomContent.bind({});
CustomContent.args = {}