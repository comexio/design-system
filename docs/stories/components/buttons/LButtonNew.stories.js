import LButtonNew from "~/src/components/buttons/LButtonNew.vue";

export default {
  title: "Components/Base/Button",
  component: LButtonNew,
  argTypes: {
    primary: { control: 'boolean', description: 'Sets LButton--primary class and primary style' },
    secondary: { control: 'boolean', description: 'Sets LButton--secondary class and secondary style' },
    tertiary: { control: 'boolean', description: 'Sets LButton--tertiary class and tertiary style' },
    purple: { control: 'boolean', description: 'Sets LButton--purple class and purple style' },
    cancel: { control: 'boolean', description: 'Sets LButton--cancel class and cancel style' },
    icon: { control: 'boolean', description: 'Sets LButton--icon class and vuetify icon prop' },
    disabled: { control: 'boolean', description: 'Sets LButton--disabled class and disables button' },
    sentenceCasedLabel: { 
      control: 'boolean', 
      description: 'Sets LButton__label--sentenceCase class and removes text-transform from label' 
    },
    large: { control: 'boolean', description: 'Sets the button to its large size: 45px (40px default size)' },
    small: { control: 'boolean', description: 'Sets the button to its small size: 35px (40px default size)' },
    default: { description: 'Default slot' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LButtonNew },
  template: `
    <div>
      <l-button-new 
        v-bind="$props" 
        style="width: 85px"
        large
      >
        Button
      </l-button-new>

      <l-button-new 
        v-bind="$props" 
        style="width: 85px"
      >
        Button
      </l-button-new>

      <l-button-new 
        v-bind="$props" 
        style="width: 85px"
        small
      >
        Button
      </l-button-new>
    </div>
  `
});

const TemplateOnlyIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LButtonNew },
  template: `
    <l-button-new TemplateDefault
      v-bind="$props" 
      icon
      style="maxHeight: 16px; maxWidth: 16px"
    >
      <v-icon size="16">mdi-arrow-left-circle</v-icon>
    </l-button-new>
  `
});

const TemplateWithIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LButtonNew },
  template: `
    <l-button-new 
      class="teste"
      v-bind="$props" 
      style="width: 106px"
    >
      <v-icon
        left
        size="16"
      >
        mdi-chevron-left
      </v-icon>
      Button
    </l-button-new>
  `
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  sentenceCasedLabel: true
};

export const PrimaryCancel = Template.bind({});
PrimaryCancel.args = {
  ...Primary.args,
  cancel: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  disabled: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  sentenceCasedLabel: true
};

export const SecondaryCancel = Template.bind({});
SecondaryCancel.args = {
  ...Secondary.args,
  cancel: true
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary: true
};

export const TertiaryCancel = Template.bind({});
TertiaryCancel.args = {
  ...Tertiary.args,
  cancel: true
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  ...Tertiary.args,
  disabled: true
};

export const Purple = Template.bind({});
Purple.args = {
  purple: true,
  sentenceCasedLabel: true
};

export const PurpleDisabled = Template.bind({});
PurpleDisabled.args = {
  ...Purple.args,
  disabled: true
};

export const OnlyIcon = TemplateOnlyIcon.bind({});
OnlyIcon.args = {
  ...Purple.args
};

export const OnlyIconDisabled = TemplateOnlyIcon.bind({});
OnlyIconDisabled.args = {
  ...OnlyIcon.args,
  disabled: true
};

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  ...Purple.args
};

export const WithIconDisabled = TemplateWithIcon.bind({});
WithIconDisabled.args = {
  ...WithIcon.args,
  disabled: true
};
