import LButtonNew from '~/src/components/buttons/LButtonNew.vue';

export default {
  title: 'Components/Base/Button',
  component: LButtonNew,
  argTypes: {
    primary: { 
      control: 'boolean', 
      description: 'Sets primary style (Filled/Orange) with custom hover/disabled colors' 
    },
    secondary: { 
      control: 'boolean', 
      description: 'Sets secondary style (Outlined/Orange) with custom hover/disabled colors' 
    },
    tertiary: { 
      control: 'boolean', 
      description: 'Sets tertiary style (Text/Orange) with custom hover/disabled colors' 
    },
    buttonColors: {
      control: 'object',
      description: `Sets custom colors into the button. It will override Vuetify default 
      color management, so if you want to use the default set the color prop`
    },
    uppercase: { 
      control: 'boolean', 
      description: 'Toggles uppercase on label text' 
    },
    roundedIcon: { 
      control: 'boolean', 
      description: 'Toggles 50% border-radius. It should be used when the button is a circular icon' 
    },
    large: { 
      control: 'boolean', 
      description: 'Sets large size: 45px (40px default size)' 
    },
    small: { 
      control: 'boolean', 
      description: 'Sets small size: 35px (40px default size)' 
    },
    default: { 
      description: 'Default slot' 
    }
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
  uppercase: false
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  disabled: true
};

export const Purple = Template.bind({});
Purple.args = {
  buttonColors: {
    background: '#F1E8FF',
    backgroundOnHover: '#DAD1E9',
    backgroundDisabled: '#F1ECF8',
    color: '#9F6CBB',
    colorDisabled: '#DDC4EB'
  },
  uppercase: false
};

export const PurpleDisabled = Template.bind({});
PurpleDisabled.args = {
  ...Purple.args,
  disabled: true
};

export const Gray = Template.bind({});
Gray.args = {
  buttonColors: {
    background: '#B8B8B8',
    backgroundOnHover: '#D4D4D4',
    color: '#FFFFFF'
  },
  uppercase: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  uppercase: false
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true
};

export const OutlinedGray = Template.bind({});
OutlinedGray.args = {
  buttonColors: {
    border: '#B8B8B8',
    borderOnHover: '#D4D4D4',
    color: '#B8B8B8',
    colorOnHover: '#D4D4D4'
  },
  outlined: true,
  uppercase: false
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary: true
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  ...Tertiary.args,
  disabled: true
};

export const TextGray = Template.bind({});
TextGray.args = {
  buttonColors: {
    color: '#B8B8B8',
    colorOnHover: '#D4D4D4'
  },
  text: true
};

export const OnlyIcon = TemplateOnlyIcon.bind({});
OnlyIcon.args = {
  buttonColors: {
    backgroundOnHover: '#DAD1E9',
    color: '#9F6CBB',
    colorOnHover: '#5C068C',
    colorDisabled: '#DDC4EB'
  },
  roundedIcon: true,
  icon: true
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
