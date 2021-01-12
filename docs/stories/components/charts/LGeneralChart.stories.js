import LGeneralChart from "@components/charts/LGeneralChart.vue";

export default {
  title: "Components/Charts/General",
  component: LGeneralChart,
  argTypes: {
    data: { control: 'object', description: 'Chart data object: total' },
    typeValue: { control: 'text', description: 'Description of the chart total value' },
    subtitle: { control: 'text', description: 'Chart subtitle' },
    image: { control: 'text', description: 'Chart image' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LGeneralChart },
  template: '<l-general-chart v-bind="$props"> </l-general-chart>'
});

export const Default = Template.bind({});
Default.args = {
  data: { total:"VALUE" },
  typeValue: 'value description',
  subtitle: 'Chart subtitle explaining the value',
  image: 'https://yt3.ggpht.com/ytc/AAUvwnhi47MYC54AxUhOCeijZ6BPB_tREGwfC8dbFzOZ=s900-c-k-c0x00ffffff-no-rj'
};
