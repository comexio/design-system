import LChartGrid from '~/src/components/charts/LChartGrid.vue';

export default {
  title: 'Components/Charts/ChartGrid',
  component: LChartGrid,
  argTypes: {
      data: { control: 'array', description: 'Array of objects for each item on the chart. Items must have: title, description and imagePath' },
      headers: { control: 'array', description: 'Array of objects for each item on the chart. Items must have: title, description and imagePath' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LChartGrid },
  template: '<l-chart-grid v-bind="$props"/>'
});

export const Default = Template.bind({});
Default.args = {
  data: [
    { label: 'Mínimo', values: [0, 0.2074, 0] },
    { label: 'Médio', values: [7.0558, 12.978, 223.9474] },
    { label: 'Máximo', values: [274.59, 157.4134, 13179.4241] }
  ],
  headers: [
    { label: '', icon: '' },
    { label: 'Seguro', icon: 'mdi-safe-square-outline' },
    { label: 'FOB', icon: 'mdi-ferry' },
    { label:'Frete', icon: 'mdi-truck-cargo-container' }
  ]
};
