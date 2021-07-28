import LResumeChart from '@components/charts/LResumeChart.vue';

export default {
  title: 'Components/Charts/List',
  component: LResumeChart,
  argTypes: {
      data: { control: 'object', description: 'Array of objects for each item on the chart. Items must have: title, description and imagePath' },
      dense: { control: 'boolean', description: 'Reduces the chart top/bottom padding' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LResumeChart },
  template: '<l-resume-chart v-bind="$props"/>'
});

const imagePath = 'https://yt3.ggpht.com/ytc/AAUvwnhi47MYC54AxUhOCeijZ6BPB_tREGwfC8dbFzOZ=s900-c-k-c0x00ffffff-no-rj' 

export const Default = Template.bind({});
Default.args = {
  data: [
    { title: 'Label', description: 'Value/Description', imagePath },
    { title: 'Label', description: 'Value/Description', imagePath },
    { title: 'Label', description: 'Value/Description', imagePath },
    { title: 'Label', description: 'Value/Description', imagePath },
    { title: 'Label', description: 'Value/Description', imagePath }
  ]
};

export const Dense = Template.bind({});
Dense.args = {
  ...Default.args,
  dense: true
};
