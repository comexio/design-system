import LAlert from "@components/alerts/LAlert.vue";

export default {
  title: "Components/Base/Alert",
  component: LAlert,
  argTypes: {
    msg: { control: "text", description: "Alert message" },
    msg: { control: "text", description: "Alert message" },
    backgroundColor: { control: "text", description: "Background color" },
    colorText: { control: "text", description: "Color Text" },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LAlert },
  template:
    '<l-alert v-bind="$props" style="align: center; margin-left: 40%; margin-top: -20%"> </l-alert>'
});

export const Action = Template.bind({});
Action.args = {
  msg: "Im an action alert!",
  backgroundColor: '#c00',
  colorText: '#fff',
};
