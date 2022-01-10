import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LInputLoaded from '~/src/components/inputs/LInputLoaded.vue';

export default {
  title: 'Deprecated/Inputs/Filters Input/Loaded Input',
  component: LInputLoaded,
  argTypes: {
    disabled: { control: 'boolean', description: 'Toggles input disabled style' },
    field: { control: 'text', description: 'Name of the field so you can identify it in an API call' },
    icon: { control: 'boolean', description: 'Indicates the icon visibility' },
    iconColor: { control: 'color', description: 'Color of the icon' },
    items: { control: 'array', description: 'Array of items that will appear as options to select' },
    loading: { control: 'boolean', description: 'Indicates the loading state' },
    placeholder: { control: 'text', description: 'Input placeholder' },
    searchOnInput: { control: 'boolean', description: `Indicates if the component should search for items
    after an input (true) or load all items from once (false)` },
    searchMinCharacteres: { control: 'number', description: 'Minimum characteres length to make a search after input' },
    showInformation: { control: 'boolean', description: 'Displays information at search time' },
    outlined: { control: 'boolean', description: 'Applies the outlined style to the input' },
    large: { control: 'boolean', description: 'Sets the input to its large size: 40px' },
    small: { control: 'boolean', description: 'Sets the input to its small size: 25px' },
    value: { control: 'text', description: 'Current option selected' },
    input: { action: 'input', description: `Emitted when an option is selected. Returns an array of objects containing options
    selected with text/value from each one` },
    getItems: { action: 'getItems', description: `Emitted when the component is loading and ready to receive items from an external request.
    It returns an object with the field if searchOnInput is false, or the field with the input value if searchOnInput is true` },
    allowHeightGrow: { control: 'boolean', description: 'Allow if input can grows height' },
    appendCustomIcon: { control: 'text', description: 'Append custom icon for input' }
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LInputLoaded },
  template: `
    <l-input-loaded
      v-bind="$props"
      style="width: 400px"
      @getItems="getItems"
      @input="input"
    />
  `,
});

export const DefaultAutocomplete = Template.bind({});
DefaultAutocomplete.args = {
  field: 'myAutocomplete',
  placeholder: 'Placeholder',
  searchOnInput: true,
  outlined: true
};

export const LargeAutocomplete = Template.bind({});
LargeAutocomplete.args = {
  ...DefaultAutocomplete.args,
  large: true
};

export const SmallAutocomplete = Template.bind({});
SmallAutocomplete.args = {
  ...DefaultAutocomplete.args,
  small: true
};

export const AutocompleteLoadedWithMultipleTags = Template.bind({});
AutocompleteLoadedWithMultipleTags.args = {
  ...DefaultAutocomplete.args,
  items: ['First item', 'Second item', 'Third item', 'Fourth item', 'Fifth item', 'Sixth item', 'Seventh item'],
  value: ['First item', 'Second item', 'Third item', 'Fourth item', 'Fifth item', 'Sixth item', 'Seventh item'],
  multiple: true,
  chips: true,
  allowHeightGrow: true
};

export const AutocompleteWithoutInfo = Template.bind({});
AutocompleteWithoutInfo.args = {
  ...DefaultAutocomplete.args,
  showInformation: false,
};

export const AutocompleteLoaded = Template.bind({});
AutocompleteLoaded.args = {
  ...DefaultAutocomplete.args,
  items: ['First item', 'Second item', 'Third item'],
};

export const AutocompleteLoading = Template.bind({});
AutocompleteLoading.args = {
  ...DefaultAutocomplete.args,
  loading: true,
};

export const AutocompleteDisabled = Template.bind({});
AutocompleteDisabled.args = {
  ...DefaultAutocomplete.args,
  disabled: true,
};

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  field: 'myDropdown',
  items: ['First item', 'Second Item', 'Third item'],
  placeholder: 'Select an item',
  outlined: true
};

export const LargeDropdown = Template.bind({});
LargeDropdown.args = {
  ...DefaultDropdown.args,
  large: true
};

export const SmallDropdown = Template.bind({});
SmallDropdown.args = {
  ...DefaultDropdown.args,
  small: true
};

export const DropdownLoading = Template.bind({});
DropdownLoading.args = {
  ...DefaultDropdown.args,
  items: [],
  loading: true
};

export const AutocompleteWithoutBorder = Template.bind({});
AutocompleteWithoutBorder.args = {
  ...DefaultAutocomplete.args,
  items: ['First item', 'Second item', 'Third item'],
  outlined: false
};

export const DropdownWithoutBorder = Template.bind({});
DropdownWithoutBorder.args = {
  ...DefaultDropdown.args,
  outlined: false
};

export const DefaultAppendCustomIcon = Template.bind({});
DefaultAppendCustomIcon.args = {
  appendCustomIcon: 'mdi-magnify',
};
