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
  template: '<l-labeled-chip v-bind="$props" @remove-filter="removeFilter" style="width:240"> </l-labeled-chip>',
});

export const Default = Template.bind({});
Default.args = {
  item: {
    text: 'Labeled Chip: Description',
    filter: 'labeled_chip'
  }
};

export const WithNumber = Template.bind({});
WithNumber.args = {
  item: {
    text: '08/01/2020 - 14/01/2020',
    number: 30,
    filter: 'labeled_chip_date'
  }
};
