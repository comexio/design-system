import LRouteChart from '@components/charts/LRouteChart.vue';

export default {
  title: 'Components/Charts/Flow',
  component: LRouteChart,
  argTypes: {
    header: {control: 'array', description: 'Chart headers array'},
    lines: { control: 'object', description: 'Chart content object'},
    title: {table: {disable: true}},
    description: {table: {disable: true}},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LRouteChart },
  template: '<l-route-chart v-bind="$props"> </l-route-chart>',
});

export const Default = Template.bind({});
Default.args = {
    header: ['Header', 'Header', 'Header'],
    lines: [
      {
        number: 'Value%',
        quantity: {
          name: 'Total',
          value: 0
        },
        values: ['Example', 'Example', 'Example']
      },
      {
        number: 'Value%',
        quantity: {
          name: 'Total',
          value: 0
        },
        values: ['Example', 'Example', 'Example']
      },
      {
        number: 'Value%',
        isLast: true,
        values: 'Others'
      }
    ]
};