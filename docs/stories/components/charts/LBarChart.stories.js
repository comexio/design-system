import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LBarChart from "~/src/components/charts/LBarChart.vue";

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
    'line-click': { action: 'line-click', description: 'Triggers a click event for the Chart\'s line' }
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LBarChart },
  template: '<l-bar-chart @click="click" @line-click="line-click" v-bind="$props"/>'
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

export const LineLink = Template.bind({});
LineLink.args = {
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
  hasTitle: false,
  isClickable: true,
  lineLink: true
};
