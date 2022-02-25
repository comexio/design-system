import LLinearChart from "~/src/components/charts/LLinearChart.vue";

export default {
  title: 'Components/Charts/Primary Bar/Minimized',
  component: LLinearChart,
  argTypes: {
    applyCursorPointer: { control: 'boolean', description: 'Validation to apply css with pointer' },
    colors: { control: 'array', description: 'Colors array (hexadecimal)' },
    data: { control: 'object', description: 'Data object: label, percentage, total, quantity, value' },
    isExpanded: { control: 'boolean', description: 'Chart expanded: true / Chart minimized: false' },
    isExpandable: { control: 'boolean', description: 'Chart expandable: true / Chart not expandable: false' },
    itemsWithoutDetails: { control: 'array', description: 'Receives info about when it should shows details icon' },
    labelMaxLength: {control: 'number', description: 'Max characters allowed to label'},
    maxQuantity: { action: 'number', description: 'Max items allowed' },
    nonClickableItems: { control: 'array', description: 'List of Items that won\'t apply the cursor pointer even when the applyCursorPointer is true'},
    showToolTip: { control: 'boolean', description: 'Props to control the visibility of tooltip passed to child components' },
    translationLine: { control: 'object', description: 'Subtitles translation object: value, records, seeMore' },
    expandList: { action: 'expandList', description: 'Toggle chart expanded when "See more" clicked' },
    eventClick: { action: 'eventClick', description: 'Event emitted when label is clicked' },
    scroller: { table: {disable: true} },
    type: { table: {disable: true} },
    loadingExpand: { table: {disable: true} },
    generateColor: { table: {disable: true} },
    isTagChart:  {table: {disable: true} },
    sectionAfterValue: { description: 'Slot can show extra content and return info to parent components to show more details' },
    magnifyItemsQuantity: { control: 'number', description: 'Add a magnify in elements list (using index to compare if magnify number is lower than), and if clicked active emit linearChartItemDetail. Default is 0 ' }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLinearChart },
  template:
    '<l-linear-chart @expandList="expandList" @eventClick="eventClick" v-bind="$props"> </l-linear-chart>'
});

export const Minimized = Template.bind({});
Minimized.args = {
    data: [
        { "label":"EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE ","percentage":"24.81","total":"total%","quantity":0,"value":"value" },
        { "label":"EXAMPLE EXAMPLE EXAMPLE EXAMPLE","percentage":"18.68","total":"total%","quantity":0,"value":"value" },
        { "label":"EXAMPLE","percentage":"16.14","total":"total%","quantity":0,"value":"value" },
        { "label":"EXAMPLE","percentage":"10.29","total":"total%","quantity":0,"value":"value" },
        { "label":"OTHERS","percentage":"30.08","total":"total%","quantity":0,"value":"value"  }
    ],
    colors: [
        "#51a59a",
        "#e291da",
        "#7dbaff",
        "#ffb57d",
        "#ae77d8"
    ],
    translationLine: { "value":"Value","records":"Percentage","seeMore":"See more" },
};

export const NonClickableItems = Template.bind({});
NonClickableItems.args = {
  data: [
    { "label":"NONCLICKABLE","percentage":"24.81","total":"total%","quantity":0,"value":"value" },
    { "label":"CLICKABLE CLICKABLE CLICKABLE CLICKABLE CLICKABLE","percentage":"18.68","total":"total%","quantity":0,"value":"value" },
    { "label":"CLICKABLE","percentage":"16.14","total":"total%","quantity":0,"value":"value" },
    { "label":"NONCLICKABLE1","percentage":"10.29","total":"total%","quantity":0,"value":"value" },
    { "label":"OTHERS","percentage":"30.08","total":"total%","quantity":0,"value":"value"  }
  ],
  colors: [
    "#51a59a",
    "#e291da",
    "#7dbaff",
    "#ffb57d",
    "#ae77d8"
  ],
  translationLine: { "value":"Value","records":"Percentage","seeMore":"See more" },
  applyCursorPointer: true,
  nonClickableItems: ['NONCLICKABLE', 'NONCLICKABLE1']
};
