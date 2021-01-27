import LLabeledInput from '@components/inputs/LLabeledInput.vue';

export default {
  title: 'Components/Inputs/Labeled',
  component: LLabeledInput,
  argTypes: {
    rules: {control: 'array', description: 'Array of input rules. Check the Vuetify v-text-field'},
    validity: {control: 'boolean', description: 'Indicates the validity of the input according to the rules informed'},
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLabeledInput },
  template: '<l-labeled-input v-bind="$props" style="width: 400px"></l-labeled-input>',
});

export const Default = Template.bind({});