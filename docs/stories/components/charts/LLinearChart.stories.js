import LLinearChart from "~/src/components/charts/LLinearChart.vue";
import LButtonNew from "~/src/components/buttons/LButtonNew.vue";

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
    descriptionMaxLength: {control: 'number', description: 'Max characters allowed to description'},
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
    magnifyItemsQuantity: { control: 'number', description: `Adds a button which emits the 'linear-chart-item-detail' event with the item data. The number sets how many elements will have the button. Set 0 to not show the button`},
    linearChartItemDetail: { action: 'linear-chart-item-detail', description: 'Triggers a click event in magnify button' }
  },
};

// TODO: Resolver problemas em chamada da instância do Vuei1n8 ($te e $t quebrando story)
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLinearChart, LButtonNew },
  template: `
    <l-linear-chart
      @expandList="expandList"
      @eventClick="eventClick"
      @linear-chart-item-detail="linearChartItemDetail"
      v-bind="$props"
    />`
});

const TemplateWithSectionAfterValue = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLinearChart },
  template:
    `
    <l-linear-chart
      @expandList="expandList"
      @eventClick="eventClick"
      v-bind="$props"
    >
      <span slot="sectionAfterValue">test</span>
    </l-linear-chart>`
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

export const MinimizedWithDescription = Template.bind({});
MinimizedWithDescription.args = {
  ...Minimized.args,
    data: [
        { "label":"EXAMPLE", "description":"DESCRIPTION CONTENT HERE", "percentage":"24.81","total":"total%","quantity":0,"value":"value" },
        { "label":"EXAMPLE", "description":"DESCRIPTION CONTENT HERE", "percentage":"18.68","total":"total%","quantity":0,"value":"value" },
        { "label":"EXAMPLE", "description":"DESCRIPTION CONTENT HERE", "percentage":"16.14","total":"total%","quantity":0,"value":"value" },
        { "label":"EXAMPLE", "description":"DESCRIPTION CONTENT HERE", "percentage":"10.29","total":"total%","quantity":0,"value":"value" },
        { "label":"OTHERS","percentage":"30.08","total":"total%","quantity":0,"value":"value"  }
    ]
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

export const MinimizedWithMagnify = Template.bind({});
MinimizedWithMagnify.args = {
  magnifyItemsQuantity: 2,
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

export const sectionAfterValue = TemplateWithSectionAfterValue.bind({});
sectionAfterValue.args = {
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
