import LSelectSolo from '@components/inputs/LSelectSolo.vue';

export default {
  title: 'Design System/Components/Inputs/FIXME/LSelectSolo',
  component: LSelectSolo,
  argTypes: {
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LSelectSolo },
  template: `<l-select-solo v-bind="$props"></l-select-solo>`,
});

export const Default = Template.bind({});
Default.args = {
  value: ['First item', 'Second item', 'Third item']
};
