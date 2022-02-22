import LGridChart from '~/src/components/charts/LGridChart.vue';

export default {
  title: 'Components/Charts/Grid Chart',
  component: LGridChart,
  argTypes: {
      rows: { control: 'array', description: 'Array of objects for each item on the data. Item must have: label and value' },
      headers: { control: 'array', description: 'Array of objects for each item on header. Item must have: label and icon' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LGridChart },
  template: `
    <l-grid-chart v-bind="$props" />
  `
});

export const Default = Template.bind({});
Default.args = {
  rows: [
    { label: 'Label 1', values: [0, 0.2074, 0] },
    { label: 'Label 2', values: [7.0558, 12.978, 223.9474] },
    { label: 'Label 3', values: [274.59, 157.4134, 13179.4241] }
  ],
  headers: [
    { label: '', icon: '' },
    { label: 'Header 1', icon: 'mdi-safe-square-outline' },
    { label: 'Header 2', icon: 'mdi-ferry' },
    { label: 'Header 3', icon: 'mdi-truck-cargo-container' }
  ]
};
