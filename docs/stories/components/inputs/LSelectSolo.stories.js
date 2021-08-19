import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LSelectSolo from '~/src/components/inputs/LSelectSolo.vue';

export default {
  title: 'Deprecated/Inputs/Select/Solo',
  component: LSelectSolo,
  argTypes: {
    value: {control: 'array', description: 'Input values array'},
    input: {action: 'input', description: 'Emitted when input received'}
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LSelectSolo },
  template: `<l-select-solo @input="input" v-bind="$props"></l-select-solo>`,
});

export const Default = Template.bind({});
Default.args = {
  value: ['First item', 'Second item', 'Third item']
};
