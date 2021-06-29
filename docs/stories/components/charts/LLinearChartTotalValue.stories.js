import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LLinearChartTotalValue from "@components/charts/LLinearChartTotalValue.vue";

const initObjects = initializeObjects()

export default {
  title: 'omponents/Charts/Primary Bar/TotalValue',
  component: LLinearChartTotalValue,
  argTypes: {
    data: { control: 'object', description: 'Data array of objects: label, percentage, total, tagToken' },
    title: { control: 'text', description: 'Chart title' },
    totalValue: { control: 'text', description: 'Chart total value' },
  },
};

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LLinearChartTotalValue },
  template:
    '<l-linear-chart-total-value v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
    data: [{
      label: "Comex",
      percentage: 100,
      tagToken: "1234",
      total: 4530
    }],
    title: 'Title comex',
    totalValue: '1234'
};

