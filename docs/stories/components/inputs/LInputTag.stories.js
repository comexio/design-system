import LInputTag from '@components/inputs/LInputTag.vue';

export default {
  title: 'Design System/Components/Inputs/FIXME/LInputTag',
  component: LInputTag,
  argTypes: {

  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LInputTag },
  template: '<l-input-tag v-bind="$props"></l-input-tag>',
});

export const Default = Template.bind({});
Default.args = {
  value: ['First item', 'Second item', 'Third item'],
  expand: false
};
