import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LDropdownCheckbox from '@components/inputs/LDropdownCheckbox.vue';

export default {
  title: 'Components/Inputs/Checkbox/Dropdown',
  component: LDropdownCheckbox,
  argTypes: {
    items: {control: 'object', description: 'Array of objects containing all items. Items must have label and value'},
    value: {control: 'array', description: 'Array of checked items'},
    selectedItems: {control: 'array', description: 'Optional array containing values of preselected items'},
    updatedItems: {action: 'updatedItems', description: 'Update selected items'},
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LDropdownCheckbox },
  template: `<l-dropdown-checkbox v-bind="$props"  @updatedItems="updatedItems"></l-dropdown-checkbox>`,
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

};

Default.args = {
  items: [
      {label: 'Item1', value: 1},
      {label: 'Item2', value: 2},
      {label: 'Item3', value: 3},
      {label: 'Item4', value: 4},
    ],
  'v-model': [1, 3],

};
