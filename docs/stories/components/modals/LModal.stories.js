// import LModal from '@components/modal/LModal.vue';

// export default {
//   title: 'Design System/Components/Base/Modal/LModal',
//   component: LModal,
//   argTypes: {
//     dialog: { control: 'boolean', description:'Open and close modal open: true / close: false' },
//     textCancel: { control: 'text', description: 'Text Button Cancel' },
//     textConfirm: { control: 'text', description: 'Text Button Confirm' },
//     disabledConfirm: { control: 'boolean', description:'Disable button confirm disable: true / enable: false' },
//     confirmButton: { control: 'boolean', description:'Show button confirm show: true / show: false' },
//     clearButton: { table: { disable: true }, description:'N' },
//     textClear: { control: 'text', description: 'Text button clear' },
//     clearIcon: { control: 'text', description: 'Icon button clear' },
//     loading: { control: 'boolean', description: 'Loading modal'},
//     close: { action: 'close', description: 'Event close modal' },
//     confirm: { action: 'confirm', description: 'Event confirm modal' },
//     clear: { action: 'clear', description: 'Event clear modal' },
//   },
// };

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { LModal },
//   template: '<l-modal v-bind="$props" @close="close" @confirm="confirm" @clear="clear" style="height: 400px" ></l-modal>'
// });

// export const Default = Template.bind({});
// Default.args = {
//   dialog: true,
//   disabledConfirm:true,
//   textConfirm: 'Confirm',
//   textCancel: 'Cancel',
// };

// export const Clear = Template.bind({});
// Clear.args = {
//   dialog: true,
//   textClear: 'Button clear',
//   textConfirm: 'Confirm',
//   textCancel: 'Cancel',
// };

// export const Loading = Template.bind({});
// Loading.args = {
//   dialog: true,
//   textConfirm: 'Confirm',
//   textCancel: 'Cancel',
//   loading: true
// };
