import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LSelectNamed from '@components/inputs/LSelectNamed.vue';

export default {
  title: 'Components/Inputs/Select/Primary',
  component: LSelectNamed,
  argTypes: {
    value: {control: 'array', description: 'Input values array'},
    items: {control: 'array', description: 'Input items array'},
    input: {action: 'input', description: 'Emitted when input received'},
    outlined: {control: 'boolean', description: 'Indicates the validity of the input according to the rules informed'},
    label: {control: 'text', description: 'Conteudo'},
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LSelectNamed },
  template: `<l-select-named @input="input" v-bind="$props"></l-select-named>`,
});

export const Default = Template.bind({});
Default.args = {
  value: {text:"Inglês", value:"en"},
  items: [ {text:"Inglês", value:"en"}, {text:"Portugês", value:"pt"} ]
};
