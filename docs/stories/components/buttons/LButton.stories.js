import LButton from '@components/buttons/LButton.vue';

export default {
  title: 'Design System/Components/Base/Button',
  component: LButton,
  argTypes: {
    iconValue: {control: 'text', description: 'Prefix icon'},
    label: { control: 'text', description: 'Button label'},
    color: {control: {type: 'inline-radio', options: ['primary', 'secondary', 'orange'], description: 'Button color'} },
    outlined: {control: 'boolean', description: 'Primary: false / Inverse: true'},
    default: {table: {disable: true}},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LButton },
  template: '<l-button v-bind="$props" style="width: 200px"> </l-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  iconValue: '',
  label: 'Primary Button!',
  color: 'orange',
  outlined: false,
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  iconValue: 'mdi-information',
  label: 'Primary Button!',
  color: 'orange',
  outlined: false,
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  iconValue: '',
  label: 'Inverse Button!',
  color: 'orange',
  outlined: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  iconValue: '',
  label: 'Secondary Button!',
  color: 'primary',
  outlined: false,
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  iconValue: 'mdi-information',
  label: 'Secondary Button!',
  color: 'primary',
  outlined: false,
};

export const SecondaryInverse = Template.bind({});
SecondaryInverse.args = {
  iconValue: '',
  label: 'Inverse Button!',
  color: 'primary',
  outlined: true,
};
