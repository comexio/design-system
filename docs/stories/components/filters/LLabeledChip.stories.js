import LLabeledChip from '@components/filters/LLabeledChip.vue';

export default {
  title: 'Design System/Components/Base/Filters/LabeledChip',
  component: LLabeledChip,
  argTypes: {
    item: {control: 'object', description: 'Data object that will be used in the card content' },
    removeFilter: { action: 'remove-filter', description: 'Event filter removed' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLabeledChip },
  template: '<l-labeled-chip v-bind="$props" @remove-filter="removeFilter"> </l-labeled-chip>',
});

export const Default = Template.bind({});
Default.args = {
  item: {
    text: 'Labeled Chip',
    filter: 'labeled_chip'
  }
};

export const WithNumber = Template.bind({});
WithNumber.args = {
  item: {
    text: 'Labeled Chip With Number',
    number: 10,
    filter: 'labeled_chip'
  }
};
