import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LInputLoaded from '@components/inputs/LInputLoaded.vue';


export default {
  title: 'Components/Inputs/Loaded',
  component: LInputLoaded,
  argTypes: {
    field: {control: 'text', description: 'Name of the field so you can identify it in an API call'},
    icon: {control: 'boolean', description: 'Indicates the icon visibility'},
    items: {control: 'array', description: 'Array of items that will appear as options to select'},
    placeholder: {control: 'text', description: 'Input placeholder'},
    searchOnInput: {control: 'boolean', description: `Indicates if the component should search for items 
    after an input (true) or load all items from once (false)`},
    searchMinCharacteres: {control: 'number', description: 'Minimum characteres length to make a search after input'},
    value: {control: 'text', description: 'Current option selected'},
    input: {action: 'input', description: `Emitted when an option is selected. Returns an array of objects containing options 
    selected with text/value from each one`},
    getItems: {action: 'getItems', description: `Emitted when the component is loading and ready to receive items from an external request. 
    It returns an object with the field if searchOnInput is false, or the field with the input value if searchOnInput is true`}
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LInputLoaded },
  template: `<l-input-loaded v-bind="$props" style="width: 400px" @getItems="getItems" @input="input"></l-input-loaded>`,
});

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
    field: 'myField',
    placeholder: 'Im loading all items',
    value: ''
};

export const DefaultLoaded = Template.bind({});
DefaultLoaded.args = {
    field: 'myField',
    items: ['First item', 'Second Item', 'Third item'],
    placeholder: 'Im already loaded with items'
};

setTimeout(() => {
  DefaultLoaded.args.items.push('First item', 'Second Item', 'Third item')
}, 1000);

export const SearchOnInputEmpty = Template.bind({});
SearchOnInputEmpty.args = {
    field: 'myField',
    placeholder: 'Ill return a value after your input',
    searchOnInput: true
};

export const SearchOnInputLoaded = Template.bind({});
SearchOnInputLoaded.args = {
    field: 'myField',
    items: ['First item', 'Second item', 'Third item'],
    placeholder: 'Im already loaded with items',
    searchOnInput: true
};

export const NoIcon = Template.bind({});
NoIcon.args = {
    field: 'myField',
    icon: false,
    items: ['First item', 'Second item', 'Third item'],
    placeholder: 'I dont have an icon',
    searchOnInput: true
};