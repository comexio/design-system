import LInputSolo from '~/src/components/inputs/LInputSolo.vue';

export default {
  title: 'Components/Inputs/Filters Input/Text Input',
  component: LInputSolo,
  argTypes: {
      appendIcon: { control: 'text', description: 'MDI icon to be appended' },
      value: { control: 'text', description: 'Input content' },
      placeholder: { control: 'text', description: 'Input placeholder' },
      disabled: { control: 'boolean', description: 'Indicates the disabled state of the input' },
      large: { control: 'boolean', description: 'Sets the input to its large size: 40px' },
      small: { control: 'boolean', description: 'Sets the input to its small size: 25px' },
      input: { table: { disable: true } }
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LInputSolo },
  template: `
    <l-input-solo 
      v-bind="$props" 
      style="width: 400px" 
    />
  `
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  outlined: true
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  large: true
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  small: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  placeholder: 'Placeholder'
};
