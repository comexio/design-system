import LButtonNew from "~/src/components/buttons/LButtonNew.vue";

export default {
  title: "Components/Base/Button",
  component: LButtonNew,
  argTypes: {
    primary: { 
      control: 'boolean', 
      description: 'Sets LButton--primary class, primary style (Filled/Orange) and custom hover/disabled style' 
    },
    secondary: { 
      control: 'boolean', 
      description: 'Sets LButton--secondary class, secondary style (Outlined/Orange) and custom hover/disabled style' 
    },
    tertiary: { 
      control: 'boolean', 
      description: 'Sets LButton--tertiary class, tertiary style (Text/Orange) and custom hover/disabled style' 
    },
    purple: { 
      control: 'boolean', 
      description: `Sets LButton--purple class, purple color style (Filled/Purple) and custom hover/disabled style.
        It should be used alone if true as it works as a primary with color variation`
     },
    gray: { 
      control: 'boolean', 
      description: `Sets LButton--gray class, gray color style depending on style variation 
        (Primary/Secondary/Tertiary) and custom hover style.` 
    },
    icon: { control: 'boolean', description: 'Sets LButton--icon class and vuetify icon prop' },
    disabled: { control: 'boolean', description: 'Sets LButton--disabled class and disables button' },
    uppercase: { 
      control: 'boolean', 
      description: 'Toggles uppercase on text and sets LButton--uppercase class when true and LButton__label--withoutUppercase class when false' 
    },
    large: { control: 'boolean', description: 'Sets the button to large size: 45px (40px default size)' },
    small: { control: 'boolean', description: 'Sets the button to small size: 35px (40px default size)' },
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

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  primary: true,
  uppercase: false
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...PrimaryDefault.args,
  disabled: true
};

export const PrimaryPurple = Template.bind({});
PrimaryPurple.args = {
  purple: true,
  uppercase: false
};

export const PrimaryPurpleDisabled = Template.bind({});
PrimaryPurpleDisabled.args = {
  ...PrimaryPurple.args,
  disabled: true
};

export const PrimaryGray = Template.bind({});
PrimaryGray.args = {
  ...PrimaryDefault.args,
  gray: true
};

export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  secondary: true,
  uppercase: false
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...SecondaryDefault.args,
  disabled: true
};

export const SecondaryGray = Template.bind({});
SecondaryGray.args = {
  ...SecondaryDefault.args,
  gray: true
};

export const TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
  tertiary: true
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  ...TertiaryDefault.args,
  disabled: true
};

export const TertiaryGray = Template.bind({});
TertiaryGray.args = {
  ...TertiaryDefault.args,
  gray: true
};

export const OnlyIcon = TemplateOnlyIcon.bind({});
OnlyIcon.args = {
  ...PrimaryPurple.args
};

export const OnlyIconDisabled = TemplateOnlyIcon.bind({});
OnlyIconDisabled.args = {
  ...OnlyIcon.args,
  disabled: true
};

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  ...PrimaryPurple.args
};

export const WithIconDisabled = TemplateWithIcon.bind({});
WithIconDisabled.args = {
  ...WithIcon.args,
  disabled: true
};
