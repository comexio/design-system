import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LDropdownCheckbox from '~/src/components/inputs/LDropdownCheckbox.vue';

export default {
  title: 'Deprecated/Inputs/Checkbox/Dropdown',
  component: LDropdownCheckbox,
  argTypes: {
    checkboxListPlaceholder: {control: 'text', description: 'checkbox list placeholder'},
    checkboxListSelectAllText: {control: 'text', description: 'checkbox list select all text'},
    items: {control: 'object', description: 'Array of objects containing all items. Items must have label and value'},
    placeholder: {control: 'text', description: 'placeholder text'},
    selectedItems: {control: 'array', description: 'Optional array containing values of preselected items'},
    updatedItems: {action: 'updatedItems', description: 'Update selected items'},
    actions: { description: 'Actions slot' },
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LDropdownCheckbox },
  template: `<l-dropdown-checkbox v-bind="$props"  @updatedItems="updatedItems"></l-dropdown-checkbox>`,
});

const TemplateWithSlot = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LDropdownCheckbox },
  template: `
    <l-dropdown-checkbox
      v-bind="$props"
      @updatedItems="updatedItems"
    >
      <template #button>
        <button class="foo-button">Foo button</button>
      </template>
      <template #actions>
        <p>Foo Actions</p>
      </template>
    </l-dropdown-checkbox>`,
});

export const Default = Template.bind({});
Default.args = {
    checkboxListPlaceholder: 'My checkbox placeholder',
    checkboxListSelectAllText: 'Click me to select all',
    items: [
        {label: 'Item1', value: 1},
        {label: 'Item2', value: 2},
        {label: 'Item3', value: 3},
        {label: 'Item4', value: 4},
      ],
    placeholder: 'Im a placeholder',
    selectedItems: [1, 3],
};

export const WithSlot = TemplateWithSlot.bind({});
WithSlot.args = {
  ...Default.args
};
