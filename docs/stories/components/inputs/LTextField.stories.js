import LTextField from '~/src/components/inputs/LTextField.vue';

export default {
  title: 'Components/Inputs/Text Field',
  component: LTextField,
  argTypes: {
    large: { control: 'boolean', description: 'Sets the input to its large size: 40px (Default 35px)' },
    small: { control: 'boolean', description: 'Sets the input to its small size: 25px (Default 35px)' }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTextField },
  template: `
    <l-text-field
      v-bind="$props" 
      style="width: 200px"
    />
  ` 
});

const TemplateWithSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTextField },
  template: `
    <l-text-field
      v-bind="$props" 
      style="width: 200px"
    >
      <template v-slot:append>
        <v-icon
          data-testid="LTextField__icon"
          size="16px"
          color="#9F6CBB"
        >
          mdi-information
        </v-icon>
      </template>
    </l-text-field>
  ` 
});

export const Default = Template.bind({});
Default.args = {
  outlined: true,
  dense: true,
  label: 'Label'
}

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  ...Default.args,
  large: true
}

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  ...Default.args,
  small: true
}

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  ...Default.args,
  disabled: true
}

export const DefaultWithError = Template.bind({});
DefaultWithError.args = {
  ...Default.args,
  error: true
}

export const DefaultWithSlot = TemplateWithSlot.bind({});
DefaultWithSlot.args = {
  ...Default.args
}
