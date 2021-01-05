import LRouteChart from '@components/charts/LRouteChart.vue';

export default {
  title: 'Design System/Components/Charts/Flow',
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
    header: ['Origin Port', 'Discharge Port', 'Destiny Port'],
    lines: [
      {
        number: '60%',
        quantity: {
          name: 'TEUS',
          value: 22
        },
        values: ['Santos', 'Norfolk', 'Everglades Port']
      },
      {
        number: '20%',
        values: ['Umuarama', 'Bosque Uirapuru', 'Porto do mané']
      },
      {
        number: '20%',
        isLast: true,
        values: 'Others'
      }
    ]
};