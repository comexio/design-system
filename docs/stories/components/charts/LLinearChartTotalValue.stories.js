import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LLinearChartTotalValue from "@components/charts/LLinearChartTotalValue.vue";

const initObjects = initializeObjects()

export default {
  title: 'Components/Charts/TotalValue',
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
      label: "label teste",
      percentage: 100,
      tagToken: "1234",
      total: 4530
    }],
    title: 'Titulo de teste',
    totalValue: '1234'
};

