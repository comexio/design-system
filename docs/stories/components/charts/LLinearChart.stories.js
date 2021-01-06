import LLinearChart from '@components/charts/LLinearChart.vue';

export default {
  title: 'Design System/Components/Charts/Primary Bar/Minimized',
  component: LLinearChart,
  argTypes: {
    data: {control: 'object', description: 'Data object: label, percentage, total, quantity, value'},
    colors: {control: 'array', description: 'Colors array (hexadecimal)'},
    translationLine: {control: 'object', description: 'Subtitles translation object: value, records, seeMore'},
    isExpanded: { control: 'boolean', description: 'Chart expanded: true / Chart minimized: false'},
    isExpandable: { control: 'boolean', description: 'Chart expandable: true / Chart not expandable: false'},
    expandList: {action: 'expandList', description: 'Toggle chart expanded when "See more" clicked'},
    maxQuantity: {action: 'number', description: 'Max items allowed'},
    showDetails: {action: 'showDetails', description: 'Emmit custom event passing a value to show details'},
    scroller: {table: {disable: true}},
    type: {table: {disable: true}},
    loadingExpand: {table: {disable: true}},
    generateColor: {table: {disable: true}},
    isTagChart: {table: {disable: true}},
    showDetailsIcon: {table: {disable: true}},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLinearChart },
  template: '<l-linear-chart @expandList="expandList" v-bind="$props"> </l-linear-chart>',
});

export const Minimized = Template.bind({});
Minimized.args = {
    data: [
        {"label":"TITLE","percentage":"24.81","total":"24.81%","quantity":19165,"value":"19.165"},
        {"label":"TITLE","percentage":"18.68","total":"18.68%","quantity":14432,"value":"14.432"},
        {"label":"TITLE","percentage":"16.14","total":"16.14%","quantity":12470,"value":"12.470"},
        {"label":"TITLE","percentage":"10.29","total":"10.29%","quantity":7951,"value":"7.951"},
        {"label":"OTHERS","percentage":"30.08","total":"30.08%","quantity":193,"value":"23.243"}
    ],
    colors: [
        "#51a59a",
        "#e291da",
        "#7dbaff",
        "#ffb57d",
        "#ae77d8"
    ],
    translationLine: {"value":"Shipments","records":"Share of Shipments","seeMore":"See more"},
};
