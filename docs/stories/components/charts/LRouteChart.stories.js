import LRouteChart from '../../../../src/components/charts/LRouteChart.vue';

export default {
  title: 'Components/LRouteCHart',
  component: LRouteChart,
  argTypes: {
    title: { control: 'text', default: null },
    description: { control: 'text', default: null },

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LRouteChart },
  template: '<l-route-chart v-bind="$props"> </l-route-chart>',
});

export const RouteChart = Template.bind({});
RouteCHart.args = {
    title: 'Hello there!',
    description: 'Im a RouteChart!'
};