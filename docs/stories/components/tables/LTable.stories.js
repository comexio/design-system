import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LTable from '@components/tables/LTable.vue';

export default {
  title: 'Components/Tables/Table',
  component: LTable,
  argTypes: {
    headers: {control: 'object', description: 'Chart headers object'},
    items: { control: 'object', description: 'Chart items object'},
    itemsPerPage: {table: {disable: true}},
    truncateItems: {table: {disable: true}},
    truncateSize: {table: {disable: true}},
    triggerResetOptions: {table: {disable: true}},
    ordination: { action: 'ordination', description: 'Column ordering event'},
    updateScroll: { action: 'Updating', description: 'Custom scroll update event', table:{disable: true}},
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LTable },
  template: '<l-table v-bind="$props" @ordination="ordination"> </l-table>',
});

export const Default = Template.bind({});
Default.args = {
  headers: [
    {text: 'Header Example', value: 'firstHeader'},
    {text: 'Header Example', value: 'secondHeader'},
    {text: 'Header Example', value: 'thirdHeader'},
  ],
  items: [
    {firstHeader: 'Item', secondHeader: 10, thirdHeader: 7.5},
    {firstHeader: 'Item', secondHeader: 15, thirdHeader: 14.3},
    {firstHeader: 'Item', secondHeader: 20, thirdHeader: 22.53},
  ],
};