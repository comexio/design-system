import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LBarChart from "@components/charts/LBarChart.vue";

export default {
  title: 'Components/Charts/Secondary Bar',
  component: LBarChart,
  argTypes: {
    data: { control: 'object', description: 'Chart data object: title, description, quantity, total, percentage' },
    color: { control: 'color', description: 'Chart color' },
    isClickable: { control: 'boolean', description: 'Set the mouse type as a pointer when hovering over the title' },
    click: { action: 'click', description: 'Trigger a click event' },
    maxQuantity: { table: {disable: true} },
    othersLabel: { table: {disable: true} },
    toggleLast: { table: {disable: true} },
    hasTitle: { table: {disable: true} },
    lineLink: { control: 'boolean', description: 'Sets onClick event for whole line and return line\'s data' },
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LBarChart },
  template: '<l-bar-chart @click="click" v-bind="$props"> </l-bar-chart>'
});

export const Default = Template.bind({});
Default.args = {
  data: [{
    title: "Label",
    description: "Description",
    quantity: "Quantity",
    total: "Value",
    percentage: 0
  },
  {
    title: "Label",
    description: "Description",
    quantity: "Quantity",
    total: "Value",
    percentage: 0
  },
  {
    title: "Label",
    description: "Description",
    quantity: "Quantity",
    total: "Value",
    percentage: 0
  },],
  color: '#D4C5EB',
  hasTitle: true,
};

export const TitleClickable = Template.bind({});
TitleClickable.args = {
  data: [{
    title: "Label",
    description: "Description",
    quantity: "Quantity",
    total: "Value",
    percentage: 0
  },
  {
    title: "Label",
    description: "Description",
    quantity: "Quantity",
    total: "Value",
    percentage: 0
  },
  {
    title: "Label",
    description: "Description",
    quantity: "Quantity",
    total: "Value",
    percentage: 0
  },],
  color: '#D4C5EB',
  hasTitle: true,
  isClickable: true,
};
