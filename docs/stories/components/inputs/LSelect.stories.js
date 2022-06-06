import LSelect from '~/src/components/inputs/LSelect.vue';

export default {
  title: 'Components/Inputs/Select',
  component: LSelect,
  argTypes: {
    dropdownIcon: { control: 'boolean', description: 'Toggles dropdown icon visibility' },
    large: { control: 'boolean', description: 'Sets the input to its large size: 40px (Default 35px)' },
    small: { control: 'boolean', description: 'Sets the input to its small size: 25px (Default 35px)' },
    allowHeightGrow: { control: 'boolean', description: 'Allows input to grow beyond its height'}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LSelect },
  template: `
    <l-select
      v-bind="$props" 
      style="width: 200px"
    />
  ` 
});

const TemplateWithSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LSelect },
  template: `
    <l-select
      v-bind="$props" 
      style="width: 200px"
    >
      <template v-slot:append>
        <v-icon
          data-testid="LSelect__icon"
          size="16px"
          color="#9F6CBB"
        >
          mdi-information
        </v-icon>
      </template>
    </l-select>
  ` 
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  dense: true,
  menuProps: { bottom: true, offsetY: true },
  items: ['First item', 'Second item', 'Third item']
}

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  ...Default.args,
  large: true,
  id: 'defaultLarge',
}

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  ...Default.args,
  small: true
}

export const DefaultBordered = Template.bind({});
DefaultBordered.args = {
  ...Default.args,
  outlined: true
}

export const DefaultBorderedWithLabel = Template.bind({});
DefaultBorderedWithLabel.args = {
  ...Default.args,
  outlined: true,
  placeholder: '',
  label: 'Label'
}

export const DefaultBorderedDisabled = Template.bind({});
DefaultBorderedDisabled.args = {
  ...Default.args,
  outlined: true,
  disabled: true
}

export const DefaultSolo = Template.bind({});
DefaultSolo.args = {
  ...Default.args,
  solo: true
}

export const DefaultMultiple = Template.bind({});
DefaultMultiple.args = {
  ...Default.args,
  multiple: true,
  allowHeightGrow: true
}

export const DefaultWithSlot = TemplateWithSlot.bind({});
DefaultWithSlot.args = {
  ...DefaultBordered.args,
  dropdownIcon: false
}
