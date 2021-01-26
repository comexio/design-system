import vuetify from '~/.storybook/vuetify_storybook.js';     
import LSelectSolo from '@components/inputs/LSelectSolo.vue';

export default {
  title: 'Components/Inputs/Select/Solo',
  component: LSelectSolo,
  argTypes: {
    value: {control: 'array', description: 'Input values array'},
    input: {action: 'input', description: 'Emitted when input received'}
  },
};


const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { LSelectSolo },
  template: `<l-select-solo @input="input" v-bind="$props"></l-select-solo>`,
});

export const Default = Template.bind({});
Default.args = {
  value: ['First item', 'Second item', 'Third item']
};
