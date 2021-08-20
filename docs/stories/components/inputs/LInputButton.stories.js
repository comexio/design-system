import LInputButton from '~/src/components/inputs/LInputButton.vue';

export default {
  title: 'Deprecated/Inputs/With Button',
  component: LInputButton,
  argTypes: {
    buttonLabel: {control: 'text', description: 'Label content'},
    rules: {control: 'array', description: 'Array of input rules. Check the Vuetify v-text-field'},
    validity: {control: 'boolean', description: 'Indicates the validity of the input according to the rules informed'},
    buttonPressed: {action: 'buttonPressed', description: 'Event emitted when button pressed'}
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LInputButton },
  template: `<l-input-button v-bind="$props" @buttonPressed="buttonPressed" style="width: 800px;"></l-input-button>`,
});

export const Default = Template.bind({});
Default.args = {
    validity: false,
    buttonLabel: 'Label content',
};