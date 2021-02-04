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
    sectionAfterValue: { description: 'Slot can show extra content and return info to parent components to show more details' },
    showToolTip: { description: 'Props to control the visibility of tooltip on item labels' }
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LLinearChartExpand },
  template:
    '<l-linear-chart-expand @expand="expand" v-bind="$props"> </l-linear-chart-expand>'
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
