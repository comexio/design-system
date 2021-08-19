import LLabeledInput from '~/src/components/inputs/LLabeledInput.vue';

export default {
  title: 'Deprecated/Inputs/Text Input',
  component: LLabeledInput,
  argTypes: {
    rules: { control: 'array', description: 'Array of input rules according to vuetify rules prop' },
    validity: { control: 'boolean', description: 'Indicates the validity of the input according to the rules informed' },
    value: { control: 'text', description: 'Input content' },
    label: { control: 'text', description: 'Input label' },
    placeholder: { control: 'text', description: 'Input placeholder' },
    disabled: { control: 'boolean', description: 'Indicates the disabled state of the input' },
    large: { control: 'boolean', description: 'Sets the input to its large size: 40px' },
    small: { control: 'boolean', description: 'Sets the input to its small size: 25px' }
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLabeledInput },
  template: `
    <l-labeled-input
      v-bind="$props" 
      style="width: 400px"
    />
  ` 
});

const TemplateError = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLabeledInput },
  template: `
    <l-labeled-input
      v-bind="$props" 
      error
      style="width: 400px"
    />
  ` 
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder'
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  large: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  small: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Name',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithError = TemplateError.bind({});
WithError.args = {
  ...Default.args
};
