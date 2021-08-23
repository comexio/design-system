import LCheckboxNew from '~/src/components/inputs/LCheckboxNew.vue';

export default {
  title: 'Components/Inputs/Checkbox',
  component: LCheckboxNew,
  argTypes: {
    value: { control: 'text', description: 'Input content' },
    color: { control: 'color', description: 'Content color' },
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCheckboxNew },
  template: `<l-checkbox-new v-bind="$props"></l-checkbox-new>`,
});

export const Default = Template.bind({});
Default.args = {
  value: false,
};

export const WithColor = Template.bind({});
WithColor.args = {
  value: true,
  color: '#f2f'
};
