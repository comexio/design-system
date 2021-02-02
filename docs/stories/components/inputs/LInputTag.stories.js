import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LInputTag from '@components/inputs/LInputTag.vue';

export default {
  title: 'Components/Inputs/With Tags',
  component: LInputTag,
  argTypes: {
    value: {control: 'array', description: 'Array of input items'},
    expand: {control: 'boolean', description: 'Indicates if input is expandable or not'},
    input: {action: 'input', description: 'Emitted when input is received'},
    clickAppendOuter: {action: 'clickAppendOuter', description: 'Emitted when "E" button is clicked (expand must be true)'}
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LInputTag },
  template: '<l-input-tag v-bind="$props" @input="input" @clickAppendOuter="clickAppendOuter"></l-input-tag>',
});

export const Default = Template.bind({});
Default.args = {
  value: ['First item', 'Second item', 'Third item'],
  expand: false
};

export const Expandable = Template.bind({});
Expandable.args = {
  value: ['First item', 'Second item', 'Third item'],
  expand: true
};
