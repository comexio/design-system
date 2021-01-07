import LInputSolo from '@components/inputs/LInputSolo.vue';

export default {
  title: 'Design System/Components/Inputs/Solo',
  component: LInputSolo,
  argTypes: {
      appendIcon: {control: 'text', description: 'MDI icon to be appended'},
      value: {control: 'text', description: 'Input content'},
      input: {action: 'input', description: 'Event emitted when input received'}
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LInputSolo },
  template: `<l-input-solo v-bind="$props" @input="input"></l-input-solo>`,
});

export const Default = Template.bind({});
Default.args = {
    appendIcon: 'mdi-information',
    value: 'Im an input!'
};