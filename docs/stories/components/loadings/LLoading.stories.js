import LLoading from "@components/loadings/LLoading.vue";

export default {
  title: "Components/Base/Loading",
  component: LLoading,
  argTypes: {
    size: { control: "text", description: "Loading icon size" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLoading },
  template: '<l-loading v-bind="$props"> </l-loading>'
});

export const Default = Template.bind({});
Default.args = {
  size: "40px"
};
