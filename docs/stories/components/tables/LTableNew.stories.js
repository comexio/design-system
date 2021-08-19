import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LTableNew from '~/src/components/tables/LTableNew.vue';

export default {
  title: 'Components/Tables/TableNew',
  component: LTableNew,
  argTypes: {
    headers: { control: 'object', description: 'Table headers object' },
    items: { control: 'object', description: 'Table items object' },
    toggleCheckboxOnRowClick: { control: 'boolean', description: 'Toggles checkbox on row click (showSelect must be true)' },
    input: { action: 'input', description: 'Emmited when select columns' }
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LTableNew },
  template: `
    <l-table-new
      v-bind="$props"
      @input="input"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  headers: [
    {text: 'Header Example', value: 'firstHeader'},
    {text: 'Header Example', value: 'secondHeader'},
    {text: 'Header Example1', value: 'thirdHeader'},
  ],
  items: [
    {firstHeader: 'Item', secondHeader: 10, thirdHeader: 7.5},
    {firstHeader: 'Item', secondHeader: 15, thirdHeader: 14.3},
    {firstHeader: 'Item', secondHeader: 20, thirdHeader: 22.53},
  ]
};

export const SelectableRows = Template.bind({});
SelectableRows.args = {
  headers: [
    {text: 'Header Example', value: 'firstHeader'},
    {text: 'Header Example', value: 'secondHeader'},
    {text: 'Header Example1', value: 'thirdHeader'},
  ],
  items: [
    {firstHeader: 'Item1', secondHeader: 10, thirdHeader: 7.5},
    {firstHeader: 'Item2', secondHeader: 15, thirdHeader: 14.3},
    {firstHeader: 'Item3', secondHeader: 20, thirdHeader: 22.53},
  ],
  showSelect: true,
  itemKey: 'firstHeader'
}

export const SelectableRowsWithRowClick = Template.bind({});
SelectableRowsWithRowClick.args = {
  ...SelectableRows.args,
  toggleCheckboxOnRowClick: true
}
