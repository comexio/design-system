import vuetify from '~/.storybook/vuetify_storybook.js';     
import LSelectNamed from '@components/inputs/LSelectNamed.vue';

export default {
  title: 'Components/Inputs/Select/Primary',
  component: LSelectNamed,
  argTypes: {
    value: {control: 'array', description: 'Input values array'},
    items: {control: 'array', description: 'Input items array'},
    input: {action: 'input', description: 'Emitted when input received'}
  },
};


const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { LSelectNamed },
  template: `<l-select-named @input="input" v-bind="$props"></l-select-named>`,
});

export const Default = Template.bind({});
Default.args = {
  value: [1, 2 ,3],
  items: ['First item', 'Second item', 'Third item']
};