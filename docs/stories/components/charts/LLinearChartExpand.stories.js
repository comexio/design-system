import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LLinearChartExpand from "@components/charts/LLinearChartExpand.vue";

export default {
  title: 'Components/Charts/Primary Bar/Expanded',
  component: LLinearChartExpand,
  argTypes: {
    headers: { control: 'array', description: 'Expanded chart headers' },
    data: { control: 'object', description: "Expanded chart data: label, percentage, total, quantity, value" },
    loading: { control: 'boolean', description: 'Expanded chart loading: true / not loading: false' },
    expand: { action: 'expand', description: 'Toggle chart expanded when "Recolher" clicked' },
    search: { action: 'search', table: {disable: true} },
    eventClick: { action: 'eventClick', description: 'Event emitted when label is clicked' },
    sectionAfterValue: { description: 'Slot can show extra content and return info to parent components to show more details' },
    applyCursorPointer: { control: 'boolean', description: 'Validation to apply css with pointer' },
    tableHeight: { control: 'string', description: 'Add explicity heigth to table' }
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LLinearChartExpand },
  template:
    '<l-linear-chart-expand @expand="expand" @eventClick="eventClick" v-bind="$props"> </l-linear-chart-expand>'
});

export const Expanded = Template.bind({});
Expanded.args = {
    headers: ["Header","Header","Header","Header"],
    data: [
        { "label":"Value","percentage":"Value","total":"Value","quantity":0,"value":"Value" },
        { "label":"Value","percentage":"Value","total":"Value","quantity":0,"value":"Value" },
        { "label":"Value","percentage":"Value","total":"Value","quantity":0,"value":"Value" },
        { "label":"Value","percentage":"Value","total":"Value","quantity":0,"value":"Value" },
        { "label":"Value","percentage":"Value","total":"Value","quantity":0,"value":"Value" },
        { "label":"Value","percentage":"Value","total":"Value","quantity":0,"value":"Value" }
    ]
};
