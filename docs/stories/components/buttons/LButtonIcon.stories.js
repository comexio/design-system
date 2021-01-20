import LButtonIcon from "@components/buttons/LButtonIcon.vue";

export default {
  title: "Components/Base/Button/Icon Button",
  component: LButtonIcon,
  argTypes: {
    iconColor: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary", "orange"]
      },
      description: "Button color"
    },
    default: { table: { disable: true } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LButtonIcon },
  template:
    '<l-button-icon v-bind="$props">mdi-arrow-left-circle-outline</l-button-icon>'
});

export const Default = Template.bind({});
Default.args = {
  iconColor: "primary"
};
