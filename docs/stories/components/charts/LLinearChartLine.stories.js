import LLinearChartLine from "@components/charts/LLinearChartLine.vue";

export default {
  title: 'Components/Charts/LinearChartLine',
  component: LLinearChartLine,
  argTypes: {
    data: { control: 'object', description: 'Data object: label, percentage, total, quantity, value' },
    index: { control: 'number', description: 'Index of Item' },
    colors: { control: 'array', description: 'Colors array (hexadecimal)' },
    lastItem: { control: 'boolean', description: 'Item to check if the item is the last' },
    isExpanded: { control: 'boolean', description: 'Chart expanded: true / Chart minimized: false' },
    isExpandable: { control: 'boolean', description: 'Chart expandable: true / Chart not expandable: false' },
    translationLine: { control: 'object', description: 'Subtitles translation object: value, records, seeMore' },
    valueSymbol: { control: 'string', description: ''},
    itemsWithoutDetails: { control: 'array'},
    isTagChart:  {table: {disable: true} },
    applyCursorPointer: { control: 'boolean', description: 'Validation to apply css with pointer'}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLinearChartLine },
  template:
    '<l-linear-chart-line-line @expand="expandList" @eventClick="eventClick" v-bind="$props"> </l-linear-chart-line-line>'
});

export const LinearChartLine = Template.bind({});
LinearChartLine.args = {
    data: { "label":"EXAMPLE","percentage":"24.81","total":"total%","quantity":0,"value":"value" },
    colors: [
        "#51a59a",
        "#e291da",
        "#7dbaff",
        "#ffb57d",
        "#ae77d8"
    ],
    translationLine: { "value":"Value","records":"Percentage","seeMore":"See more" },
};
