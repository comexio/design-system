import LLabeledChip from '@components/filters/LLabeledChip.vue';

export default {
  title: 'Design System/Components/Filters/LabeledChip',
  component: LLabeledChip,
  argTypes: {
    item: {control: 'object', description: 'Data object that will be used in the chip content: text, number, filter' },
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
    text: 'Label',
    filter: 'labeled_chip'
  }
};
export const WithNumber = Template.bind({});
WithNumber.args = {
  item: {
    text: 'Label',
    number: 10,
    filter: 'labeled_chip_number'
  }
};
export const WithDate = Template.bind({});
WithDate.args = {
  item: {
    text: '12/08/2020 - 01/15/2021',
    filter: 'labeled_chip_date'
  }
};
