import LButton from '@components/buttons/LButton.vue';

export default {
  title: 'Design System/Components/Base/Button',
  component: LButton,
  argTypes: {
    iconValue: {control: 'text', description: 'Prefix icon'},
    label: { control: 'text', description: 'Button label'},
    default: {table: {disable: true}},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LButton },
  template: '<l-button v-bind="$props" style="width: 200px; align: center; margin-left: 40%;"> </l-button>',
});

export const Default = Template.bind({});
Default.args = {
  iconValue: 'mdi-information',
  label: 'Im a button!'
};