import LResumeChart from "@components/charts/LResumeChart.vue";

export default {
  title: "Components/Charts/List",
  component: LResumeChart,
  argTypes: {
      data: {control: 'object', description: 'Array of objects for each item on the chart. Items must have: title, description'}
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LResumeChart },
  template: '<l-resume-chart v-bind="$props"> </l-resume-chart>'
});

export const Default = Template.bind({});
Default.args = {
  data: [
    { title: "Label", description: "Value/Description" },
    { title: "Label", description: "Value/Description" },
    { title: "Label", description: "Value/Description" },
    { title: "Label", description: "Value/Description" },
    { title: "Label", description: "Value/Description" }
  ]
};
