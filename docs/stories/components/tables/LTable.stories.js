import LTable from '@components/tables/LTable.vue';

export default {
  title: 'Design System/Components/Tables/Table',
  component: LTable,
  argTypes: {
    headers: {control: 'object', description: 'Chart headers object'},
    items: { control: 'object', description: 'Chart items object'},
    itemsPerPage: {table: {disable: true}},
    truncateItems: {table: {disable: true}},
    truncateSize: {table: {disable: true}},
    triggerResetOptions: {table: {disable: true}},
    ordination: { action: 'Ordering', description: 'Column ordering event'},
    updateScroll: { action: 'Updating', description: 'Custom scroll update event' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTable },
  template: '<l-table v-bind="$props"> </l-table>',
});

export const Default = Template.bind({});
Default.args = {
  headers: [
    {text: 'Name Header', value: 'name'},
    {text: 'Value Header', value: 'value'},
    {text: 'Third Header', value: 'percentage'},

  ],
  items: [
    {name: 'Item name', value: 10, percentage: '5%'},
    {name: 'Item name', value: 15, percentage: '10%'},
    {name: 'Item name', value: 20, percentage: '20%'},
  ]
};