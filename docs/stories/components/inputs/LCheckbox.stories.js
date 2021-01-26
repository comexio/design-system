import LCheckbox from '@components/inputs/LCheckbox.vue';

export default {
  title: 'Components/Inputs/Checkbox',
  component: LCheckbox,
  argTypes: {
    options: {control: 'array', description: 'Array of checkbox items'},
    value: {control: 'array', description: 'Array of checked items'},
    input: {action: 'input', description: 'Event emitted when input received'}
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCheckbox },
  template: `<l-checkbox @input="input" v-bind="$props"></l-checkbox>`,
});

export const Default = Template.bind({});
Default.args = {
  value: ['Item2', 'Item4'],
  options: ['Item1', 'Item2', 'Item3', 'Item4']
};