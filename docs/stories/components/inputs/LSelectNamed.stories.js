import LSelectNamed from '@components/inputs/LSelectNamed.vue';

export default {
  title: 'Design System/Components/Inputs/FIXME/LSelectNamed',
  component: LSelectNamed,
  argTypes: {
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LSelectNamed },
  template: `<l-select-named v-bind="$props"></l-select-named>`,
});

export const Default = Template.bind({});
Default.args = {
  value: [],
  items: ['First item', 'Second item', 'Third item']
};