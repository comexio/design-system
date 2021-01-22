// TODO: Acompanhar as possíveis soluções para o erro na "canvas" screen, por enquanto a story do componente ficará comentada.

// import LTable from '@components/tables/LTable.vue';

// export default {
//   title: 'Components/Tables/Table',
//   component: LTable,
//   argTypes: {
//     headers: {control: 'object', description: 'Chart headers object'},
//     items: { control: 'object', description: 'Chart items object'},
//     keysThatHasDetails: {control: 'array', description: 'Receives info about keys allowed to show details icon'},
//     itemsPerPage: {table: {disable: true}},
//     truncateItems: {table: {disable: true}},
//     truncateSize: {table: {disable: true}},
//     triggerResetOptions: {table: {disable: true}},
//     ordination: { action: 'ordination', description: 'Column ordering event'},
//     updateScroll: { action: 'Updating', description: 'Custom scroll update event', table:{disable: true}},
//     sectionAfterValue: {description: 'Slot can show extra content and return info to parent components to show more details'}
//   },
// };

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { LTable },
//   template: '<l-table v-bind="$props" @ordination="ordination"> </l-table>',
// });

// export const Default = Template.bind({});
// Default.args = {
//   headers: [
//     {text: 'Header Example', value: 'firstHeader'},
//     {text: 'Header Example', value: 'secondHeader'},
//     {text: 'Header Example', value: 'thirdHeader'},

//   ],
//   items: [
//     {firstHeader: 'Item', secondHeader: 10, thirdHeader: 7.5},
//     {firstHeader: 'Item', secondHeader: 15, thirdHeader: 14.3},
//     {firstHeader: 'Item', secondHeader: 20, thirdHeader: 22.53},
//   ],
// };
