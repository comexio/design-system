import LLinearChart from "@components/charts/LLinearChart.vue";

export default {
  title: 'Components/Charts/Primary Bar/Minimized',
  component: LLinearChart,
  argTypes: {
    data: { control: 'object', description: 'Data object: label, percentage, total, quantity, value' },
    colors: { control: 'array', description: 'Colors array (hexadecimal)' },
    itemsWithoutDetails: { control: 'array', description: 'Receives info about when it should shows details icon' },
    translationLine: { control: 'object', description: 'Subtitles translation object: value, records, seeMore' },
    isExpanded: { control: 'boolean', description: 'Chart expanded: true / Chart minimized: false' },
    isExpandable: { control: 'boolean', description: 'Chart expandable: true / Chart not expandable: false' },
    expandList: { action: 'expandList', description: 'Toggle chart expanded when "See more" clicked' },
    maxQuantity: { action: 'number', description: 'Max items allowed' },
    scroller: { table: {disable: true} },
    type: { table: {disable: true} },
    loadingExpand: { table: {disable: true} },
    generateColor: { table: {disable: true} },
    isTagChart:  {table: {disable: true} },
    sectionAfterValue: { description: 'Slot can show extra content and return info to parent components to show more details' },
    applyCursorPointer: { control: 'booelan', description: 'Validation to apply css with pointer' }
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
        { "label":"EXAMPLE","percentage":"24.81","total":"total%","quantity":0,"value":"value" },
        { "label":"EXAMPLE","percentage":"18.68","total":"total%","quantity":0,"value":"value" },
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
