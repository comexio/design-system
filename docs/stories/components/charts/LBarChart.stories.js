import LBarChart from '@components/charts/LBarChart.vue';

export default {
  title: 'Design System/Components/Charts/Bar',
  component: LBarChart,
  argTypes: {
    data: {control: 'object', description: 'Chart data object'},
    color: { control: 'color', description: 'Chart color'},
    maxQuantity: {table: {disable: true}},
    othersLabel: {table: {disable: true}},
    toggleLast: {table: {disable: true}},
    hasTitle: {table: {disable: true}},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LBarChart },
  template: '<l-bar-chart v-bind="$props"> </l-bar-chart>',
});

export const Default = Template.bind({});
Default.args = {
  data: [{
    title: "Title",
    description: "Description",
    quantity: "100",
    total: "50.000",
    percentage: 50
  },
  {
    title: "Title",
    description: "Description",
    quantity: "100",
    total: "30.000",
    percentage: 30
  },
  {
    title: "Title",
    description: "Description",
    quantity: "100",
    total: "20.000",
    percentage: 20
  },],
  color: '#D4C5EB',
  hasTitle: true,
};