import LCheckboxList from '@components/inputs/LCheckboxList.vue';

export default {
  title: 'Components/Inputs/Checkbox/List',
  component: LCheckboxList,
  argTypes: {
    items: {control: 'object', description: 'Array of objects containing all items. Items must have label and value.'},
    selectedItems: {control: 'array', description: 'Optional array containing values of preselected items.'},
    translation: {control: 'object', description: 'Object used for internationalization: input, select'},
    updatedItems: {action: 'updatedItems', description: 'Update selected items'}
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCheckboxList },
  template: `<l-checkbox-list v-bind="$props" @input="input" @updatedItems="updatedItems"></l-checkbox-list>`,
});

export const Default = Template.bind({});
Default.args = {
  items: [
      {label: 'Item1', value: 1},
      {label: 'Item2', value: 2},
      {label: 'Item3', value: 3},
      {label: 'Item4', value: 4},
    ],
  selectedItems: [1, 3],
  translation: {input: 'Search', select: 'Select all'}
};
