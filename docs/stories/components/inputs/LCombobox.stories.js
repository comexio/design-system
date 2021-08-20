import LCombobox from '~/src/components/inputs/LCombobox.vue';

export default {
  title: 'Components/Inputs/Combobox',
  component: LCombobox,
  argTypes: {
    dropdownIcon: { control: 'boolean', description: 'Toggles dropdown icon visibility' },
    large: { control: 'boolean', description: 'Sets the input to its large size: 40px (Default 35px)' },
    small: { control: 'boolean', description: 'Sets the input to its small size: 25px (Default 35px)' }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCombobox },
  template: `
    <l-combobox
      v-bind="$props" 
      style="width: 350px"
    />
  ` 
});

const TemplateWithSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCombobox },
  template: `
    <l-combobox
      v-bind="$props" 
      style="width: 350px"
    >
      <template v-slot:append>
        <v-icon
          data-testid="LCombobox__icon"
          size="16px"
          color="#9F6CBB"
        >
          mdi-information
        </v-icon>
      </template>
    </l-combobox>
  ` 
});

export const Default = Template.bind({});
Default.args = {
  outlined: true,
  dense: true,
  placeholder: 'Placeholder'
}

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  ...Default.args,
  loading: true,
  disabled: true
}

export const DefaultLoaded = Template.bind({});
DefaultLoaded.args = {
  ...Default.args,
  items: ['First item', 'Second item', 'Third item']
}

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  ...DefaultLoaded.args,
  large: true
}

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  ...DefaultLoaded.args,
  small: true
}

export const DefaultWithSlot = TemplateWithSlot.bind({});
DefaultWithSlot.args = {
  ...Default.args
}

export const DefaultDropdownLoaded = Template.bind({});
DefaultDropdownLoaded.args = {
  ...DefaultLoaded.args,
  dropdownIcon: true
}

export const DefaultDropdownLoading = Template.bind({});
DefaultDropdownLoading.args = {
  ...DefaultLoading.args,
  dropdownIcon: true
}

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  dense: true,
  solo: true,
  placeholder: 'Placeholder'
}

export const WithoutBorderDisabled = Template.bind({});
WithoutBorderDisabled.args = {
  ...WithoutBorder.args,
  disabled: true
}

export const WithTags = Template.bind({});
WithTags.args = {
  placeholder: 'Placeholder',
  allowHeightGrow: true,
  dense: true,
  multiple: true,
  chips: true,
  deletableChips: true,
  outlined: true,
  dense: true,
  smallChips: true,
  hideDetails: true,
  value: ['First item', 'Second item', 'Third item', 'Fourth item', 'Fifth item']
}

export const WithTagsDisabled = Template.bind({});
WithTagsDisabled.args = {
  ...WithTags.args,
  disabled: true
}
