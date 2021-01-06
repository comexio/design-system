import LCheckbox from '@components/inputs/LCheckbox.vue';

export default {
  title: 'Design System/Components/Inputs/Checkbox',
  component: LCheckbox,
  argTypes: {
    value: {control: 'array', description: 'Array of checkbox items'},
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCheckbox },
  template: `<l-checkbox v-bind="$props"></l-checkbox>`,
});

export const Default = Template.bind({});
Default.args = {
  value: ['Item1', 'Item2', 'Item3', 'Item4']
};